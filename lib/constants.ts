import type { Phase, InternshipCard, HackathonTheme, Winner, Sponsor, FAQItem, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Phases", href: "#phases" },
  { label: "Internships", href: "#internships" },
  { label: "Themes", href: "#themes" },
  // { label: "Winners", href: "#winners" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 10000, suffix: "+", label: "Participants", icon: "Users" },
  { value: 500, suffix: "+", label: "Teams", icon: "Users2" },
  { value: 40, suffix: "+", label: "Paid Internships", icon: "Briefcase" },
  { value: 100, suffix: "+", label: "Industry Mentors", icon: "Award" },
];

export const PHASES: Phase[] = [
  {
    number: 1,
    title: "Online Aptitude Assessment",
    description:
      "A comprehensive online test measuring logical reasoning, quantitative aptitude, verbal ability, and basic programming concepts.",
    duration: "2 Hours",
    details: [
      "Logical reasoning & pattern recognition",
      "Quantitative aptitude & data interpretation",
      "Verbal & analytical ability",
      "Basic programming concepts",
      "Top 20% advance to Phase 2",
    ],
    icon: "ClipboardList",
    color: "from-purple-600 to-purple-800",
  },
  {
    number: 2,
    title: "Technical Evaluation",
    description:
      "A deep-dive technical round with domain-specific assessments including DSA, system design, and real-world problem solving.",
    duration: "4 Hours",
    details: [
      "Data structures & algorithms",
      "System design challenges",
      "Domain expertise tests (AI/ML, Web, Cloud)",
      "Live coding environment",
      "Top 500 teams qualify for Phase 3",
    ],
    icon: "Code2",
    color: "from-blue-600 to-blue-800",
  },
  {
    number: 3,
    title: "24-Hour Hackathon",
    description:
      "An intensive 24-hour hackathon where teams build working prototypes around the announced themes with mentor support.",
    duration: "24 Hours",
    details: [
      "Theme announced at start",
      "Dedicated mentor support",
      "Cloud infrastructure provided",
      "Interim evaluation checkpoints",
      "Top 50 teams advance to finals",
    ],
    icon: "Zap",
    color: "from-violet-600 to-indigo-700",
  },
  {
    number: 4,
    title: "Final Pitching Round",
    description:
      "Top teams present their solutions to a panel of industry leaders, VCs, and technical experts for internship offers and prizes.",
    duration: "2 Days",
    details: [
      "7-minute pitch + Q&A session",
      "Panel of 15+ industry judges",
      "Live product demonstration",
      "Internship offers on-the-spot",
      "Grand prize: ₹5 Lakh + internships",
    ],
    icon: "Presentation",
    color: "from-cyan-600 to-blue-700",
  },
];

export const INTERNSHIP_CARDS: InternshipCard[] = [
  {
    title: "Software Development",
    description:
      "Build scalable products with industry-leading engineering teams across full-stack, mobile, and backend domains.",
    openings: 12,
    stipend: "₹25,000/month",
    skills: ["React", "Node.js", "Python", "System Design"],
    icon: "Code2",
    gradient: "from-purple-600/20 to-purple-900/20",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Work on cutting-edge AI systems including LLMs, computer vision, NLP, and production ML pipelines.",
    openings: 8,
    stipend: "₹30,000/month",
    skills: ["PyTorch", "TensorFlow", "MLOps", "LLMs"],
    icon: "Brain",
    gradient: "from-violet-600/20 to-violet-900/20",
  },
  {
    title: "Data Science",
    description:
      "Derive business insights from massive datasets using advanced analytics, statistical modeling, and visualization.",
    openings: 6,
    stipend: "₹28,000/month",
    skills: ["Python", "SQL", "Tableau", "Statistics"],
    icon: "BarChart3",
    gradient: "from-blue-600/20 to-blue-900/20",
  },
  {
    title: "Cyber Security",
    description:
      "Protect critical systems through penetration testing, threat analysis, and building secure infrastructure at scale.",
    openings: 5,
    stipend: "₹27,000/month",
    skills: ["Ethical Hacking", "SIEM", "Cloud Security", "CTF"],
    icon: "Shield",
    gradient: "from-red-600/20 to-red-900/20",
  },
  {
    title: "Cloud Computing",
    description:
      "Design and manage cloud-native architectures on AWS, GCP, and Azure for enterprise-grade applications.",
    openings: 9,
    stipend: "₹26,000/month",
    skills: ["AWS", "Kubernetes", "Terraform", "DevOps"],
    icon: "Cloud",
    gradient: "from-cyan-600/20 to-cyan-900/20",
  },
];

