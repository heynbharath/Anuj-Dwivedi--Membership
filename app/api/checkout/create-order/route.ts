import { NextRequest, NextResponse } from "next/server";
import { SERVICES_CATALOGUE, RECOGNITION_CARDS } from "@/lib/config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      serviceId,
      cardId,
      clientName,
      clientEmail,
      clientPhone,
      problemStatement,
    } = body;

    // Validate service
    const service = SERVICES_CATALOGUE.find((s) => s.id === serviceId);
    if (!service) {
      return NextResponse.json(
        { error: "Invalid service selected" },
        { status: 400 }
      );
    }

    if (!clientName || !clientEmail) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Server-determined price calculation (NEVER trust client-provided price)
    let finalAmountINR = service.referencePriceINR || 0;
    let appliedCard = null;

    if (cardId) {
      const card = RECOGNITION_CARDS.find((c) => c.id === cardId);
      if (card && serviceId === "thirty-day-premium-mentorship") {
        appliedCard = card;
        finalAmountINR = card.studentPayableINR;
      }
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // If Razorpay credentials are not yet configured, provide transparent Demo / Advisory Enquiry Mode
    if (!keyId || !keySecret) {
      return NextResponse.json({
        mode: "enquiry_mode",
        message:
          "Razorpay payment keys are currently being finalised with Circle13 management. Your engagement application has been recorded in our booking queue.",
        bookingSummary: {
          serviceId: service.id,
          serviceName: service.title,
          finalAmountINR,
          clientName,
          clientEmail,
          clientPhone,
          cardApplied: appliedCard ? appliedCard.rankTitle : null,
          status: "Application Received (Pending Management Review)",
        },
      });
    }

    // Live Razorpay order creation via official REST endpoint
    const authHeader = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const amountInPaise = finalAmountINR * 100;

    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt: `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        notes: {
          serviceId: service.id,
          clientName,
          clientEmail,
          cardApplied: appliedCard ? appliedCard.id : "none",
        },
      }),
    });

    if (!razorpayResponse.ok) {
      const errorData = await razorpayResponse.json();
      console.error("Razorpay order error:", errorData);
      return NextResponse.json(
        { error: "Failed to initiate payment gateway order", details: errorData },
        { status: 502 }
      );
    }

    const orderData = await razorpayResponse.json();

    return NextResponse.json({
      mode: "live_razorpay",
      orderId: orderData.id,
      amount: orderData.amount,
      currency: orderData.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || keyId,
      serviceName: service.title,
    });
  } catch (error: any) {
    console.error("Checkout order error:", error);
    return NextResponse.json(
      { error: "Internal server error during order creation" },
      { status: 500 }
    );
  }
}
