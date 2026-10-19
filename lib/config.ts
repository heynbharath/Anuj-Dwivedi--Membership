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
  heroHeadline: "Recognition is the beginning. Execution is what comes next.",
  heroSupporting:
    "Explore structured mentorship, consultancy, recognition programmes, and professional engagements designed around ideas, technical learning, and execution.",

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

  // Management entity from supplied infographic & poster
  management: {
    entity: "Circle13 Management",
    partners: ["N Bharath", "Akhil Vipin Nair"],
    role: "Manages bookings, scheduling, calendar availability, and commercial onboarding for Anuj Dwivedi.",
    notice: "My team manages my time. Bookings and payment processing route through Circle13 management.",
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
      "Reference price indicated in supplied infographic. Final schedule and booking fee confirmed upon review.",
    priceStatus: "reference_unconfirmed",
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
    badge: "Most Popular",
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
      "Reference price: ₹40,000 for the full 4-session programme (infographic source, subject to confirmation).",
    priceStatus: "reference_unconfirmed",
    duration: "4 dedicated 60-90 min sessions spread over 3-6 weeks",
    deliveryFormat: "Scheduled 1:1 sessions (remote or Bangalore offline by agreement)",
    bookingRequirement: "Approved mentorship application and project brief",
    ctaText: "Apply for 4-Session Mentorship",
    featured: true,
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
      "Anchor price: ₹75,000 (qualifies for Octopus Tank earned discount cards of 20% to 80%).",
    priceStatus: "reference_unconfirmed",
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
    duration: "From 2-hour intensive masterclasses to multi-day hackathons",
    deliveryFormat: "On-campus keynote / workshop or high-fidelity virtual delivery",
    bookingRequirement: "Institutional RFP or event coordination lead time",
    ctaText: "Request Institutional Proposal",
    featured: false,
  },
];

// Proposed Membership Tiers
export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "the-library",
    tierLevel: 1,
    name: "The Library",
    tagline: "Curated Technical Foundations",
    positioning: "A structured entry point into selected learning material and foundational frameworks.",
    monthlyPriceINR: null,
    annualPriceINR: null,
    pricingStatus: "proposed_unconfirmed",
    billingPeriod: "Monthly or Annual (TBD)",
    includedBenefits: [
      "Access to selected educational repositories and technical notes",
      "Curated reading lists, AI research breakdowns, and tools digest",
      "Practical problem-validation and pitch preparation worksheets",
      "Eligible community announcements and public resource updates",
    ],
    excludedBenefits: [
      "Direct 1:1 mentorship or private advisory sessions",
      "Custom code reviews or architecture audits",
    ],
    cancellationTerms: "Cancel anytime with no lock-in before the next billing cycle.",
    trialPolicy: "Tier details and availability currently in finalisation with Anuj.",
    ctaText: "Register Interest for The Library",
  },
  {
    id: "the-builder",
    tierLevel: 2,
    name: "The Builder",
    tagline: "Structured Learning Pathways",
    positioning: "For engineers and founders seeking systematic technical roadmaps and community interaction.",
    monthlyPriceINR: null,
    annualPriceINR: null,
    pricingStatus: "proposed_unconfirmed",
    billingPeriod: "Quarterly or Annual (TBD)",
    includedBenefits: [
      "Everything in The Library tier",
      "Structured learning roadmaps across AI frameworks and cloud automation",
      "Selected group office hours or live technical walkthroughs",
      "Discounts on eligible public workshops and special events",
      "Access to builder discussion threads and project feedback forums",
    ],
    excludedBenefits: [
      "Private 1:1 on-demand consulting",
      "Guaranteed hackathon or competition evaluation advantages",
    ],
    cancellationTerms: "Hassle-free cancellation prior to recurring renewal.",
    ctaText: "Register Interest for The Builder",
    badge: "Recommended for Builders",
  },
  {
    id: "the-inner-circle",
    tierLevel: 3,
    name: "The Inner Circle",
    tagline: "Deep Strategic Proximity",
    positioning: "A selective membership concept for ambitious founders desiring closer strategic alignment.",
    monthlyPriceINR: null,
    annualPriceINR: null,
    pricingStatus: "proposed_unconfirmed",
    billingPeriod: "Annual Cohort (TBD)",
    includedBenefits: [
      "Everything in The Builder tier",
      "Priority access to new programme cohorts and private masterclasses",
      "Selected closed-door roundtable reviews with Anuj and guest practitioners",
      "Curated teardowns of real-world startup architectures and pitches",
      "Direct pathway for Circle13 advisory and project consideration",
    ],
    excludedBenefits: [
      "Unlimited 24/7 personal access or permanent on-demand consulting",
      "Venture capital funding guarantees",
    ],
    cancellationTerms: "Annual commitment with terms reviewed prior to enrollment.",
    capacity: "Strictly limited cohort capacity",
    ctaText: "Request Consideration for Inner Circle",
  },
];

