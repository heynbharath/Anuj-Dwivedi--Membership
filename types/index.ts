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
