import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      formType, // 'general' | 'institutional' | 'membership' | 'consultancy' | 'card_verification'
      name,
      email,
      phone,
      organization,
      message,
      selectedTier,
      proposedDate,
      cardCode,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email address are required fields." },
        { status: 400 }
      );
    }

    // In production without external email SaaS (e.g. Resend/Postmark), we record the inquiry safely
    const enquiryRecord = {
      id: `enq_${Date.now()}`,
      formType: formType || "general",
      name,
      email,
      phone: phone || null,
      organization: organization || null,
      message: message || null,
      selectedTier: selectedTier || null,
      proposedDate: proposedDate || null,
      cardCode: cardCode || null,
      createdAt: new Date().toISOString(),
      status: "received",
      routing: "Circle13 Management Advisory Desk",
    };

    console.log("Enquiry received:", enquiryRecord);

    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been securely received by Circle13 management. We review submissions within 24-48 business hours.",
      enquiryId: enquiryRecord.id,
      submittedAt: enquiryRecord.createdAt,
    });
  } catch (error: any) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error processing enquiry" },
      { status: 500 }
    );
  }
}
