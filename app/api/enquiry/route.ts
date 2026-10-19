import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      formType, // 'general' | 'institutional' | 'membership' | 'consultancy' | 'card_verification'
      name,
      fullName,
      email,
      phone,
      organization,
      teamName,
      message,
      challengeDescription,
      selectedTier,
      routeKey,
      routeName,
      category,
      interestCategory,
      proposedDate,
      availabilityWindow,
      desiredMilestone,
      cardCode,
      tokenIdentifier,
      teamMembersCount,
      requestedState,
    } = body;

    const contactName = name || fullName;

    if (!contactName || !email) {
      return NextResponse.json(
        { error: "Name and email address are required fields." },
        { status: 400 }
      );
    }

    // In production, record the enquiry/booking request safely
    const enquiryRecord = {
      id: `enq_${Date.now()}`,
      formType: formType || category || interestCategory || "general",
      category: category || interestCategory || "general_enquiry",
      name: contactName,
      email,
      phone: phone || null,
      organization: organization || teamName || null,
      teamMembersCount: teamMembersCount || 1,
      routeKey: routeKey || selectedTier || null,
      routeName: routeName || null,
      tokenIdentifier: tokenIdentifier || cardCode || null,
      message: message || challengeDescription || null,
      availabilityWindow: availabilityWindow || proposedDate || null,
      desiredMilestone: desiredMilestone || null,
      lifecycleState: requestedState || "enquiry_submitted",
      createdAt: new Date().toISOString(),
      routing: "Circle13 Management Advisory Desk",
    };

    console.log("Enquiry/Booking Request received:", enquiryRecord);

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
