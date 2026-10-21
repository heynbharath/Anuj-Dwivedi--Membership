import {
  ServiceOffer,
  MembershipTier,
  ProjectEvidence,
  RecognitionCard,
  GitHubProofConfig,
  EditorialArticle,
  OfferPathway,
  TokenDesign,
  TokenRecord,
  AgreementTemplate,
  SealDesign,
  UnifiedOffer,
  StationeryShowcaseItem,
} from "@/types";

export const SITE_CONFIG = {
  brandName: "ANUJ DWIVEDI",
  associatedBrand: "ARCHZOS TECHNOLOGIES",
  programmeName: "OCTOPUS TANK",
  subwordmark: "THINK / BUILD / EXECUTE",
  proposedDescriptor:
    "AI ENGINEERING / GENERATIVE AI / PRODUCT THINKING / STARTUP PITCHING / ADVISORY",
  descriptorNote:
    "Proposed descriptor — editable and subject to Anuj's final confirmation.",
  coreIdea: "Think Clearly. Build Intentionally.",
  editorialCampaignLine: "Less noise. Better decisions. Stronger execution.",
  heroHeadline: "Ideas deserve more than applause. They deserve a path forward.",
  heroSupporting:
    "Explore the Octopus Tank recognition programme, professional engagements, and structured guidance around ideas, technical learning, and execution.",

  // Contact details verified from public profile and Linktree
  contact: {
    name: "Anuj Dwivedi",
    location: "Bangalore, India",
    email: "anujd0009@gmail.com",
    phone: "+91 9019458974",
    whatsappUrl: "https://api.whatsapp.com/send?phone=919019458974",
    linkedinUrl: "https://www.linkedin.com/in/anuj-dwivedi-1352831b1",
    githubUrl: "https://github.com/ANUJDWIVDI",
    instagramUrl: "https://instagram.com/anuj_dwvd_0",
    linktreeUrl: "https://linktr.ee/anuj_dwivedi",
    vcardDownloadUrl: "https://vkardz.com/save-vcard/anujdwivedi",
  },

  // Management & Operational attribution
  management: {
    entity: "Circle13 Platform Architecture",
    leadership: "N. Bharath (CEO, Circle13)",
    partners: ["N. Bharath (CEO, Circle13)"],
    role: "Designs, builds, and maintains the digital platform experience, commercial presentation, and operational infrastructure.",
    attributionNotice:
      "Circle13 coordinates digital experience and operational infrastructure. Formal appointment as commercial management or payment authorization is subject to confirmed agreement.",
    isFormallyAppointed: false,
    canCollectPayments: false,
  },

  // Core brand positioning
  positioning: {
    affiliations: [
      {
        title: "Founder",
        organization: "Archzos Technologies Pvt Ltd",
        source: "Supplied master plan infographic (pending confirmation)",
      },
      {
        title: "Founder",
        organization: "Tempete Club",
        source: "Octopus Tank 2026 poster",
      },
      {
        title: "AI Engineer & Generative AI Specialist",
        organization: "Independent Practice",
        source: "Public profile & technical portfolio",
      },
    ],
    philosophicalPillar:
      "Students and builders do not buy hours. They buy clarity, direction, and execution transformation.",
    theFourPillars: [
      {
        id: "teach",
        step: "01",
        label: "TEACH",
        summary: "Build deep conceptual understanding without buzzword fatigue.",
        detail:
          "Cut through theoretical overload. Focus on engineering realities, architectural tradeoffs, and fundamental mechanics.",
      },
      {
        id: "judge",
        step: "02",
        label: "JUDGE",
        summary: "Evaluate ideas, models, and execution rigorously.",
        detail:
          "Stress-test problem-solution fit, code validity, pitch defensibility, and market viability before investing weeks of blind effort.",
      },
      {
        id: "reward",
        step: "03",
        label: "REWARD",
        summary: "Recognise demonstrated potential and earned merit.",
        detail:
          "Through initiatives like Octopus Tank recognition cards, exceptional effort earns structured institutional and advisory backing.",
      },
      {
        id: "convert",
        step: "04",
        label: "CONVERT",
        summary: "Turn raw ambition into disciplined, accountable progress.",
        detail:
          "Provide structured commercial engagements for builders ready to commit to intense execution and measurable outcomes.",
      },
    ],
  },
};

// Services catalogue with reference prices from infographic
export const SERVICES_CATALOGUE: ServiceOffer[] = [
  {
    id: "personal-consultancy",
    slug: "personal-consultancy",
    title: "Personal Consultancy",
    badge: "Focused Advisory",
    eyebrow: "ADVISORY & STRATEGY",
    headline: "A focused, high-leverage evaluation of your critical technical or pitch decision.",
    audience: "Founders, engineers, or product builders facing an architectural, AI integration, or pitch hurdle.",
    problem:
      "You have spent weeks second-guessing an AI pipeline, system design, or pitch narrative without an objective senior evaluation.",
    description:
      "Direct 1-on-1 advisory session designed to diagnose the bottleneck, stress-test your assumptions, and outline a concrete execution step.",
    included: [
      "Direct consultation session (online or offline by prior arrangement in Bangalore)",
      "Technical architecture or AI pipeline review",
      "Pitch deck & narrative stress-testing",
      "Actionable follow-up execution summary & next steps",
    ],
    excluded: [
      "End-to-end software development or custom code delivery",
      "Ongoing daily message access or unlimited inquiries",
    ],
    referencePriceINR: 40000,
    priceNote:
      "Reference price indicated in earlier proposal materials. Not merged with current planning rates. Final schedule and booking fee confirmed upon review.",
    priceStatus: "reference_unconfirmed",
    status: "draft",
    statusLabel: "Draft Proposal (Historical Planning)",
    sourceOrigin: "Earlier planning documents",
    duration: "Single in-depth strategy session (with pre-read analysis)",
    deliveryFormat: "Video consultation or in-person in Bangalore by arrangement",
    bookingRequirement: "Brief intake form detailing problem statement and existing materials",
    ctaText: "Request Consultancy",
    featured: false,
  },
  {
    id: "one-to-one-mentorship",
    slug: "one-to-one-mentorship",
    title: "1:1 Mentorship (4 Sessions)",
    badge: "Historical Package",
    eyebrow: "STRUCTURED ENGAGEMENT",
    headline: "Four structured milestones to move from ambiguity to functional implementation.",
    audience: "Engineers, student founders, and technical entrepreneurs building high-ambition products.",
    problem:
      "One meeting is rarely enough when you are iterating on a product, debugging complex systems, and refining market positioning.",
    description:
      "A 4-part structured engagement mapping across Diagnosis, Prioritisation, In-depth Review, and Practical Execution Roadmap.",
    included: [
      "Session 01: DIAGNOSE — Current technical & business architecture review",
      "Session 02: PRIORITISE — High-impact decision mapping and milestone lock",
      "Session 03: REVIEW — Progress critique, obstacle removal, code & pitch audit",
      "Session 04: PLAN — Long-term execution roadmap & autonomous trajectory",
      "Personalised roadmap documentation and resource pointers",
      "Circle13 onboarding and coordination support",
    ],
    excluded: [
      "Hands-on full-time co-founding or contracted outsourced coding",
      "Guaranteed competition or venture funding placement",
    ],
    referencePriceINR: 40000,
    priceNote:
      "Reference price: ₹40,000 for the full 4-session programme from earlier proposals. Not automatically valid for the newer routes.",
    priceStatus: "reference_unconfirmed",
    status: "draft",
    statusLabel: "Draft Proposal (Historical Planning)",
    sourceOrigin: "Earlier planning documents",
    duration: "4 dedicated 60-90 min sessions spread over 3-6 weeks",
    deliveryFormat: "Scheduled 1:1 sessions (remote or Bangalore offline by agreement)",
    bookingRequirement: "Approved mentorship application and project brief",
    ctaText: "Apply for 4-Session Mentorship",
    featured: false,
  },
  {
    id: "thirty-day-premium-mentorship",
    slug: "thirty-day-premium-mentorship",
    title: "30-Day Premium Mentorship",
    badge: "Flagship Anchor",
    eyebrow: "INTENSIVE ACCOUNTABILITY",
    headline: "A month of rigorous guidance, architectural oversight, and relentless execution discipline.",
    audience: "Serious builders and early-stage startup teams preparing for demo days, pilot deployments, or major launches.",
    problem:
      "Execution often collapses due to lack of weekly accountability, wandering priorities, and unvetted technical choices.",
    description:
      "An immersive month-long partnership providing continuous structured milestones, technical review checkpoints, and strategic oversight.",
    included: [
      "Weekly strategic milestones and sprint reviews",
      "System design and generative AI integration audits",
      "Deck, messaging, and pitch presentation rehearsal",
      "Dedicated review checkpoints between sessions",
      "Eligible card discount redemption applies here (Gold/Silver/Bronze)",
      "Dedicated Circle13 management liaison",
    ],
    excluded: [
      "Unlimited 24/7 on-call availability",
      "Direct financial investment or investment brokerage",
    ],
    referencePriceINR: 75000,
    priceNote:
      "Anchor planning rate: ₹75,000 (qualifies for Octopus Tank earned discount cards of 20% to 80%).",
    priceStatus: "reference_unconfirmed",
    status: "awaiting_approval",
    statusLabel: "Awaiting Approval (Planning Term)",
    sourceOrigin: "Master Manual & Infographic (19 Oct 2026)",
    duration: "30-day intensive engagement window",
    deliveryFormat: "Structured hybrid milestones with Circle13 coordination",
    bookingRequirement: "Comprehensive proposal review and founder alignment interview",
    ctaText: "Apply for 30-Day Mentorship",
    featured: true,
  },
  {
    id: "institutional-programmes",
    slug: "institutional-programmes",
    title: "Institutional Workshops & Judging",
    badge: "Institutions & Ecosystems",
    eyebrow: "B2B & CAMPUS INITIATIVES",
    headline: "Hands-on AI workshops, hackathon judging, and startup pitch bootcamps for premier institutions.",
    audience: "Engineering universities, incubation centers, developer communities, and corporate innovation teams.",
    problem:
      "Traditional campus seminars are often theoretical slide decks that leave students with zero practical intuition or real-world execution ability.",
    description:
      "Dynamic, hands-on programmes that train engineering students to build with modern AI architectures, build real software, and pitch with clarity.",
    included: [
      "Custom curriculum: Generative AI, AI Agents, Python Frameworks, or Pitch Preparation",
      "Interactive hackathon judging and pitch evaluation",
      "Optional Octopus Tank format integration (Teach, Judge, Reward, Convert)",
      "Institutional capability documentation and certificates of participation",
    ],
    excluded: [
      "Off-the-shelf pre-recorded static webinars",
    ],
    referencePriceINR: null,
    priceNote: "Custom pricing structured around cohort size, duration, and logistics.",
    priceStatus: "custom_quote",
    status: "approved",
    statusLabel: "Approved Campus Format",
    sourceOrigin: "Campus Partnerships & Hackathons",
    duration: "From 2-hour intensive masterclasses to multi-day hackathons",
    deliveryFormat: "On-campus keynote / workshop or high-fidelity virtual delivery",
    bookingRequirement: "Institutional RFP or event coordination lead time",
    ctaText: "Request Institutional Proposal",
    featured: false,
  },
];

