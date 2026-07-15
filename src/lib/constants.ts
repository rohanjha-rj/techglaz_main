// ============================================
// Techglaz Labs — Shared Constants
// ============================================

// Engineering Branches
export const BRANCHES = {
  CSE_IT: "CSE & IT",
  CIVIL: "Civil Engineering",
  ME: "Mechanical Engineering",
  EE: "Electrical Engineering",
  ECE: "Electronics & Communication Engineering",
  CSE: "Computer Science & Engineering",
  IT: "Information Technology",
  CHEM_LEATHER: "Chemical Technology (Leather Technology)",
  BIOMED_ROBOTIC: "Biomedical & Robotic Engineering",
  EEE: "Electrical & Electronics Engineering",
  CIVIL_COMP: "Civil Engineering with Computer Application",
  CSE_AI: "Computer Science & Engineering (Artificial Intelligence)",
  FIRE_SAFETY: "Fire Technology & Safety",
  CSE_CYBER: "Computer Science & Engineering (Cyber Security)",
  AERO: "Aeronautical Engineering",
  FOOD_PRESERV: "Food Processing & Preservation",
  CSE_IOT: "Computer Science & Engineering (Internet of Things)",
  ECE_ADV_COMM: "Electronics & Communication Engineering (Advanced Communication Technology)",
  CSE_AI_ML: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
  CHEM: "Chemical Engineering",
  CSE_DATA: "Computer Science & Engineering (Data Science)",
  ECE_VLSI: "Electronics Engineering (VLSI Design & Technology)",
  MINING: "Mining Engineering",
  ANIMATION_3D: "3D Animation & Graphics",
  MECH_SMART: "Mechanical & Smart Manufacturing",
  MECHATRONICS: "Mechatronics Engineering",
  CSE_NETWORKS: "Computer Science & Engineering (Networks)",
  CSE_IOT_CYBER_BLOCK: "Computer Science & Engineering (IoT & Cyber Security including Blockchain Technology)",
  ROBOTICS_AUTO: "Robotics & Automation",
  INSTRUMENTATION: "Instrumentation Engineering",
  AGRICULTURAL: "Agricultural Engineering",
  WASTE_MGMT: "Waste Management",
  PETROCHEMICAL: "Petrochemical Engineering",
  CHEM_PLASTIC_POLYMER: "Chemical Engineering (Plastic & Polymer)",
  MARINE: "Marine Engineering",
} as const;

export type BranchKey = keyof typeof BRANCHES;
export type BranchLabel = (typeof BRANCHES)[BranchKey];

export const BRANCH_SLUGS: Record<string, BranchKey> = {
  "cse-it": "CSE_IT",
  "civil-engineering": "CIVIL",
  "mechanical-engineering": "ME",
  "electrical-engineering": "EE",
  "electronics-communication-engineering": "ECE",
  "computer-science-engineering": "CSE",
  "information-technology": "IT",
  "chemical-technology-leather-technology": "CHEM_LEATHER",
  "biomedical-robotic-engineering": "BIOMED_ROBOTIC",
  "electrical-electronics-engineering": "EEE",
  "civil-engineering-computer-application": "CIVIL_COMP",
  "computer-science-engineering-artificial-intelligence": "CSE_AI",
  "fire-technology-safety": "FIRE_SAFETY",
  "computer-science-engineering-cyber-security": "CSE_CYBER",
  "aeronautical-engineering": "AERO",
  "food-processing-preservation": "FOOD_PRESERV",
  "computer-science-engineering-internet-of-things": "CSE_IOT",
  "electronics-communication-engineering-advanced-communication-technology": "ECE_ADV_COMM",
  "computer-science-engineering-artificial-intelligence-machine-learning": "CSE_AI_ML",
  "chemical-engineering": "CHEM",
  "computer-science-engineering-data-science": "CSE_DATA",
  "electronics-engineering-vlsi-design-technology": "ECE_VLSI",
  "mining-engineering": "MINING",
  "3d-animation-graphics": "ANIMATION_3D",
  "mechanical-smart-manufacturing": "MECH_SMART",
  "mechatronics-engineering": "MECHATRONICS",
  "computer-science-engineering-networks": "CSE_NETWORKS",
  "computer-science-engineering-iot-cyber-security-blockchain": "CSE_IOT_CYBER_BLOCK",
  "robotics-automation": "ROBOTICS_AUTO",
  "instrumentation-engineering": "INSTRUMENTATION",
  "agricultural-engineering": "AGRICULTURAL",
  "waste-management": "WASTE_MGMT",
  "petrochemical-engineering": "PETROCHEMICAL",
  "chemical-engineering-plastic-polymer": "CHEM_PLASTIC_POLYMER",
  "marine-engineering": "MARINE",
};

