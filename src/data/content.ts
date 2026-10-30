export interface Project {
  slug: string;
  title: string;
  category: string;
  award?: string;
  summary: string;
  role: string;
  year: string;
  stack: string[];
  github?: string;
  live?: string | null;
  image: string;
  imageCaption?: string;
  teammates?: string[];
  problem: string;
  solution: string;
  highlights: string[];
  isFeatured: boolean;
}

export interface SecondaryProject {
  title: string;
  category: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  year: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface RoleItem {
  title: string;
  organization: string;
  period?: string;
  description?: string;
}

export interface PortfolioContent {
  site: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
  };
  hero: {
    name: string;
    shortName: string;
    wordmark: string;
    role: string;
    intro: string;
    location: string;
    cta: string;
    statusText: string;
    timeZone: string;
    portrait: string;
  };
  about: {
    heading: string;
    eyebrow: string;
    summary: string;
    bioParagraphs: string[];
    education: {
      degree: string;
      institution: string;
      specialization: string;
      years: string;
      location: string;
    };
    roles: RoleItem[];
    resumeUrl: string;
    portrait: string;
  };
  featuredProjects: Project[];
  allProjects: SecondaryProject[];
  services: Service[];
  recognition: string[];
  contact: {
    heading: string;
    subheading: string;
    email: string;
    location: string;
    socials: {
      github: string;
      linkedin: string;
      instagram: string;
    };
  };
}