// Confirmed Winners' Mentorship Offer & Pricing from Official Octopus Tank 2026 Poster
export const WINNERS_MENTORSHIP_CONFIG = {
  mentorName: "Anuj Dwivedi",
  mentorTitle: "Founder, Archzos Technologies Pvt Ltd",
  focusAreas: ["AI Systems", "Pitching", "Professional Presence"],
  duration: "30 Days of Mentorship",
  sessionFormat: "1 hour daily • Online or offline by arrangement",
  standardFeeINR: 75000,
  prizes: {
    firstPlace: {
      discountPercent: 80,
      savingsINR: 60000,
      payableINR: 15000,
      badge: "1st Place Winner",
    },
    secondPlace: {
      discountPercent: 70,
      savingsINR: 52500,
      payableINR: 22500,
      badge: "2nd Place Winner",
    },
    thirdPlace: {
      statusText: "To be announced",
      badge: "3rd Place Winner",
    },
  },
  terms: "Optional paid mentorship • Cash prizes separate • Redeem anytime; scheduling by agreement",
};

// Proposed & Confirmed Membership Tiers
export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "the-library",
    tierLevel: 1,
    name: "The Library",
    tagline: "Curated Technical Foundations",
    positioning: "A structured entry point into selected learning material and foundational frameworks.",
    monthlyPriceINR: 0,
    annualPriceINR: 0,
    pricingStatus: "finalised",
    billingPeriod: "Open Community",
    includedBenefits: [
      "Access to selected educational repositories and technical notes",
      "Curated reading lists, AI research breakdowns, and tools digest",
      "Practical problem-validation and pitch preparation worksheets",
      "Community announcements and public resource updates",
    ],
    excludedBenefits: [
      "Direct 1:1 mentorship or private advisory sessions",
      "Custom code reviews or architecture audits",
    ],
    cancellationTerms: "Open access with no lock-in.",
    trialPolicy: "Always available for verified engineering builders.",
    ctaText: "Access The Library",
  },
  {
    id: "the-builder",
    tierLevel: 2,
    name: "30-Day Mentorship Sprint",
    tagline: "1 Hour Daily • Intensive Execution",
    positioning: "Flagship 30-day intensive cohort by Anuj Dwivedi (Founder, Archzos Technologies). Standard fee ₹75,000; up to 80% off for Octopus Tank winners.",
    monthlyPriceINR: 75000,
    annualPriceINR: null,
    pricingStatus: "finalised",
    billingPeriod: "30-Day Intensive",
    includedBenefits: [
      "30 Days of Mentorship: 1 hour daily (online or offline by arrangement)",
      "Focus Areas: Generative AI, Startup Pitching, & Professional Presence",
      "Deep architecture audit, model inference optimization & system design",
      "Live pitch rehearsal, deck stress-testing, and investor defensibility",
      "Octopus Tank 1st Place: 80% OFF (Pay ₹15,000, Save ₹60,000)",
      "Octopus Tank 2nd Place: 70% OFF (Pay ₹22,500, Save ₹52,500)",
    ],
    excludedBenefits: [
      "Contracted outsourced development for hire",
      "Unvetted public walk-ins without screening",
    ],
    cancellationTerms: "Scheduling by agreement; redeemable anytime upon confirmation.",
    ctaText: "Enroll in 30-Day Sprint",
    badge: "Flagship Programme",
  },
  {
    id: "the-inner-circle",
    tierLevel: 3,
    name: "The Inner Circle",
    tagline: "Deep Strategic Proximity",
    positioning: "A selective membership concept for high-ambition founders desiring long-term strategic alignment.",
    monthlyPriceINR: null,
    annualPriceINR: null,
    pricingStatus: "proposed_unconfirmed",
    billingPeriod: "Annual Cohort",
    includedBenefits: [
      "Everything in the 30-Day Mentorship sprint",
      "Priority advisory on upcoming capital raises and demo day presentations",
      "Closed-door monthly roundtable reviews with Anuj and guest operators",
      "Deep technical teardowns of real-world production architectures",
      "Direct pathway for incubator and venture partner consideration",
    ],
    excludedBenefits: [
      "Unlimited 24/7 unscheduled phone calls",
      "Guaranteed venture capital funding cheques",
    ],
    cancellationTerms: "Annual commitment with terms reviewed prior to enrollment.",
    capacity: "Strictly limited to 5 founders per cohort",
    ctaText: "Apply for Inner Circle",
    badge: "Selective Cohort",
  },
];

// Octopus Tank 2026 specifications
export const OCTOPUS_TANK_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScXj0aexIm8-gyGlIsGMidIrLl7A4kCuH8wdvsQWstfd_CS0Q/viewform?usp=dialog";

export const OCTOPUS_TANK_CONFIG = {
  eventName: "OCTOPUS TANK 2026",
  tagline: "8 Arms. Infinite Ideas. Pitch. Compete. Launch.",
  dateText: "31 October 2026",
  googleFormUrl: OCTOPUS_TANK_GOOGLE_FORM_URL,
  status: "Applications Open (Google Form)",
  institution: "Dayananda Sagar University (DSU) School of Engineering",
  targetAudience: "B.Tech & M.Tech students (DSU School of Engineering only)",
  teamFeeINR: 299,
  teamSizeText: "2-4 Members per team",
  teamTarget: 50,
  formatSummary: "2-Hour Pitch Workshop + Live Startup Pitching",
  offerings: [
    "Cash Prizes",
    "Internship Opportunities",
    "Mentorship Programmes",
    "Startup Guidance",
  ],
  coHosts: [
    {
      name: "N Bharath",
      affiliation: "Circle13",
      role: "CEO & Co-founder, Circle13",
      title: "Chief Executive Officer & Co-founder",
      image: "/images/bharath-square.jpg",
      bio: "Spearheading venture systems, platform architecture, and strategic growth for high-impact engineering ventures.",
      links: {
        github: "https://github.com/heynbharath",
        linkedin: "https://www.linkedin.com/in/heynbharath",
        email: "heynbharath@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=919019458974",
      },
    },
    {
      name: "Akhil Vipin Nair",
      affiliation: "Circle13",
      role: "CTO & Co-founder, Circle13",
      title: "Chief Technology Officer & Co-founder",
      image: "/images/akhil-square.jpg",
      bio: "Leading engineering infrastructure, scalable systems architecture, and technical execution across digital platforms.",
      links: {
        github: "https://github.com/akhilvipinnair",
        linkedin: "https://www.linkedin.com/in/akhil-vipin-nair",
        email: "akhilvipinnair@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=919019458974",
      },
    },
    {
      name: "Anuj Dwivedi",
      affiliation: "Founder, Archzos Technologies & Tempete Club",
      role: "Lead Mentor, Keynote Educator & Lead Advisor",
      title: "Founder, Archzos Technologies Pvt Ltd",
      image: "/images/anuj-portrait.png",
      bio: "Artificial intelligence engineering, defensible venture pitching, and structured 1:1 mentorship.",
      links: {
        github: "https://github.com/ANUJDWIVDI",
        linkedin: "https://www.linkedin.com/in/anuj-dwivedi-1352831b1",
        email: "anujd0009@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=919019458974",
      },
    },
  ],
  thematicArms: [
    {
      id: "ai-data",
      number: "01",
      title: "AI & Data",
      subtitle: "Intelligence for Impact",
      description: "Generative AI, machine learning pipelines, autonomous agents, and real-time inference systems.",
    },
    {
      id: "robotics-iot",
      number: "02",
      title: "Robotics & IoT",
      subtitle: "Automate a Brighter Tomorrow",
      description: "Connected hardware, embedded automation, sensor integration, and autonomous robotics.",
    },
    {
      id: "sustainability",
      number: "03",
      title: "Sustainability",
      subtitle: "Solutions for a Healthier Planet",
      description: "Clean technology, renewable energy software, carbon auditing, and circular economy tools.",
    },
    {
      id: "business-legal-tech",
      number: "04",
      title: "Business & Legal Tech",
      subtitle: "Innovation Beyond Borders",
      description: "SaaS automation, compliance tooling, contract intelligence, and enterprise workflow engines.",
    },
    {
      id: "cybersecurity",
      number: "05",
      title: "Cybersecurity",
      subtitle: "A Safer Digital Tomorrow",
      description: "Threat detection, zero-trust architectures, infrastructure protection, and privacy technologies.",
    },
    {
      id: "engineering-design",
      number: "06",
      title: "Engineering Design",
      subtitle: "From Ideas to Real Impact",
      description: "Rapid prototyping, computer-aided design, ergonomic hardware, and manufacturing innovations.",
    },
    {
      id: "aero-mobility",
      number: "07",
      title: "Aero & Mobility",
      subtitle: "Higher Ideas Further Horizons",
      description: "Drone telemetry, urban transit solutions, EV powertrain software, and aerospace components.",
    },
    {
      id: "medtech",
      number: "08",
      title: "MedTech",
      subtitle: "Tech for Healthier Lives",
      description: "Biomedical sensing, clinical workflow automation, assistive devices, and diagnostic tools.",
    },
  ],
};

// Circle13 Co-Host & Platform Architecture Specifications
export const CIRCLE13_CONFIG = {
  entity: "Circle13",
  eyebrow: "Co-Hosted by Circle13 × Tempete Club",
  title: "Co-Hosted by Circle13",
  subtitle:
    "Circle13 is the platform architecture and venture systems partner co-hosting Octopus Tank 2026 alongside Tempete Club.",
  groupPhoto: "/images/circle13-cohosts.jpg",
  founders: [
    {
      name: "N Bharath",
      role: "CEO & Co-founder, Circle13",
      title: "Chief Executive Officer & Co-founder",
      affiliation: "Circle13",
      image: "/images/bharath-square.jpg",
      bio: "Spearheading venture systems, platform architecture, and strategic growth for engineering ventures.",
      links: {
        github: "https://github.com/heynbharath",
        linkedin: "https://www.linkedin.com/in/heynbharath",
        email: "heynbharath@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=919019458974",
      },
    },
    {
      name: "Akhil Vipin Nair",
      role: "CTO & Co-founder, Circle13",
      title: "Chief Technology Officer & Co-founder",
      affiliation: "Circle13",
      image: "/images/akhil-square.jpg",
      bio: "Leading scalable platform infrastructure, distributed systems architecture, and technical execution.",
      links: {
        github: "https://github.com/akhilvipinnair",
        linkedin: "https://www.linkedin.com/in/akhil-vipin-nair",
        email: "akhilvipinnair@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=919019458974",
      },
    },
  ],
  anujWhatsApp: {
    name: "Anuj Dwivedi",
    phone: "+91 9019458974",
    url: "https://api.whatsapp.com/send?phone=919019458974",
    label: "Chat with Anuj on WhatsApp",
  },
};