export const BRANCH_KEYS_TO_SLUGS: Record<BranchKey, string> = {
  CSE_IT: "cse-it",
  CIVIL: "civil-engineering",
  ME: "mechanical-engineering",
  EE: "electrical-engineering",
  ECE: "electronics-communication-engineering",
  CSE: "computer-science-engineering",
  IT: "information-technology",
  CHEM_LEATHER: "chemical-technology-leather-technology",
  BIOMED_ROBOTIC: "biomedical-robotic-engineering",
  EEE: "electrical-electronics-engineering",
  CIVIL_COMP: "civil-engineering-computer-application",
  CSE_AI: "computer-science-engineering-artificial-intelligence",
  FIRE_SAFETY: "fire-technology-safety",
  CSE_CYBER: "computer-science-engineering-cyber-security",
  AERO: "aeronautical-engineering",
  FOOD_PRESERV: "food-processing-preservation",
  CSE_IOT: "computer-science-engineering-internet-of-things",
  ECE_ADV_COMM: "electronics-communication-engineering-advanced-communication-technology",
  CSE_AI_ML: "computer-science-engineering-artificial-intelligence-machine-learning",
  CHEM: "chemical-engineering",
  CSE_DATA: "computer-science-engineering-data-science",
  ECE_VLSI: "electronics-engineering-vlsi-design-technology",
  MINING: "mining-engineering",
  ANIMATION_3D: "3d-animation-graphics",
  MECH_SMART: "mechanical-smart-manufacturing",
  MECHATRONICS: "mechatronics-engineering",
  CSE_NETWORKS: "computer-science-engineering-networks",
  CSE_IOT_CYBER_BLOCK: "computer-science-engineering-iot-cyber-security-blockchain",
  ROBOTICS_AUTO: "robotics-automation",
  INSTRUMENTATION: "instrumentation-engineering",
  AGRICULTURAL: "agricultural-engineering",
  WASTE_MGMT: "waste-management",
  PETROCHEMICAL: "petrochemical-engineering",
  CHEM_PLASTIC_POLYMER: "chemical-engineering-plastic-polymer",
  MARINE: "marine-engineering",
};

// Training Tracks
export const TRAINING_TRACKS = [
  "Teachers' School",
  "Teachers' College",
  "Student (College)",
  "Student (School)",
  "Students", // Backward compatibility
  "General",
] as const;

export type TrainingTrack = (typeof TRAINING_TRACKS)[number];

