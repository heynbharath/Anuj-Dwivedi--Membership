export interface ServiceOffer {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  eyebrow: string;
  headline: string;
  audience: string;
  problem: string;
  description: string;
  included: string[];
  excluded?: string[];
  referencePriceINR: number | null;
  priceNote: string;
  priceStatus: "reference_unconfirmed" | "confirmed" | "custom_quote";
  duration: string;
  deliveryFormat: string;
  bookingRequirement: string;
  ctaText: string;
  featured?: boolean;
}

export interface MembershipTier {
  id: string;
  name: string;
  tierLevel: 1 | 2 | 3;
  tagline: string;
  positioning: string;
  monthlyPriceINR: number | null;
  annualPriceINR: number | null;
  pricingStatus: "proposed_unconfirmed" | "finalised";
  billingPeriod: string;
  includedBenefits: string[];
  excludedBenefits: string[];
  cancellationTerms: string;
  trialPolicy?: string;
  capacity?: string;
  ctaText: string;
  badge?: string;
}

export interface ProjectEvidence {
  id: string;
  title: string;
  category: "AI & ML" | "Web & Cloud" | "Automation" | "Philosophy & Media";
  description: string;
  verifiedLink: string;
  linkType: "github" | "live_demo" | "linkedin" | "presentation";
  tags: string[];
  verifiedDate?: string;
}

export interface RecognitionCard {
  id: string;
  tier: "GOLD" | "SILVER" | "BRONZE";
  rankTitle: string;
  quantity: number;
  discountPercentage: number;
  studentPayableINR: number;
  anchorBasePriceINR: number;
  criteria: string;
  applicableServices: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
}

export interface GitHubProofConfig {
  repositoryUrl: string | null;
  repositoryOwner: string | null;
  repositoryName: string | null;
  verifiedMetric: string | null; // e.g. "verified feedback submissions"
  metricValue: number | null;
  metricDescription: string | null;
  lastUpdatedDate: string | null;
  dataSource: string | null;
  isVerifiedAndActive: boolean;
}

export interface EditorialArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedDate: string;
  content: string[];
  takeaways: string[];
}

export interface OfferPathway {
  id: string;
  routeKey: "route-a" | "route-b" | "route-c";
  name: string;
  referencePriceINR: number;
  priceDisplay: string;
  headline: string;
  audience: string;
  teamMaxMembers?: number;
  perPersonEquivalentINR?: number;
  description: string;
  duration?: string;
  focusAreas: string[];
  eligibilityNotice: string;
  managementNote: string;
  approvalStatus: "proposed_infographic_v2" | "owner_review_required";
  ctaText: string;
  badge: string;
}

export interface TokenDesign {
  id: string;
  rankKey: "gold-1" | "gold-2" | "gold-3" | "silver-anuj" | "bronze-interest" | "card-back";
  tier: "GOLD" | "SILVER" | "BRONZE" | "CARD_BACK";
  title: string;
  subtitle: string;
  category: string;
  accessStatus: string;
  recipientEligibility: string;
  applicableDiscount?: string;
  applicableOfferId: string;
  description: string;
  visualDescription: string;
  actionNext: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    pill: string;
    badgeBg: string;
  };
}

export interface TokenRecord {
  tokenId: string;
  category: string;
  recipientName: string;
  teamName?: string;
  issueDate: string;
  validityDate: string;
  applicableOffer: string;
  redemptionStatus: "unredeemed" | "claimed" | "expired";
  notes?: string;
}

export interface AgreementTemplate {
  id: string;
  title: string;
  type: "gold_agreement" | "black_agreement" | "offer_letter" | "branded_envelope" | "presentation_folder";
  headline: string;
  description: string;
  paperStock: string;
  sealType: string;
  signatureStyle: string;
  sampleFields: {
    recipientName: string;
    teamName: string;
    recognitionCategory: string;
    offerTitle: string;
    offerDetails: string;
    serialNumber: string;
    validUntil: string;
    approvedSignatory: string;
  };
  disclaimer: string;
}

export interface SealDesign {
  id: string;
  name: string;
  sealType: "gold_ink" | "blue_ink" | "blind_emboss" | "ceremonial_wax";
  description: string;
  application: string;
  colorHex: string;
  placementRule: string;
}