// 10 Recognition Cards System (from Infographic)
export const RECOGNITION_CARDS: RecognitionCard[] = [
  {
    id: "gold-1st",
    tier: "GOLD",
    rankTitle: "1st Place (Gold Card #1)",
    quantity: 1,
    discountPercentage: 80,
    studentPayableINR: 15000,
    anchorBasePriceINR: 75000,
    criteria: "First Place overall winner determined during live Octopus Tank pitches.",
    applicableServices: "Applicable to the 30-Day Premium Mentorship programme.",
    colorScheme: {
      bg: "bg-gradient-to-br from-[#2D2106] via-[#1A1303] to-[#0A0701]",
      border: "border-gold-500",
      text: "text-gold-400",
      accent: "#D9AA43",
    },
  },
  {
    id: "gold-2nd",
    tier: "GOLD",
    rankTitle: "2nd Place (Gold Card #2)",
    quantity: 1,
    discountPercentage: 70,
    studentPayableINR: 22500,
    anchorBasePriceINR: 75000,
    criteria: "Second Place winner judged on defensibility, presentation, and technical rigor.",
    applicableServices: "Applicable to the 30-Day Premium Mentorship programme.",
    colorScheme: {
      bg: "bg-gradient-to-br from-[#2D2106] via-[#1A1303] to-[#0A0701]",
      border: "border-gold-500/80",
      text: "text-gold-400",
      accent: "#D9AA43",
    },
  },
  {
    id: "gold-3rd",
    tier: "GOLD",
    rankTitle: "3rd Place (Gold Card #3)",
    quantity: 1,
    discountPercentage: 60,
    studentPayableINR: 30000,
    anchorBasePriceINR: 75000,
    criteria: "Third Place winner showing clear execution capability and sound architecture.",
    applicableServices: "Applicable to the 30-Day Premium Mentorship programme.",
    colorScheme: {
      bg: "bg-gradient-to-br from-[#2D2106] via-[#1A1303] to-[#0A0701]",
      border: "border-gold-500/60",
      text: "text-gold-400",
      accent: "#D9AA43",
    },
  },
  {
    id: "silver-card-tier",
    tier: "SILVER",
    rankTitle: "Silver Cards (Ideas Anuj Personally Likes)",
    quantity: 3,
    discountPercentage: 50, // or 40%
    studentPayableINR: 37500, // or 45,000
    anchorBasePriceINR: 75000,
    criteria: "Awarded to standout ideas exhibiting exceptional curiosity and high creative upside.",
    applicableServices: "Applicable to the 30-Day Premium Mentorship (50% or 40% discount).",
    colorScheme: {
      bg: "bg-gradient-to-br from-[#1C232E] via-[#121720] to-[#080B10]",
      border: "border-silver-400",
      text: "text-silver-300",
      accent: "#C7CDD5",
    },
  },
  {
    id: "bronze-card-tier",
    tier: "BRONZE",
    rankTitle: "Bronze Cards (Teams With Visible Potential)",
    quantity: 4,
    discountPercentage: 30, // or 20%
    studentPayableINR: 52500, // or 60,000
    anchorBasePriceINR: 75000,
    criteria: "Awarded to determined teams demonstrating high grit, discipline, and building appetite.",
    applicableServices: "Applicable to the 30-Day Premium Mentorship (30% or 20% discount).",
    colorScheme: {
      bg: "bg-gradient-to-br from-[#26170E] via-[#170E08] to-[#0D0704]",
      border: "border-amber-700",
      text: "text-amber-300",
      accent: "#B45309",
    },
  },
];

// Verified Authentic Projects from Anuj's real GitHub and Deployments
export const VERIFIED_PROJECTS: ProjectEvidence[] = [
  {
    id: "enigma-quest",
    title: "Enigma Quest Webapp",
    category: "AI & ML",
    description: "Interactive IQ assessment and critical thinking platform engineered to evaluate cognitive logic and problem-solving abilities under time constraints.",
    verifiedLink: "https://github.com/ANUJDWIVDI/enigma-code-webapp",
    linkType: "github",
    tags: ["Cognitive Assessment", "Logic Engines", "Web Architecture"],
  },
  {
    id: "market-segmentation",
    title: "Market Segmentation Webapp",
    category: "AI & ML",
    description: "Flask-powered machine learning application converting raw multidimensional user demographic and transactional data into actionable customer clustering.",
    verifiedLink: "https://github.com/ANUJDWIVDI/market-segmentation-webapp",
    linkType: "github",
    tags: ["Clustering", "Flask", "Data Insights", "Scikit-Learn"],
  },
  {
    id: "data-vis-webapp",
    title: "Dynamic Data Visualisation System",
    category: "AI & ML",
    description: "Multivariate analytics tool converting tabular data into publication-ready statistical representations using Flask, Seaborn, and Matplotlib.",
    verifiedLink: "https://data-visualization-server-face.vercel.app/",
    linkType: "live_demo",
    tags: ["Analytics", "Visualisation", "Statistical Modeling"],
  },
  {
    id: "image-eye-metadata",
    title: "ImageEye — Metadata Extractor",
    category: "Web & Cloud",
    description: "Digital forensics tool that extracts EXIF metadata, camera telemetry, and geolocation coordinates embedded within digital image payloads.",
    verifiedLink: "https://github.com/ANUJDWIVDI/image-metadata-extract-webapp",
    linkType: "github",
    tags: ["Digital Forensics", "EXIF Parsing", "Python"],
  },
  {
    id: "cognify-tutor",
    title: "Cognify AI Tutor",
    category: "AI & ML",
    description: "AI-assisted personalized tutoring platform combining natural language parsing and adaptive curriculum pacing for technical topics.",
    verifiedLink: "https://github.com/ANUJDWIVDI/tutor-ai-flask-webapp",
    linkType: "github",
    tags: ["NLP", "Generative AI", "Education Tech"],
  },
  {
    id: "automata-recommender",
    title: "Automata — Product Recommendation Engine",
    category: "AI & ML",
    description: "Machine learning personalization engine designed to optimize product discovery based on behavioral telemetry and interaction matrices.",
    verifiedLink: "https://automata-two.vercel.app/",
    linkType: "live_demo",
    tags: ["Recommendation Systems", "Collaborative Filtering", "E-Commerce ML"],
  },
  {
    id: "yolo-object-recog",
    title: "YOLO Computer Vision Recognition Webapp",
    category: "AI & ML",
    description: "Real-time object detection and spatial classification web implementation running state-of-the-art YOLO architectures.",
    verifiedLink: "https://github.com/ANUJDWIVDI/yolo-image-recog-webapp",
    linkType: "github",
    tags: ["Computer Vision", "YOLO", "Deep Learning"],
  },
  {
    id: "git-script-automation",
    title: "Git-Script VM Automation",
    category: "Automation",
    description: "DevOps automation utility designed to orchestrate repository cloning, environment provisioning, and runtime triggers across cloud VM instances.",
    verifiedLink: "https://github.com/ANUJDWIVDI/git-script-automation",
    linkType: "github",
    tags: ["Cloud Automation", "DevOps", "Shell & Python"],
  },
  {
    id: "smart-forms-to-pdf",
    title: "Smart Forms to PDF Engine",
    category: "Automation",
    description: "Automated document generation microservice translating dynamic web form inputs into structured, standardized PDF documents.",
    verifiedLink: "https://github.com/ANUJDWIVDI/forms-to-pdf-webapp-arch",
    linkType: "github",
    tags: ["Document Automation", "Architecture", "Microservices"],
  },
  {
    id: "weather-fastapi",
    title: "Global Meteorological Forecast API",
    category: "Web & Cloud",
    description: "High-performance, asynchronous REST API built with FastAPI providing structured global weather predictions and meteorological telemetry.",
    verifiedLink: "https://github.com/ANUJDWIVDI/fast-api-python-weather-forecast",
    linkType: "github",
    tags: ["FastAPI", "Async REST", "API Architecture"],
  },
  {
    id: "turing-thoughts",
    title: "Turing Thoughts — AI x Philosophy",
    category: "Philosophy & Media",
    description: "Digital publication and discourse channel exploring the intersection between theoretical computer science, AI alignment, and philosophical inquiry.",
    verifiedLink: "https://linktr.ee/turingthoughts",
    linkType: "presentation",
    tags: ["AI Philosophy", "Ethics", "Intellectual Discourse"],
  },
];

// Configurable GitHub Evidence Module
export const GITHUB_PROOF_CONFIG: GitHubProofConfig = {
  repositoryUrl: null, // Will be populated when owner provides verified repo
  repositoryOwner: "ANUJDWIVDI",
  repositoryName: null,
  verifiedMetric: null,
  metricValue: null,
  metricDescription: null,
  lastUpdatedDate: null,
  dataSource: "Awaiting owner GitHub repository integration",
  isVerifiedAndActive: false, // Strict: Do not display fabricated counts!
};

// Editorial Articles and Practical Frameworks
export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    slug: "from-knowledge-to-judgment",
    title: "From Knowledge to Judgment: Why More Tutorials Won't Save Your Project",
    category: "Engineering Mindset",
    readingTime: "4 min read",
    publishedDate: "Proposed Editorial Essay",
    excerpt: "Knowing more syntax or downloading another framework is rarely what separates struggling projects from viable software. The scarce skill is judgment.",
    content: [
      "There is no shortage of technical material today. In any given week, hundreds of notebooks, API updates, and open-source models are published. Anyone with an internet connection can read the documentation.",
      "And yet, builders routinely spend months constructing software that answers questions nobody is asking, or creating fragile architectures that buckle under the first unexpected input.",
      "The issue is not a deficit of information; it is a deficit of disciplined evaluation. Knowing that an AI framework exists does not tell you whether your problem needs an LLM, a heuristic rule, or a simple database query.",
      "Real technical maturity lies in making intentional tradeoffs: deciding what to test first, knowing what to omit, and maintaining execution discipline when the initial novelty fades.",
    ],
    takeaways: [
      "Avoid adopting complex AI infrastructure before proving problem fundamentals.",
      "Information is commoditized; architectural discernment is the actual moat.",
      "Test your highest-risk assumptions within the first 48 hours.",
    ],
  },
  {
    slug: "what-makes-a-startup-pitch-convincing",
    title: "What Makes a Technical Startup Pitch Convincing to Skeptics?",
    category: "Pitch & Strategy",
    readingTime: "5 min read",
    publishedDate: "Proposed Editorial Essay",
    excerpt: "Technical founders often assume that complexity implies competence. In reality, investors and judges reward clarity, defensibility, and demonstrated momentum.",
    content: [
      "When engineers step up to pitch, their instinctive impulse is to demonstrate how hard they worked by showing architectural diagrams filled with microservices, vector databases, and custom pipelines.",
      "To a skeptical evaluator, complexity without economic rationale is a liability, not an asset. The judge is not asking 'Can you write code?' They are asking: 'Do you understand what problem you are solving, why existing alternatives fail, and how you will execute under constraint?'",
      "A compelling pitch connects three nodes: an indisputable problem, a defendable approach, and an authentic builder capability. Everything else is distraction.",
      "When we teach pitch preparation at initiatives like Octopus Tank, the focus is never on theatrical charisma. It is on intellectual clarity.",
    ],
    takeaways: [
      "Articulate the problem without mentioning your technology in the first sentence.",
      "Show evidence of real usage or customer friction before unveiling the architecture.",
      "Charisma without substance fails; clarity with substance converts.",
    ],
  },
  {
    slug: "the-difference-between-building-and-validating",
    title: "The Difference Between Building Features and Validating Hypotheses",
    category: "Product Thinking",
    readingTime: "4 min read",
    publishedDate: "Proposed Editorial Essay",
    excerpt: "Writing code feels like progress because it produces tangible artifacts. But building without testing assumptions is just expensive procrastination.",
    content: [
      "It is psychologically comforting to spend three weeks configuring Docker containers and tweaking CSS styles. It gives the builder a sense of accomplishment while insulating them from the risk of rejection.",
      "True validation is uncomfortable. It forces you to put an imperfect prototype in front of a real user, observe where they get confused, and listen to why they wouldn't pay for it.",
      "The goal of early-stage engineering is not to write pristine code that lasts for ten years; it is to maximize the rate of learning per unit of effort.",
      "When you view code as an instrument for hypothesis testing rather than a monument to your programming skills, your entire roadmap changes.",
    ],
    takeaways: [
      "Identify the single riskiest assumption underlying your project.",
      "Build the smallest possible functional surface to test that hypothesis.",
      "Measure user action, not polite verbal encouragement.",
    ],
  },
];

