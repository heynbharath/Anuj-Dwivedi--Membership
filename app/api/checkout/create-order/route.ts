import { NextRequest, NextResponse } from "next/server";
import {
  SERVICES_CATALOGUE,
  RECOGNITION_CARDS,
  COMMERCIAL_OFFER_ROUTES,
} from "@/lib/config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      serviceId,
      routeKey,
      cardId,
      clientName,
      clientEmail,
      clientPhone,
      problemStatement,
      teamName,
      tokenIdentifier,
    } = body;

    // Resolve offer either from COMMERCIAL_OFFER_ROUTES or SERVICES_CATALOGUE
    let selectedTitle = "";
    let basePriceINR = 0;
    let isAnchorMentorship = false;
    let isBronzeRoute = false;

    const commercialMatch = COMMERCIAL_OFFER_ROUTES.find(
      (r) => r.id === serviceId || r.routeKey === routeKey || r.routeKey === serviceId
    );

    const serviceMatch = SERVICES_CATALOGUE.find((s) => s.id === serviceId);

    if (commercialMatch) {
      selectedTitle = commercialMatch.name;
      basePriceINR = commercialMatch.referencePriceINR;
      isAnchorMentorship = commercialMatch.routeKey === "route-c";
      isBronzeRoute = commercialMatch.routeKey === "route-b";
    } else if (serviceMatch) {
      selectedTitle = serviceMatch.title;
      basePriceINR = serviceMatch.referencePriceINR || 0;
      isAnchorMentorship = serviceMatch.id === "thirty-day-premium-mentorship";
    } else {
      return NextResponse.json(
        { error: "Invalid service or commercial route selected" },
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
    let finalAmountINR = basePriceINR;
    let appliedCard = null;

    if (cardId) {
      const card = RECOGNITION_CARDS.find((c) => c.id === cardId);
      if (card && (isAnchorMentorship || serviceId === "thirty-day-premium-mentorship")) {
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
          serviceId: serviceId || commercialMatch?.id,
          serviceName: selectedTitle,
          finalAmountINR,
          clientName,
          clientEmail,
          clientPhone,
          teamName: teamName || null,
          tokenIdentifier: tokenIdentifier || (appliedCard ? appliedCard.rankTitle : null),
          cardApplied: appliedCard ? appliedCard.rankTitle : null,
          status: "Application Received (Pending Circle13 Management Review)",
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
          serviceId: serviceId || "unknown",
          serviceName: selectedTitle,
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
      serviceName: selectedTitle,
    });
  } catch (error: any) {
    console.error("Checkout order error:", error);
    return NextResponse.json(
      { error: "Internal server error during order creation" },
      { status: 500 }
    );
  }
}