// Octopus Tank 2026 specifications
export const OCTOPUS_TANK_CONFIG = {
  eventName: "OCTOPUS TANK 2026",
  tagline: "8 Arms. Infinite Ideas. Pitch. Compete. Launch.",
  dateText: "31 October 2026",
  status: "Proposed / Subject to university confirmation",
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
      role: "Co-host & Management Partner",
    },
    {
      name: "Akhil Vipin Nair",
      affiliation: "Circle13",
      role: "Co-host & Operations Partner",
    },
    {
      name: "Anuj Dwivedi",
      affiliation: "Founder, Tempete Club",
      role: "Keynote Educator, Judge & Lead Advisor",
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

// Three Distinct Commercial Offer Routes (From Image 1)
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
      "A team-oriented consultancy entry designed to make structured guidance accessible to a group working towards a shared objective. When a team of 5 participates, the effective per-head investment is ₹3,000 each.",
    duration: "Structured focused consultation session for the entire team",
    focusAreas: [
      "Shared architectural diagnosis & technical bottleneck review",
      "Team pitch defensibility & multi-role positioning",
      "Prioritised execution roadmap for the upcoming development sprint",
      "Structured group follow-up action summary",
    ],
    eligibilityNotice:
      "Open to self-formed teams of up to 5 members. Lower per-head cost applies when the team is full (₹3,000/head at 5 participants). Final session scope and scheduling confirmed by Circle13 management.",
    managementNote:
      "Coordinated via Circle13 management. Bookings and calendar slots are scheduled upon team application review.",
    approvalStatus: "proposed_infographic_v2",
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
      "An individual engagement route associated with the Bronze recognition and individual-interest pathway. Designed to widen distribution and make high-leverage guidance accessible to promising solo builders.",
    duration: "1-on-1 strategic advisory session with personalized diagnosis",
    focusAreas: [
      "Individual technical stack review & engineering trajectory",
      "Project validation & hypothesis testing discipline",
      "Direct feedback on problem framing and code architecture",
      "Follow-up resource pointers and milestone tracking",
    ],
    eligibilityNotice:
      "Eligibility, scope, and applicable Bronze token discount (e.g. 20% to 30% reduction, bringing the fee to ₹8,400–₹9,600) require confirmation by the programme owner.",
    managementNote:
      "Booking requests route through Circle13 management desk. Verified against issued token or submitted project context.",
    approvalStatus: "proposed_infographic_v2",
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
      "A premium mentorship engagement centred on deeper guidance, execution support, and accountability. Serves as the anchor programme against which Octopus Tank Gold and Silver recognition cards are redeemable.",
    eligibilityNotice:
      "Qualifies for Octopus Tank Gold Cards (80%, 70%, 60% discount -> ₹15,000, ₹22,500, ₹30,000) and Silver Cards (50%/40% discount -> ₹37,500/₹45,000). Limited monthly cohort intake.",
    managementNote:
      "Circle13 management confirms onboarding, milestone scheduling, and formal documentation.",
    approvalStatus: "proposed_infographic_v2",
    ctaText: "Explore Premium Mentorship",
    badge: "Route C — Anchor Mentorship",
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
    "The new Octopus Tank infographic supplies three commercial offer routes: Route A (Team Consultancy Entry at ₹15,000 total for up to 5 people), Route B (Individual Bronze Route at ₹12,000), and Route C (Premium Anchor Mentorship at ₹75,000). Previous website materials also referenced individual 1-on-1 consultancy (₹40,000) and 4-session mentorship (₹40,000). To avoid contradictory prices, all offerings are clearly labeled with their offer pathway, target audience, and approval status pending final confirmation from Anuj Dwivedi.",
};