// Visual Reference Assets from User Images
export const IMAGE_ASSETS = {
  offerStructure: {
    src: "/images/octopus-tank-offer-structure.jpg",
    alt: "Octopus Tank Offer Structure Infographic - 3 Gates, Session Logic, Recognition Architecture, Offer Pathways, Management Route, and Agreements",
    title: "Octopus Tank Offer Structure",
    caption: "The 3 Gates, 2-Hour Session Logic, 10 Recognition Cards, 3 Commercial Routes, and Management Flow.",
  },
  recognitionTokens: {
    src: "/images/archzos-recognition-tokens.jpg",
    alt: "Archzos Technologies Pvt Ltd Recognition Tokens - Gold 1st, 2nd, 3rd Place, Silver Token, Bronze Token, and Card Back Design",
    title: "Archzos Technologies Recognition Tokens",
    caption: "Gold (1st, 2nd, 3rd), Silver (Selected by Anuj), Bronze (Individual Interest Pass), and Card Back design.",
  },
  offerLetterStationery: {
    src: "/images/archzos-offer-letter-stationery.jpg",
    alt: "Archzos Technologies Formal Offer Letter, Branded Envelope, Black Presentation Folder, and Embossed Seal Detail",
    title: "Formal Offer Letter & Stationery Suite",
    caption: "Formal offer letter layout, company-branded envelope, black presentation folder, and embossed seal details.",
  },
  officialSealSigning: {
    src: "/images/archzos-official-seal-signing.jpg",
    alt: "Archzos Technologies Official Seal & Signing System - Gold Ink, Blue Ink, Blind Emboss, Ceremonial Wax Seal, and Gold Fountain Pen",
    title: "Official Seal & Signing System",
    caption: "Gold ink, blue ink, blind emboss, and ceremonial wax seal applications with gold fountain pen signing.",
  },
};

// 5-Step Operational Process Flow (From Image 1)
export const PROCESS_FIVE_STEPS = [
  {
    step: "01",
    title: "EVALUATE",
    headline: "Rigorous Pitch & Idea Audit",
    description: "Ideas and pitches are assessed against real friction, technical defensibility, and market economics during the session.",
  },
  {
    step: "02",
    title: "RECOGNISE",
    headline: "Merit-Based Token Allocation",
    description: "Eligible participants receive the applicable recognition token (Gold, Silver, or Bronze pass) corresponding to their performance.",
  },
  {
    step: "03",
    title: "DEFINE",
    headline: "Offer Scope & Terms Established",
    description: "The relevant engagement pathway (Team Consultancy, Individual Bronze, or Premium Mentorship) and clear parameters are established.",
  },
  {
    step: "04",
    title: "DOCUMENT",
    headline: "Formal Agreement Preparation",
    description: "The approved offer agreement or letter is prepared with recipient details, serial numbering, and clear terms.",
  },
  {
    step: "05",
    title: "ONBOARD",
    headline: "Circle13 Booking Confirmation",
    description: "Circle13 management confirms calendar scheduling, onboarding coordination, and payment processing on Anuj's behalf.",
  },
];

// Three Distinct Commercial Offer Routes (From Image 1 & Master Manual 19 Oct 2026)
export const COMMERCIAL_OFFER_ROUTES: OfferPathway[] = [
  {
    id: "team-consultancy-entry",
    routeKey: "route-a",
    name: "Team Consultancy Entry",
    referencePriceINR: 15000,
    priceDisplay: "₹15,000 total",
    headline: "Structured guidance accessible to a group working towards a shared objective.",
    audience: "Teams of up to 5 people seeking structured acceleration and architectural direction.",
    teamMaxMembers: 5,
    perPersonEquivalentINR: 3000,
    description:
      "A team-oriented consultancy entry designed to make structured guidance accessible to a group working towards a shared objective. When a team of 5 participates, the effective per-head investment is ₹3,000 each. The total team package remains ₹15,000 even if 2, 3, or 4 members initially enroll. The precise scope, duration, and deliverables require approval.",
    duration: "Structured focused consultation session for the entire team",
    focusAreas: [
      "Shared architectural diagnosis & technical bottleneck review",
      "Team pitch defensibility & multi-role positioning",
      "Prioritised execution roadmap for the upcoming development sprint",
      "Structured group follow-up action summary",
    ],
    eligibilityNotice:
      "Open to self-formed teams of up to 5 members. Lower per-head cost applies when the team is full (₹3,000/head at 5 participants). The total team package remains ₹15,000. Scope, duration, and calendar availability require Anuj's approval.",
    managementNote:
      "Coordinated via Circle13 management desk. Bookings and calendar slots are scheduled upon team application review.",
    status: "awaiting_approval",
    statusLabel: "Awaiting Approval (Planning Term)",
    sourceOrigin: "Master Manual & Infographic (19 Oct 2026)",
    approvalStatus: "awaiting_approval",
    ctaText: "Explore Team Consultancy",
    badge: "Route A — Team Route",
  },
  {
    id: "individual-bronze-route",
    routeKey: "route-b",
    name: "Individual Bronze Route",
    referencePriceINR: 12000,
    priceDisplay: "₹12,000",
    headline: "Individual engagement route associated with Bronze recognition and individual-interest pathway.",
    audience: "Highly interested individuals and driven builders seeking personal execution direction.",
    description:
      "An individual engagement route associated with the Bronze recognition and individual-interest pathway. Designed to widen distribution and make high-leverage guidance accessible to promising solo builders. The exact eligibility, delivery format, and scope require confirmation before accepting any payment.",
    duration: "1-on-1 strategic advisory session with personalized diagnosis",
    focusAreas: [
      "Individual technical stack review & engineering trajectory",
      "Project validation & hypothesis testing discipline",
      "Direct feedback on problem framing and code architecture",
      "Follow-up resource pointers and milestone tracking",
    ],
    eligibilityNotice:
      "Individual route associated with Bronze selection. Delivery format (private 1:1 vs group cohort) must remain explicit and consensual before payment. Terms require Anuj's sign-off.",
    managementNote:
      "Booking requests route through Circle13 management desk. Verified against issued token or submitted project context.",
    status: "awaiting_approval",
    statusLabel: "Awaiting Approval (Planning Term)",
    sourceOrigin: "Master Manual & Infographic (19 Oct 2026)",
    approvalStatus: "awaiting_approval",
    ctaText: "Explore Individual Route",
    badge: "Route B — Individual Route",
  },
  {
    id: "premium-anchor-mentorship-pathway",
    routeKey: "route-c",
    name: "Premium Anchor Mentorship",
    referencePriceINR: 75000,
    priceDisplay: "₹75,000",
    headline: "30-day premium mentorship centred on deeper guidance, execution support, and accountability.",
    audience: "High-ambition builders and flagship teams preparing for serious launch, demo days, or investment scrutiny.",
    duration: "30 days of deep engagement",
    focusAreas: [
      "Deep strategic and architectural engagement",
      "Continuous execution support and sprint milestones",
      "Relentless weekly accountability and obstacle clearing",
      "Gold & Silver recognition token discount redemption applies here",
    ],
    description:
      "A premium mentorship engagement centred on deeper guidance, execution support, and accountability. Serves as the anchor programme against which Octopus Tank Gold and Silver recognition cards are redeemable. Focus is on strategic milestones, system architecture, and execution discipline. Does not invent session counts, unlimited access, or guaranteed business outcomes.",
    eligibilityNotice:
      "Qualifies for Octopus Tank Gold Cards (80%, 70%, 60% discount -> ₹15,000, ₹22,500, ₹30,000) and Silver Cards (50%/40% discount -> ₹37,500/₹45,000). Limited monthly cohort intake. Requires Anuj's final confirmation.",
    managementNote:
      "Circle13 management confirms onboarding, milestone scheduling, and formal documentation.",
    status: "awaiting_approval",
    statusLabel: "Awaiting Approval (Planning Term)",
    sourceOrigin: "Master Manual & Infographic (19 Oct 2026)",
    approvalStatus: "awaiting_approval",
    ctaText: "Explore Premium Mentorship",
    badge: "Route C — Anchor Mentorship",
  },
];