// Course-to-Branch Mapping
export const COURSES_BY_BRANCH: Record<BranchKey, string[]> = {
  CSE_IT: ["Full-Stack Web Development", "AI/ML Engineering", "Cybersecurity & Digital Forensics", "Agentic AI Architectures"],
  CIVIL: ["AutoCAD Architectural Drafting", "STAAD.Pro Structural Analysis", "Revit BIM for Civil Engineers", "Primavera P6 Project Management"],
  ME: ["CATIA V5 Mechanical Design", "SolidWorks CAD & Simulation", "ANSYS Finite Element Analysis", "CNC Programming & Manufacturing"],
  EE: ["VLSI Design & Verification", "Power System Analysis with ETAP", "PLC & SCADA Automation", "Solar PV System Design"],
  ECE: ["IoT & Embedded Systems", "ASIC/FPGA Digital Design", "PCB Design with Altium Designer", "5G RF & Wireless Systems"],
  CSE: ["Data Structures & Algorithms Mastery", "Cloud Architecture with AWS", "DevOps & CI/CD Pipeline Engineering", "Mobile App Development (Flutter)"],
  IT: ["Database Administration (MySQL & PostgreSQL)", "Software Testing & QA Automation", "IT Service Management (ITIL v4)", "Enterprise Networking (CCNA Track)"],
  CHEM_LEATHER: ["Tanning Chemistry & Process Control", "Effluent Treatment Plant Design", "Footwear CAD & Manufacturing", "Leather Quality Testing & Standards"],
  BIOMED_ROBOTIC: ["Medical Device Design & Prototyping", "Robotic Surgery Systems", "Biomedical Signal Processing", "3D Bioprinting & Tissue Engineering"],
  EEE: ["Electric Vehicle Drivetrain Design", "MATLAB/Simulink for Power Electronics", "Industrial Motor Drives & Control", "Smart Grid & Microgrid Systems"],
  CIVIL_COMP: ["GIS & Remote Sensing for Civil Engineers", "Python for Civil Engineering Computations", "BIM Coordination with Navisworks", "Smart Infrastructure & IoT Monitoring"],
  CSE_AI: ["Deep Learning & Neural Networks", "Computer Vision & Image Processing", "Natural Language Processing", "Reinforcement Learning for Robotics"],
  FIRE_SAFETY: ["Fire Prevention & Risk Assessment", "Fire Alarm & Detection System Design", "Industrial Safety & HAZOP Analysis", "Fire Sprinkler & Suppression Systems"],
  CSE_CYBER: ["Ethical Hacking & Penetration Testing", "SOC Analyst & Threat Intelligence", "Network Security & Firewall Administration", "Digital Forensics & Malware Analysis"],
  AERO: ["Aircraft Structural Analysis", "Computational Fluid Dynamics for Aerospace", "UAV/Drone Design & Manufacturing", "CATIA V5 for Aerospace Design"],
  FOOD_PRESERV: ["Food Safety & HACCP Certification", "Dairy Processing Technology", "Food Packaging & Shelf-Life Extension", "Beverage Processing & Quality Control"],
  CSE_IOT: ["IoT Platform Development (AWS IoT)", "Smart Home Automation Systems", "Edge Computing & TinyML", "Industrial IoT & Industry 4.0"],
  ECE_ADV_COMM: ["5G Network Planning & Optimization", "Optical Fiber Communication Design", "Satellite Communication Systems", "Software Defined Networking (SDN/NFV)"],
  CSE_AI_ML: ["MLOps & Model Deployment Pipeline", "Generative AI & Large Language Models", "Time Series Forecasting & Analytics", "Recommendation Systems Engineering"],
  CHEM: ["Process Simulation with Aspen HYSYS", "Chemical Plant Design & Safety", "Water Treatment & Membrane Technology", "Polymer Processing & Characterization"],
  CSE_DATA: ["Python for Data Science", "Big Data Engineering (Spark & Hadoop)", "Business Intelligence & Power BI", "Statistical Modeling & A/B Testing"],
  ECE_VLSI: ["RTL Design with Verilog/SystemVerilog", "Physical Design & STA", "Analog IC Design with Cadence Virtuoso", "DFT & JTAG Testing"],
  MINING: ["Mine Planning with Surpac & Whittle", "Mine Safety & Ventilation Design", "Drilling & Blasting Technology", "Environmental Management in Mining"],
  ANIMATION_3D: ["3D Modeling & Texturing with Blender", "Character Animation & Rigging", "Motion Graphics & VFX Compositing", "Game Environment Design (Unreal Engine)"],
  MECH_SMART: ["Industry 4.0 & Smart Factory Design", "Additive Manufacturing & 3D Printing", "Robotics Process Automation in Manufacturing", "Lean Six Sigma for Manufacturing"],
  MECHATRONICS: ["ROS2 & Autonomous Robot Programming", "PLC & Motion Control Systems", "Sensor Fusion & Control Systems", "Hydraulic & Pneumatic System Design"],
  CSE_NETWORKS: ["Cisco CCNP Enterprise Routing", "Network Security & Ethical Hacking", "Cloud Networking (Azure/GCP)", "Network Automation with Python"],
  CSE_IOT_CYBER_BLOCK: ["Blockchain Development (Solidity & Web3)", "IoT Security & Firmware Analysis", "Hyperledger Fabric for Enterprise", "Secure IoT Architecture Design"],
  ROBOTICS_AUTO: ["Industrial Robot Programming (KUKA/ABB)", "Computer Vision for Robotics", "Collaborative Robots (Cobots)", "Autonomous Mobile Robots (AMR)"],
  INSTRUMENTATION: ["Process Instrumentation & Control Valves", "DCS & Advanced Process Control", "Safety Instrumented Systems (SIS)", "Industrial Data Analytics (IIOT Sensors)"],
  AGRICULTURAL: ["Precision Agriculture & Drone Mapping", "Irrigation System Design", "Farm Machinery Design & Maintenance", "Post-Harvest Technology & Cold Chain"],
  WASTE_MGMT: ["Solid Waste Management & Landfill Design", "Biogas Plant Design & Operation", "E-Waste Recycling & Material Recovery", "Wastewater Treatment Plant Operations"],
  PETROCHEMICAL: ["Refinery Process Operations", "Pipeline Design & Integrity Management", "Gas Processing & LNG Technology", "Petroleum Product Testing & Quality"],
  CHEM_PLASTIC_POLYMER: ["Injection Molding Process & Tooling", "Rubber Compounding & Testing", "Plastics Product Design for Manufacturing", "Polymer Recycling & Circular Economy"],
  MARINE: ["Marine Diesel Engine Systems", "Ship Stability & Naval Architecture", "Marine Electrical & Automation Systems", "Maritime Safety & Environmental Compliance"],
};