export const content: PortfolioContent = {
  site: {
    title: "Anoop Danimon — Data Science & Front-End Developer",
    description: "Portfolio of Anoop Danimon (Anoop Dani), data science student, front-end engineer and physical AI builder in Thrissur, Kerala.",
    url: "https://anoopdani.me",
    ogImage: "/images/og-image.png",
  },
  hero: {
    name: "Anoop Danimon",
    shortName: "Anoop Dani",
    wordmark: "ANOOP",
    role: "Data Science Student & Front-End Developer",
    intro: "I'm Anoop, a data science student and front-end developer building AI-driven products and clean interfaces with clarity, purpose and character.",
    location: "Thrissur, Kerala, India",
    cta: "Let's Talk",
    statusText: "Available for Work",
    timeZone: "Asia/Kolkata",
    portrait: "/images/anoop-profile.jpg",
  },
  about: {
    heading: "ABOUT ME",
    eyebrow: "BACKGROUND & EXPERTISE",
    summary: "3rd year B.Tech student in Computer Science & Engineering with a specialization in Data Science at Christ College of Engineering, Irinjalakuda, Kerala (graduating 2028). I work across AI/ML, full-stack development, data science, prompt engineering and API integration, and I like turning hackathon ideas into working products. Beyond code, I design: posters, brochures and visual identities for college events.",
    bioParagraphs: [
      "I thrive at the intersection of data-driven reasoning and modern visual engineering. Whether that means deploying local LLMs on low-power edge hardware during overnight hackathons or crafting fluid, responsive interfaces with React and Tailwind, my goal is always clarity, purpose and character.",
      "As a Google Student Ambassador and active member of technical leadership communities at Christ College of Engineering, I love collaborating with interdisciplinary teams, mentoring peers, and taking ambitious prototypes from zero to podium."
    ],
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Christ College of Engineering",
      specialization: "Data Science Specialization",
      years: "2024 — 2028",
      location: "Irinjalakuda, Kerala, India",
    },
    roles: [
      {
        title: "Google Student Ambassador",
        organization: "Google for Developers (India)",
        description: "Fostering developer communities, organizing AI/cloud sessions, and advocating modern Google technologies on campus.",
      },
      {
        title: "Event Coordinator",
        organization: "DELTA (Data Oriented Thinkers' Association) EXCOM 2026-27",
        description: "Directing technical symposiums, hackathons, and data analytics bootcamps for student researchers.",
      },
      {
        title: "Member & Technical Contributor",
        organization: "DevOps Forum, CCE",
        description: "Engaging in containerization, CI/CD workflows, Linux environments, and automation workshops.",
      },
      {
        title: "Technical Team Member",
        organization: "Data Science Department (DS CCE)",
        description: "Building departmental digital assets, machine learning workshops, and internal hackathons.",
      },
      {
        title: "Class Representative & IV Coordinator",
        organization: "Christ College of Engineering",
        description: "Representing academic cohort, interfacing with faculty, and spearheading industrial immersion visits.",
      },
      {
        title: "Academic Peer Mentor",
        organization: "Student Community Mentorship",
        description: "Guiding junior cohorts in Python fundamentals, Web development stacks, and hackathon project pitching.",
      }
    ],
    resumeUrl: "/resume.pdf",
    portrait: "/images/anoop-profile.jpg",
  },
  featuredProjects: [
    {
      slug: "delta",
      title: "DELTA",
      category: "Student Association Website",
      summary: "The association website for DELTA — the Data Oriented Thinkers’ Association at Christ College of Engineering — bringing its community, events, and people together online.",
      role: "Website Development",
      year: "2026",
      stack: ["React", "React Router", "Tailwind CSS", "Framer Motion", "HTML5 Canvas", "Supabase"],
      github: "https://github.com/DELTACCE/website-deltacce",
      live: "https://deltacce.vercel.app/",
      image: "/images/projects/delta.webp",
      imageCaption: "Live DELTA association website — Christ College of Engineering",
      problem: "A student association needs one accessible place to explain its purpose, introduce its committee, share events, and help students find ways to participate. Those needs extend beyond a single announcement or social-media post.",
      solution: "Built a multi-page association website around DELTA’s data-oriented identity. The site connects the association’s story, mission, leadership, events, gallery, and contact information, with an animated node canvas and responsive navigation. The repository also includes event-specific participant and administration routes.",
      highlights: [
        "A shared home for DELTA’s mission, activities, and student community",
        "Committee profiles and an organizational hierarchy",
        "Event listings, event details, and participant dashboard routes",
        "An event gallery and association brand-identity pages",
        "Interactive HTML5 node canvas and responsive page transitions"
      ],
      isFeatured: true,
    },
    {
      slug: "retail-customer-intelligence",
      title: "INSIGHT.arc",
      category: "Retail Customer Intelligence · Semester Project",
      summary: "Our semester project: a retail customer intelligence platform connecting transaction-data engineering with customer segmentation, lifetime-value prediction, and churn analysis.",
      role: "Semester Project · Team Development",
      year: "2026",
      stack: ["Python", "Flask", "Apache Spark", "Hive", "HDFS", "scikit-learn", "SQLite", "JavaScript", "Chart.js", "Vite", "Google Gemini"],
      github: "https://github.com/an00pie/retail-customer-intelligence",
      live: "https://retail-customer-intelligence-two.vercel.app/",
      image: "/images/projects/retail-customer-intelligence.webp",
      imageCaption: "Live INSIGHT.arc website — retail customer intelligence dashboard",
      problem: "Transaction histories alone do not tell a retail team which customers are likely to leave, which relationships are most valuable, or how a retention strategy could change future revenue. Useful customer intelligence requires a path from raw records to interpretable predictions.",
      solution: "Built an analytics pipeline using the UCI Online Retail II dataset, with RFM feature engineering, K-Means customer segmentation, Gradient Boosting lifetime-value regression, and Random Forest churn classification. A Flask API serves customer profiles and model predictions to a dashboard with customer lookup, cohort analysis, a what-if simulator, and a Gemini copilot grounded in read-only analytics tools. This is an academic project using dataset-based analytics and simulated store comparisons, not a record of work for the brands displayed in the demo.",
      highlights: [
        "Data preparation and RFM feature engineering over the Online Retail II dataset",
        "K-Means segmentation into Champions, Loyal, At-Risk, and Lost cohorts",
        "Customer lifetime-value regression and churn-risk classification",
        "Customer 360 profiles, transaction history, and CSV exports",
        "What-if simulation of changes in customer behavior",
        "Read-only, tool-grounded Gemini analytics copilot",
        "SQLite-backed serving layer with Vercel frontend and Render backend"
      ],
      isFeatured: true,
    },
    {
      slug: "zoltraak",
      title: "Zoltraak",
      category: "EV Routing & Community Charging",
      summary: "A charging-aware EV route planner and peer-to-peer charging network for India, built for the AIBhoomi Hackathon.",
      role: "Development & Prototyping",
      year: "2026",
      stack: ["Next.js", "React", "MapLibre GL", "Uber H3", "Python", "FastAPI", "SQLAlchemy", "Tailwind CSS"],
      github: "https://github.com/an00pie/Zoltraak",
      live: "https://zoltraak-alpha.vercel.app/",
      image: "/images/projects/zoltraak.webp",
      imageCaption: "Live Zoltraak website — EV corridors and community charging",
      problem: "The shortest route is not always a usable route for an EV. Drivers need to account for battery charge, compatible connectors, charging detours, and station reliability, while private home chargers remain difficult to discover.",
      solution: "Zoltraak combines OSRM road routing with battery-aware charging-stop selection and Uber H3 spatial indexing. A MapLibre interface brings public charging stations and a community home-charger network into one place, with separate experiences for drivers, home hosts, and commercial operators. The repository includes synthetic community-host data for demonstrating the network.",
      highlights: [
        "Charging-stop selection based on detour distance, charger speed, and reliability",
        "Dynamic H3 hexagonal indexing at regional and street-level scales",
        "Public stations and a peer-to-peer home-charger network in one map",
        "Vehicle-specific battery capacities and connector profiles",
        "Crowdsourced charger outage reports and Google Maps navigation export",
        "Built for the AIBhoomi Hackathon"
      ],
      isFeatured: true,
    },
    {
      slug: "thuzhayan",
      title: "THUZHAYAN",
      category: "Physical & Edge AI Telemetry",
      award: "Best Physical AI Product • Google Physical AI Hackathon (TinkerHub x Google)",
      summary: "An edge AI boat and paddle telemetry system for Vallamkalli (snake boat racing), bringing F1-style race telemetry to Kerala's backwaters in under 24 hours.",
      role: "Hardware Telemetry, Edge Model Deployment & Live Web UI",
      year: "2024",
      stack: ["Raspberry Pi 5", "Gemma (Local LLM)", "Google Gemini 1.5 Flash", "ESP32", "MAVLink", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/an00pie/thuzhayan-physical-ai",
      live: null,
      image: "/images/thuzhayan.svg",
      teammates: ["Sreeram R", "Soorya John", "Aryan Baburajan"],
      problem: "Vallamkalli (traditional Kerala snake boat racing) is an iconic heritage sport where up to 100 rowers must pull in unison. Until now, coaches had zero quantitative feedback on individual paddle cadence, boat roll/pitch dynamics, or fatigue breakdown during sprint finishes.",
      solution: "Built in under 24 hours at the Google Physical AI Hackathon (Onam Edition, hosted by TinkerHub x Google for Developers): an edge telemetry system connecting custom tilt switch sensors on rowers' paddles to an ESP32 hub. Combined with a MAVLink flight controller capturing 6-axis boat dynamics, an onboard Raspberry Pi 5 runs a local Google Gemma model for sub-second offline edge insights. In post-run analysis, Google Gemini 1.5 Flash generates tailored coach debriefs. The system also includes an automated tilt safety cut-in trigger.",
      highlights: [
        "Per-rower paddle stroke detection via custom tilt sensors",
        "ESP32 wireless telemetry hub aggregating live stroke frequency",
        "MAVLink flight controller capturing boat roll, pitch, yaw & GPS velocity",
        "Offline local Gemma on Raspberry Pi 5 with zero cloud latency requirement",
        "Google Gemini 1.5 Flash post-run telemetry analysis and coaching debriefs",
        "Automated hardware safety threshold alerting on critical boat heel/roll angles",
        "Interactive real-time web telemetry dashboard"
      ],
      isFeatured: true,
    },
    {
      slug: "bus-sahayi",
      title: "BUS SAHAYI",
      category: "Public Transit Grievance Platform",
      award: "Top 16 Teams • Anavandi Hackathon (JAIN University Kochi)",
      summary: "A public transport complaint & resolution system built overnight then pitched live to judges aboard a moving KSRTC bus to Munnar.",
      role: "Full-Stack Development, Architecture & Frontend UI",
      year: "2026",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Flask", "Supabase", "PostgreSQL", "OpenRouter"],
      github: "https://github.com/an00pie/anavandi_hack",
      live: "https://bus-sahayi.vercel.app/auth",
      image: "/images/projects/bus-sahayi.webp",
      imageCaption: "Live Bus Sahayi website — bilingual passenger and staff sign-in",
      teammates: ["Tharun Krishna C U"],
      problem: "Kerala public transport commuters face significant friction reporting broken facilities, bus delays, or route issues. Grievances previously landed in disconnected paper logs with no automated routing or passenger status tracking.",
      solution: "A mobile-first grievance platform where passengers submit issues with bus registration number, route, live geo-location, and photos. Each ticket generates a unique tracking reference. The system automatically routes the report to the responsible bus depot. Depot superintendents manage complaints via a live dashboard, while transit executives monitor an interactive state map colour-coded by unresolved reports.",
      highlights: [
        "Frictionless passenger filing with route lookup and live GPS tagging",
        "Automatic jurisdictional routing to responsible KSRTC bus depots",
        "Unique public reference tracking for end-to-end transparency",
        "Depot officer dashboard with ticket triage and status updates",
        "Executive regional map colour-coding depots by resolution SLA health",
        "Pitched live in a moving KSRTC bus on the ghat roads to Munnar",
        "English and Malayalam interfaces for passengers, depot heads, and state administrators",
        "AI-assisted complaint analysis with a deterministic fallback engine",
        "SLA auto-escalation and multi-tier email notifications"
      ],
      isFeatured: true,
    },
    {
      slug: "pharmasystem",
      title: "PHARMASYSTEM",
      category: "Healthcare Operations & Inventory",
      award: "Full-Stack Engineering Showcase",
      summary: "A robust pharmaceutical inventory management platform engineered for precision batch tracking, regulatory audits, and dispensation.",
      role: "Database Architecture & Full-Stack Implementation",
      year: "2024",
      stack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/an00pie/Pharma",
      live: null,
      image: "/images/pharmasystem.svg",
      teammates: [],
      problem: "Pharmacies handle thousands of high-turnover medical supplies under strict regulatory compliance. Manual inventory management leads to missed expiration dates, stock discrepancies, and compliance liabilities during state health inspections.",
      solution: "An enterprise-grade inventory system featuring batch-level barcode indexing, dynamic expiration threshold alerts, automated purchase order creation, customer dispensation records, and complete tamper-evident audit logging.",
      highlights: [
        "Batch and lot tracking with automated color-coded expiry warnings",
        "Live stock deduction during counter prescription dispensation",
        "Low-inventory threshold triggers and supplier restock workflow",
        "Role-based access control (Pharmacist, Manager, Auditor)",
        "Fast search across hundreds of active pharmaceutical compounds"
      ],
      isFeatured: true,
    },
    {
      slug: "zephyrus",
      title: "ChargeAhead",
      category: "EV Charging Reliability · Zephyrus Hackathon",
      award: "2nd Prize • Zephyrus 8.0 at Christ College (Autonomous)",
      summary: "An EV trip-planning and charging-reliability platform built for the Zephyrus hackathon, helping drivers assess a charging stop before they arrive.",
      role: "Prototype Architect & Front-End Lead",
      year: "2026",
      stack: ["Next.js", "React", "TypeScript", "MapLibre GL", "Open Charge Map", "OSRM", "Google Gemini", "Zustand", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/an00pie/chargeahead",
      live: "https://chargeahead-gilt.vercel.app/",
      image: "/images/projects/chargeahead.webp",
      imageCaption: "Live ChargeAhead website — EV trip intelligence and charging reliability",
      teammates: ["Tharun Krishna C U", "Alvi A V", "John Antony"],
      problem: "A charger pin on a map does not establish that a station will work when a driver reaches it. Hardware faults, occupied ports, and unexpected queues can make a planned charging stop unusable and force a mid-trip search for alternatives.",
      solution: "ChargeAhead brings charging-location discovery, reliability scoring, and EV corridor planning into one interface. The confidence engine combines hardware-status signals, driver reports, and queue estimates; MapLibre, Open Charge Map, Nominatim, and OSRM support station discovery and road routing. The prototype also includes an operator incident queue, driver reroute prompts, and an interactive presentation. Scores and station examples in the landing-page preview demonstrate the product experience rather than prove live hardware coverage.",
      highlights: [
        "2nd Prize out of multi-college engineering squads at Zephyrus 8.0",
        "Charging confidence scoring from telemetry, community reports, and queue estimates",
        "Open Charge Map station discovery and OSRM road geometry",
        "Rate-limited driver reports with time-decaying corroboration",
        "Operator incident triage and resolution workflows",
        "Mid-trip warnings and alternative charging-stop prompts",
        "Interactive product presentation with vehicle and charging simulations"
      ],
      isFeatured: true,
    }
  ],
  allProjects: [
    {
      title: "Fly Connectome Simulator",
      category: "Computational Neuroscience & AI",
      description: "Neural activity simulation engine built on the FlyWire whole-brain connectome dataset, modeling synaptic interactions and firing patterns.",
      stack: ["Python", "NetworkX", "NumPy", "Matplotlib"],
      github: "https://github.com/an00pie",
      year: "2024"
    },
    {
      title: "Sales & Marketing Predictive Analytics",
      category: "Big Data & Business Intelligence",
      description: "End-to-end enterprise data pipeline and forecasting suite analyzing multi-channel customer purchase cycles and conversion funnels.",
      stack: ["Python", "Hadoop", "Hive", "Apache Spark", "Tableau", "Power BI"],
      github: "https://github.com/an00pie",
      year: "2024"
    },
    {
      title: "meme_nokal",
      category: "Python Media Automation",
      description: "Automated media manipulation tool designed to curate, transform, and schedule meme media distribution across communication pipelines.",
      stack: ["Python", "Pillow", "OpenCV", "Telegram API"],
      github: "https://github.com/an00pie/meme_nokal",
      year: "2024"
    },
    {
      title: "ThreadMatrix",
      category: "Systems & Parallel Computing",
      description: "High-performance multi-threaded matrix operations library in C benchmarking POSIX threads, cache locality, and race condition synchronization.",
      stack: ["C", "pthreads", "Make", "Valgrind"],
      github: "https://github.com/an00pie/ThreadMatrix",
      year: "2023"
    },
    {
      title: "Class_Web",
      category: "Web & UI Design",
      description: "Modern, responsive academic cohort portal with schedule planners, resource repositories, and interactive announcement feeds.",
      stack: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/an00pie/Class_Web",
      year: "2023"
    },
    {
      title: "DELTA Launch Video",
      category: "Motion & Creative Direction",
      description: "Motion graphics teaser and official launch trailer introducing the Data Oriented Thinkers' Association (DELTA) at Christ College of Engineering.",
      stack: ["After Effects", "Premiere Pro", "Figma", "Sound Design"],
      github: "https://github.com/an00pie",
      year: "2024"
    },
    {
      title: "Beachhack Season 7 Design Work",
      category: "Brand & Event Design",
      description: "Official visual design identity, promotional posters, stage banners, and digital media collateral for South India's premier beach hackathon.",
      stack: ["Figma", "Illustrator", "Photoshop", "Typography"],
      github: "https://github.com/an00pie",
      year: "2024"
    }
  ],
  services: [
    {
      number: "01",
      title: "AI & Data Science",
      description: "Predictive modeling, deep learning workflows, statistical analysis, and interactive data visualization dashboards that transform raw data into decisions.",
      tags: ["Machine Learning", "Python", "Data Analytics", "Gemini & LLMs", "Dashboards"]
    },
    {
      number: "02",
      title: "Full-Stack & Front-End Development",
      description: "Modern, high-performance web applications using React, TypeScript, and Tailwind CSS. Built with micro-interactions, robust state handling, and clean API integrations.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "REST APIs"]
    },
    {
      number: "03",
      title: "Physical & Edge AI Prototyping",
      description: "Bridging code with physical hardware: deploying local models (Gemma, Raspberry Pi), sensor telemetry, ESP32 microcontrollers, and real-time telemetry dashboards.",
      tags: ["Raspberry Pi", "Local LLMs", "ESP32", "IoT Telemetry", "Hardware Integration"]
    },
    {
      number: "04",
      title: "Graphic & Event Design",
      description: "Creative direction and editorial visual design for tech events, hackathons, and brand identities — including posters, brochures, typography, and media collateral.",
      tags: ["Visual Identity", "Poster Design", "Figma", "Event Collateral", "Typography"]
    }
  ],
  recognition: [
    "Best Physical AI Product • TinkerHub x Google for Developers",
    "2nd Prize • Zephyrus 8.0 Hackathon",
    "Top 16 Finalist • Anavandi Hackathon (JAIN University)",
    "Google Student Ambassador • India",
    "DELTA EXCOM 2026-27 • Christ College of Engineering",
    "DevOps Forum • CCE",
    "Media Design Team • Beachhack Season 7"
  ],
  contact: {
    heading: "LET'S TALK",
    subheading: "Have a project in mind, want to team up for a hackathon, or discuss an AI & engineering role? Tell me about it and let's see what we can create together.",
    email: "anoopdanimon@gmail.com",
    location: "Thrissur, Kerala, India",
    socials: {
      github: "https://github.com/an00pie",
      linkedin: "https://www.linkedin.com/in/anoop-dani/",
      instagram: "https://instagram.com/anoop_dani"
    }
  }
};