// Unified Central Offers Configuration (All Offer Pathways & Catalogue Services in One Registry)
export const CENTRAL_OFFERS: UnifiedOffer[] = [
  {
    id: "route-a-team",
    slug: "team-consultancy-entry",
    routeKey: "route-a",
    title: "Team Consultancy Entry",
    badge: "Route A — Team Route",
    eyebrow: "TEAM ACCELERATION",
    headline: "Structured guidance accessible to a group working towards a shared objective.",
    targetAudience: "Teams of up to 5 people seeking structured acceleration and architectural direction.",
    description:
      "A team-oriented consultancy entry designed to make structured guidance accessible to a group working towards a shared objective. At 5 participants, the arithmetic equivalent is ₹3,000 per person. The total team package remains ₹15,000 even if 2, 3, or 4 members participate. The precise scope, duration, and deliverables require approval.",
    referencePriceINR: 15000,
    priceDisplay: "₹15,000 total",
    perPersonEquivalentINR: 3000,
    teamMaxMembers: 5,
    duration: "Structured focused consultation session for the entire team",
    deliveryFormat: "Private team-exclusive session or scheduled cohort (online or in Bangalore)",
    focusAreas: [
      "Shared architectural diagnosis & technical bottleneck review",
      "Team pitch defensibility & multi-role positioning",
      "Prioritised execution roadmap for the upcoming development sprint",
      "Structured group follow-up action summary",
    ],
    inclusions: [
      "Team-wide architectural diagnosis and system audit",
      "Pitch deck stress-testing and narrative defense",
      "Prioritized sprint backlog and technical decision rubric",
      "Up to 5 participating team members under one flat fee",
    ],
    exclusions: [
      "Hands-on custom software outsourcing or code implementation",
      "Unlimited daily on-call inquiries",
    ],
    eligibilityNotice:
      "Planning terms from Anuj. Open to teams of up to 5. Per-head cost decreases as team fills. Delivery format and calendar require sign-off.",
    managementNote:
      "Coordinated via Circle13 management desk. Verified team application required.",
    status: "awaiting_approval",
    statusLabel: "Awaiting Approval (Planning Term)",
    sourceOrigin: "Master Manual & Infographic (19 Oct 2026)",
    ctaText: "Request Team Consultancy",
    ctaLink: "/book?route=route-a",
    featured: true,
  },
  {
    id: "route-b-individual",
    slug: "individual-bronze-route",
    routeKey: "route-b",
    title: "Individual Bronze Route",
    badge: "Route B — Individual Route",
    eyebrow: "SOLO BUILDER ACCELERATION",
    headline: "Individual engagement route associated with Bronze recognition and individual-interest pathway.",
    targetAudience: "Highly interested individuals and driven builders seeking personal execution direction.",
    description:
      "An individual engagement route associated with the Bronze recognition and individual-interest pathway. Designed to widen distribution and make high-leverage guidance accessible to promising solo builders. The exact eligibility, delivery format, and scope require confirmation before accepting any payment.",
    referencePriceINR: 12000,
    priceDisplay: "₹12,000",
    perPersonEquivalentINR: 12000,
    teamMaxMembers: 1,
    duration: "1-on-1 strategic advisory session with personalized diagnosis",
    deliveryFormat: "Individual video consultation or in-person by arrangement",
    focusAreas: [
      "Individual technical stack review & engineering trajectory",
      "Project validation & hypothesis testing discipline",
      "Direct feedback on problem framing and code architecture",
      "Follow-up resource pointers and milestone tracking",
    ],
    inclusions: [
      "Personal code & architecture critique",
      "Pitch & positioning stress-testing",
      "Targeted technical learning roadmap",
      "Bronze token pass redemption pathway if earned",
    ],
    exclusions: [
      "Private daily access (do not mistake individual entry for daily personal hour)",
      "Guaranteed employment, funding, or competition placement",
    ],
    eligibilityNotice:
      "Planning terms from Anuj. Delivery format (private 1:1 vs group cohort) must be disclosed before payment. Terms require Anuj's sign-off.",
    managementNote:
      "Booking requests route through Circle13 management desk.",
    status: "awaiting_approval",
    statusLabel: "Awaiting Approval (Planning Term)",
    sourceOrigin: "Master Manual & Infographic (19 Oct 2026)",
    ctaText: "Request Individual Route",
    ctaLink: "/book?route=route-b",
    featured: false,
  },
  {
    id: "route-c-anchor",
    slug: "premium-anchor-mentorship",
    routeKey: "route-c",
    title: "Premium Anchor Mentorship",
    badge: "Route C — Flagship Anchor",
    eyebrow: "INTENSIVE ACCOUNTABILITY",
    headline: "30-day premium mentorship centred on deeper guidance, execution support, and accountability.",
    targetAudience: "High-ambition builders and flagship teams preparing for serious launch, demo days, or investment scrutiny.",
    description:
      "A premium mentorship engagement centred on deeper guidance, execution support, and accountability. Serves as the anchor programme against which Octopus Tank Gold and Silver recognition cards are redeemable. Focus is on strategic milestones, system architecture, and execution discipline. Does not invent session counts, unlimited access, or guaranteed business outcomes.",
    referencePriceINR: 75000,
    priceDisplay: "₹75,000",
    perPersonEquivalentINR: null,
    teamMaxMembers: 5,
    duration: "30 days of deep engagement",
    deliveryFormat: "Structured hybrid milestones with Circle13 coordination",
    focusAreas: [
      "Deep strategic and architectural engagement",
      "Continuous execution support and sprint milestones",
      "Relentless weekly accountability and obstacle clearing",
      "Gold & Silver recognition token discount redemption applies here",
    ],
    inclusions: [
      "Weekly strategic milestones and sprint reviews",
      "System design and generative AI integration audits",
      "Deck, messaging, and pitch presentation rehearsal",
      "Dedicated review checkpoints between sessions",
      "Eligible card discount redemption applies here (Gold/Silver/Bronze)",
      "Dedicated Circle13 management liaison",
    ],
    exclusions: [
      "Unlimited 24/7 on-call availability",
      "Direct financial investment or investment brokerage",
      "Guaranteed third-party outcomes",
    ],
    eligibilityNotice:
      "Anchor planning rate: ₹75,000. Qualifies for Octopus Tank Gold Cards (80%, 70%, 60% discount -> ₹15,000, ₹22,500, ₹30,000) and Silver Cards (50%/40% discount -> ₹37,500/₹45,000). Limited monthly cohort intake.",
    managementNote:
      "Circle13 management confirms onboarding, milestone scheduling, and formal documentation.",
    status: "awaiting_approval",
    statusLabel: "Awaiting Approval (Planning Term)",
    sourceOrigin: "Master Manual & Infographic (19 Oct 2026)",
    ctaText: "Apply for 30-Day Mentorship",
    ctaLink: "/book?route=route-c",
    featured: true,
  },
  {
    id: "historical-personal-consultancy",
    slug: "historical-consultancy-40k",
    routeKey: "consultancy-single",
    title: "1:1 Personal Consultancy (Single Session)",
    badge: "Draft Proposal",
    eyebrow: "HISTORICAL ADVISORY",
    headline: "Focused 1-on-1 diagnostic from previous proposal materials.",
    targetAudience: "Solo founders or builders seeking an architectural critique.",
    description:
      "Single in-depth strategy session from earlier website planning documents (₹40,000 reference price). Preserved transparently in central configuration. Not automatically merged with current ₹15K team / ₹12K individual planning routes.",
    referencePriceINR: 40000,
    priceDisplay: "₹40,000",
    perPersonEquivalentINR: 40000,
    teamMaxMembers: 1,
    duration: "Single in-depth strategy session (with pre-read analysis)",
    deliveryFormat: "Video consultation or in-person in Bangalore by arrangement",
    focusAreas: [
      "Technical architecture review",
      "Pitch deck & narrative stress-testing",
      "Follow-up execution summary",
    ],
    inclusions: [
      "1-on-1 strategy session with pre-read analysis",
      "System design and AI pipeline audit",
      "Written execution summary",
    ],
    exclusions: [
      "Ongoing daily access",
      "Custom software development",
    ],
    eligibilityNotice:
      "Historical proposed package from earlier materials. Requires confirmation by Anuj before quoting.",
    managementNote:
      "Enquiries reviewed via Circle13 management desk.",
    status: "draft",
    statusLabel: "Draft Proposal (Historical Planning)",
    sourceOrigin: "Earlier planning documents",
    ctaText: "Enquire Regarding Consultancy",
    ctaLink: "/book?service=personal-consultancy",
    featured: false,
  },
  {
    id: "historical-mentorship-4pack",
    slug: "historical-mentorship-40k",
    routeKey: "mentorship-4pack",
    title: "1:1 Mentorship (4-Session Programme)",
    badge: "Draft Proposal",
    eyebrow: "HISTORICAL ENGAGEMENT",
    headline: "Four-session milestone programme from previous proposal materials.",
    targetAudience: "Engineers and founders building products over a multi-week window.",
    description:
      "A 4-part structured engagement mapping across Diagnosis, Prioritisation, In-depth Review, and Practical Execution Roadmap (₹40,000 reference price from earlier proposals). Kept unmerged from newer base rates.",
    referencePriceINR: 40000,
    priceDisplay: "₹40,000",
    perPersonEquivalentINR: 40000,
    teamMaxMembers: 1,
    duration: "4 dedicated 60-90 min sessions spread over 3-6 weeks",
    deliveryFormat: "Scheduled 1:1 sessions (remote or Bangalore offline by agreement)",
    focusAreas: [
      "Diagnose, Prioritise, Review, and Plan milestones",
      "System design critique and obstacle removal",
      "Long-term autonomous roadmap",
    ],
    inclusions: [
      "4 structured advisory sessions",
      "Roadmap documentation",
      "Milestone reviews",
    ],
    exclusions: [
      "Outsourced contract programming",
      "Guaranteed venture investment",
    ],
    eligibilityNotice:
      "Historical proposed package. Requires confirmation by Anuj before quoting.",
    managementNote:
      "Enquiries reviewed via Circle13 management desk.",
    status: "draft",
    statusLabel: "Draft Proposal (Historical Planning)",
    sourceOrigin: "Earlier planning documents",
    ctaText: "Enquire Regarding 4-Pack Mentorship",
    ctaLink: "/book?service=one-to-one-mentorship",
    featured: false,
  },
  {
    id: "institutional-ecosystem-workshops",
    slug: "institutional-programmes",
    routeKey: "institutional-programmes",
    title: "Institutional Workshops, Keynotes & Judging",
    badge: "Approved Campus Format",
    eyebrow: "B2B & CAMPUS INITIATIVES",
    headline: "Hands-on AI workshops, hackathon judging, and startup pitch bootcamps for premier institutions.",
    targetAudience: "Engineering universities, incubation centers, developer communities, and corporate innovation teams.",
    description:
      "Dynamic, hands-on programmes that train engineering students to build with modern AI architectures, build real software, and pitch with clarity. Verified across university campuses including Dayananda Sagar University (DSU).",
    referencePriceINR: null,
    priceDisplay: "Custom RFP Quote",
    perPersonEquivalentINR: null,
    teamMaxMembers: null,
    duration: "From 2-hour intensive masterclasses to multi-day hackathons",
    deliveryFormat: "On-campus keynote / workshop or high-fidelity virtual delivery",
    focusAreas: [
      "Generative AI, Autonomous Agents, and Production Pipelines",
      "Pitch Defensibility and Startup Hackathon Judging",
      "Octopus Tank format integration (Teach, Judge, Reward, Convert)",
    ],
    inclusions: [
      "Custom curriculum tailored to student cohort",
      "Interactive hackathon judging & live pitch evaluation",
      "Institutional capability documentation",
    ],
    exclusions: [
      "Pre-recorded static webinars",
    ],
    eligibilityNotice:
      "Approved format. Custom proposals structured around university cohort size, duration, and campus logistics.",
    managementNote:
      "Formal institutional RFPs coordinated through Circle13 management.",
    status: "approved",
    statusLabel: "Approved Campus Format",
    sourceOrigin: "DSU & Institutional Campus Deployments",
    ctaText: "Request Institutional Proposal",
    ctaLink: "/institutions",
    featured: true,
  },
];