// Application Status
export const APPLICATION_STATUS = {
  PENDING: "pending",
  UNDER_REVIEW: "under_review",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
} as const;

export type ApplicationStatus =
  (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS];

// Institution Tags (for trainers, projects, R&D)
export const INSTITUTION_TAGS = [
  "IIT",
  "CDAC",
  "CyberCell",
  "Industry",
] as const;

export type InstitutionTag = (typeof INSTITUTION_TAGS)[number];

// R&D Audience Types
export const RND_AUDIENCES = ["Students", "Teachers", "Industry"] as const;
export type RnDAudience = (typeof RND_AUDIENCES)[number];

// Social Media Links (placeholders — replace with real URLs)
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/techglazlabs",
  instagram: "https://instagram.com/techglazlabs",
  youtube: "https://youtube.com/@techglazlabs",
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999"}`,
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Trainings",
    href: "/trainings",
    children: [
      { label: "All Courses", href: "/trainings" },
      { label: "Student (College)", href: "/trainings?track=students-college" },
      { label: "Student (School)", href: "/trainings?track=students-school" },
      { label: "Teachers' School", href: "/trainings?track=teachers-school" },
      { label: "Teachers' College", href: "/trainings?track=teachers-college" },
      { label: "General", href: "/trainings?track=general" },
      { label: "Career Path Finder 🎯", href: "/career-path-finder" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Placements", href: "/placements" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Trainers", href: "/trainers" },
      { label: "Partners", href: "/partners" },
      { label: "R&D Programs", href: "/r-and-d" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// Footer Quick Links
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Trainings", href: "/trainings" },
    { label: "Placements", href: "/placements" },
    { label: "Contact Us", href: "/contact" },
    { label: "Apply Now", href: "/apply" },
  ],
  courses: [
    { label: "Full-Stack Web Dev", href: "/trainings/cse-it/full-stack-web-development" },
    { label: "AI/ML Engineering", href: "/trainings/cse-it/ai-ml-engineering" },
    { label: "Cybersecurity", href: "/trainings/cse-it/cybersecurity-digital-forensics" },
    { label: "IoT & Embedded", href: "/trainings/electronics-communication-engineering/iot-embedded-systems" },
    { label: "VLSI Design", href: "/trainings/electrical-engineering/vlsi-design-verification" },
  ],
};

// Referral Sources (for "How did you hear about us?" dropdown)
export const REFERRAL_SOURCES = [
  "Social Media",
  "Friend / Family",
  "College / University",
  "Google Search",
  "Advertisement",
  "Event / Workshop",
  "Other",
] as const;

// Stats (default values — can be overridden by CMS)
export const DEFAULT_STATS = {
  studentsTrained: 500,
  placementPercentage: 95,
  activeCourses: 18,
  partnerInstitutions: 10,
};
