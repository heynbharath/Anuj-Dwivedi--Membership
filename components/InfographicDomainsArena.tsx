"use client";

import React, { useState } from "react";
import {
  Brain,
  Cpu,
  Leaf,
  Briefcase,
  ShieldAlert,
  Compass,
  Plane,
  HeartPulse,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Layers,
  Gauge,
  Target,
  Clock,
  Terminal,
  Activity,
  Lightbulb,
} from "lucide-react";

export interface DomainItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "software" | "hardware" | "life";
  accentColor: string;
  borderHover: string;
  badgeBg: string;
  badgeText: string;
  icon: React.ElementType;
  overview: string;
  frontiers: string[];
  prototypeIdeas: {
    name: string;
    description: string;
    tech: string;
  }[];
  techStack: {
    core: string[];
    hardwareOrCloud: string[];
    apisOrModels: string[];
  };
  judgesCriteria: {
    primaryQuestion: string;
    defenseProof: string;
    fatalFailureMode: string;
  };
  metrics: {
    technicalDepth: number; // out of 100
    executionPace: string;
    defensibility: string;
  };
}

export const DOMAINS_DATA: DomainItem[] = [
  {
    id: "ai-data",
    number: "01",
    title: "AI & Data Systems",
    subtitle: "Intelligence for Real-World Impact",
    category: "software",
    accentColor: "from-blue-600 to-indigo-600",
    borderHover: "hover:border-blue-500",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700 border-blue-200",
    icon: Brain,
    overview:
      "Move beyond wrapper apps. Build high-leverage autonomous agent loops, low-latency edge inference engines, and deterministic RAG systems with rigorous evaluation harnesses.",
    frontiers: [
      "Autonomous Multi-Agent Orchestration & State Machines",
      "Dynamic Multi-Modal RAG with Vector & Graph Search",
      "Small Language Models (SLMs) with Edge Quantization",
      "Deterministic Guardrails & Benchmark Evaluation Harnesses",
    ],
    prototypeIdeas: [
      {
        name: "Self-Healing DevOps Agent",
        description:
          "Autonomous agent that ingests production Kubernetes logs, isolates stack traces, reproduces bug in sandboxed Docker, and writes unit-tested PRs.",
        tech: "Python, LangGraph, Ollama/vLLM, Docker API",
      },
      {
        name: "Sub-50ms Edge Audio AI for Clinical Scribes",
        description:
          "Quantized Whisper + local SLM streaming on device to generate structured SOAP notes without transmitting raw patient audio outside hospital intranet.",
        tech: "ONNX Runtime, Whisper.cpp, FastAPI, WebSocket",
      },
      {
        name: "Enterprise Knowledge Graph Synthesizer",
        description:
          "Hybrid Neo4j graph + vector store converting messy unstructured PDFs into queryable deterministic entity relations with zero hallucination.",
        tech: "Neo4j, LlamaIndex, pgvector, Claude/Llama 3",
      },
    ],
    techStack: {
      core: ["PyTorch", "vLLM", "LangGraph", "FastAPI"],
      hardwareOrCloud: ["NVIDIA TensorRT", "CUDA", "ChromaDB / Qdrant"],
      apisOrModels: ["Llama 3.3 70B", "DeepSeek R1", "Whisper", "Embedding-3"],
    },
    judgesCriteria: {
      primaryQuestion:
        "Where is your deterministic evaluation dataset, and what is your p99 latency under concurrent requests?",
      defenseProof:
        "Live benchmark dashboard demonstrating token-per-second throughput and hallucination rate under adversarial prompt attacks.",
      fatalFailureMode:
        "Showing a raw OpenAI API wrapper with no custom retrieval, caching, evaluation, or offline fallback.",
    },
    metrics: {
      technicalDepth: 95,
      executionPace: "48h Sprint",
      defensibility: "High (Proprietary Eval & Embeddings)",
    },
  },
  {
    id: "robotics-iot",
    number: "02",
    title: "Robotics & IoT",
    subtitle: "Automate a Brighter Tomorrow",
    category: "hardware",
    accentColor: "from-amber-500 to-orange-600",
    borderHover: "hover:border-amber-500",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800 border-amber-200",
    icon: Cpu,
    overview:
      "Bridge bits and physical atoms. Architect distributed sensor arrays, embedded microcontrollers, SLAM navigation, and autonomous mobile rovers ready for campus or factory deployments.",
    frontiers: [
      "Autonomous Mobile Robots (AMR) & Micro-SLAM Navigation",
      "Embedded Computer Vision on Low-Power Edge silicon",
      "Industrial Mesh IoT Telemetry with MQTT & LoRaWAN",
      "Real-Time Actuator Control & Fail-Safe Hardware Loops",
    ],
    prototypeIdeas: [
      {
        name: "Campus Delivery Autonomous Rover",
        description:
          "Compact 4-wheel rover with 2D LiDAR and depth camera navigating university corridors autonomously with dynamic obstacle avoidance.",
        tech: "ROS2 Humble, Raspberry Pi 5, RPLiDAR, Nav2",
      },
      {
        name: "Vibration Spectral Anomaly Sensor for Motors",
        description:
          "Sub-\$10 industrial sensor clamped onto machine bearings running TinyML FFT models to predict mechanical failure 72 hours ahead.",
        tech: "ESP32, ADXL345, Edge Impulse, MQTT",
      },
      {
        name: "Autonomous Warehouse Inventory Drone Swarm",
        description:
          "Indoor localized micro-drones scanning QR codes and RFID pallet tags at height, synchronizing telemetry over zero-latency Wi-Fi 6 mesh.",
        tech: "Crazyflie, UWB Anchors, ESP-NOW, Python GUI",
      },
    ],
    techStack: {
      core: ["ROS2 Humble", "C++20", "Micro-ROS", "FreeRTOS"],
      hardwareOrCloud: ["ESP32-S3", "Raspberry Pi 5", "STM32", "LiDAR Sensors"],
      apisOrModels: ["YOLOv8-Nano", "Edge Impulse", "OpenCV", "MQTT Broker"],
    },
    judgesCriteria: {
      primaryQuestion:
        "What happens when your primary Wi-Fi or camera link drops? What hardware fail-safe takes over?",
      defenseProof:
        "Physical live robot operating on the demo floor responding in real time to unexpected physical obstacles.",
      fatalFailureMode:
        "Showing CAD simulations or slides without bringing the physical circuit board or functioning chassis to the stage.",
    },
    metrics: {
      technicalDepth: 92,
      executionPace: "3–5 Days Hardware Bringup",
      defensibility: "Very High (Firmware + BOM Optimization)",
    },
  },
  {
    id: "sustainability",
    number: "03",
    title: "Sustainability & CleanTech",
    subtitle: "Solutions for a Healthier Planet",
    category: "life",
    accentColor: "from-emerald-600 to-teal-600",
    borderHover: "hover:border-emerald-500",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800 border-emerald-200",
    icon: Leaf,
    overview:
      "Tackle climate realities with measurable metrics. Build peer-to-peer microgrid balancers, solar defect computer vision, carbon accounting engines, and circular economy tracking.",
    frontiers: [
      "Decentralized Microgrid Dispatching & Solar Load Balancing",
      "Automated Carbon Accounting via OpenTelemetry & GHG Protocol",
      "Computer Vision for Automated Municipal Recycling Sorting",
      "EV Battery Thermal & State-of-Health (SoH) Predictive Telemetry",
    ],
    prototypeIdeas: [
      {
        name: "P2P Solar Energy Trading on Campus Grid",
        description:
          "Smart-metered IoT network allowing university hostel solar rooftops to trade excess watt-hours dynamically with dynamic peak pricing.",
        tech: "ESP32 Smart Meter, Go Backend, TimeScaleDB, Web Dashboard",
      },
      {
        name: "Thermal Drone Inspection for Solar Farms",
        description:
          "Computer vision pipeline detecting micro-cracks and hot-spot degradation across solar arrays from drone thermal imagery.",
        tech: "PyTorch, Thermal Vision OpenCV, GIS Coordinates, React",
      },
      {
        name: "AI Waste Optical Sorter Module",
        description:
          "Chute-mounted camera running sub-20ms edge classification to pneumatic-blast recyclables from organic compost on conveyor belt.",
        tech: "Jetson Nano, Custom YOLO Model, Solenoid Actuators",
      },
    ],
    techStack: {
      core: ["TimeScaleDB", "Python", "Rust", "Next.js 14"],
      hardwareOrCloud: ["CT Clamp Current Sensors", "LoRaWAN Gateways", "AWS IoT Core"],
      apisOrModels: ["OpenWeather API", "Prophet TimeSeries", "YOLOv8"],
    },
    judgesCriteria: {
      primaryQuestion:
        "What is the exact verified carbon/watt-hour reduction per unit deployed, and what is your unit payback period?",
      defenseProof:
        "Real-time sensor graphs displaying kilowatt consumption delta and verified audit log format.",
      fatalFailureMode:
        "Vague awareness campaigns or greenwashed social media apps with no verifiable physical telemetry or thermodynamic basis.",
    },
    metrics: {
      technicalDepth: 88,
      executionPace: "48h Prototype",
      defensibility: "High (Regulatory Compliance & Data Moat)",
    },
  },
  {
    id: "business-legal-tech",
    number: "04",
    title: "Business & Legal Tech",
    subtitle: "Innovation Beyond Borders",
    category: "software",
    accentColor: "from-red-600 to-rose-600",
    borderHover: "hover:border-red-500",
    badgeBg: "bg-red-50",
    badgeText: "text-red-700 border-red-200",
    icon: Briefcase,
    overview:
      "Replace tedious enterprise bureaucracy with hyper-resilient workflow engines. Build automated Indian legal precedent discovery, contract risk auditing, and automated GST reconciliation.",
    frontiers: [
      "Indian Case Law & Precedent Semantic Retrieval",
      "Automated MSA/NDA Redlining & Indemnity Clause Auditing",
      "Multi-Entity Tax & Invoice Fraud Anomaly Detection",
      "Autonomous Compliance Workflows & Audit-Proof Ledgers",
    ],
    prototypeIdeas: [
      {
        name: "Indian Contract Clause Risk Sentinel",
        description:
          "Upload vendor MSAs to highlight one-sided indemnification, jurisdiction loopholes, and missing arbitration clauses with statutory citations.",
        tech: "LlamaIndex, Legal-BERT, FastAPI, Tailwind CSS",
      },
      {
        name: "Autonomous E-Invoicing & GST Reconciler",
        description:
          "Ingest thousands of supplier PDFs, reconcile line items against GSTR-2B portal data, and automatically flags discrepancy chargebacks.",
        tech: "Tesseract OCR, Python Pandas, PostgreSQL, Clerk Auth",
      },
      {
        name: "VC Term Sheet Defensibility Simulator",
        description:
          "Interactive cap-table stress tester modeling liquidation preference, anti-dilution ratchets, and founder equity dilution across series rounds.",
        tech: "TypeScript, Canvas/SVG Charts, Financial Modeling Libs",
      },
    ],
    techStack: {
      core: ["Next.js 14", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
      hardwareOrCloud: ["Cloudflare Workers", "Supabase", "Docker"],
      apisOrModels: ["Indian Kanoon Scraper", "Mistral Small", "Claude API"],
    },
    judgesCriteria: {
      primaryQuestion:
        "How do you guarantee 100% precision when a legal contract liability or financial tax filing is on the line?",
      defenseProof:
        "Side-by-side comparison of a 40-page contract redlined in 4 seconds with 100% cited clauses vs manual legal associate review.",
      fatalFailureMode:
        "Generic chatbot that answers generic law trivia without parsing specific uploaded contract attachments or statutory frameworks.",
    },
    metrics: {
      technicalDepth: 86,
      executionPace: "Weekend Hackathon Build",
      defensibility: "High (Proprietary Regulatory Training Sets)",
    },
  },
  {
    id: "cybersecurity",
    number: "05",
    title: "Cybersecurity & Defense",
    subtitle: "A Safer Digital Tomorrow",
    category: "software",
    accentColor: "from-purple-600 to-violet-600",
    borderHover: "hover:border-purple-500",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700 border-purple-200",
    icon: ShieldAlert,
    overview:
      "Defend infrastructure at kernel velocity. Construct real-time LLM prompt injection firewalls, zero-trust microsegmentation, automated penetration testing agents, and memory-safe cryptography.",
    frontiers: [
      "Real-Time LLM Firewall for Prompt Injections & Jailbreaks",
      "Kernel-Level Packet Inspection with eBPF & XDP",
      "Zero-Trust IAM Microsegmentation for Cloud Workloads",
      "Decentralized Identity Verification with ZK-SNARK Proofs",
    ],
    prototypeIdeas: [
      {
        name: "ProxyWall: Zero-Latency LLM Guardrail",
        description:
          "Sub-15ms reverse proxy intercepting LLM payloads to neutralize jailbreaks, ASCII smuggling, and PII leaks before hitting upstream LLM APIs.",
        tech: "Rust, Actix-web, Vector Similarity, Regex Engine",
      },
      {
        name: "eBPF Container Intrusion Detector",
        description:
          "Lightweight daemon listening to Linux kernel syscalls inside Kubernetes pods to detect shell spawns and unauthorized network connections instantaneously.",
        tech: "C, Rust (Aya / Cilium eBPF), Grafana, Prometheus",
      },
      {
        name: "Automated API Fuzzing & Exploitation Agent",
        description:
          "Self-directed security agent exploring OpenAPI specs to discover broken object-level authorization (BOLA) and unauthenticated endpoints.",
        tech: "Python, Playwright, Zap Proxy API, Llama 3",
      },
    ],
    techStack: {
      core: ["Rust", "Go", "C", "eBPF (Extended BPF)"],
      hardwareOrCloud: ["Linux Kernel 6.x", "Wireshark / Suricata", "Docker"],
      apisOrModels: ["Transformers for Token Classification", "Semgrep APIs"],
    },
    judgesCriteria: {
      primaryQuestion:
        "What is your CPU overhead and packet inspection latency? Can your proxy withstand 50,000 concurrent RPS?",
      defenseProof:
        "Live adversarial attack demo: injecting a sophisticated jailbreak on stage and showing your firewall drop the connection in 8 milliseconds.",
      fatalFailureMode:
        "Presenting basic checklist compliance dashboards without executing an actual attack or defense live.",
    },
    metrics: {
      technicalDepth: 96,
      executionPace: "48h Systems Coding",
      defensibility: "Maximum (Kernel-Level Performance Moat)",
    },
  },
  {
    id: "engineering-design",
    number: "06",
    title: "Engineering Design & Mechatronics",
    subtitle: "From Ideas to Real Impact",
    category: "hardware",
    accentColor: "from-cyan-600 to-blue-700",
    borderHover: "hover:border-cyan-500",
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-800 border-cyan-200",
    icon: Compass,
    overview:
      "Transform mathematical precision into tangible physical machines. Engineer generative CAD structures, low-cost prosthetics, micro-fluidic diagnostic chips, and custom mechatronic assemblies.",
    frontiers: [
      "Generative Structural Topology Optimization with FEA",
      "Low-Cost Functional Bionic Prosthetics with EMG Control",
      "Rapid Precision Prototyping (FDM, SLA Resin, CNC Milling)",
      "High-Efficiency Thermal Heat Exchange Systems",
    ],
    prototypeIdeas: [
      {
        name: "Myoelectric 3D-Printed Prosthetic Arm",
        description:
          "Sub-\$80 multi-grip prosthetic hand actuated by dual-channel forearm surface EMG sensors with adaptive grip pressure sensing.",
        tech: "EMG Electrodes, Arduino Nano 33 BLE, MG996R Servos, 3D PLA+",
      },
      {
        name: "Generative Ultralight Drone Frame",
        description:
          "Topology-optimized carbon-fiber composite quadcopter chassis achieving 45% weight reduction while maintaining 10G crash impact resilience.",
        tech: "Fusion 360 Generative Design, ANSYS FEA, SLA Carbon Fiber",
      },
      {
        name: "Automated PCB Component Pick-and-Place Gantry",
        description:
          "Desktop CNC gantry utilizing overhead computer vision camera to position 0603 surface-mount electronic components with sub-0.1mm accuracy.",
        tech: "OpenPnP, Python OpenCV, Stepper Motors, RAMPS 1.4",
      },
    ],
    techStack: {
      core: ["Fusion 360", "SolidWorks", "ANSYS FEA", "C++"],
      hardwareOrCloud: ["FDM 3D Printers", "SLA Resin", "Arduino / Teensy 4.1"],
      apisOrModels: ["OpenCV", "Inverse Kinematics Libraries", "Matplotlib"],
    },
    judgesCriteria: {
      primaryQuestion:
        "What is your strength-to-weight ratio, total Bill of Materials (BOM) cost, and manufacturing cycle time per unit?",
      defenseProof:
        "The physical hardware piece on the table, loaded under stress or executing its mechatronic actuation cycle flawlessly.",
      fatalFailureMode:
        "Showing 3D renders without bringing the 3D-printed prototype to the pitch table.",
    },
    metrics: {
      technicalDepth: 91,
      executionPace: "Weekend Rapid Fabrication",
      defensibility: "Very High (Physical Patentability & Kinematics)",
    },
  },
  {
    id: "aero-mobility",
    number: "07",
    title: "Aero & Mobility",
    subtitle: "Higher Ideas, Further Horizons",
    category: "hardware",
    accentColor: "from-sky-600 to-indigo-600",
    borderHover: "hover:border-sky-500",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-800 border-sky-200",
    icon: Plane,
    overview:
      "Conquer dynamic airspace and electric transit. Design autonomous delivery VTOL avionics, collision avoidance radar, intelligent EV battery management, and urban air telemetry systems.",
    frontiers: [
      "Autonomous Long-Range VTOL Fixed-Wing Flight Systems",
      "Sense-and-Avoid Drone Radar with Optical Flow",
      "Dynamic EV Battery Thermal Balancing & CAN-bus Telemetry",
      "Decentralized Fleet Route Optimization & Airspace Geofencing",
    ],
    prototypeIdeas: [
      {
        name: "Autonomous Organ/Blood Delivery VTOL",
        description:
          "Hybrid fixed-wing transition drone capable of 25km range carrying a 1.5kg temperature-monitored medical cold payload autonomously.",
        tech: "PX4 Autopilot, Raspberry Pi Companion, 4G LTE Telemetry, QGroundControl",
      },
      {
        name: "Optical Flow Sense-and-Avoid Pod for Drones",
        description:
          "Plug-and-play collision-avoidance module running on companion computer to override pilot controls if wires or branches are detected within 5 meters.",
        tech: "OAK-D Depth Camera, MAVLink Protocol, Python OpenCV, ROS2",
      },
      {
        name: "CAN-bus Battery Health Profiler for 2-Wheel EVs",
        description:
          "Diagnostic dongle plugging into electric scooter diagnostic ports to detect degraded battery cells and prevent thermal runaway fires.",
        tech: "STM32 CAN Transceiver, Bluetooth LE, Flutter Mobile App",
      },
    ],
    techStack: {
      core: ["PX4 Autopilot", "ArduPilot", "MAVLink C++", "Python"],
      hardwareOrCloud: ["Pixhawk 6C", "CAN-bus", "4G LTE Dongle", "LiPo 6S"],
      apisOrModels: ["QGroundControl", "SITL Simulator", "OpenCV Depth"],
    },
    judgesCriteria: {
      primaryQuestion:
        "What is your battery endurance curve, max payload capacity, and autonomous return-to-home protocol during signal loss?",
      defenseProof:
        "Live flight telemetry log replay or physical avionics hardware demonstrator with benchtop sensor telemetry active.",
      fatalFailureMode:
        "Claiming autonomous flight without understanding fail-safe geofencing or DGCA airspace regulations.",
    },
    metrics: {
      technicalDepth: 94,
      executionPace: "Rapid Flight Controller Setup",
      defensibility: "Maximum (Avionics & Aerodynamic IP)",
    },
  },
  {
    id: "medtech",
    number: "08",
    title: "MedTech & Health",
    subtitle: "Tech for Healthier Lives",
    category: "life",
    accentColor: "from-rose-600 to-pink-600",
    borderHover: "hover:border-rose-500",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-800 border-rose-200",
    icon: HeartPulse,
    overview:
      "Save lives with precision biosensing and edge diagnostics. Build portable ECG anomaly detectors, non-invasive vital monitors, AI pathology triage tools, and accessible clinical hardware.",
    frontiers: [
      "Low-Cost Point-of-Care Bio-Signal Processing (ECG/PPG)",
      "Non-Invasive Optical Biomarker Detection",
      "Edge Machine Learning for Radiology & Pathology Triage",
      "Accessible Assistive Technology for Mobility & Visual Impairment",
    ],
    prototypeIdeas: [
      {
        name: "Pocket 12-Lead ECG Anomaly Sentinel",
        description:
          "Sub-\$25 handheld ECG monitor that pairs with smartphone to classify arrhythmias and ST-elevation myocardial infarctions in under 10 seconds.",
        tech: "AD8232 Sensor, ESP32, 1D Convolutional Neural Network, Flutter",
      },
      {
        name: "Non-Invasive Optical Hemoglobin Screener",
        description:
          "Multispectral finger-clamp sensor measuring light absorption across 6 wavelengths to estimate blood hemoglobin without needles.",
        tech: "AS7262 Spectral Sensor, Arduino, Python Ridge Regression",
      },
      {
        name: "Haptic Obstacle Navigation Belt for the Visually Impaired",
        description:
          "Waistband with 8 ultrasonic vibration nodes providing 360-degree spatial obstacle awareness with millimeter accuracy.",
        tech: "ESP32, Ultrasonic Sensors, ERM Vibration Motors, Rechargeable 18650",
      },
    ],
    techStack: {
      core: ["PyTorch / TensorFlow Lite", "C++", "Flutter", "Python"],
      hardwareOrCloud: ["AD8232 ECG", "MAX30102 PPG", "ESP32-S3", "Bluetooth BLE"],
      apisOrModels: ["PhysioNet Benchmark Datasets", "TFLite Edge Runtime"],
    },
    judgesCriteria: {
      primaryQuestion:
        "What is your sensitivity and specificity against gold-standard hospital equipment, and how is patient safety isolated?",
      defenseProof:
        "Live sensor feed connected to a team member showing real-time waveform filtering and feature extraction on stage.",
      fatalFailureMode:
        "Relying on synthetic dummy data without testing on actual sensor hardware or ignoring bio-impedance safety isolation.",
    },
    metrics: {
      technicalDepth: 93,
      executionPace: "48h Clinical Bringup",
      defensibility: "Very High (Clinical Validation & Sensor Tuning)",
    },
  },
];

export default function InfographicDomainsArena() {
  const [selectedId, setSelectedId] = useState<string>("ai-data");
  const [filterCategory, setFilterCategory] = useState<"all" | "software" | "hardware" | "life">("all");
  const [activeTab, setActiveTab] = useState<"blueprints" | "tech" | "defense">("blueprints");

  const filteredDomains = DOMAINS_DATA.filter((d) => {
    if (filterCategory === "all") return true;
    return d.category === filterCategory;
  });

  const selectedDomain =
    DOMAINS_DATA.find((d) => d.id === selectedId) || DOMAINS_DATA[0];

  const SelectedIcon = selectedDomain.icon;

  return (
    <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3.5 py-1 text-[11px] font-mono text-neutral-800 bg-neutral-50 shadow-2xs">
              <img
                src="/images/tempete/tempete-icon-color.svg"
                alt="Tempête AI Club"
                className="w-3.5 h-3.5 rounded-[2px]"
              />
              <span className="font-semibold text-neutral-950">TEMPÊTE AI CLUB</span>
              <span className="text-neutral-300">×</span>
              <span>8 ARENA FRONTIERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-neutral-950">
              Eight Frontiers.
              <br />
              Infinite Defensible Prototypes.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every arm of the Octopus represents a high-impact engineering discipline.
              Select an arena below to inspect prototype blueprints, required tech stacks,
              and live judge defense criteria.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-100/80 p-1.5 rounded-xl border border-neutral-200 self-start md:self-end">
            <button
              onClick={() => setFilterCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterCategory === "all"
                  ? "bg-black text-white shadow-2xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              All (8)
            </button>
            <button
              onClick={() => setFilterCategory("software")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterCategory === "software"
                  ? "bg-black text-white shadow-2xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              AI &amp; Software
            </button>
            <button
              onClick={() => setFilterCategory("hardware")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterCategory === "hardware"
                  ? "bg-black text-white shadow-2xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Hardware &amp; Robotics
            </button>
            <button
              onClick={() => setFilterCategory("life")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterCategory === "life"
                  ? "bg-black text-white shadow-2xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Climate &amp; Health
            </button>
          </div>
        </div>

        {/* The 8 Interactive Domain Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {DOMAINS_DATA.map((domain) => {
            const Icon = domain.icon;
            const isSelected = selectedId === domain.id;
            const isDimmed = filterCategory !== "all" && domain.category !== filterCategory;

            return (
              <button
                key={domain.id}
                onClick={() => setSelectedId(domain.id)}
                className={`p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between group ${
                  isSelected
                    ? "border-black bg-neutral-900 text-white shadow-md scale-[1.02] ring-2 ring-black/10 z-10"
                    : isDimmed
                    ? "border-neutral-200 bg-neutral-50/50 text-neutral-400 opacity-40 hover:opacity-100"
                    : "border-neutral-200 bg-white hover:border-neutral-400 text-neutral-900 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-neutral-100 text-neutral-700"
                    }`}
                  >
                    ARM {domain.number}
                  </span>
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isSelected ? "text-white" : "text-neutral-600"
                    }`}
                  />
                </div>
                <div className="space-y-0.5">
                  <h4
                    className={`text-xs font-semibold leading-tight line-clamp-1 ${
                      isSelected ? "text-white" : "text-neutral-950"
                    }`}
                  >
                    {domain.title}
                  </h4>
                  <span
                    className={`block text-[10px] truncate font-mono ${
                      isSelected ? "text-neutral-300" : "text-neutral-500"
                    }`}
                  >
                    {domain.category.toUpperCase()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Master Active Domain Infographic Blueprint Display Console */}
        <div className="rounded-3xl border border-neutral-300 bg-neutral-950 text-white p-6 sm:p-9 shadow-lg relative overflow-hidden">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Console Header Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-700 p-3 shrink-0 flex items-center justify-center text-white shadow-inner">
                  <SelectedIcon className="w-7 h-7 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      ARM {selectedDomain.number}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {selectedDomain.subtitle}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#4D7CFF] bg-[#121212] px-2.5 py-0.5 rounded border border-blue-900/50">
                      <img
                        src="/images/tempete/tempete-icon-reverse.svg"
                        alt="Tempête"
                        className="w-3 h-3 rounded-[2px]"
                      />
                      <span>OCTOPUS TANK ARENA</span>
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                    {selectedDomain.title}
                  </h3>
                </div>
              </div>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 text-center sm:text-left bg-neutral-900/90 border border-neutral-800 rounded-xl p-3 shrink-0">
                <div className="px-3 border-r border-neutral-800">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase">
                    Tech Rigor
                  </span>
                  <span className="text-sm font-bold font-mono text-white">
                    {selectedDomain.metrics.technicalDepth}%
                  </span>
                </div>
                <div className="px-3 border-r border-neutral-800">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase">
                    Build Window
                  </span>
                  <span className="text-sm font-bold font-mono text-white">
                    {selectedDomain.metrics.executionPace}
                  </span>
                </div>
                <div className="px-3">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase">
                    Jury Moat
                  </span>
                  <span className="text-sm font-bold font-mono text-amber-300">
                    High
                  </span>
                </div>
              </div>
            </div>

            {/* Overview Statement */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-4xl leading-relaxed">
              {selectedDomain.overview}
            </p>

            {/* Interactive Section Switcher */}
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <button
                onClick={() => setActiveTab("blueprints")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeTab === "blueprints"
                    ? "bg-white text-black shadow-xs"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>01. Prototype Pitch Blueprints</span>
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeTab === "tech"
                    ? "bg-white text-black shadow-xs"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>02. Production Tech Stacks</span>
              </button>
              <button
                onClick={() => setActiveTab("defense")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeTab === "defense"
                    ? "bg-white text-black shadow-xs"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>03. Judges Defense &amp; Pitfalls</span>
              </button>
            </div>

            {/* Tab 1: Prototype Pitch Blueprints */}
            {activeTab === "blueprints" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                      Ideas Worth Pitching
                    </span>
                    <h4 className="text-lg font-semibold text-white">
                      Actionable Prototype Archetypes for DSU Students
                    </h4>
                  </div>
                  <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-400">
                    3 Specimen Blueprints
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedDomain.prototypeIdeas.map((idea, idx) => (
                    <div
                      key={idea.name}
                      className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex flex-col justify-between space-y-4 transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="w-6 h-6 rounded-md bg-neutral-800 text-amber-300 flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-neutral-500 uppercase text-[10px]">
                            PROTOTYPE SPEC
                          </span>
                        </div>
                        <h5 className="font-semibold text-white text-base leading-snug">
                          {idea.name}
                        </h5>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {idea.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-800 space-y-1">
                        <span className="block text-[10px] font-mono uppercase text-neutral-500">
                          Recommended Stack:
                        </span>
                        <div className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900">
                          {idea.tech}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Frontier Focus Tags */}
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      Frontier Research Areas:
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedDomain.frontiers.map((f) => (
                        <span
                          key={f}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800 text-neutral-300 border border-neutral-700"
                        >
                          • {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Tech Stacks */}
            {activeTab === "tech" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    Engineering Foundation
                  </span>
                  <h4 className="text-lg font-semibold text-white">
                    Production Stacks, Silicon &amp; Infrastructure
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Core Languages & Frameworks */}
                  <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-semibold">
                      <Terminal className="w-4 h-4" />
                      <span>CORE ENGINES &amp; CODE</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Standard industry runtime engines for high performance.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedDomain.techStack.core.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800 text-white border border-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hardware & Cloud Infrastructure */}
                  <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold">
                      <Cpu className="w-4 h-4" />
                      <span>SILICON, HARDWARE &amp; DB</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Physical compute, controllers, edge nodes, and database stores.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedDomain.techStack.hardwareOrCloud.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800 text-white border border-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Models, APIs & Protocols */}
                  <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                      <Layers className="w-4 h-4" />
                      <span>APIS, PROTOCOLS &amp; WEIGHTS</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Intelligence backends, standard protocols, and neural architectures.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedDomain.techStack.apisOrModels.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800 text-white border border-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Judges Defense & Pitfalls */}
            {activeTab === "defense" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                    The Tank Jury Cross-Examination
                  </span>
                  <h4 className="text-lg font-semibold text-white">
                    What The Judges Scrutinize On Stage
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Primary Question */}
                  <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                      <Target className="w-4 h-4" />
                      <span>THE FATAL JURY QUESTION</span>
                    </div>
                    <p className="text-xs text-white leading-relaxed font-serif italic">
                      &ldquo;{selectedDomain.judgesCriteria.primaryQuestion}&rdquo;
                    </p>
                    <span className="text-[11px] text-neutral-400 block pt-2 border-t border-neutral-800">
                      Judges evaluate whether your team built real technical intuition or memorized surface talking points.
                    </span>
                  </div>

                  {/* Winning Defense Proof */}
                  <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>REQUIRED PROOF OF DEFENSE</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {selectedDomain.judgesCriteria.defenseProof}
                    </p>
                    <span className="text-[11px] text-neutral-400 block pt-2 border-t border-neutral-800">
                      Live demonstrations, latency profiling, and edge anomaly traces beat slides every time.
                    </span>
                  </div>

                  {/* Fatal Failure Mode */}
                  <div className="p-5 rounded-2xl bg-neutral-900 border border-rose-900/60 bg-rose-950/10 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold">
                      <AlertTriangle className="w-4 h-4" />
                      <span>FATAL FAILURE MODE TO AVOID</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {selectedDomain.judgesCriteria.fatalFailureMode}
                    </p>
                    <span className="text-[11px] text-rose-300/80 block pt-2 border-t border-rose-900/40">
                      Automatic disqualification from recognition awards if caught faking live system execution.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================
            INFOGRAPHIC: THE 5-MINUTE TANK PITCH BLUEPRINT
        ========================================================= */}
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-10 space-y-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                STAGE EXECUTION PROTOCOL
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-neutral-950 tracking-tight">
                The 5-Minute Pitch Breakdown
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl">
                Every team gets exactly 5 minutes on the live stage + 3 minutes of direct jury cross-examination. Here is the winning structure.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black text-white text-xs font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>5 MIN HARD CAP · 3 MIN Q&amp;A</span>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  MIN 00:00 – 01:00
                </span>
                <span className="text-[10px] font-mono text-neutral-400">PHASE 01</span>
              </div>
              <h4 className="text-base font-semibold text-neutral-950">
                The Fatal Friction Point
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                State the single costly bottleneck your team set out to dismantle. Dismiss generic background slides; dive directly into why incumbents fail.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
                Key metric: Economic or temporal loss quantified.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  MIN 01:00 – 02:30
                </span>
                <span className="text-[10px] font-mono text-neutral-400">PHASE 02</span>
              </div>
              <h4 className="text-base font-semibold text-neutral-950">
                Live Prototype Demonstration
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Fire up the terminal, spin the motors, or trigger the inference stream. Walk the jury through the actual data/hardware flow in real time.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
                Key metric: Real bytes, real silicon, zero mockups.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  MIN 02:30 – 03:45
                </span>
                <span className="text-[10px] font-mono text-neutral-400">PHASE 03</span>
              </div>
              <h4 className="text-base font-semibold text-neutral-950">
                Architectural Defensibility &amp; Moat
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Why can&apos;t a Big Tech competitor clone this in 48 hours? Defend your proprietary datasets, sensor integration, or latency optimizations.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
                Key metric: Unit economics, throughput, safety guardrails.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  MIN 03:45 – 05:00
                </span>
                <span className="text-[10px] font-mono text-neutral-400">PHASE 04</span>
              </div>
              <h4 className="text-base font-semibold text-neutral-950">
                Execution Velocity &amp; Roadmap
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Who on the team built what? What is your 6-month deployment roadmap? Conclude with authority before the 5:00 buzzer sounds.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
                Key metric: Team technical ownership &amp; next milestone.
              </div>
            </div>
          </div>

          {/* 4-Pillar Evaluation Infographic Bar */}
          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block mb-3">
              OFFICIAL JURY WEIGHTAGE BREAKDOWN (100 PTS)
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-neutral-900">Technical Rigor</span>
                  <span className="font-mono text-xs font-bold text-blue-600">30%</span>
                </div>
                <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[30%]" />
                </div>
                <p className="text-[11px] text-neutral-500">Code durability, system architecture, latency budgets.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-neutral-900">Live Prototype Demo</span>
                  <span className="font-mono text-xs font-bold text-amber-600">30%</span>
                </div>
                <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[30%]" />
                </div>
                <p className="text-[11px] text-neutral-500">Functioning software or hardware reacting in real time.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-neutral-900">Pitch Defensibility</span>
                  <span className="font-mono text-xs font-bold text-emerald-600">20%</span>
                </div>
                <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[20%]" />
                </div>
                <p className="text-[11px] text-neutral-500">Handling jury cross-examination without crumbling.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-neutral-900">Feasibility &amp; Impact</span>
                  <span className="font-mono text-xs font-bold text-purple-600">20%</span>
                </div>
                <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full w-[20%]" />
                </div>
                <p className="text-[11px] text-neutral-500">Viable unit economics, real user or market necessity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