// Official Recognition Tokens from Image 2
export const TOKEN_DESIGNS: TokenDesign[] = [
  {
    id: "gold-token-1st",
    rankKey: "gold-1",
    tier: "GOLD",
    title: "Gold Token — 1st Place",
    subtitle: "Access Unlocked",
    category: "1st Place Winner",
    accessStatus: "ACCESS UNLOCKED",
    recipientEligibility: "Awarded to the 1st Place champion team or builder at Octopus Tank.",
    applicableDiscount: "80% Off Mentorship Anchor (Student/Team fee: ₹15,000)",
    applicableOfferId: "premium-anchor-mentorship-pathway",
    description:
      "Represents the highest level of stage performance, problem defensibility, and execution rigor. Unlocks access to the flagship advisory track at the maximum 80% recognition tier.",
    visualDescription: "Ivory card with polished antique gold frame, mountain with winding gold path, laurel wreath, Roman numeral 1ST, and Archzos emblem.",
    actionNext: "Redeem against the 30-Day Premium Mentorship or Team Consultancy route through Circle13 management onboarding.",
    colorScheme: {
      bg: "from-[#FDFBF7] via-[#F7F2E7] to-[#EFE7D2]",
      border: "border-gold-500",
      text: "text-navy-950",
      pill: "bg-gold-500 text-navy-950",
      badgeBg: "bg-gold-100 border-gold-400 text-gold-900",
    },
  },
  {
    id: "gold-token-2nd",
    rankKey: "gold-2",
    tier: "GOLD",
    title: "Gold Token — 2nd Place",
    subtitle: "Priority Access",
    category: "2nd Place Runner-Up",
    accessStatus: "PRIORITY ACCESS",
    recipientEligibility: "Awarded to the 2nd Place finalist team exhibiting robust defensibility and engineering depth.",
    applicableDiscount: "70% Off Mentorship Anchor (Student/Team fee: ₹22,500)",
    applicableOfferId: "premium-anchor-mentorship-pathway",
    description:
      "Conferred upon the second-ranked finalist team demonstrating substantial architectural validity and commercial clarity.",
    visualDescription: "Ivory card with antique gold border, mountain ridge, laurel wreath, Roman numeral 2ND, and Archzos emblem.",
    actionNext: "Submit token serial number during onboarding review with Circle13 management.",
    colorScheme: {
      bg: "from-[#FDFBF7] via-[#F7F2E7] to-[#EFE7D2]",
      border: "border-gold-500/80",
      text: "text-navy-950",
      pill: "bg-gold-500/90 text-navy-950",
      badgeBg: "bg-gold-100 border-gold-400 text-gold-900",
    },
  },
  {
    id: "gold-token-3rd",
    rankKey: "gold-3",
    tier: "GOLD",
    title: "Gold Token — 3rd Place",
    subtitle: "Selected Route",
    category: "3rd Place Podium",
    accessStatus: "SELECTED ROUTE",
    recipientEligibility: "Awarded to the 3rd Place podium team exhibiting strong execution discipline.",
    applicableDiscount: "60% Off Mentorship Anchor (Student/Team fee: ₹30,000)",
    applicableOfferId: "premium-anchor-mentorship-pathway",
    description:
      "Recognizes the third podium finish in the live evaluation round, providing an earned gateway into structured advisory.",
    visualDescription: "Ivory card with antique gold border, mountain ridge, laurel wreath, Roman numeral 3RD, and Archzos emblem.",
    actionNext: "Present token credentials for verified placement into the structured mentorship cohort.",
    colorScheme: {
      bg: "from-[#FDFBF7] via-[#F7F2E7] to-[#EFE7D2]",
      border: "border-gold-500/60",
      text: "text-navy-950",
      pill: "bg-gold-500/80 text-navy-950",
      badgeBg: "bg-gold-100 border-gold-400 text-gold-900",
    },
  },
  {
    id: "silver-token-selected",
    rankKey: "silver-anuj",
    tier: "SILVER",
    title: "Silver Token — Selected by Anuj",
    subtitle: "Access Unlocked",
    category: "Personal Selection",
    accessStatus: "ACCESS UNLOCKED",
    recipientEligibility: "Conferred upon teams or ideas that Anuj personally selects for high creative upside and curiosity.",
    applicableDiscount: "50% or 40% Off (Fee: ₹37,500 or ₹45,000)",
    applicableOfferId: "premium-anchor-mentorship-pathway",
    description:
      "Selected directly by Anuj for exceptional technical originality or builder curiosity, independent of final competition podium placement.",
    visualDescription: "Subtle silver-frosted texture, midnight slate borders, laurel wreath, compass star, and mountain ridge.",
    actionNext: "Engage with Circle13 management to activate team mentorship onboarding under the designated Silver category.",
    colorScheme: {
      bg: "from-[#F4F6F9] via-[#E8ECF2] to-[#DCE1E9]",
      border: "border-silver-400",
      text: "text-navy-950",
      pill: "bg-silver-400 text-navy-950",
      badgeBg: "bg-slate-100 border-silver-400 text-slate-800",
    },
  },
  {
    id: "bronze-token-interest",
    rankKey: "bronze-interest",
    tier: "BRONZE",
    title: "Bronze Token — Individual Interest Pass",
    subtitle: "Individual Route",
    category: "Individual Interest",
    accessStatus: "INDIVIDUAL ROUTE",
    recipientEligibility: "Awarded to highly interested individual builders who demonstrate authentic hunger to build and learn.",
    applicableDiscount: "30% or 20% Off Individual Route (Fee: ₹8,400 or ₹9,600)",
    applicableOfferId: "individual-bronze-route",
    description:
      "An individual-interest pathway associated with Bronze recognition, designed to widen distribution and lower the barrier to personal guidance.",
    visualDescription: "Warm metallic bronze frame, mountain summit, laurel wreath, compass star, and Archzos emblem.",
    actionNext: "Submit individual enquiry with token serial number to claim individual advisory allocation.",
    colorScheme: {
      bg: "from-[#FAF6F2] via-[#F4EDE5] to-[#EBDCCF]",
      border: "border-bronze-500",
      text: "text-navy-950",
      pill: "bg-bronze-500 text-white",
      badgeBg: "bg-amber-50 border-bronze-500 text-amber-900",
    },
  },
  {
    id: "card-back-design",
    rankKey: "card-back",
    tier: "CARD_BACK",
    title: "Token Back Design",
    subtitle: "Verification & Serial Numbering",
    category: "Official Back Architecture",
    accessStatus: "AWARDED BY ANUJ DWIVEDI",
    recipientEligibility: "Universal back layout for all issued Archzos Technologies tokens.",
    applicableDiscount: "Includes serial authentication slot",
    applicableOfferId: "all-routes",
    description:
      "The reverse face of every physical token features the Archzos Technologies Pvt Ltd seal, mountain watermark, official signature line, and sequential serial number slot.",
    visualDescription: "Warm ivory card stock, gold double border, Archzos emblem, mountain watermark, Awarded by Anuj Dwivedi, and Serial No. slot.",
    actionNext: "Use the sequential serial number printed on the back to verify token authenticity during onboarding.",
    colorScheme: {
      bg: "from-[#FAFAF7] via-[#F6F2E8] to-[#EDE5D4]",
      border: "border-gold-400",
      text: "text-navy-950",
      pill: "bg-navy-950 text-white",
      badgeBg: "bg-slate-100 border-slate-300 text-navy-950",
    },
  },
];

// Sample Illustrative Token Records for Future Verification Framework
export const SAMPLE_TOKEN_RECORDS: TokenRecord[] = [
  {
    tokenId: "ARC-GLD-001",
    category: "Gold Token — 1st Place",
    recipientName: "Illustrative Recipient (Sample)",
    teamName: "Team NeuralForge",
    issueDate: "2026-10-31",
    validityDate: "2026-12-31",
    applicableOffer: "30-Day Premium Mentorship (80% Off)",
    redemptionStatus: "unredeemed",
    notes: "Sample illustrative record. Real recipient records require official issuance.",
  },
  {
    tokenId: "ARC-GLD-002",
    category: "Gold Token — 2nd Place",
    recipientName: "Illustrative Recipient (Sample)",
    teamName: "Team VisionSense",
    issueDate: "2026-10-31",
    validityDate: "2026-12-31",
    applicableOffer: "30-Day Premium Mentorship (70% Off)",
    redemptionStatus: "unredeemed",
    notes: "Sample illustrative record. Issued upon live judging.",
  },
  {
    tokenId: "ARC-SLV-004",
    category: "Silver Token — Selected by Anuj",
    recipientName: "Illustrative Recipient (Sample)",
    teamName: "Team AeroCompute",
    issueDate: "2026-10-31",
    validityDate: "2026-12-31",
    applicableOffer: "Team Mentorship Route (50% Off)",
    redemptionStatus: "unredeemed",
    notes: "Sample record. Awarded via personal selection.",
  },
  {
    tokenId: "ARC-BRZ-008",
    category: "Bronze Token — Individual Interest Pass",
    recipientName: "Illustrative Recipient (Sample)",
    teamName: "Individual Builder",
    issueDate: "2026-10-31",
    validityDate: "2026-12-31",
    applicableOffer: "Individual Bronze Route (30% Off)",
    redemptionStatus: "unredeemed",
    notes: "Sample record for individual interest pathway.",
  },
];

// Document and Agreement Templates (From Image 3 & Image 1)
export const DOCUMENT_TEMPLATES: AgreementTemplate[] = [
  {
    id: "gold-agreement",
    title: "Gold Agreement",
    type: "gold_agreement",
    headline: "Ceremonial Offer Letter for Top Recognition & Special Access",
    description:
      "Rendered on gold-laced textured paper stock with an embossed seal, sequential serial numbering, and metallic gold signature treatment. Commemorates podium finishes and top-tier access.",
    paperStock: "Heavyweight 350gsm warm ivory linen with gold metallic foiled border accents.",
    sealType: "Blind Emboss with Gold Foil Accent",
    signatureStyle: "Founder Signature in metallic gold ink via signing pen.",
    sampleFields: {
      recipientName: "Aravind Sharma",
      teamName: "Team NeuralForge",
      recognitionCategory: "Gold Token — 1st Place (Octopus Tank 2026)",
      offerTitle: "Flagship 30-Day Premium Mentorship",
      offerDetails: "Special Access Route with 80% Recognition Merit. Structured weekly sprints, system audits, and execution oversight.",
      serialNumber: "ARC-2026-0001",
      validUntil: "31 December 2026",
      approvedSignatory: "Anuj Dwivedi (Founder, Archzos Technologies Pvt Ltd)",
    },
    disclaimer:
      "Document designs are illustrative proposed brand concepts. Final terms, conditions, and official corporate authorization must be approved before these documents are formally issued.",
  },
  {
    id: "black-agreement",
    title: "Black Agreement",
    type: "black_agreement",
    headline: "Premium-Styled Signed Offer Document for Serious Entry & Commitment",
    description:
      "Deep obsidian black presentation document accented with warm gold metallic calligraphy, serial stamping, and counter-signature for committed advisory engagements.",
    paperStock: "Deep obsidian matte finish stock with metallic gold typography and gold-gilt edges.",
    sealType: "Gold Ink Seal or Ceremonial Wax Seal",
    signatureStyle: "Metallic gold calligraphy signature.",
    sampleFields: {
      recipientName: "Priya Sundaram",
      teamName: "PulseDynamics Labs",
      recognitionCategory: "Team Consultancy Entry (Route A)",
      offerTitle: "Team Acceleration Engagement",
      offerDetails: "Up to 5 team participants. Architectural diagnosis, pitch defensibility stress-testing, and milestone locking.",
      serialNumber: "ARC-2026-0002",
      validUntil: "31 December 2026",
      approvedSignatory: "Anuj Dwivedi (Founder, Archzos Technologies Pvt Ltd)",
    },
    disclaimer:
      "Document designs are illustrative proposed brand concepts. Final terms, conditions, and official corporate authorization must be approved before these documents are formally issued.",
  },
  {
    id: "formal-offer-letter",
    title: "Formal Offer Letter",
    type: "offer_letter",
    headline: "Archzos Technologies Pvt Ltd Formal Offer Letter Layout",
    description:
      "As depicted in Image 3, featuring company masthead, preamble of recognition, structured recipient/team fields, serial authentication number, valid-until date, and founder signature block.",
    paperStock: "Warm ivory textured stationery with fine gold ornamental corner borders.",
    sealType: "Embossed Seal with Archzos Emblem",
    signatureStyle: "Fountain pen signature with official signatory stamp.",
    sampleFields: {
      recipientName: "Karthik Raja",
      teamName: "OmniFlow Systems",
      recognitionCategory: "Silver Token — Selected by Anuj",
      offerTitle: "Structured Mentorship Pathway",
      offerDetails: "We are pleased to extend this offer in recognition of your valuable contribution and exceptional potential.",
      serialNumber: "ARC-2026-0003",
      validUntil: "31 December 2026",
      approvedSignatory: "Anuj Dwivedi (Founder, Archzos Technologies Pvt Ltd)",
    },
    disclaimer:
      "Document designs are illustrative proposed brand concepts. Final terms, conditions, and official corporate authorization must be approved before these documents are formally issued.",
  },
  {
    id: "branded-envelope",
    title: "Company-Branded Envelope",
    type: "branded_envelope",
    headline: "Ceremonial Presentation Envelope with Gold Trim",
    description:
      "Warm ivory envelope featuring the Archzos Technologies wordmark, triangular emblem, gold border piping, and rear flap sealed with a ceremonial red wax seal.",
    paperStock: "250gsm warm ivory matching letterhead stock.",
    sealType: "Ceremonial Red Wax Seal with Gold Inlaid Insignia",
    signatureStyle: "Addressed to recipient with custom calligraphy typography.",
    sampleFields: {
      recipientName: "Recipient Name",
      teamName: "Designated Team",
      recognitionCategory: "Official Correspondence",
      offerTitle: "Confidential Offer Envelope",
      offerDetails: "Archzos Technologies Pvt Ltd • A Brighter Tomorrow Together",
      serialNumber: "ENV-2026-0001",
      validUntil: "N/A",
      approvedSignatory: "Archzos Technologies Desk",
    },
    disclaimer:
      "Proposed stationery concept. Physical production subject to company authorization.",
  },
  {
    id: "presentation-folder",
    title: "Black Presentation Folder",
    type: "presentation_folder",
    headline: "Obsidian Presentation Folder with Gold Button Tie",
    description:
      "Premium heavy black presentation folder with embossed gold foil Archzos Technologies logo, circular gold button closure, and dedicated internal sleeves for tokens and agreements.",
    paperStock: "Heavy 450gsm obsidian buckram textured board.",
    sealType: "Gold Foil Stamped Emblem & Metallic Brass Button",
    signatureStyle: "Laser-etched metal or foil serial plate.",
    sampleFields: {
      recipientName: "Recipient Name",
      teamName: "Octopus Tank Finalists",
      recognitionCategory: "Executive Portfolio",
      offerTitle: "Presentation Suite",
      offerDetails: "Archzos Technologies Pvt Ltd • People, Ideas, Possibilities",
      serialNumber: "FLD-2026-0001",
      validUntil: "N/A",
      approvedSignatory: "Archzos Technologies Desk",
    },
    disclaimer:
      "Proposed presentation folder design. Physical production subject to corporate approval.",
  },
];