export const THEMES: HackathonTheme[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Build intelligent systems that learn, reason, and make decisions to solve complex real-world problems.",
    icon: "Brain",
    color: "purple",
    challenges: 8,
  },
  {
    title: "Healthcare Tech",
    description:
      "Revolutionize medical diagnostics, patient care, and health data management through technology.",
    icon: "Heart",
    color: "red",
    challenges: 6,
  },
  {
    title: "Smart Cities",
    description:
      "Create solutions for urban infrastructure, traffic management, waste reduction, and citizen services.",
    icon: "Building2",
    color: "blue",
    challenges: 7,
  },
  {
    title: "FinTech",
    description:
      "Disrupt financial services with innovative payment systems, fraud detection, and financial inclusion tools.",
    icon: "TrendingUp",
    color: "green",
    challenges: 9,
  },
  {
    title: "Sustainability",
    description:
      "Address climate change, renewable energy, carbon tracking, and sustainable agriculture challenges.",
    icon: "Leaf",
    color: "emerald",
    challenges: 5,
  },
  {
    title: "EdTech",
    description:
      "Transform learning through adaptive platforms, VR classrooms, AI tutors, and skill assessment tools.",
    icon: "GraduationCap",
    color: "orange",
    challenges: 7,
  },
];

export const WINNERS: Winner[] = [
  {
    name: "Aryan Mehta",
    team: "NeuralNinjas",
    project: "MedAI — AI Diagnostic Assistant",
    prize: "₹5,00,000",
    year: 2025,
    college: "IIT Bombay",
    avatar: "AM",
  },
  {
    name: "Priya Krishnan",
    team: "CodeCraft",
    project: "GreenRoute — Sustainable Logistics",
    prize: "₹3,00,000",
    year: 2025,
    college: "NIT Trichy",
    avatar: "PK",
  },
  {
    name: "Rohan Verma",
    team: "QuantumLeap",
    project: "SafeVault — Decentralized Security",
    prize: "₹2,00,000",
    year: 2025,
    college: "BITS Pilani",
    avatar: "RV",
  },
  {
    name: "Sneha Iyer",
    team: "DataDynamos",
    project: "EduAdapt — Personalized Learning",
    prize: "₹1,50,000",
    year: 2024,
    college: "IIT Madras",
    avatar: "SI",
  },
  {
    name: "Karan Sharma",
    team: "CloudStorm",
    project: "SmartGrid — Energy Management",
    prize: "₹1,00,000",
    year: 2024,
    college: "VIT Vellore",
    avatar: "KS",
  },
  {
    name: "Anjali Nair",
    team: "HackHeroes",
    project: "PayFlow — Rural Fintech",
    prize: "₹75,000",
    year: 2024,
    college: "IIIT Hyderabad",
    avatar: "AN",
  },
];

export const SPONSORS: Sponsor[] = [
  { name: "TechCorp Global", tier: "platinum", logo: "TC" },
  { name: "Innovatech Systems", tier: "platinum", logo: "IS" },
  { name: "CloudVertex", tier: "gold", logo: "CV" },
  { name: "DataStream AI", tier: "gold", logo: "DS" },
  { name: "SecureNet Pro", tier: "gold", logo: "SN" },
  { name: "FutureLabs", tier: "silver", logo: "FL" },
  { name: "StartupHub", tier: "silver", logo: "SH" },
  { name: "DevForge", tier: "silver", logo: "DF" },
  { name: "Quantum IO", tier: "bronze", logo: "QI" },
  { name: "CodeBridge", tier: "bronze", logo: "CB" },
  { name: "NexGen Tech", tier: "bronze", logo: "NG" },
  { name: "BuildFast", tier: "bronze", logo: "BF" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who can participate in Vynedam Talent Hunt 2026?",
    answer:
      "Any student currently enrolled in an undergraduate or postgraduate program at any recognized college or university in India can participate. Students from all engineering, science, and technology disciplines are welcome. Teams of 2–4 members are required.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No! Participation in Vynedam Talent Hunt 2026 is completely free. We believe in equal opportunity and want to remove all financial barriers. All you need is your talent, creativity, and determination.",
  },
  {
    question: "What is the team size requirement?",
    answer:
      "Teams must consist of 2 to 4 members. All team members must be from the same or different colleges — cross-college teams are allowed and encouraged! One member must be designated as the team leader for communication purposes.",
  },
  {
    question: "What technologies can we use in the hackathon?",
    answer:
      "You are free to use any technology stack, programming language, framework, or tool. We provide cloud credits for AWS, GCP, and Azure during the hackathon phase. Open-source libraries and APIs are permitted. Pre-existing code bases are not allowed.",
  },
  {
    question: "How are internship offers made?",
    answer:
      "Internship offers are made directly by our partner companies during and after the Final Pitching Round. Top-performing teams and individuals may receive on-the-spot offers. Shortlisted candidates who don't win may also be contacted by sponsors post-event for internship opportunities.",
  },
  {
    question: "Will travel and accommodation be provided?",
    answer:
      "For Phase 3 (24-Hour Hackathon) and Phase 4 (Final Pitching Round), we provide accommodation for outstation participants. Travel reimbursement of up to ₹3,000 per team member is provided for teams from outside the host city.",
  },
  {
    question: "When are the results announced?",
    answer:
      "Phase 1 results are announced within 48 hours. Phase 2 results within 5 days. Phase 3 shortlists are announced at the end of the hackathon. Final results and prize distribution happen on the last day of Phase 4 at the Grand Finale Ceremony.",
  },
  {
    question: "Can I participate if I am in my final year?",
    answer:
      "Yes! Final year students are fully eligible to participate. In fact, many of our past winners have been final-year students. Internship offers are structured to accommodate final-year students with flexible start dates after graduation.",
  },
];
