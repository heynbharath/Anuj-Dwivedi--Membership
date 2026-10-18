import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json(
        { error: "Server payment configuration missing secret" },
        { status: 500 }
      );
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Incomplete payment callback payload" },
        { status: 400 }
      );
    }

    // Cryptographic signature check
    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature. Transaction unverified." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment successfully verified by cryptographic signature.",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      bookingStatus: "Payment Verified — Circle13 Management Notified",
    });
  } catch (error: any) {
    console.error("Payment verification failure:", error);
    return NextResponse.json(
      { error: "Payment verification failed unexpectedly" },
      { status: 500 }
    );
  }
}