// Official Seals and Signing System Configuration (From Image 4)
export const SEALS_AND_SIGNING_CONFIG = {
  seals: [
    {
      id: "gold-ink-seal",
      name: "Gold Ink Seal",
      sealType: "gold_ink" as const,
      description: "Metallic gold stamped ink seal featuring the Archzos Technologies Pvt Ltd circular ring and central emblem.",
      application: "Primary stamp on white and ivory official agreements and formal offer letters.",
      colorHex: "#C9A04A",
      placementRule: "Bottom-right corner adjacent to founder authorized signature.",
    },
    {
      id: "blue-ink-seal",
      name: "Blue Ink Seal",
      sealType: "blue_ink" as const,
      description: "Deep midnight blue corporate ink seal for institutional documentation, formal university filings, and administrative records.",
      application: "Institutional filings, academic transcripts, and partner agreements.",
      colorHex: "#152D50",
      placementRule: "Lower-center or counter-signatory column.",
    },
    {
      id: "blind-emboss",
      name: "Blind Emboss (Dry Seal)",
      sealType: "blind_emboss" as const,
      description: "Colorless dimensional relief impression into paper fiber creating a tactile, unforgeable watermark effect.",
      application: "Exclusive ceremonial offer letters, high-denomination certificates, and permanent credentials.",
      colorHex: "#DDD2BC",
      placementRule: "Centered or lower right watermark zone.",
    },
    {
      id: "wax-seal",
      name: "Ceremonial Wax Seal",
      sealType: "ceremonial_wax" as const,
      description: "Deep crimson sealing wax stamped with the Archzos emblem and gold metallic powder finish.",
      application: "Securing ceremonial presentation envelopes and folder bindings.",
      colorHex: "#991B1B",
      placementRule: "Directly over the triangular closure flap of presentation envelopes.",
    },
  ],
  signingPen: {
    model: "Archzos Signature Edition Gold Fountain Pen",
    inkColor: "Metallic Gold & Archival Black",
    description: "High-precision fountain pen with black resin barrel, 18k gold-plated accents, and Archzos emblem engraving.",
    standard: "Sign-off by Anuj Dwivedi using a gold ink fountain pen as per proposed company standard.",
  },
  usageGuidelines: [
    {
      step: "1",
      title: "Seal Placement",
      description: "Place the official seal on authorised documents, agreements, and official correspondence.",
    },
    {
      step: "2",
      title: "Serial Numbering",
      description: "Use sequential serial numbers (e.g. No. 0001) on key documents for authentication and tracking.",
    },
    {
      step: "3",
      title: "Authorized Signature",
      description: "Final sign-off by Anuj Dwivedi using a gold ink fountain pen as per proposed company standard.",
    },
    {
      step: "4",
      title: "Official Application",
      description: "Use the seal across documents, envelopes, and official materials as shown in brand references.",
    },
  ],
};

// Clear Harmonization Notice
export const PRICING_HARMONIZATION_NOTE = {
  notice:
    "The new Octopus Tank infographic and master manual supply three commercial offer routes: Route A (Team Consultancy Entry at ₹15,000 total for up to 5 people), Route B (Individual Bronze Route at ₹12,000), and Route C (Premium Anchor Mentorship at ₹75,000). Previous website materials referenced 1-on-1 consultancy (₹40,000) and 4-session mentorship (₹40,000). To avoid contradictory prices, all offerings are centralized with explicit statuses ('awaiting_approval', 'draft', or 'approved') pending final confirmation from Anuj Dwivedi. Earlier draft packages are not silently merged.",
};

// 10-Card Recognition Programme Rules & Allocation Architecture (Master Manual Page 5)
export const RECOGNITION_RULES_CONFIG = {
  totalCap: 10,
  totalCardsPerEdition: 10,
  goldCount: 3,
  silverCount: 4,
  bronzeCount: 3,
  goldAllocation: {
    count: 3,
    type: "Strictly Judged Podium Places",
    description: "Conferred exclusively upon 1st, 2nd, and 3rd place teams from live judged competition rounds.",
    negotiable: false,
  },
  silverBronzeAllocation: {
    count: 7,
    type: "Flexible Allocation (Silver / Bronze)",
    description: "The seven non-Gold cards can be split flexibly between Silver (standout teams Anuj personally selects) and Bronze (interested individuals). Never make or print extras unless Anuj formally revises the cap.",
    negotiable: false,
  },
  coreRule:
    "Cards signify a selection. They do not themselves guarantee funding, employment, private hours, or a special price. Offer entitlements must be confirmed in a named written offer letter.",
  decisionRule:
    "Do not push everyone into the same purchase. Match each person to their actual problem, offer only what Archzos can deliver, and allow a clear 'no'.",
};

// Master Manual Operating Architecture (Archzos Technologies Pvt Ltd Manual - 19 Oct 2026)
export const MASTER_MANUAL_CONFIG = {
  edition: "EDITION 01 · 19 October 2026",
  authorityNote: "ANUJ SELECTS / MANAGEMENT SELLS / TERMS ARE WRITTEN / SIGNATURE IS PERSONAL",
  
  // 3 Gates Architecture (Manual Page 3)
  threeGates: [
    {
      gate: "GATE 01",
      name: "PSYCHOLOGY",
      coreQuestion: "Is the friction worth removing?",
      evidence: "Articulate problem, active questions, genuine desire to work on it.",
      failSignal: "Attention without serious follow-up.",
      actionPrinciple: "Prove relevant friction before offering a paid route.",
    },
    {
      gate: "GATE 02",
      name: "ECONOMICS",
      coreQuestion: "Is contribution positive?",
      evidence: "Revenue minus management, delivery, and other variable costs; students report useful progress.",
      failSignal: "Hours consumed exceed realizable benefit.",
      actionPrinciple: "Deliver positive value with transparent per-head unit economics.",
    },
    {
      gate: "GATE 03",
      name: "DISTRIBUTION",
      coreQuestion: "Can the offer reach more people?",
      evidence: "Referrals, team members, clear group cohorts, repeatable enrollment and delivery.",
      failSignal: "Acquisition grows while results collapse.",
      actionPrinciple: "Repeat without deception; maintain explicit consent on delivery format.",
    },
  ],

  // 2-Hour Session Blueprint (Manual Page 2 & Page 9)
  sessionStages: [
    {
      step: "01",
      title: "Enter with Authority",
      tagline: "COMMAND THE ROOM",
      description: "Establish undeniable engineering credibility through demonstrated skills, actual software architectures, and zero theoretical posturing.",
    },
    {
      step: "02",
      title: "Expose the Friction",
      tagline: "DIAGNOSE REAL BLOCKS",
      description: "Ask tough questions that reveal why toy notebooks fail in production and why casual startup ideas flounder.",
    },
    {
      step: "03",
      title: "Teach What Matters",
      tagline: "UNCOMPROMISING CURRICULUM",
      description: "Impart fundamental principles: system design, defensible problem-solution fit, and real unit economics.",
    },
    {
      step: "04",
      title: "Judge the Pitches",
      tagline: "RUTHLESS, CONSTRUCTIVE CRITIQUE",
      description: "Evaluate multi-arm project pitches against actual viability, market friction, and technical architecture.",
    },
    {
      step: "05",
      title: "Reward and Convert",
      tagline: "CONFER MERIT, HANDOFF TO DESK",
      description: "Hand over numbered Gold, Silver, and Bronze tokens on stage. Transition interested teams to the management desk for written terms.",
    },
  ],

  // 6-Step Command Map (Manual Page 2)
  commandMap: [
    {
      step: "1",
      action: "Observe a real gap",
      detail: "Student or team identifies something useful they need help doing.",
    },
    {
      step: "2",
      action: "Show credible proof",
      detail: "Actual examples, skills, live demos, and clear deliverables.",
    },
    {
      step: "3",
      action: "Qualify the need",
      detail: "Team or individual? What will improve? Time commitment?",
    },
    {
      step: "4",
      action: "Recognise selectively",
      detail: "Gold: judged places. Silver: chosen teams. Bronze: interested individuals.",
    },
    {
      step: "5",
      action: "Issue one offer",
      detail: "Written scope, price, group/private format, validity, and signature.",
    },
    {
      step: "6",
      action: "Management closes",
      detail: "Consent, authorized payment, receipt, scheduling, onboarding.",
    },
  ],

  // 5-Question Diagnostic (Manual Page 12)
  diagnosticQuestions: [
    {
      number: "01",
      question: "What are you building?",
      purpose: "Distinguishes a real project from a casual idea.",
    },
    {
      number: "02",
      question: "What have you done already?",
      purpose: "Shows existing work, customer learning, or technical progress.",
    },
    {
      number: "03",
      question: "What is your biggest block?",
      purpose: "Identifies whether consultancy can reasonably help.",
    },
    {
      number: "04",
      question: "What would success look like?",
      purpose: "Defines a concrete deliverable rather than a vague transformation.",
    },
    {
      number: "05",
      question: "What time can you commit?",
      purpose: "Tests implementation readiness and scheduling fit.",
    },
  ],

  // Non-Negotiables Table (Manual Page 14)
  nonNegotiables: {
    approvedPractices: [
      "Ask what the buyer wants to achieve.",
      "Show the correct written scope and price.",
      "Describe demonstrated skills and verified proof.",
      "Explain team price for up to five.",
      "Say Silver / Bronze require personal selection.",
      "Use only approved card counts and terms.",
      "Explain the calendar and delivery limits.",
      "Let a buyer leave or think without pressure.",
      "Collect via an authorized payment method.",
      "Offer an official receipt and accurate follow-up.",
    ],
    prohibitedShortcuts: [
      "Guarantee investment, placement, or wealth.",
      "Say 'only one seat' if untrue (manufactured urgency).",
      "Claim DSU or VC endorsement without proof.",
      "Shame someone for declining.",
      "Issue extra limited cards off-record.",
      "Promise 'daily private hour' without capacity.",
      "Move a private buyer into a group secretly.",
      "Conceal taxes, refunds, or the service provider.",
      "Imitate Anuj's signature or stamp blank pages.",
      "Use personal payment collection off-ledger.",
    ],
  },

  // 10 Core Quick Reference FAQs (Manual Page 20)
  quickReferenceFaqs: [
    {
      q: "How much is a team?",
      a: "₹15,000 total, up to five people, subject to the approved scope.",
    },
    {
      q: "Is one person ₹3,000?",
      a: "No. ₹3,000/head is only the effective rate for five people on the team offer.",
    },
    {
      q: "Is Bronze a team prize?",
      a: "No. Bronze is the individual-only recognition route.",
    },
    {
      q: "Who receives Gold?",
      a: "Exactly three judged places: first, second, and third.",
    },
    {
      q: "Does my card guarantee a discount?",
      a: "Only the specific written letter establishes an approved price; tokens carry no percentage.",
    },
    {
      q: "Will Anuj personally teach every hour?",
      a: "Only what is explicitly promised and schedulable in the accepted plan.",
    },
    {
      q: "Who is collecting my payment?",
      a: "The authorized management / company channel stated on the invoice or receipt.",
    },
    {
      q: "Can I think about it?",
      a: "Yes. Provide written terms and the actual offer validity, if any.",
    },
    {
      q: "Can we join as a pair?",
      a: "Yes, the total team package remains ₹15,000 for up to five.",
    },
    {
      q: "Will investors or placements be guaranteed?",
      a: "No. Do not guarantee any third-party outcome.",
    },
  ],
};

// 12 Showcase Items for Document and Stationery Showcase (Prompt Section 8)
export const STATIONERY_SHOWCASE_ITEMS: StationeryShowcaseItem[] = [
  {
    id: "ivory-gold-letterhead",
    title: "Ivory-and-Gold Letterhead",
    category: "stationery",
    headline: "Executive Corporate Stationery with Gold Border Piping",
    description: "Printed on heavyweight 160gsm warm ivory tactile laid paper with fine antique gold perimeter rules and clean corporate typography.",
    specifications: [
      "Stock: 160gsm warm ivory lightly textured laid sheet",
      "Print: Archival black ink with hot-stamped antique gold perimeter line",
      "Typography: Playfair Display serif paired with Inter sans-serif",
      "Layout: Generous margins with Archzos Technologies Pvt Ltd masthead",
    ],
    imageSrc: "/images/archzos-offer-letter-stationery.jpg",
    imageAlt: "Archzos Technologies ivory and gold letterhead with formal layout",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "black-executive-stationery",
    title: "Black Executive Stationery",
    category: "stationery",
    headline: "Obsidian Black Formal Stationery with Gold-Foil Inscription",
    description: "Deep obsidian matte cardstock with metallic gold letterpress typography, designed for confidential executive correspondence and premium engagements.",
    specifications: [
      "Stock: 300gsm obsidian dyed-through matte board",
      "Print: Metallic gold foil block stamping",
      "Accents: Gilt micro-beveled edging",
      "Application: Reserved for high-tier advisory covenants",
    ],
    imageSrc: "/images/archzos-offer-letter-stationery.jpg",
    imageAlt: "Black executive stationery with metallic gold typography",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "offer-letter-concept",
    title: "Offer-Letter Concept",
    category: "agreement",
    headline: "Structured 5-Field Personal Consultancy Offer Letter",
    description: "Standardized formal offer layout featuring recipient name, card category, approved plan, exact price, format/sessions, validity date, and founder signature block.",
    specifications: [
      "Fields: Recipient, Category, Scope, Valid Until, Signatory",
      "Rule: One real written offer: scope + price + format + validity",
      "Security: Numbered serial slot linked to management register",
      "Execution: Personal signature added in gold ink with dried ink seal",
    ],
    imageSrc: "/images/archzos-offer-letter-stationery.jpg",
    imageAlt: "Archzos formal consultancy offer letter layout with fields",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "gold-agreement-concept",
    title: "Gold Agreement Concept",
    category: "agreement",
    headline: "Ceremonial Agreement on Textured Stock for Top Recognition",
    description: "Formal agreement layout commemorating 1st, 2nd, and 3rd place judged podium finishes. Features blind emboss watermark and gold metallic signature treatment.",
    specifications: [
      "Stock: Heavyweight 350gsm warm ivory linen",
      "Seal: Blind emboss with gold metallic foil accent",
      "Signature: Personal handwritten signature in tested metallic gold ink",
      "Serial: ARC-2026-XXXX registered on-site",
    ],
    imageSrc: "/images/archzos-offer-letter-stationery.jpg",
    imageAlt: "Gold agreement concept layout with gold foil and seal",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "black-agreement-concept",
    title: "Black Agreement Concept",
    category: "agreement",
    headline: "Obsidian Presentation Document for Committed Advisory Tracks",
    description: "Deep obsidian presentation document accented with warm gold calligraphy and official circular seal for committed team and anchor routes.",
    specifications: [
      "Stock: 350gsm obsidian buckram textured board",
      "Typography: Metallic gold calligraphy and serial stamping",
      "Format: Double-fold formal agreement",
      "Insignia: Stamped Archzos circular company seal",
    ],
    imageSrc: "/images/archzos-offer-letter-stationery.jpg",
    imageAlt: "Black agreement concept with gold lettering and seal",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "branded-envelope",
    title: "Branded Presentation Envelope",
    category: "packaging",
    headline: "C4 & C5 Ivory Envelopes with Thin Gold Rule and Clean Flap",
    description: "Official presentation envelope featuring Archzos Technologies Pvt Ltd wordmark, thin gold rule edge, and triangular flap sealed with ceremonial wax.",
    specifications: [
      "Sizes: C4 for unfolded A4 / C5 for folded A4",
      "Stock: 220gsm warm ivory matching letterhead paper",
      "Closure: Clean triangular flap secured with embossed wax seal",
      "Detail: Subtle gold rule piping along perimeter",
    ],
    imageSrc: "/images/archzos-offer-letter-stationery.jpg",
    imageAlt: "Branded ivory envelope with gold border and seal flap",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "presentation-folder",
    title: "Presentation Folder",
    category: "packaging",
    headline: "Obsidian Heavy Folder with Metallic Gold Foil Stamping",
    description: "Heavy 450gsm presentation folder with embossed Archzos emblem, circular brass tie closure, and dedicated internal sleeves for tokens and written agreements.",
    specifications: [
      "Stock: 450gsm obsidian buckram board",
      "Hardware: Circular gold button with braided black tie cord",
      "Internal: Die-cut slots for 85x55mm recognition token and A4 letter",
      "Embossing: Deep-relief gold foil Archzos wordmark",
    ],
    imageSrc: "/images/archzos-offer-letter-stationery.jpg",
    imageAlt: "Black presentation folder with gold button and string closure",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "gold-seal-concept",
    title: "Gold Seal Concept",
    category: "seal",
    headline: "Metallic Gold Ink Circular Stamp with Approved Core Symbol",
    description: "Outer ring: ARCHZOS TECHNOLOGIES PVT LTD. Core: original approved Veerbhogya SVG symbol. Stamped adjacent to founder signature on ivory paper.",
    specifications: [
      "Ink: Formulated metallic gold stamping ink",
      "Diameter: 42mm circular corporate seal",
      "Placement: Bottom-right corner adjacent to personal signature",
      "Rule: Original approved V SVG inside the stamp only",
    ],
    imageSrc: "/images/archzos-official-seal-signing.jpg",
    imageAlt: "Archzos circular gold ink seal stamp",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "blue-seal-concept",
    title: "Blue Seal Concept",
    category: "seal",
    headline: "Midnight Blue Archive-Quality Ink Corporate Seal",
    description: "Deep midnight blue corporate ink stamp for institutional documentation, campus filings, and high-fidelity archival scans.",
    specifications: [
      "Ink: Archive-quality water-resistant pigment blue ink",
      "Advantage: Scans and photocopies with superior optical contrast",
      "Application: University transcripts, institutional dockets, partner RFPs",
      "Core: Original approved V SVG with outer company lettering",
    ],
    imageSrc: "/images/archzos-official-seal-signing.jpg",
    imageAlt: "Archzos circular blue ink seal stamp",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "blind-emboss-concept",
    title: "Blind Emboss Concept (Dry Seal)",
    category: "seal",
    headline: "Tactile Dimensional Relief Impression in Paper Fiber",
    description: "Colorless dimensional relief impression pressed directly into paper stock, creating a subtle, unforgeable tactile watermark.",
    specifications: [
      "Method: Heavy brass male-female hand-press die",
      "Effect: 3D paper deformation without ink",
      "Placement: Centered or lower watermark zone",
      "Security: Cannot be reproduced by color photocopiers",
    ],
    imageSrc: "/images/archzos-official-seal-signing.jpg",
    imageAlt: "Blind emboss dry seal impression into paper stock",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "ceremonial-wax-seal-concept",
    title: "Ceremonial Wax Seal Concept",
    category: "seal",
    headline: "Crimson Sealing Wax Stamped with Metallic Powder Detail",
    description: "Deep crimson sealing wax stamped with the Archzos emblem and accented with gold metallic dusting, used to seal official presentation envelopes.",
    specifications: [
      "Material: Flexible non-brittle crimson sealing wax",
      "Stamp: Solid brass engraved die with Archzos V insignia",
      "Application: Securing rear envelope flap and presentation ribbons",
      "Finish: Highlighted with subtle antique gold metallic powder",
    ],
    imageSrc: "/images/archzos-official-seal-signing.jpg",
    imageAlt: "Ceremonial red wax seal with gold powder detail",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
  {
    id: "signature-placement-concept",
    title: "Signature Placement Concept",
    category: "signing",
    headline: "Tested Gold-Ink Fountain Pen & Founder Signing Protocol",
    description: "Official signing protocol: Anuj signs personally with a tested gold-ink fountain pen after verifying recipient details, price, and scope. Staff must not imitate signature or pre-sign blank terms.",
    specifications: [
      "Instrument: Archzos Signature Edition gold fountain pen",
      "Ink: Formulated metallic gold ink with dark archival backup",
      "Protocol: Signature applied only when named offer letter is complete",
      "Rule: Anuj signs personally; never stamped or pre-signed in blank",
    ],
    imageSrc: "/images/archzos-official-seal-signing.jpg",
    imageAlt: "Gold fountain pen signing on Archzos official letterhead with seal",
    notice: "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.",
  },
];


