import { BranchKey } from "./constants";

export interface BranchProfile {
  name: string;
  tagline: string;
  summary: string;
  industryGrowth: {
    growthRate: string;
    marketValue: string;
    topEmployers: string[];
    demandDriver: string;
  };
  keySkills: {
    technical: { name: string; description: string }[];
    tools: string[];
    softSkills: string[];
  };
  roles: {
    title: string;
    description: string;
    salaryRange: string;
  }[];
  curriculumPaths: {
    fourWeeks: {
      title: string;
      focus: string;
      milestones: string[];
    };
    sixWeeks: {
      title: string;
      focus: string;
      milestones: string[];
    };
    eightWeeks: {
      title: string;
      focus: string;
      milestones: string[];
    };
    twelveWeeks: {
      title: string;
      focus: string;
      milestones: string[];
    };
    twentyFourWeeks: {
      title: string;
      focus: string;
      milestones: string[];
    };
  };
  academicAlignment: {
    coreSubjects: string[];
    labSkills: string[];
    industryStandards: string[];
  };
}

export const BRANCH_PROFILES: Record<BranchKey, BranchProfile> = {
  CSE_IT: {
    name: "CSE & IT (Combined Legacy)",
    tagline: "Software Architectures, Cloud Platforms, and Intelligent Systems",
    summary: "A unified look at computer science and information technology covering software engineering paradigms, databases, and secure web application development.",
    industryGrowth: {
      growthRate: "11.2% CAGR",
      marketValue: "$1.2T by 2028",
      topEmployers: ["Microsoft", "Google", "Amazon", "Infosys", "TCS", "Accenture"],
      demandDriver: "Rapid enterprise digitization, cloud adoption, and AI software expansion.",
    },
    keySkills: {
      technical: [
        { name: "Full-Stack Web Dev", description: "Designing frontend components and building secure, performant REST/GraphQL backends." },
        { name: "Database Engineering", description: "SQL/NoSQL data schemas, scaling database clusters, and ACID validation." }
      ],
      tools: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Git"],
      softSkills: ["Agile Collaboration", "Systemic Troubleshooting", "Code Review Communication"],
    },
    roles: [
      { title: "Full-Stack Developer", description: "Develop and deploy customer-facing web platforms with robust middleware.", salaryRange: "₹6,00,000 - ₹18,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Frontend Foundations",
        focus: "Responsive UI layout design and DOM state manipulation.",
        milestones: ["Master HTML5/CSS3 flexbox/grid layout structures.", "Build interactive web interfaces using basic vanilla JavaScript ES6.", "Configure component-based styling using tailwind layouts."]
      },
      sixWeeks: {
        title: "React Component Architectures",
        focus: "SPA design patterns and state management.",
        milestones: ["Implement complex React functional components.", "Manage application state using Hooks, Context API, and Redux.", "Integrate client-side routing and external API consumption."]
      },
      eightWeeks: {
        title: "Backend API Engineering",
        focus: "Server-side routing, databases, and authentication.",
        milestones: ["Build REST APIs using Express.js and Node.js.", "Configure PostgreSQL / MongoDB database structures via ORMs.", "Implement secure JWT and cookie-based user auth middleware."]
      },
      twelveWeeks: {
        title: "Full-Stack Integration & Cloud",
        focus: "End-to-end web product architectures and deployment.",
        milestones: ["Deploy secure SaaS applications to Vercel, Heroku, and AWS S3.", "Configure automated CI/CD pipelines via GitHub Actions.", "Add real-time notifications and payment gateway mock services."]
      },
      twentyFourWeeks: {
        title: "Enterprise Systems Production Tapeout",
        focus: "High-scale distribution systems, microservices, and load testing.",
        milestones: ["Refactor monolith platforms into containerized Docker microservices.", "Configure Redis database cache engines and Apache Kafka queues.", "Conduct load testing and achieve 99.9% application uptime on AWS EC2."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Data Structures & Algorithms", "Database Management Systems", "Software Engineering"],
      labSkills: ["Familiarity with Git branching workflows", "Relational schema scripting and database optimization"],
      industryStandards: ["W3C Accessibility Guidelines", "OWASP Top 10 Web Security Standards"],
    }
  },
  CIVIL: {
    name: "Civil Engineering",
    tagline: "Sustainable Infrastructure, Building Information Modeling (BIM), and Smart Cities",
    summary: "Transforming raw landscapes into resilient, smart cities using advanced building modeling, structural design, and eco-friendly construction materials.",
    industryGrowth: {
      growthRate: "5.7% CAGR",
      marketValue: "$12.8T by 2030",
      topEmployers: ["Larsen & Toubro (L&T)", "Tata Projects", "Hindustan Construction Co.", "AECOM", "Bechtel", "SNC-Lavalin"],
      demandDriver: "Global infrastructure modernization, high-speed rail networks, and green building certifications.",
    },
    keySkills: {
      technical: [
        { name: "BIM Coordination", description: "Building information modeling, clash detection, and virtual construction modeling." },
        { name: "Structural Design", description: "Reinforced cement concrete (RCC) structural calculations and steel frame analysis." }
      ],
      tools: ["AutoCAD", "Revit BIM", "STAAD.Pro", "ETABS", "Primavera P6", "MS Project"],
      softSkills: ["Cross-disciplinary Site Coordination", "Contractual Communication", "Risk Management & Compliance"],
    },
    roles: [
      { title: "BIM Engineer", description: "Model complex buildings, solve inter-trade design clashes, and coordinate digital asset handovers.", salaryRange: "₹5,00,000 - ₹12,00,000" },
      { title: "Structural Analyst", description: "Calculate wind, seismic, and dead load capacities to design safe and cost-effective structures.", salaryRange: "₹6,00,000 - ₹15,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "2D Engineering Drafting Essentials",
        focus: "Engineering graphics, standard annotations, and spatial geometry layouts.",
        milestones: ["Perform precision coordinate geometry inputs in AutoCAD.", "Draft detailed floor plans, elevations, and structural cross-sections.", "Implement industry-standard layers, line weights, and dimensioning styles."]
      },
      sixWeeks: {
        title: "3D Spatial Modeling",
        focus: "Constructing and rendering architectural spaces.",
        milestones: ["Extrude 2D drafts into realistic 3D building components.", "Apply materials, light sources, and camera perspectives for rendering.", "Export architectural models to standard format configurations."]
      },
      eightWeeks: {
        title: "BIM Workflow Implementations",
        focus: "Parametric design, structural component modeling, and architectural detailing.",
        milestones: ["Create structural grids, columns, structural slabs, and walls in Revit.", "Coordinate structural, mechanical, electrical, and plumbing (MEP) systems.", "Generate detailed material take-offs (BOQ) directly from Revit databases."]
      },
      twelveWeeks: {
        title: "Structural Analysis & Steel Design",
        focus: "Stiffness, boundary conditions, and design optimization under loading.",
        milestones: ["Design RCC frames and continuous beams in STAAD.Pro.", "Execute load combinations matching standard Indian / International building codes.", "Evaluate structural stability, shear diagrams, and bending moment responses."]
      },
      twentyFourWeeks: {
        title: "Smart Infrastructure & Project Delivery",
        focus: "Enterprise scheduling, scheduling constraints, and site automation workflows.",
        milestones: ["Build complete work breakdown structures (WBS) in Primavera P6.", "Perform structural seismic response analysis on complex multi-story towers.", "Develop detailed site safety plans and eco-friendly concrete compound structures."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Strength of Materials", "Structural Analysis", "Design of Concrete Structures"],
      labSkills: ["Concrete testing (slump, compressive strength)", "Total Station spatial survey workflows"],
      industryStandards: ["IS 456 (Plain and Reinforced Concrete Code)", "National Building Code (NBC) of India"],
    }
  },
  ME: {
    name: "Mechanical Engineering",
    tagline: "Aerospace Design, Product Lifecycle Management (PLM), Finite Element Analysis (FEA)",
    summary: "Driving mechanical innovation across EV development, aerospace propulsion, and high-precision CAD modeling with parametric assembly optimization.",
    industryGrowth: {
      growthRate: "6.5% CAGR",
      marketValue: "$320B by 2029",
      topEmployers: ["Tata Motors", "Mahindra & Mahindra", "Boeing", "General Electric (GE)", "Caterpillar", "Maruti Suzuki"],
      demandDriver: "EV drivetrain engineering, automated robotic systems, and light-weight aerospace structures.",
    },
    keySkills: {
      technical: [
        { name: "Parametric CAD Design", description: "Creating complex part models, assembly constraints, and detailed drawing generations." },
        { name: "Thermal Fluid FEA", description: "Structural stress calculations, heat transfer modeling, and fluid-structure interactions." }
      ],
      tools: ["SolidWorks", "CATIA V5", "ANSYS Mechanical", "Altair HyperMesh", "NX CAD", "AutoCAD"],
      softSkills: ["GD&T Interpretation", "FMEA Engineering Mindset", "Production Line Communication"],
    },
    roles: [
      { title: "CAD Design Engineer", description: "Design complex plastic and sheet metal assemblies under tight space packaging constraints.", salaryRange: "₹4,50,000 - ₹11,00,000" },
      { title: "FEA Simulation Engineer", description: "Model component stress, fatigue limits, and vibration responses in digital simulation suites.", salaryRange: "₹5,50,000 - ₹14,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Mechanical CAD Fundamentals",
        focus: "Parametric sketching, dimensioning, and part modeling.",
        milestones: ["Construct robust 2D sketches with correct geometric constraints.", "Create 3D solid models using extrusion, revolves, and sweep commands.", "Draft basic orthographic layouts showing detailed dimensions and symbols."]
      },
      sixWeeks: {
        title: "Assembly Modeling & Drawings",
        focus: "Advanced assemblies, kinematic checking, and detailed drafting.",
        milestones: ["Assemble multiple parts using concentric, coincident, and profile mates.", "Perform interference, clash, and clearance checks on dynamic assemblies.", "Implement standard ASME Y14.5 Geometric Dimensioning & Tolerancing (GD&T)."]
      },
      eightWeeks: {
        title: "Advanced Surface Modeling",
        focus: "Generative shape styling and freeform complex curvature structures.",
        milestones: ["Design multi-curved aerospace surfaces and car panels in CATIA V5.", "Translate wireframe design models into water-tight solid volumes.", "Create production-ready plastic casing models with drafts and fillets."]
      },
      twelveWeeks: {
        title: "Structural FEA Analysis",
        focus: "FEA mesh generation, boundary constraints, and structural reports.",
        milestones: ["Build clean finite element meshes in ANSYS Workbench / HyperMesh.", "Apply static force, thermal load, and support boundary conditions.", "Analyze von Mises stresses, safety factors, and displacement trends."]
      },
      twentyFourWeeks: {
        title: "Full Product Lifecycle Production Project",
        focus: "Automotive chassis / turbine component simulation and optimization.",
        milestones: ["Model, assemble, and analyze an automotive EV battery enclosure/chassis.", "Run dynamic drop tests and fatigue cycle simulations in ANSYS.", "Optimize weight and design parameters while maintaining standard FMEA guidelines."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Machine Design", "Thermodynamics", "Fluid Mechanics & Machinery"],
      labSkills: ["CNC machining and turning setups", "Tensile testing on Universal Testing Machines (UTM)"],
      industryStandards: ["ASME Y14.5 (GD&T Standards)", "ISO 9001 Quality Management Guidelines"],
    }
  },
  EE: {
    name: "Electrical Engineering",
    tagline: "Power Systems Grid Control, Industrial Automation, Electrification, and Electric Vehicles",
    summary: "Powering the global energy shift through smart grid integration, high-voltage substations, electric vehicle battery packaging, and industrial PLC control panels.",
    industryGrowth: {
      growthRate: "7.1% CAGR",
      marketValue: "$480B by 2030",
      topEmployers: ["ABB", "Siemens", "Schneider Electric", "General Electric", "Power Grid Corp.", "Reliance Power"],
      demandDriver: "Smart grid technologies, massive EV charging integration, and industrial assembly automation.",
    },
    keySkills: {
      technical: [
        { name: "PLC Programming", description: "Developing ladder logic, functional blocks, and HMI/SCADA interfaces." },
        { name: "Electrical Design", description: "Sizing transformers, cables, switchgear, and drafting power schematics." }
      ],
      tools: ["AutoCAD Electrical", "MATLAB/Simulink", "Siemens TIA Portal", "ETAP", "PLC Simulator", "LabVIEW"],
      softSkills: ["Safe Operation Culture", "System Diagnostics Logic", "Engineering Project Management"],
    },
    roles: [
      { title: "Electrical Design Engineer", description: "Draft layout schematics, size power distribution cables, and design control panel layouts.", salaryRange: "₹4,80,000 - ₹12,00,000" },
      { title: "Automation Control Engineer", description: "Program and debug PLC systems, configure SCADA monitoring panels, and set up field networks.", salaryRange: "₹5,50,000 - ₹15,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Electrical CAD Drafting",
        focus: "Drawing wiring diagrams, using symbols, and panel layout fundamentals.",
        milestones: ["Draft smart schematic diagrams in AutoCAD Electrical.", "Configure wire number sequences and automated cross-referencing tags.", "Design physical electrical panel cabinet layouts showing terminal blocks."]
      },
      sixWeeks: {
        title: "Power Flow Calculations & Design",
        focus: "Electrical calculations, conductor sizing, and circuit protection.",
        milestones: ["Size power cable gauges and circuit breakers based on load requirements.", "Model transformer load distribution networks using ETAP toolsets.", "Calculate short circuit fault currents and protection coordination ranges."]
      },
      eightWeeks: {
        title: "Industrial PLC Coding",
        focus: "Ladder logic scripting, PLC memory maps, and digital inputs.",
        milestones: ["Program digital logic circuits (start/stop latching) in PLC environments.", "Write functional ladder scripts matching industrial sensor inputs.", "Configure analog scaling blocks for thermal / pressure transducers."]
      },
      twelveWeeks: {
        title: "SCADA & HMI Integration",
        focus: "Graphical monitor design, network routing, and data historian setups.",
        milestones: ["Link PLC outputs to SCADA dashboards using Modbus protocols.", "Design HMI touchscreens for active machine operation status.", "Build database log files tracking electrical parameters over time."]
      },
      twentyFourWeeks: {
        title: "Substation / Factory Automation Delivery",
        focus: "Electric vehicle powertrain modeling or automated factory lines.",
        milestones: ["Simulate solar-inverter or EV-battery configurations in MATLAB/Simulink.", "Design complete automated process loops using PID controller units.", "Assemble detailed panel layouts, single-line diagrams, and bill-of-materials."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Power Electronics", "Control Systems", "Electrical Machines"],
      labSkills: ["PLC hardware wiring and terminal configurations", "AC/DC motor speed control and drive calibrations"],
      industryStandards: ["IEC 61131-3 (PLC Programming Standards)", "National Electrical Code (NEC) Rules"],
    }
  },
  ECE: {
    name: "Electronics & Communication Engineering",
    tagline: "Embedded Systems, Wireless IoT, FPGA Synthesis, and High-Speed Signal Processing",
    summary: "Pioneering the next wave of communication through hardware engineering, PCB layouts, wireless networking protocols, and RTOS-based firmware.",
    industryGrowth: {
      growthRate: "8.3% CAGR",
      marketValue: "$620B by 2029",
      topEmployers: ["Qualcomm", "Intel", "Samsung Electronics", "Texas Instruments", "Bosch", "Cisco Systems"],
      demandDriver: "5G/6G rollouts, edge intelligence development, and custom industrial PCB design.",
    },
    keySkills: {
      technical: [
        { name: "Embedded C/C++ Development", description: "Writing memory-efficient firmware, peripheral drivers, and memory mapping." },
        { name: "PCB Layout Design", description: "Schematic capture, layer stack-up configurations, and EMI/EMC compliance." }
      ],
      tools: ["Altium Designer", "STM32CubeIDE", "Keil uVision", "MATLAB", "KiCad", "Oscilloscopes & Logic Analyzers"],
      softSkills: ["Hardware-Software Debugging", "Protocol Decryption Reasoning", "Collaborative Assembly Alignment"],
    },
    roles: [
      { title: "Embedded Firmware Developer", description: "Write microcode, compile custom drivers, and integrate hardware interfaces.", salaryRange: "₹5,50,000 - ₹14,00,000" },
      { title: "PCB Layout Specialist", description: "Design multi-layer PCB circuits, place track paths, and analyze signals.", salaryRange: "₹5,00,000 - ₹12,50,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Microcontroller Firmware Drafting",
        focus: "Register structures, input/output controls, and timing loops.",
        milestones: ["Write basic C code to toggle GPIO pins on STM32 microcontrollers.", "Implement non-blocking delay routines using hardware timer units.", "Configure basic serial debug output via UART interfaces."]
      },
      sixWeeks: {
        title: "Peripheral Communications",
        focus: "Bus protocols, frame structures, and memory access.",
        milestones: ["Implement I2C drivers to read data from temperature sensors.", "Configure SPI communications to write pixel frames to display panels.", "Utilize Analog-to-Digital Converter (ADC) registers with DMA transfers."]
      },
      eightWeeks: {
        title: "PCB Schematic & Routing Basics",
        focus: "Component footprints, trace sizes, and board layouts.",
        milestones: ["Draft clean schematic diagrams using KiCad / Altium libraries.", "Design 2-layer PCB outlines showing track paths and power planes.", "Export standard Gerber data files and fabrication drawings."]
      },
      twelveWeeks: {
        title: "RTOS Implementation & Wireless IoT",
        focus: "Multithreading execution, task priorities, and network endpoints.",
        milestones: ["Configure FreeRTOS with task creation, semaphores, and queues.", "Connect ESP32 microcontrollers to cloud endpoints using MQTT protocols.", "Debug power profiles to extend wireless node battery lifetime."]
      },
      twentyFourWeeks: {
        title: "Custom Edge Smart Device Design",
        focus: "Designing, routing, and compiling custom controller products.",
        milestones: ["Create schematic and layout for a multi-sensor smart gateway.", "Develop full firmware structure using RTOS and safe states.", "Conduct EMI/EMC analysis, write tests, and document the API."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Microprocessors & Microcontrollers", "Digital Signal Processing", "Electromagnetic Fields & Waves"],
      labSkills: ["Handling logic analyzers and digital storage oscilloscopes", "Surface mount soldering and prototype PCB validation"],
      industryStandards: ["IPC-2221 (Generic Standards on Printed Board Design)", "IEEE 802.15.4 (Low-Rate Wireless Personal Networks)"],
    }
  },
  CSE: {
    name: "Computer Science & Engineering",
    tagline: "High-Performance Computing, Algorithm Engineering, Distributed Cloud Architecture",
    summary: "Architecting the foundation of modern computing platforms using high-performance algorithms, secure compiler designs, cloud clustering, and enterprise software systems.",
    industryGrowth: {
      growthRate: "12.1% CAGR",
      marketValue: "$1.8T by 2031",
      topEmployers: ["Google", "Meta", "Netflix", "Uber", "Oracle", "Goldman Sachs"],
      demandDriver: "High-throughput data streaming, hyper-scale cloud deployment, and secure backend platforms.",
    },
    keySkills: {
      technical: [
        { name: "Distributed Systems Architecture", description: "Designing fault-tolerant, horizontally scalable computing backends." },
        { name: "Advanced Data Structures", description: "Optimizing search indexes, custom caching networks, and memory allocations." }
      ],
      tools: ["Kubernetes", "Docker", "Apache Kafka", "Go", "Java Spring Boot", "AWS (EC2, ECS, DynamoDB)"],
      softSkills: ["Architectural Design Tradeoffs", "Complex Problem Decomposition", "Technical Specification Writing"],
    },
    roles: [
      { title: "Software Architect", description: "Design scalable distributed system architectures, microservices, and database layers.", salaryRange: "₹12,0,000 - ₹35,00,000" },
      { title: "Backend Systems Engineer", description: "Write high-performance runtime scripts, configure message brokers, and manage caches.", salaryRange: "₹8,00,000 - ₹22,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Complexity & Algorithm Analysis",
        focus: "Asymptotic notation, memory space footprint, and fundamental sorting.",
        milestones: ["Measure runtime execution of algorithms using microbenchmarks.", "Implement custom stack, queue, and linked list structures in Go / C++.", "Analyze binary tree structures and depth-first searches."]
      },
      sixWeeks: {
        title: "API Design & Concurrency Patterns",
        focus: "Threading models, lock-free structures, and network endpoints.",
        milestones: ["Design RESTful APIs following standard OpenAPI specifications.", "Implement concurrent routines using channels and select patterns in Go.", "Configure database connection pooling pools and transactional rollbacks."]
      },
      eightWeeks: {
        title: "Microservices & Message Brokers",
        focus: "Service decoupled routing, message distribution, and cluster configs.",
        milestones: ["Split large monolith backends into small, isolated microservices.", "Integrate Apache Kafka or RabbitMQ event-driven messaging structures.", "Implement API gateways with token validation and rate limiting."]
      },
      twelveWeeks: {
        title: "Cloud Infrastructure & Orchestration",
        focus: "Virtual networks, deployment container control, and load balancers.",
        milestones: ["Containerize services using multi-stage Docker builds.", "Deploy and manage service clusters using Kubernetes configurations.", "Set up load balancers, route endpoints, and secure domains on AWS."]
      },
      twentyFourWeeks: {
        title: "Enterprise Core Engine Tapeout",
        focus: "Real-time, fault-tolerant data pipelines with active scaling.",
        milestones: ["Build a live streaming analytics pipeline processing 50k requests/sec.", "Integrate Redis caching and Elasticsearch for rapid log searching.", "Perform chaotic node shutdown tests, showing zero data loss."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Compiler Design", "Operating Systems", "Theory of Computation"],
      labSkills: ["Multithreaded system debugging using GDB", "SQL query optimization and index analysis"],
      industryStandards: ["RFC 7519 (JSON Web Tokens)", "IEEE POSIX Standards"],
    }
  },
  IT: {
    name: "Information Technology",
    tagline: "Cloud Engineering, DevOps Pipelines, Virtualization, and Systems Administration",
    summary: "Configuring infrastructure delivery pipelines using CI/CD loops, infrastructure-as-code scripts, secure networking, and highly-available server environments.",
    industryGrowth: {
      growthRate: "9.5% CAGR",
      marketValue: "$980B by 2029",
      topEmployers: ["Accenture", "Cognizant", "Wipro", "IBM", "Red Hat", "AWS"],
      demandDriver: "Cloud migration projects, continuous integration/delivery demands, and server security hardening.",
    },
    keySkills: {
      technical: [
        { name: "DevOps & CI/CD", description: "Automating deployment loops, build testing, and application validation pipelines." },
        { name: "Infrastructure-as-Code (IaC)", description: "Scripting resource state files to declare cloud servers and firewalls." }
      ],
      tools: ["Terraform", "Ansible", "Jenkins", "GitHub Actions", "Docker", "Linux Shell Scripting"],
      softSkills: ["Infrastructure Incident Response", "Resource Cost Optimization", "Systems Security Awareness"],
    },
    roles: [
      { title: "DevOps Specialist", description: "Build deployment pipelines, automate unit testing, and coordinate releases.", salaryRange: "₹6,0,000 - ₹16,00,000" },
      { title: "Cloud Systems Engineer", description: "Deploy scalable virtual machine clusters, configure subnets, and monitor performance.", salaryRange: "₹6,50,000 - ₹18,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Linux Administration & Bash Automation",
        focus: "Command line, access controls, and shell script tasks.",
        milestones: ["Manage users, file permissions, and process queues on Linux.", "Write shell scripts to clean up logs and backup database files.", "Configure system-level services and network interfaces via terminal."]
      },
      sixWeeks: {
        title: "Containerization & Core Builds",
        focus: "Creating images, mapping ports, and mount setups.",
        milestones: ["Write optimized Dockerfiles following security guidelines.", "Manage multi-container applications using Docker Compose stacks.", "Configure persistent storage volumes and private registry access."]
      },
      eightWeeks: {
        title: "CI/CD Pipeline Automation",
        focus: "Automated test integration, compilation loops, and build jobs.",
        milestones: ["Set up automated test pipelines in GitHub Actions/Jenkins.", "Configure code linter rules and artifact build steps.", "Implement automated deployment jobs targeting remote test hosts."]
      },
      twelveWeeks: {
        title: "Infrastructure-as-Code (IaC) & Cloud Networking",
        focus: "Declaring server shapes, network subnets, and security rules.",
        milestones: ["Write Terraform configurations to set up AWS VPC subnets.", "Provision virtual machine instances and security groups via code.", "Implement Ansible playbooks for automated service configuration."]
      },
      twentyFourWeeks: {
        title: "DevOps Infrastructure Production Tapeout",
        focus: "Highly-available, auto-scaled application infrastructures.",
        milestones: ["Build a multi-stage blue-green deployment pipeline for microservices.", "Configure Prometheus monitoring and Grafana metric alert rules.", "Conduct recovery tests, maintaining 99.9% pipeline reliability."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Computer Networks", "Cryptography & Network Security", "Cloud Computing"],
      labSkills: ["Writing Bash/Python network monitoring scripts", "Configuring software firewalls (IPTables/UFW)"],
      industryStandards: ["ISO/IEC 27001 (Information Security Standards)", "SOC 2 Trust Principles"],
    }
  },
  CHEM_LEATHER: {
    name: "Chemical Technology (Leather Technology)",
    tagline: "Sustainable Polymer Finishes, Eco-Friendly Tanning, and Effluent Optimization",
    summary: "Innovating leather processing through advanced biomaterials, clean tanning techniques, closed-loop waste treatment systems, and high-performance polymer finishes.",
    industryGrowth: {
      growthRate: "4.2% CAGR",
      marketValue: "$48B by 2030",
      topEmployers: ["CLRI", "Tata International", "Bata", "Liberty Shoe Ltd.", "Farida Group", "LANXESS"],
      demandDriver: "Stricter environmental regulations, high demand for chrome-free leathers, and active biowaste processing.",
    },
    keySkills: {
      technical: [
        { name: "Eco-Friendly Tanning Design", description: "Implementing vegetable and mineral tanning processes that reduce chromium discharge." },
        { name: "Effluent Process Management", description: "Design of biological waste treatment systems and active chromium recovery lines." }
      ],
      tools: ["Spectrophotometers", "BOD/COD Analyzers", "GC-MS Testing Systems", "CAD-CAM Leather Cutting Softwares", "Design Expert"],
      softSkills: ["Chemical Hazard Management", "Regulatory compliance writing", "Ecological Impact Analysis"],
    },
    roles: [
      { title: "Leather Process Technologist", description: "Manage raw hide treatment lines, chemical formulation ratios, and finish quality.", salaryRange: "₹4,00,000 - ₹9,50,000" },
      { title: "Environmental Health Manager", description: "Supervise tannery waste streams, chromium filtration, and compliance reporting.", salaryRange: "₹4,50,000 - ₹11,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Raw Hide Characterization & Beamhouse Chemistry",
        focus: "Hide structural properties, enzyme liming, and preparatory chemistry.",
        milestones: ["Analyze skin structural variations and collagen compositions.", "Execute safe unhairing, liming, and deliming chemical procedures.", "Measure pH shifts and swelling coefficients in hide samples."]
      },
      sixWeeks: {
        title: "Advanced Tanning Methodologies",
        focus: "Chromium binding, vegetable tanning extracts, and pickling.",
        milestones: ["Perform pickling processes and analyze chrome uptake efficiency.", "Formulate vegetable tanning blends using mimosa and quebracho extracts.", "Validate thermal shrinkage thresholds for finished samples."]
      },
      eightWeeks: {
        title: "Post-Tanning & Coloring Chemistry",
        focus: "Neutralization, dye selections, and fatliquoring emulsions.",
        milestones: ["Optimize dye penetration rates using spectrophotometry.", "Formulate fatliquoring emulsions for controlled skin flexibility.", "Evaluate mechanical tearing limits on finished leather samples."]
      },
      twelveWeeks: {
        title: "Polymer Coating & Finishing Technology",
        focus: "Acrylic binder resins, surface finish pigments, and durability testing.",
        milestones: ["Develop water-resistant polyurethane and acrylic finish coatings.", "Apply structural patterns using embossing roller operations.", "Test flex, rub-fastness, and aging characteristics under thermal loads."]
      },
      twentyFourWeeks: {
        title: "Sustainable Tannery Design Project",
        focus: "Zero Liquid Discharge (ZLD) planning and chromium extraction models.",
        milestones: ["Design a functional wastewater treatment loop including reverse osmosis.", "Establish a chrome recovery plant scheme with mass balance math.", "Produce sample prototypes matching international sustainable product certifications."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Chemistry of Leather Manufacture", "Post-Tanning Technology", "Effluent Treatment in Leather Industry"],
      labSkills: ["Shrinkage temperature measurement setups", "Tannery wastewater BOD/COD testing protocols"],
      industryStandards: ["LWG (Leather Working Group) Environmental Standards", "ISO 17075 (Determination of Chromium VI in Leather)"],
    }
  },
  BIOMED_ROBOTIC: {
    name: "Biomedical & Robotic Engineering",
    tagline: "Medical Device Automation, Surgical Robotics, and Bio-Signal Processing",
    summary: "Bridging healthcare and automation by engineering advanced surgical robotics, diagnostic instrumentation, real-time bio-signal algorithms, and smart prosthetics.",
    industryGrowth: {
      growthRate: "9.8% CAGR",
      marketValue: "$180B by 2030",
      topEmployers: ["Medtronic", "Siemens Healthineers", "Philips Healthcare", "Stryker", "Intuitive Surgical", "GE Healthcare"],
      demandDriver: "Minimally invasive computer-assisted surgeries, wearable diagnostic monitors, and robotic rehabilitation.",
    },
    keySkills: {
      technical: [
        { name: "Bio-Signal Acquisition", description: "Designing low-noise analog frontends for ECG, EEG, and EMG monitoring." },
        { name: "Kinematics & Control", description: "Solving robotic arm joint configurations, trajectory planning, and actuator loops." }
      ],
      tools: ["MATLAB/Simulink", "Altium Designer", "LabVIEW", "ROS (Robot Operating System)", "SolidWorks", "STM32CubeIDE"],
      softSkills: ["Clinical Risk Management", "Safety Critical Reasoning", "FDA Regulatory Understanding"],
    },
    roles: [
      { title: "Biomedical Design Engineer", description: "Design patient-safe electronic hardware, sensors, and microcode pipelines.", salaryRange: "₹5,50,000 - ₹13,50,000" },
      { title: "Robotics Firmware Developer", description: "Program actuator control loops, interface sensors, and coordinate trajectories.", salaryRange: "₹6,00,000 - ₹16,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Sensor Interfaces & Amplification",
        focus: "Instrumentation amplifiers, passive filters, and bio-potential signals.",
        milestones: ["Build an analog frontend amplifier circuit for ECG simulation.", "Implement high-pass and low-pass noise filters on protoboards.", "Measure signal-to-noise ratio output using digital oscilloscopes."]
      },
      sixWeeks: {
        title: "Microcontroller ADC & Signal Processing",
        focus: "Digital sampling, interrupt execution, and DSP filtering.",
        milestones: ["Program a microcontroller to sample analog signals at 1kHz.", "Implement digital notch filters to remove 50Hz electrical mains noise.", "Transmit raw wave data points over serial interface connections."]
      },
      eightWeeks: {
        title: "Surgical Robot Kinematics",
        focus: "Forward/inverse kinematic equations and dynamic joint modeling.",
        milestones: ["Calculate transformation matrices for a 3-DOF robotic arm.", "Simulate robotic path tracking movements in MATLAB.", "Configure basic joint servo angle coordinates using microcontroller PWM."]
      },
      twelveWeeks: {
        title: "ROS (Robot Operating System) Integration",
        focus: "IPC node structures, publish/subscribe interfaces, and URDF models.",
        milestones: ["Build a physical 3D robot model in URDF configurations.", "Implement closed-loop motor control utilizing encoder feedback.", "Configure publisher nodes to send active sensor metrics to remote nodes."]
      },
      twentyFourWeeks: {
        title: "Autonomous Medical Prosthetic / Monitor Design",
        focus: "Myoelectric controlled prosthetic or smart patient diagnostic unit.",
        milestones: ["Design, route, and assemble a custom 4-layer sensor board.", "Develop real-time bio-signal decoding algorithms in firmware.", "Implement strict electrical safety isolation barriers matching regulations."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Biomedical Instrumentation", "Robotics & Automation Control", "Bio-Signal Processing"],
      labSkills: ["ECG circuit debugging and safety test isolation", "Robotic joint actuator calibrations using encoders"],
      industryStandards: ["IEC 60601-1 (Medical Electrical Equipment Safety)", "ISO 13485 (Medical Devices Quality Management)"],
    }
  },
  EEE: {
    name: "Electrical & Electronics Engineering",
    tagline: "Power Electronics, Renewable Microgrids, EV Motor Drives, and Analog Circuits",
    summary: "Integrating high-power electrical grid systems with precise analog and digital electronics to engineer solar inverters, electric vehicle motor drives, and smart energy systems.",
    industryGrowth: {
      growthRate: "7.6% CAGR",
      marketValue: "$550B by 2030",
      topEmployers: ["ABB", "Siemens", "L&T", "Schneider Electric", "Tesla", "Delta Electronics"],
      demandDriver: "High efficiency EV powertrains, smart electrical distribution grids, and solar/wind power management.",
    },
    keySkills: {
      technical: [
        { name: "Power Converter Design", description: "Formulating DC-DC converters, motor drivers, and switching thermal management." },
        { name: "Analog Circuit Integration", description: "Design of feedback loops, signal conditioners, and operational amplifier networks." }
      ],
      tools: ["MATLAB/Simulink", "Altium Designer", "LTspice", "ETAP", "Keil uVision", "LabVIEW"],
      softSkills: ["Electrical Hazard Analysis", "Debugging Complex Systems", "Performance Tradeoff Auditing"],
    },
    roles: [
      { title: "Power Electronics Engineer", description: "Design high-efficiency inverter circuits, gate drivers, and passive components.", salaryRange: "₹5,50,000 - ₹14,50,000" },
      { title: "Hardware Systems Specialist", description: "Integrate sensory and power stages on multi-layer PCB layouts.", salaryRange: "₹5,00,000 - ₹13,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Analog Circuits & SPICE Simulations",
        focus: "Op-amp configurations, transient calculations, and voltage regulators.",
        milestones: ["Simulate active operational amplifier filter stages in LTspice.", "Verify DC-DC linear and switching regulator efficiencies.", "Optimize transient responses by modifying passive filter values."]
      },
      sixWeeks: {
        title: "PCB Design for Power Circuits",
        focus: "High-current copper pours, layout creepage, and thermal vias.",
        milestones: ["Design schematics for a buck converter using Altium Designer.", "Route tracks, place copper pours, and calculate thermal via counts.", "Export production-ready Gerber packages and assembly drawings."]
      },
      eightWeeks: {
        title: "Embedded Controller Programming",
        focus: "PWM registries, ADC interfaces, and feedback loops.",
        milestones: ["Configure microcontroller PWM channels for high-frequency switching.", "Develop ADC sampling routines synchronized to switching intervals.", "Implement digital proportional-integral (PI) loops in C code."]
      },
      twelveWeeks: {
        title: "Motor Drives & Power Converters",
        focus: "H-bridge control models, gate drive isolation, and thermal modeling.",
        milestones: ["Assemble and debug a functional H-bridge motor driver.", "Implement opto-isolator stages to protect control microcode.", "Measure MOSFET switching losses and heat sink requirements."]
      },
      twentyFourWeeks: {
        title: "Grid-Tied Smart Inverter System Design",
        focus: "Solar power charge controllers, grid synchronization, and efficiency.",
        milestones: ["Design, route, and assemble a 500W solar grid-tied inverter.", "Implement phase-locked loop (PLL) grid synchronization in firmware.", "Conduct load testing, demonstrating efficiency ratings above 92%."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Power Electronics", "Linear Integrated Circuits", "Electrical Machine Drives"],
      labSkills: ["Soldering and debugging switching gate drive circuits", "Testing motor torque-speed curves under active loads"],
      industryStandards: ["IEEE 519 (Harmonic Control in Electric Power Systems)", "IEC 61215 (Photovoltaic Module Design Validation)"],
    }
  },
  CIVIL_COMP: {
    name: "Civil Engineering with Computer Application",
    tagline: "Computational Mechanics, Algorithmic BIM, and GIS Spatial Data Analysis",
    summary: "Revolutionizing traditional civil engineering by implementing computational models, structural optimization scripts, database schedules, and geographical information systems (GIS).",
    industryGrowth: {
      growthRate: "7.2% CAGR",
      marketValue: "$18.5B by 2030",
      topEmployers: ["Bentley Systems", "Autodesk", "Trimble", "Tata Consulting Engineers", "Esri", "ARUP"],
      demandDriver: "Algorithmic building generation, automation in planning schedules, and GIS-driven land development.",
    },
    keySkills: {
      technical: [
        { name: "Computational BIM Automation", description: "Writing scripts to generate complex geometry structures and automate database schedules." },
        { name: "GIS Spatial Analysis", description: "Mapping topological layers, hydrological models, and environmental changes." }
      ],
      tools: ["AutoCAD", "Revit (Dynamo)", "QGIS / ArcGIS", "Python (NumPy, SciPy)", "STAAD.Pro", "SQL databases"],
      softSkills: ["Algorithmic Structural Thinking", "Cross-Disciplinary Coordination", "Data-Driven Planning Logic"],
    },
    roles: [
      { title: "BIM Automation Developer", description: "Develop scripts and plugins to automate Revit workflows and database modeling.", salaryRange: "₹6,0,000 - ₹14,00,000" },
      { title: "GIS Data Analyst", description: "Process spatial maps, compile geographical data layers, and run watershed models.", salaryRange: "₹5,0,000 - ₹12,0,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "2D AutoCAD & Scripting Basics",
        focus: "Drafting layouts, spatial variables, and command-line automation.",
        milestones: ["Create precise 2D layouts using coordinate systems in AutoCAD.", "Write basic AutoLISP scripts to automate geometric shapes.", "Generate automatic coordinate data tables from drawings."]
      },
      sixWeeks: {
        title: "Geographical Information Systems (GIS)",
        focus: "Coordinate reference systems, layer mapping, and raster analyses.",
        milestones: ["Import elevation models and vector layers into QGIS.", "Perform watershed and slope analysis using spatial datasets.", "Generate thematic maps showing environmental flood hazards."]
      },
      eightWeeks: {
        title: "BIM Dynamo Visual Programming",
        focus: "Visual programming scripts, parameter edits, and geometric rules.",
        milestones: ["Build Dynamo graphs to place structural elements automatically.", "Create scripts to copy property values between Revit objects.", "Export Excel files containing Revit material databases."]
      },
      twelveWeeks: {
        title: "Python for Structural Calculations",
        focus: "Matrix methods, beam deflection equations, and solver scripts.",
        milestones: ["Write Python scripts to calculate shear forces and deflections.", "Implement matrix structural analysis models for truss configurations.", "Visualize structural stress plots using matplotlib libraries."]
      },
      twentyFourWeeks: {
        title: "Generative City Infrastructure Project",
        focus: "Generative design models, traffic optimization, and site mapping.",
        milestones: ["Develop a design script optimizing tower structures for solar path angles.", "Integrate GIS maps with dynamic Python scripts to trace routes.", "Deliver automated material reports and structural check outputs."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Numerical Methods in Civil Engineering", "GIS and Remote Sensing", "Structural Analysis (Matrix Method)"],
      labSkills: ["Writing Revit Dynamo scripts for component layouts", "Spatial query building and overlay modeling in QGIS"],
      industryStandards: ["ISO 19650 (Organization of Information about Construction Works)", "OGC (Open Geospatial Consortium) Data Formats"],
    }
  },
  CSE_AI: {
    name: "Computer Science & Engineering (Artificial Intelligence)",
    tagline: "Neural Networks, Natural Language Processing, MLOps Pipelines, and Deep Learning",
    summary: "Designing, training, and deploying cognitive intelligence systems using deep neural networks, computer vision frameworks, and scalable machine learning operations.",
    industryGrowth: {
      growthRate: "28.4% CAGR",
      marketValue: "$1.3T by 2032",
      topEmployers: ["OpenAI", "Google DeepMind", "NVIDIA", "Microsoft", "Meta AI", "IBM Research"],
      demandDriver: "Generative AI products, computer vision automation, and automated decision-making engines.",
    },
    keySkills: {
      technical: [
        { name: "Deep Model Training", description: "Formulating neural network layers, custom loss functions, and optimization routines." },
        { name: "MLOps Pipeline Design", description: "Automating model training, tracking parameter experiments, and orchestrating containers." }
      ],
      tools: ["PyTorch", "TensorFlow", "Hugging Face", "MLflow", "Docker", "Python (Pandas, NumPy, Scikit-Learn)"],
      softSkills: ["Statistical Validation Rigor", "AI Ethical Alignment", "Research Translation Skill"],
    },
    roles: [
      { title: "Machine Learning Engineer", description: "Build data pre-processing pipelines, train model architectures, and optimize runtimes.", salaryRange: "₹8,0,000 - ₹24,0,000" },
      { title: "Computer Vision Developer", description: "Implement real-time object detection, segmentation models, and camera pipelines.", salaryRange: "₹7,50,000 - ₹20,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Data Manipulation & Classical ML",
        focus: "Exploratory data analysis, regression, and classification models.",
        milestones: ["Perform dataset loading, cleaning, and features coding in Pandas.", "Train regression and decision tree models using Scikit-Learn.", "Evaluate model performances using precision, recall, and ROC curves."]
      },
      sixWeeks: {
        title: "Neural Networks & PyTorch Basics",
        focus: "Tensors, backpropagation, and dense layer configurations.",
        milestones: ["Build a feedforward neural network from scratch in PyTorch.", "Implement forward and backpropagation training loops.", "Tune network parameters to prevent dataset overfitting."]
      },
      eightWeeks: {
        title: "Computer Vision & CNNs",
        focus: "Convolutional layers, feature extraction, and image inputs.",
        milestones: ["Train a Convolutional Neural Network (CNN) on image datasets.", "Implement data augmentation pipelines using torchvision transforms.", "Deploy pre-trained ResNet models for image classification."]
      },
      twelveWeeks: {
        title: "Natural Language Processing & Transformers",
        focus: "Tokenization, attention layers, and sequence translations.",
        milestones: ["Fine-tune pre-trained BERT/GPT models using Hugging Face.", "Implement text tokenization and vocabulary embedding layers.", "Build a custom semantic search engine using Vector databases."]
      },
      twentyFourWeeks: {
        title: "MLOps & High-Scale Model Deployment",
        focus: "API integration, model quantization, and container hosting.",
        milestones: ["Deploy PyTorch models behind secure FastAPI server endpoints.", "Implement model experiment tracking configurations via MLflow.", "Quantize models, reducing RAM footprint, and host via Docker on AWS."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Probability & Statistics", "Artificial Intelligence", "Neural Networks & Deep Learning"],
      labSkills: ["Training CNNs on GPU clusters using PyTorch", "Configuring pipeline environments with Jupyter and Conda"],
      industryStandards: ["IEEE Ethically Aligned Design Guidelines", "OWASP Top 10 for LLM Security"],
    }
  },
  FIRE_SAFETY: {
    name: "Fire Technology & Safety",
    tagline: "Industrial Hazard Controls, Fire Suppression Engineering, and Emergency Planning",
    summary: "Safeguarding lives and industrial properties by designing fire detection systems, planning escape routes, and managing hazardous waste containment.",
    industryGrowth: {
      growthRate: "4.8% CAGR",
      marketValue: "$85B by 2030",
      topEmployers: ["Reliance Industries", "ONGC", "Indian Oil", "L&T", "Siemens Building Technologies", "State Fire Services"],
      demandDriver: "Mandatory corporate safety audits, refinery expansion plans, and high-rise building regulations.",
    },
    keySkills: {
      technical: [
        { name: "Fire Suppression System Design", description: "Sizing water sprinklers, gas suppression networks, and fire pump pressures." },
        { name: "Risk Auditing & Assessment", description: "Conducting HAZOP studies, assessing structural risks, and writing safety reports." }
      ],
      tools: ["AutoCAD", "Pyrosim / FDS (Fire Dynamics Simulator)", "MS Project", "HYSYS (Hazard Analysis)", "Risk Assessments Checklists"],
      softSkills: ["Emergency Crisis Leadership", "Stress Control Decision-Making", "Regulatory Code Compliance Checking"],
    },
    roles: [
      { title: "Fire Safety Audit Engineer", description: "Perform safety inspections, check detection systems, and write compliance reports.", salaryRange: "₹4,0,000 - ₹10,00,000" },
      { title: "Safety Design Analyst", description: "Design sprinkler line sizes, pipe routings, and emergency exit placements.", salaryRange: "₹4,50,000 - ₹12,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Safety Drafting & Symbols",
        focus: "Drafting floor plans, placing warning icons, and route symbols.",
        milestones: ["Draft emergency evacuation plans showing exit routes in AutoCAD.", "Incorporate standard safety symbols following NFPA regulations.", "Design basic zone maps showing local fire detector locations."]
      },
      sixWeeks: {
        title: "Industrial Hazard Controls",
        focus: "Chemical classifications, hazardous storage rules, and explosion venting.",
        milestones: ["Analyze chemical MSDS sheets for hazardous materials.", "Design safe storage rooms showing ventilation requirements.", "Perform basic explosion hazard level math calculations."]
      },
      eightWeeks: {
        title: "Sprinkler & Pump Piping Design",
        focus: "Hydraulic calculations, pipe sizing, and pressure limits.",
        milestones: ["Size water pipe loops for building sprinkler grids.", "Calculate frictional pressure losses in long piping runs.", "Specify pump ratings and water storage tank capacities."]
      },
      twelveWeeks: {
        title: "FDS Fire Modeling Simulations",
        focus: "Computational fluid models, smoke flow, and heat transfers.",
        milestones: ["Build a room geometry model in Pyrosim / FDS.", "Simulate fire growth, smoke spread, and heat release patterns.", "Verify toxic gas concentration levels along exit routes."]
      },
      twentyFourWeeks: {
        title: "Refinery / High-Rise Safety Design Project",
        focus: "HAZOP analysis, gas suppression designs, and compliance audits.",
        milestones: ["Conduct a complete HAZOP audit study on a mock industrial system.", "Design a clean agent gas fire suppression layout for server rooms.", "Compile full safety specification documents matching NFPA codes."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Fire Dynamics", "Industrial Safety Management", "Hazard Identification & Risk Assessment"],
      labSkills: ["Testing fire hydrant flow rates and pressure lines", "Operating gas monitors and personal safety equipment"],
      industryStandards: ["NFPA 101 (Life Safety Code)", "ISO 45001 (Occupational Health & Safety)"],
    }
  },
  CSE_CYBER: {
    name: "Computer Science & Engineering (Cyber Security)",
    tagline: "Penetration Testing, Cryptographic Implementations, and SOC Incident Response",
    summary: "Defending corporate networks and critical systems by implementing secure encryption protocols, checking for software vulnerabilities, and analyzing logs.",
    industryGrowth: {
      growthRate: "13.8% CAGR",
      marketValue: "$420B by 2030",
      topEmployers: ["PwC", "Deloitte", "EY", "KPMG", "CrowdStrike", "Cyber Cells (Police)"],
      demandDriver: "Rising ransomware frequencies, regulatory data compliance demands, and cloud platform attacks.",
    },
    keySkills: {
      technical: [
        { name: "Vulnerability Assessment", description: "Scanning networks, evaluating vulnerability severities, and writing patches." },
        { name: "Security Architecture", description: "Configuring public key infrastructure, zero-trust rules, and firewalls." }
      ],
      tools: ["Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Nmap", "Splunk"],
      softSkills: ["Ethical Coding Culture", "Forensic Investigation Focus", "Incident Communication Skill"],
    },
    roles: [
      { title: "Security Analyst", description: "Monitor logs, isolate host threats, and configure firewall rules.", salaryRange: "₹6,00,000 - ₹15,00,000" },
      { title: "Penetration Tester", description: "Probe web APIs and internal servers for vulnerabilities and draft patches.", salaryRange: "₹7,00,000 - ₹18,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Network Mapping & Traffic Capture",
        focus: "TCP/IP layers, port scanning, and packet inspection.",
        milestones: ["Scan local test networks using Nmap to identify active ports.", "Capture and analyze network frames using Wireshark filters.", "Identify plaintext protocol leakage (HTTP/FTP) in capture files."]
      },
      sixWeeks: {
        title: "Web Security & OWASP Top 10",
        focus: "Web inputs, validation bypasses, and credential storage.",
        milestones: ["Identify and execute SQL Injection exploits on test databases.", "Demonstrate Cross-Site Scripting (XSS) payload executions.", "Analyze web application configurations for weak security headers."]
      },
      eightWeeks: {
        title: "System Hacking & Metasploit",
        focus: "Exploiting system bugs, post-exploitation scripts, and shells.",
        milestones: ["Configure and execute Metasploit exploits against test systems.", "Demonstrate privilege escalation from user to root levels.", "Generate payload files for target operating systems."]
      },
      twelveWeeks: {
        title: "SOC Logs & Splunk Analytics",
        focus: "Log aggregation, search queries, and alert triggers.",
        milestones: ["Set up automated log forwarding to Splunk test servers.", "Write search queries to identify brute-force login attempts.", "Configure real-time alerts for unauthorized network configurations."]
      },
      twentyFourWeeks: {
        title: "Enterprise Zero-Trust Infrastructure Tapeout",
        focus: "Domain controllers, secure API setups, and mock red-teaming.",
        milestones: ["Design and configure a secure Active Directory domain controller.", "Implement multi-factor authentication (MFA) and API security filters.", "Write a detailed remediation report following a mock red-team breach."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Network Security & Cryptography", "Computer Forensics", "Ethical Hacking"],
      labSkills: ["Isolating malware files in sandbox environments", "Using logic scanners to audit hardware network packets"],
      industryStandards: ["ISO 27001 Security Management Protocols", "PCI-DSS Payment Security Guidelines"],
    }
  },
  AERO: {
    name: "Aeronautical Engineering",
    tagline: "Aerodynamics Simulation, Structural Stress Analysis, and Aircraft Performance Optimization",
    summary: "Engineering next-generation aircraft and drones by optimizing wing profiles, simulating fluid dynamics, and analyzing aerospace alloys.",
    industryGrowth: {
      growthRate: "5.3% CAGR",
      marketValue: "$380B by 2028",
      topEmployers: ["HAL", "ISRO", "DRDO", "Boeing India", "Airbus", "GE Aerospace"],
      demandDriver: "Growth in commercial airline routes, rapid drone development, and space launch upgrades.",
    },
    keySkills: {
      technical: [
        { name: "Fluid Dynamics Simulation", description: "Simulating flow fields, measuring drag coefficients, and modeling shocks." },
        { name: "Aerospace Structural FEA", description: "Checking wing stress margins, fatigue curves, and buckling points." }
      ],
      tools: ["ANSYS Fluent", "CATIA V5", "MATLAB", "HyperMesh", "AutoCAD", "AeroComp"],
      softSkills: ["Safety Critical Precision", "Complex Aerodynamic Reasoning", "Compliance Protocol Execution"],
    },
    roles: [
      { title: "Aerodynamics Analyst", description: "Run computer fluid simulations on wing profiles and optimize lift profiles.", salaryRange: "₹6,0,000 - ₹15,50,000" },
      { title: "Aerospace Structural Engineer", description: "Analyze stress limits, model fuselage sections, and select composites.", salaryRange: "₹5,50,000 - ₹14,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Aerospace CAD Drafting Basics",
        focus: "Drafting profiles, component layouts, and airfoil geometry.",
        milestones: ["Draft precise 2D airfoil coordinate shapes in AutoCAD.", "Model 3D aircraft brackets showing standard mounting points.", "Apply proper dimensions and tolerance annotations to drawings."]
      },
      sixWeeks: {
        title: "Wing Structure Part Modeling",
        focus: "Rib, spar, and skin structural component modeling.",
        milestones: ["Design aircraft wing structures (ribs and spars) in CATIA.", "Assemble wing skin surfaces with internal support components.", "Verify assembly interfaces and check clearances."]
      },
      eightWeeks: {
        title: "Airfoil CFD Analysis",
        focus: "Mesh boundary inflation, flow parameters, and lift forces.",
        milestones: ["Create structural meshes around 2D airfoils in HyperMesh.", "Set up flow boundary conditions in ANSYS Fluent.", "Calculate lift and drag values at different angles of attack."]
      },
      twelveWeeks: {
        title: "Fuselage Structural FEA",
        focus: "Pressure differentials, structural shell modeling, and stress plots.",
        milestones: ["Apply internal cabin pressure loads to fuselage models.", "Evaluate structural stress margins in aircraft shell segments.", "Verify buckle limits under compression forces using ANSYS."]
      },
      twentyFourWeeks: {
        title: "Fixed-Wing UAV Conceptual Design Project",
        focus: "Aerodynamic profiling, structural design, and motor placement.",
        milestones: ["Design a fixed-wing UAV optimizing wing surface parameters.", "Simulate overall flow patterns and verify wing stress distributions.", "Deliver complete engineering drawings and flight parameter forecasts."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Aerodynamics", "Aircraft Structures", "Flight Mechanics"],
      labSkills: ["Measuring lift and drag using wind tunnel instruments", "Conducting material tensile tests on aerospace alloys"],
      industryStandards: ["FAA Airworthiness Standards", "AS9100 Aerospace Quality Guidelines"],
    }
  },
  FOOD_PRESERV: {
    name: "Food Processing & Preservation",
    tagline: "Aseptic Packaging Design, Thermal Preservation, and HACCP Quality Audits",
    summary: "Optimizing the shelf-life and nutritional retention of food products by designing pasteurization loops, aseptic packaging, and automated processing lines.",
    industryGrowth: {
      growthRate: "6.8% CAGR",
      marketValue: "$410B by 2030",
      topEmployers: ["Nestle", "Amul", "Britannia", "PepsiCo", "ITC Food Division", "HUL"],
      demandDriver: "Growth in ready-to-eat meals, strict export packaging codes, and active waste minimization.",
    },
    keySkills: {
      technical: [
        { name: "Thermal System Design", description: "Configuring pasteurizers, spray dryers, and blast freezer temperature curves." },
        { name: "Quality Assurance Mapping", description: "Designing critical control points (HACCP), testing moisture, and packaging integrity." }
      ],
      tools: ["Spectrophotometer", "Texture Profile Analyzer", "GC-MS Food Testing", "AutoCAD", "Design Expert", "MS Excel"],
      softSkills: ["Sanitation Habit Focus", "Process Control Audit Logic", "FDA Compliance Verification"],
    },
    roles: [
      { title: "Food Process Engineer", description: "Supervise pasteurization loops, chemical packaging, and dry processing lines.", salaryRange: "₹4,00,000 - ₹9,50,000" },
      { title: "HACCP Auditor", description: "Evaluate critical control points, draft hazard analyses, and audit sanitations.", salaryRange: "₹4,50,000 - ₹11,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Food Chemistry & Lab Controls",
        focus: "Water activity, acid measurements, and moisture balances.",
        milestones: ["Measure water activity levels in food samples.", "Perform titration tests to measure acidity changes.", "Calibrate moisture balance scales for dehydrated products."]
      },
      sixWeeks: {
        title: "Thermal Preservation Loops",
        focus: "Calculating D-values, pasteurizers, and sterilizers.",
        milestones: ["Calculate thermal death values (D-value) for model bacteria.", "Draft layout schematics for plate pasteurizers in AutoCAD.", "Verify temperature distributions in retort sterilization units."]
      },
      eightWeeks: {
        title: "Dehydration & Spray Drying",
        focus: "Drying air temperatures, nozzle flows, and powder quality.",
        milestones: ["Operate spray dryers, setting optimum air input parameters.", "Measure powder solubility and moisture retention levels.", "Plot drying curve variations under differing humidity profiles."]
      },
      twelveWeeks: {
        title: "Aseptic Packaging Design",
        focus: "Polymer barriers, sealing checks, and head-space nitrogen.",
        milestones: ["Evaluate gas transmission rates of packaging films.", "Perform dye penetration tests checking heat seal integrity.", "Measure oxygen levels in nitrogen-flushed packages."]
      },
      twentyFourWeeks: {
        title: "Industrial Processing Plant Setup Project",
        focus: "Mass balance math, HACCP planning, and floor layout plans.",
        milestones: ["Design mass balance calculations for a food canning line.", "Draft a comprehensive HACCP hazard control document.", "Create factory plant floor layouts showing zoning in AutoCAD."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Food Process Engineering", "Food Preservation Technology", "Food Quality & Safety Management"],
      labSkills: ["Testing package seal strengths using mechanical tensioners", "Measuring microbiological colony counts in samples"],
      industryStandards: ["FSSAI Licensing Regulations", "HACCP Systems Guidelines"],
    }
  },
  CSE_IOT: {
    name: "Computer Science & Engineering (Internet of Things)",
    tagline: "Firmware Development, MQTT Broker Integrations, and IoT Cloud Deployments",
    summary: "Connecting industrial equipment and smart devices by designing sensor nodes, configuring messaging brokers, and hosting cloud visualization pipelines.",
    industryGrowth: {
      growthRate: "15.4% CAGR",
      marketValue: "$1.4T by 2030",
      topEmployers: ["Intel IoT Division", "Bosch Rexroth", "Cisco Systems", "IBM Watson IoT", "Wipro IoT", "PTC"],
      demandDriver: "Industry 4.0 automation, connected vehicle sensors, and municipal smart metering.",
    },
    keySkills: {
      technical: [
        { name: "Embedded Firmware Development", description: "Writing driver software, configuring power-down states, and handling interrupts." },
        { name: "IoT Cloud Integrations", description: "Configuring message brokers, writing API interfaces, and deploying databases." }
      ],
      tools: ["ESP-IDF / Arduino", "STM32CubeIDE", "MQTT Brokers (Mosquitto/EMQX)", "Node-RED", "Python", "AWS IoT Core"],
      softSkills: ["Distributed Debugging Mindset", "Power Constraint Optimization", "Network Security Literacy"],
    },
    roles: [
      { title: "IoT Solutions Architect", description: "Design node architectures, select protocols, and configure cloud databases.", salaryRange: "₹8,0,000 - ₹20,00,000" },
      { title: "Firmware Developer", description: "Write sensor driver scripts, configure microcontrollers, and interface SPI/I2C buses.", salaryRange: "₹5,50,000 - ₹13,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Node Sensor Interfaces",
        focus: "GPIO inputs, analog reading, and serial print debugging.",
        milestones: ["Program ESP32 controllers to read digital sensor levels.", "Read temperature voltages using analog ADC converters.", "Configure UART channels, printing log data to consoles."]
      },
      sixWeeks: {
        title: "Bus Protocols & SPI/I2C",
        focus: "Frame structures, I2C addresses, and register reading.",
        milestones: ["Implement I2C drivers, reading sensor addresses.", "Configure SPI communications, writing data to LCD screens.", "Configure hardware timers to sample sensors regularly."]
      },
      eightWeeks: {
        title: "Wi-Fi & MQTT Messaging",
        focus: "Access point connections, payload assembly, and publish/subscribe.",
        milestones: ["Connect ESP32 microcontrollers to local Wi-Fi networks.", "Format JSON data payloads containing sensor readings.", "Publish data frames to remote MQTT test brokers."]
      },
      twelveWeeks: {
        title: "Cloud Dashboards & Node-RED",
        focus: "Database records, GUI indicators, and payload routing.",
        milestones: ["Build a data pipeline flow in Node-RED environments.", "Log sensor records in PostgreSQL / InfluxDB databases.", "Design dashboard panels showing live data trends."]
      },
      twentyFourWeeks: {
        title: "Industrial Machine Monitor Deployment Project",
        focus: "Low power sleep cycles, secure certificates, and dashboards.",
        milestones: ["Develop sensor node code using ESP-IDF deep sleep models.", "Secure MQTT paths using AWS IoT Core security keys.", "Build web application dashboards displaying active node metrics."]
      }
    },
    academicAlignment: {
      coreSubjects: ["Microcontrollers and Interfaces", "Wireless Sensor Networks", "IoT Systems Architecture"],
      labSkills: ["Debugging MCU buses using digital logic analyzers", "Measuring node battery power consumption profiles"],
      industryStandards: ["MQTT 3.1.1 protocol rules", "IEEE 802.15.4 specifications"],
    }
  },
  ECE_ADV_COMM: {
    name: "Electronics & Communication Engineering (Advanced Communication Technology)",
    tagline: "RF Frontend Design, 5G Network Orchestration, and Optical Fiber Routing",
    summary: "Pioneering high-throughput communication systems by designing radio frequency (RF) circuits, configuring 5G networks, and deploying fiber optic infrastructure.",
    industryGrowth: {
      growthRate: "10.4% CAGR",
      marketValue: "$340B by 2029",
      topEmployers: ["Ericsson", "Nokia", "Qualcomm", "Jio Platforms", "Airtel", "Huawei"],
      demandDriver: "5G standalone deployments, satellite internet expansion, and fiber-to-the-home upgrades.",
    },
    keySkills: {
      technical: [
        { name: "RF System Design", description: "Impedance matching, microstrip line routing, and network analysis." },
        { name: "Telecommunication Software config", description: "Configuring LTE/5G core nodes, subnets, and routing protocols." }
      ],
      tools: ["Keysight ADS", "MATLAB (Simulink)", "Ansys HFSS", "Wireshark", "GNS3", "Fiber Splice Tools"],
      softSkills: ["System Signal Troubleshooting", "Complex Spectrum Analysis", "Multi-team Deployment Alignment"],
    },
    roles: [
      { title: "RF Design Engineer", description: "Design microstrip antennas, simulate signal losses, and layout RF amplifiers.", salaryRange: "₹6,0,000 - ₹15,00,000" },
      { title: "Telecom Network Engineer", description: "Configure IP routing protocols, monitor optical links, and manage switches.", salaryRange: "₹5,50,000 - ₹13,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "IP Subnetting & Network Simulation",
        focus: "Static routes, subnet mask calculations, and routers.",
        milestones: ["Configure virtual networks containing routers and switches in GNS3.", "Assign IP address blocks following strict subnet boundaries.", "Troubleshoot connection drops using ping and traceroute commands."]
      },
      sixWeeks: {
        title: "Transmission Line Calculations",
        focus: "Impedance matching, Smith Chart plots, and signal reflection.",
        milestones: ["Perform line impedance calculations in MATLAB.", "Design quarter-wave matching transformers on Smith Charts.", "Measure signal reflection losses on transmission cable configurations."]
      },
      eightWeeks: {
        title: "Microstrip Filter Designs",
        focus: "Layout dimensions, dielectric constant, and RF simulations.",
        milestones: ["Model microstrip bandpass filters in Keysight ADS.", "Analyze filter frequency attenuation profiles in simulator plots.", "Adjust filter dimensions, optimizing return loss performance."]
      },
      twelveWeeks: {
        title: "5G RAN & Core Configurations",
        focus: "Protocol messaging, network slicing, and trace analysis.",
        milestones: ["Configure open-source 5G standalone core software stacks.", "Capture and analyze network protocol exchanges using Wireshark.", "Simulate multiple network slices under varying traffic loads."]
      },
      twentyFourWeeks: {
        title: "Satellite Ground Receiver System Design",
        focus: "Microstrip patch antenna operating at 2.4GHz in HFSS, link budgets, and validation.",
        milestones: ["Design a microstrip patch antenna operating at 2.4GHz in HFSS.", "Draft link budget calculations, predicting overall signal losses.", "Perform physical testing, validating antenna radiation patterns."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Electromagnetic Waves & Transmission Lines", "Digital Communication", "Satellite Communications"],
      labSkills: ["Operating RF spectrum analyzers and signal generators", "Fiber optic cable splicing and optical power loss tests"],
      industryStandards: ["3GPP Release 16/17 (5G NR specifications)", "IEEE 802.11ac (Wireless LAN Specifications)"],
    }
  },
  CSE_AI_ML: {
    name: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    tagline: "Custom Model Architectures, Machine Learning Systems, and Cloud Inference",
    summary: "Building complete enterprise intelligence products by designing model layers, preprocessing high-volume datasets, and hosting inference servers.",
    industryGrowth: {
      growthRate: "24.6% CAGR",
      marketValue: "$820B by 2031",
      topEmployers: ["Google", "NVIDIA", "Meta", "Amazon Web Services", "Microsoft", "Salesforce"],
      demandDriver: "Decision engine automations, dynamic personalization software, and high-scale cloud analytics.",
    },
    keySkills: {
      technical: [
        { name: "Model Architecture Formulation", description: "Designing neural networks, loss functions, and dataset loaders in PyTorch." },
        { name: "Data Engineering Pipeline Development", description: "Automating data cleaning, features extraction, and database loading." }
      ],
      tools: ["PyTorch", "TensorFlow", "Pandas & NumPy", "MLflow", "FastAPI", "Docker"],
      softSkills: ["Statistical Integrity Checking", "Algorithmic Efficiency Reasoning", "Performance Output Visualization"],
    },
    roles: [
      { title: "Machine Learning Architect", description: "Design model pipelines, train deep architectures, and optimize runtimes.", salaryRange: "₹9,0,0,000 - ₹26,00,000" },
      { title: "Data Pipeline Developer", description: "Configure automated database cleanups, feature tables, and API servers.", salaryRange: "₹7,00,000 - ₹18,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Classical ML & Feature Engineering",
        focus: "Data preparation, linear classifiers, and metrics check.",
        milestones: ["Perform feature encoding and cleaning steps using Pandas.", "Train classification trees and random forests in Scikit-Learn.", "Validate accuracy metrics on test folds using cross-validation."]
      },
      sixWeeks: {
        title: "Custom PyTorch Layer Architectures",
        focus: "Gradient calculations, optimizer setups, and linear layers.",
        milestones: ["Write custom neural layers extending PyTorch modules.", "Implement training loops, tracking loss changes over epochs.", "Configure backpropagation sweeps, testing different optimizer variables."]
      },
      eightWeeks: {
        title: "Convolutional Neural Networks (CNNs)",
        focus: "Filter layouts, pooling steps, and image classification.",
        milestones: ["Train image classifiers on CIFAR-10 datasets using PyTorch.", "Implement image data enhancements using torchvision transforms.", "Examine confusion matrix plots, finding misclassification bugs."]
      },
      twelveWeeks: {
        title: "Sequence Models & Text Pipelines",
        focus: "Embeddings, attention mechanisms, and fine-tuning.",
        milestones: ["Fine-tune pre-trained BERT architectures for sentiment tasks.", "Configure custom dataset loaders handling raw text parameters.", "Build a custom semantic search engine using vector similarity search."]
      },
      twentyFourWeeks: {
        title: "Enterprise ML System Production Tapeout",
        focus: "API hosting, parameter logs, container runs, and speed optimizations.",
        milestones: ["Host deep model inference endpoints behind FastAPI servers.", "Configure experiment logging and parameter runs via MLflow.", "Containerize applications, optimizing RAM usage, and deploy on AWS."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Linear Algebra & Multivariable Calculus", "Machine Learning Paradigms", "Deep Learning Architectures"],
      labSkills: ["Debugging data pipeline errors on cloud platforms", "Setting up local Python Conda developer environments"],
      industryStandards: ["IEEE Ethically Aligned AI Guidelines", "ISO/IEC 42001 (Artificial Intelligence Management)"],
    }
  },
  CHEM: {
    name: "Chemical Engineering",
    tagline: "Process Plant Simulations, Reactor Design, and Chemical System Optimizations",
    summary: "Designing and operating safe chemical processing plants by simulating fluid dynamics, sizing chemical reactors, and managing separation systems.",
    industryGrowth: {
      growthRate: "4.5% CAGR",
      marketValue: "$4.1T by 2030",
      topEmployers: ["Reliance Industries", "ONGC", "Dow Chemical", "BASF", "L&T Hydrocarbon", "Shell"],
      demandDriver: "Petrochemical expansion projects, green hydrogen processing, and environmental scrubbers.",
    },
    keySkills: {
      technical: [
        { name: "Process Modeling", description: "Formulating mass and energy balances, heat exchangers, and distillation columns." },
        { name: "Chemical Reactor Sizing", description: "Calculating reaction kinetics, choosing vessel dimensions, and thermal controls." }
      ],
      tools: ["ASPEN Plus", "HYSYS", "MATLAB", "AutoCAD", "Design Expert", "BOD/COD Analyzers"],
      softSkills: ["Chemical Hazard Evaluation (HAZOP)", "Critical Safety Management", "Operations Flow Communication"],
    },
    roles: [
      { title: "Chemical Process Engineer", description: "Design plant flow diagrams, write mass balance calculations, and size pumps.", salaryRange: "₹5,00,000 - ₹13,00,000" },
      { title: "Plant Operations Supervisor", description: "Monitor reactor metrics, maintain safety standards, and optimize yields.", salaryRange: "₹4,80,000 - ₹12,0,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Plant Piping & Layout Drafting",
        focus: "Process flow diagrams, piping symbols, and equipment positions.",
        milestones: ["Draft clean Process Flow Diagrams (PFD) in AutoCAD.", "Add standard instrumentation tags following ISA symbology.", "Design equipment placement drawings showing pump foundations."]
      },
      sixWeeks: {
        title: "Thermodynamic Fluid Properties",
        focus: "Equation of state setups, vapor liquid equilibria, and flash calculations.",
        milestones: ["Simulate multi-component flash separations in ASPEN HYSYS.", "Select appropriate thermodynamic equations of state (PR/SRK).", "Plot vapor-liquid equilibrium (VLE) curves for binary mixtures."]
      },
      eightWeeks: {
        title: "Distillation Column modeling",
        focus: "Tray calculations, reflux ratios, and separation efficiency.",
        milestones: ["Size distillation column tray counts in ASPEN Plus.", "Evaluate reflux changes, optimizing output purities.", "Calculate condenser heat load profiles under peak feeds."]
      },
      twelveWeeks: {
        title: "Chemical Reactor Design",
        focus: "Reaction rates, volume sizing, and heat exchange loops.",
        milestones: ["Size continuous stirred-tank reactors (CSTR) in ASPEN.", "Determine temperature profiles inside tubular plug flow vessels.", "Design cooling water jackets to control exothermic reaction temperatures."]
      },
      twentyFourWeeks: {
        title: "Full Plant Process Design Project",
        focus: "HAZOP audits, mass balance simulations, and cost calculations.",
        milestones: ["Perform a complete HAZOP audit study on a reactor design.", "Simulate a chemical production process in ASPEN Plus.", "Calculate capital costs and write equipment specification sheets."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Chemical Reaction Engineering", "Mass Transfer Operations", "Chemical Process Calculations"],
      labSkills: ["Operating distillation columns and measuring separation factors", "Testing chemical reaction rates under varying temperatures"],
      industryStandards: ["OSHA Process Safety Management Guidelines", "ASME Section VIII (Pressure Vessel Design)"],
    }
  },
  CSE_DATA: {
    name: "Computer Science & Engineering (Data Science)",
    tagline: "Big Data Processing, Statistical Modeling, and Enterprise Data Warehousing",
    summary: "Architecting enterprise data storage systems and pipelines to process, analyze, and build statistical prediction models from massive datasets.",
    industryGrowth: {
      growthRate: "16.8% CAGR",
      marketValue: "$320B by 2029",
      topEmployers: ["Amazon Web Services", "JPMorgan Chase", "Google Cloud", "Snowflake", "Meta", "Target"],
      demandDriver: "High-volume data collection, automated business reporting demand, and real-time user analysis.",
    },
    keySkills: {
      technical: [
        { name: "Big Data Processing", description: "Writing distributed map-reduce jobs, streaming datasets, and database queries." },
        { name: "Data Pipeline Engineering", description: "Designing extract-transform-load (ETL) tasks, managing warehouses, and schemas." }
      ],
      tools: ["Apache Spark", "Python", "SQL (PostgreSQL)", "Tableau", "Airflow", "Snowflake"],
      softSkills: ["Statistical Inference Integrity", "Data Privacy Concern", "Analytical Result Presentation"],
    },
    roles: [
      { title: "Data Engineer", description: "Design database schemas, build pipeline tasks, and manage data warehouses.", salaryRange: "₹7,00,000 - ₹18,00,000" },
      { title: "Analytics Specialist", description: "Write complex query reports, clean raw datasets, and build visualizations.", salaryRange: "₹6,00,000 - ₹15,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Advanced SQL & Database Design",
        focus: "Relational constraints, join optimization, and indexing.",
        milestones: ["Write complex database queries containing CTEs and window expressions.", "Create optimized database indexes on high-volume tables.", "Design third-normal-form schemas for tracking commerce data."]
      },
      sixWeeks: {
        title: "Data Visualization & Tableau Dashboards",
        focus: "Data preparation, chart configurations, and calculated metrics.",
        milestones: ["Import database data files directly into Tableau dashboards.", "Build calculation columns displaying complex user metrics.", "Publish interactive reports showing business growth patterns."]
      },
      eightWeeks: {
        title: "Data Pipelines & Airflow Orchestrations",
        focus: "DAG script parameters, pipeline schedules, and execution tasks.",
        milestones: ["Write Python DAG configurations scheduling daily data cleanups.", "Build automated ETL scripts parsing API JSON payload files.", "Configure system-level task alerts notifying of database errors."]
      },
      twelveWeeks: {
        title: "Big Data Engine Spark Analytics",
        focus: "Resilient distributed datasets, dataframe operations, and clustering.",
        milestones: ["Write distributed data aggregation scripts in PySpark.", "Analyze high-volume log datasets on local Spark cluster nodes.", "Implement data partitions optimizing file output runtimes."]
      },
      twentyFourWeeks: {
        title: "Enterprise Data Warehouse Production Tapeout",
        focus: "Cloud database setup, pipeline schedules, and schema mapping.",
        milestones: ["Design Snowflake database schemas storing transaction logs.", "Deploy Apache Airflow monitoring pipelines on AWS EC2 nodes.", "Compile dashboard views displaying live user metric transformations."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Database Management Systems", "Mathematical Statistics", "Data Mining & Warehousing"],
      labSkills: ["Optimizing slow-running SQL queries using EXPLAIN plans", "Configuring Spark computing environments on cloud nodes"],
      industryStandards: ["GDPR Data Handling Specifications", "IEEE Big Data Standards Guidelines"],
    }
  },
  ECE_VLSI: {
    name: "Electronics Engineering (VLSI Design & Technology)",
    tagline: "RTL Code Generation, Silicon Verification Suites, and ASIC Physical Syntheses",
    summary: "Designing microchip architectures, writing register-transfer level (RTL) code, and configuring simulation environments to verify ASIC designs.",
    industryGrowth: {
      growthRate: "14.2% CAGR",
      marketValue: "$820B by 2030",
      topEmployers: ["Intel India", "Qualcomm VLSI", "NVIDIA Chip Design", "Synopsys", "Cadence", "AMD"],
      demandDriver: "Custom AI hardware acceleration demands, 5G chip optimization, and automotive silicon expansion.",
    },
    keySkills: {
      technical: [
        { name: "Verilog RTL Design", description: "Writing register-transfer code, Finite State Machines, and arithmetic hardware." },
        { name: "SystemVerilog Verification", description: "Creating testbenches, verification test constraints, and functional coverage." }
      ],
      tools: ["ModelSim / Questa", "Xilinx Vivado", "Synopsys Design Compiler", "Verilog", "SystemVerilog", "UVM"],
      softSkills: ["Silicon Debugging Logic", "Detailed Hardware Validation", "EDA Compiler Diagnostic Skills"],
    },
    roles: [
      { title: "RTL Design Engineer", description: "Write synthesizable Verilog code, define register paths, and close timing.", salaryRange: "₹7,50,000 - ₹18,00,000" },
      { title: "Design Verification Specialist", description: "Build SystemVerilog testbenches, write test cases, and analyze coverage.", salaryRange: "₹8,00,000 - ₹20,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Digital Logic & Verilog Coding",
        focus: "Combinational gates, flip-flop registers, and testbench files.",
        milestones: ["Write synthesizable Verilog modules modeling binary decoders.", "Program sequential logic (counters, registers) with clock signals.", "Compile testbench files, verifying circuit logic in ModelSim."]
      },
      sixWeeks: {
        title: "Finite State Machine Designs",
        focus: "Mealy/Moore structures, state registers, and sequence logic.",
        milestones: ["Design Moore FSM modules detecting code sequences in C.", "Implement state transitions, avoiding deadlock states.", "Analyze logic synthesis logs, checking gate-level outputs in Vivado."]
      },
      eightWeeks: {
        title: "SystemVerilog OOP Verification",
        focus: "Class instances, virtual interface links, and random test inputs.",
        milestones: ["Build SystemVerilog verification classes representing driver steps.", "Implement random test vectors using constraint rules.", "Link physical signal interfaces using virtual interfaces."]
      },
      twelveWeeks: {
        title: "UVM Class Architecture Synthesis",
        focus: "Component phases, driver models, and monitor loops.",
        milestones: ["Configure UVM environment configurations containing agents.", "Program driver and monitor classes verifying packet data.", "Analyze overall functional coverage metrics during runs."]
      },
      twentyFourWeeks: {
        title: "ASIC Microprocessor Core Tapeout",
        focus: "ALU architectures, timing validation, and verification suites.",
        milestones: ["Design a 16-bit RISC ALU module in SystemVerilog.", "Assemble a complete self-checking verification test suite.", "Verify timing constraint runs, achieving zero clock setup failures."],
      }
    },
    academicAlignment: {
      coreSubjects: ["VLSI Design", "Digital System Design", "Solid State Electronic Devices"],
      labSkills: ["Synthesizing logic modules on physical FPGA development boards", "Analyzing timing waveform behaviors in digital simulation suites"],
      industryStandards: ["IEEE 1800 (SystemVerilog Standard)", "Accellera UVM Reference Specifications"],
    }
  },
  MINING: {
    name: "Mining Engineering",
    tagline: "Mine Safety Audits, Ventilation System Designs, and Excavation Optimization",
    summary: "Planning and managing mineral extraction sites by designing rock support systems, organizing ventilation networks, and maintaining safety compliance.",
    industryGrowth: {
      growthRate: "3.8% CAGR",
      marketValue: "$1.8T by 2030",
      topEmployers: ["Coal India", "Tata Steel Mining", "Hindustan Zinc", "Adani Mining", "Rio Tinto", "NMDC"],
      demandDriver: "Metal demand for green battery production, safety automation upgrades, and raw resource extraction.",
    },
    keySkills: {
      technical: [
        { name: "Mine Ventilation Design", description: "Calculating air flow requirements, head losses, and sizing ventilation fans." },
        { name: "Rock Mechanics Modeling", description: "Assessing slope stabilities, stress concentrations, and designing structural supports." }
      ],
      tools: ["AutoCAD", "Surpac (Mine Planning)", "Ventsim (Ventilation)", "MATLAB", "GC-MS Rock Testing", "Survey Stations"],
      softSkills: ["Hazard Assessment Rigor", "Emergency Action Planning", "Site Logistics Management"],
    },
    roles: [
      { title: "Mine Planning Engineer", description: "Design pit layout boundaries, plan extraction schedules, and size transport lines.", salaryRange: "₹5,00,000 - ₹12,00,000" },
      { title: "Safety Inspection Manager", description: "Conduct structural slope inspections, monitor gas levels, and train crews.", salaryRange: "₹4,80,000 - ₹11,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Surface Mapping & Pit Drafting",
        focus: "Topographic maps, section profiles, and outline drafting.",
        milestones: ["Draft topographic mining surfaces in AutoCAD.", "Draw detailed section profiles showing geological layers.", "Incorporate geological survey coordinates into planning maps."]
      },
      sixWeeks: {
        title: "Rock Properties & Testing",
        focus: "Stress measurements, compressive strengths, and support sizing.",
        milestones: ["Calculate rock compressive strengths using test data.", "Size load limits for mechanical rock bolt anchors.", "Determine slope stability margins for open-cut pit models."]
      },
      eightWeeks: {
        title: "Underground Ventilation Modeling",
        focus: "Air flow paths, friction resistance, and fan selections.",
        milestones: ["Design simple ventilation path layouts in Ventsim.", "Calculate total air friction resistance values in airways.", "Specify fan motor sizes matching airway pressure losses."]
      },
      twelveWeeks: {
        title: "Excavation Schedule Planning",
        focus: "Material quantities, haulage route parameters, and schedules.",
        milestones: ["Calculate overall excavation volumes for open-pit designs.", "Plan transport routes, optimizing loader and truck cycles.", "Draft mine expansion schedules in Surpac planning software."]
      },
      twentyFourWeeks: {
        title: "Underground Mine Design Project",
        focus: "Slope stability designs, vent networks, and safety plans.",
        milestones: ["Design underground layout maps showing shaft positions.", "Simulate complex airway networks in Ventsim software.", "Compile complete hazard management plans matching regulations."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Rock Mechanics", "Mine Ventilation", "Surface Mining Technology"],
      labSkills: ["Testing rock samples using uniaxial compression load frames", "Operating anemometers and gas detectors in simulation tunnels"],
      industryStandards: ["DGMS (Directorate General of Mines Safety) Regulations", "ISO 19434 (Mining Safety Classification Rules)"],
    }
  },
  ANIMATION_3D: {
    name: "3D Animation & Graphics",
    tagline: "3D Character Rigging, Production Modeling, and Real-Time Engine Rendering",
    summary: "Creating visual assets and dynamic scenes by modeling 3D geometry structures, building character skeletal rigs, and rendering lighting pipelines.",
    industryGrowth: {
      growthRate: "11.5% CAGR",
      marketValue: "$400B by 2030",
      topEmployers: ["Technicolor", "DNEG", "Prime Focus", "Walt Disney India", "Ubisoft", "Rockstar Games"],
      demandDriver: "Growth in mobile gaming markets, VFX in streaming shows, and real-time visualization applications.",
    },
    keySkills: {
      technical: [
        { name: "3D Polygon Modeling", description: "Formulating topology contours, managing UV layouts, and texturing surface details." },
        { name: "Skeletal Character Rigging", description: "Designing joint systems, paint weight parameters, and inverse kinematic controls." }
      ],
      tools: ["Autodesk Maya", "Blender", "Substance Painter", "ZBrush", "Unreal Engine 5", "Photoshop"],
      softSkills: ["Visual Design Sensitivity", "Technical Problem Isolation", "Creative Project Timelines Alignment"],
    },
    roles: [
      { title: "3D Assets Artist", description: "Model polygonal props, map UV coordinates, and texture surface maps.", salaryRange: "₹4,0,000 - ₹9,50,000" },
      { title: "Technical Rigger Specialist", description: "Construct skeleton structures, coordinate weights, and build controls.", salaryRange: "₹4,50,000 - ₹12,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "3D Object modeling Basics",
        focus: "Polygon tools, bevel actions, and asset shapes.",
        milestones: ["Model hard-surface structural assets (props) in Blender.", "Clean up polygon topologies, avoiding non-manifold errors.", "Configure basic camera shapes and lighting sources for rendering."]
      },
      sixWeeks: {
        title: "UV Coordinate layouts & Texturing",
        focus: "Seam placements, UV scales, and PBR textures.",
        milestones: ["Unwrap complex polygon asset meshes in Maya.", "Texture models in Substance Painter using smart materials.", "Export base color, roughness, and normal texture maps."]
      },
      eightWeeks: {
        title: "Skeletal Rigging Fundamentals",
        focus: "Joint placements, parenting loops, and constraint rules.",
        milestones: ["Build character skeleton joints following anatomy rules.", "Paint weight influences on deformable skin components.", "Configure inverse kinematic (IK) controllers on limb paths."]
      },
      twelveWeeks: {
        title: "Real-Time Game Engine setups",
        focus: "Texture importing, material shaders, and static lighting.",
        milestones: ["Import asset files directly into Unreal Engine 5 projects.", "Build custom material shaders linking texture inputs.", "Bake high-resolution static lighting maps on target scenes."]
      },
      twentyFourWeeks: {
        title: "Short Animated Production Video Project",
        focus: "Modeling assets, skeletal rigging, motion keys, and rendering.",
        milestones: ["Model, rig, and animate a 3D character in a short scene.", "Apply PBR texture maps to all objects in Blender.", "Render final video outputs, verifying visual styles and colors."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Computer Graphics & Multimedia", "3D Animation Principles", "Visual Arts & Aesthetics"],
      labSkills: ["Optimizing polycounts and topology flow in model editors", "Troubleshooting skin weight abnormalities in character rigs"],
      industryStandards: ["PBR (Physically Based Rendering) Material Rules", "ACES Color Space Management Specs"],
    }
  },
  MECH_SMART: {
    name: "Mechanical & Smart Manufacturing",
    tagline: "Industrial IoT Nodes, Automated Robotic Welding, and Smart Factory Networks",
    summary: "Converting traditional factory facilities into automated smart hubs by deploying industrial sensor networks, programming arm paths, and optimizing lines.",
    industryGrowth: {
      growthRate: "12.4% CAGR",
      marketValue: "$450B by 2030",
      topEmployers: ["Siemens Smart Infrastructure", "Bosch Rexroth", "ABB Robotics", "Tata Motors Smart Division", "L&T Automation", "Fanuc"],
      demandDriver: "Industry 4.0 production shifts, real-time machine monitor demands, and high-precision assembly lines.",
    },
    keySkills: {
      technical: [
        { name: "Industrial Networking Config", description: "Configuring Modbus/EtherNet protocols, wiring inputs, and managing switches." },
        { name: "Industrial Robotics Pathing", description: "Programming robotic arm coordinates, cycle times, and tool attachments." }
      ],
      tools: ["Siemens TIA Portal", "Fanuc Roboguide", "AutoCAD", "SolidWorks", "Python", "MQTT Brokers"],
      softSkills: ["Factory Safety Orientation", "Diagnostics Problem Isolation", "Automation Process Planning"],
    },
    roles: [
      { title: "Smart Factory Integrator", description: "Install network gateways, map sensor records, and compile database views.", salaryRange: "₹5,50,000 - ₹14,00,000" },
      { title: "Robotics Path programmer", description: "Design robotic cell paths, coordinate cycle steps, and verify boundaries.", salaryRange: "₹5,00,000 - ₹13,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Automation Drafting & Schematic Basics",
        focus: "Control circuits, signal symbols, and terminal plans.",
        milestones: ["Draft PLC controller schematic drawings in AutoCAD.", "Incorporate standard sensor signals into wiring diagrams.", "Design safe terminal connection blocks for factory units."]
      },
      sixWeeks: {
        title: "Factory Networks & Modbus Communication",
        focus: "Device registers, data requests, and network switches.",
        milestones: ["Link temperature sensors to registers using Modbus RTU.", "Configure network switch configurations in factory networks.", "Verify sensor data outputs using terminal diagnostic software."]
      },
      eightWeeks: {
        title: "Robotic Cell Path Programming",
        focus: "Coordinate frameworks, speed variations, and cycle checks.",
        milestones: ["Program tool path loops in Fanuc Roboguide environments.", "Define joint speed constraints, preventing physical collisions.", "Optimize cycle times, verifying path durations on models."]
      },
      twelveWeeks: {
        title: "IoT Node MQTT Integrations",
        focus: "Wi-Fi connections, payload packaging, and broker databases.",
        milestones: ["Connect industrial gateways to local Wi-Fi networks.", "Format JSON data payloads containing machine parameters.", "Publish parameter streams to MQTT brokers for storage."]
      },
      twentyFourWeeks: {
        title: "Smart Machine Assembly Integration Project",
        focus: "Network wiring, robotic paths, and monitoring dashboards.",
        milestones: ["Design a smart robotic cell using SolidWorks modeling.", "Program joint path movements and coordinate PLC IO signals.", "Build web application dashboards displaying active machine metrics."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Automation & Robotics", "Industrial IoT Systems", "Computer Integrated Manufacturing"],
      labSkills: ["Wiring field sensors to industrial PLC controller units", "Calibrating robotic tool configurations on physical arms"],
      industryStandards: ["IEC 61131-3 (PLC Programming Languages)", "ISO 10218 (Industrial Robot Safety Standards)"],
    }
  },
  MECHATRONICS: {
    name: "Mechatronics Engineering",
    tagline: "Robotic Joint Actuators, Closed-Loop Control Systems, and Sensor Fusion",
    summary: "Unifying mechanical frames, control electronics, and real-time firmware to design robotic joints, medical equipment, and automation lines.",
    industryGrowth: {
      growthRate: "8.9% CAGR",
      marketValue: "$210B by 2030",
      topEmployers: ["Bosch Group", "Siemens Motion Control", "ABB Robotics", "ASML", "Fanuc", "Yaskawa India"],
      demandDriver: "High-speed assembly automations, smart home equipment, and automated guided vehicles (AGVs).",
    },
    keySkills: {
      technical: [
        { name: "Closed-Loop Control design", description: "Formulating PID control loops, reading encoder positions, and tuning motor paths." },
        { name: "Sensory Interface circuit design", description: "Designing analog frontend filters, buffer stages, and multiplexer blocks." }
      ],
      tools: ["MATLAB/Simulink", "Altium Designer", "STM32CubeIDE", "SolidWorks", "LabVIEW", "Oscilloscopes"],
      softSkills: ["Hardware-Firmware Troubleshooting", "Diagnostic Analysis Logic", "Safety-Critical Design Focus"],
    },
    roles: [
      { title: "Mechatronics Hardware Designer", description: "Design motor power boards, layout schematics, and select actuators.", salaryRange: "₹5,50,000 - ₹13,50,000" },
      { title: "Automation Control specialist", description: "Implement real-time PID loops, read encoders, and tune actuator speeds.", salaryRange: "₹6,00,000 - ₹15,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Analog Sensor Interfaces",
        focus: "Op-amp buffers, low-pass filter grids, and voltage conversions.",
        milestones: ["Build active op-amp buffer circuits for sensor signals.", "Implement low-pass filtering, reducing electrical motor noise.", "Measure conversion errors on ADC pins using test levels."]
      },
      sixWeeks: {
        title: "PCB Hardware Layouts",
        focus: "Component footprints, trace widths, and ground layers.",
        milestones: ["Design schematics for motor driver boards in Altium.", "Route high-current traces, placing thick copper pours.", "Export standard Gerber layout files for circuit fabrication."]
      },
      eightWeeks: {
        title: "Embedded Controller Programming",
        focus: "PWM registries, encoder inputs, and serial communications.",
        milestones: ["Configure microcontroller PWM channels for motor control.", "Program timer registries, reading quad encoder counts.", "Write serial logging code, outputting motor speed values."]
      },
      twelveWeeks: {
        title: "Closed-Loop PID Motor Tuning",
        focus: "Simulink layouts, parameter variables, and loop tuning.",
        milestones: ["Model motor electrical parameters in MATLAB/Simulink.", "Program proportional-integral-derivative (PID) control code.", "Tune PID values, minimizing motor output overshoot curves."]
      },
      twentyFourWeeks: {
        title: "Autonomous Vehicle Chassis Integration Project",
        focus: "Mechanical frame models, PCB routes, firmware loops, and verification.",
        milestones: ["Model a 2-wheel vehicle chassis in SolidWorks.", "Design, route, and compile custom control PCB layouts.", "Program firmware executing sensor fusion and trajectory paths."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Control Systems Engineering", "Sensors & Instrumentation", "Microprocessors & Microcontrollers"],
      labSkills: ["Tuning DC motor PID velocity loops via firmware edits", "Debugging high-frequency noise using digital oscilloscopes"],
      industryStandards: ["ISO 13849 (Safety of Machinery - Control Systems)", "IEEE 1451 (Standard for Smart Transducers)"],
    }
  },
  CSE_NETWORKS: {
    name: "Computer Science & Engineering (Networks)",
    tagline: "Enterprise Routing Protocols, Network Telemetry, and Cloud Infrastructure Security",
    summary: "Architecting corporate network layouts, configuring software-defined switches, and deploying security firewalls to manage enterprise data flows.",
    industryGrowth: {
      growthRate: "9.2% CAGR",
      marketValue: "$180B by 2029",
      topEmployers: ["Cisco Systems", "Juniper Networks", "Arista Networks", "Airtel Business", "AWS Networking", "VMware"],
      demandDriver: "Transition to software-defined networks, multi-cloud routing demands, and enterprise firewalls.",
    },
    keySkills: {
      technical: [
        { name: "Enterprise Protocol Config", description: "Configuring BGP, OSPF, and VLAN setups on managed enterprise switches." },
        { name: "Network Infrastructure Security", description: "Implementing IPsec tunnels, configuring ACL rules, and deploying IDS." }
      ],
      tools: ["GNS3", "Wireshark", "Cisco Packet Tracer", "Python", "Splunk", "AWS (VPC, Route53)"],
      softSkills: ["Network Outage Diagnostics", "System Topology Planning", "Information Security Awareness"],
    },
    roles: [
      { title: "Network Solutions Architect", description: "Design corporate network topologies, configure routing paths, and size links.", salaryRange: "₹7,50,000 - ₹18,50,000" },
      { title: "Security Network Engineer", description: "Configure IPsec tunnels, write firewall rules, and monitor connections.", salaryRange: "₹6,0,000 - ₹15,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "IP Addressing & Subnet Designs",
        focus: "Mask boundaries, static route configurations, and routing setups.",
        milestones: ["Design network structures containing routers in Packet Tracer.", "Perform static routing setups between mock branch locations.", "Troubleshoot connectivity issues using ping and traceroute commands."]
      },
      sixWeeks: {
        title: "VLAN & Dynamic Routing Configs",
        focus: "Switch ports, OSPF parameters, and dynamic route checks.",
        milestones: ["Configure VLAN partitions on managed Cisco switches.", "Set up dynamic routing using OSPF protocols in GNS3.", "Examine routing tables, verifying dynamic path adjustments."]
      },
      eightWeeks: {
        title: "IPsec Tunnels & Network Security",
        focus: "Encryption protocols, ACL statements, and tunnel interfaces.",
        milestones: ["Configure secure IPsec tunnels linking mock company sites.", "Write Access Control Lists (ACL) restricting user subnets.", "Verify connection encryption packages using Wireshark captures."]
      },
      twelveWeeks: {
        title: "Network Automation & Python Scripts",
        focus: "Device logins, config scripting, and parameter edits.",
        milestones: ["Write Python scripts using Netmiko to pull device configs.", "Automate VLAN additions across multiple switches via code.", "Parse switch diagnostic logs, reporting port errors automatically."]
      },
      twentyFourWeeks: {
        title: "Enterprise Multi-Site Architecture Project",
        focus: "Redundant paths, firewall setups, and telemetry monitors.",
        milestones: ["Design a multi-region enterprise network structure in GNS3.", "Configure redundant paths using BGP routing configurations.", "Deploy Splunk telemetry servers monitoring connection health maps."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Computer Networks", "Network Security Protocols", "Software Defined Networking"],
      labSkills: ["Configuring routing rules on physical hardware switches", "Analyzing BGP convergence tables in simulator windows"],
      industryStandards: ["RFC 2544 (Benchmarking Methodology for Network Interconnect)", "IEEE 802.1Q (Virtual Bridged Local Area Networks)"],
    }
  },
  CSE_IOT_CYBER_BLOCK: {
    name: "Computer Science & Engineering (IoT & Cyber Security including Blockchain)",
    tagline: "Cryptographic Ledgers, Secure Embedded firmware, and Smart Contracts",
    summary: "Pioneering secure decentralized networks by designing encrypted IoT sensor nodes, writing blockchain smart contracts, and implementing zero-trust interfaces.",
    industryGrowth: {
      growthRate: "18.5% CAGR",
      marketValue: "$450B by 2032",
      topEmployers: ["ConsenSys", "IBM Blockchain Division", "Chainlink", "Qualcomm Security", "Bosch IoT", "Accenture Security"],
      demandDriver: "Decentralized machine supply chains, secure industrial sensor logs, and tamper-proof asset data.",
    },
    keySkills: {
      technical: [
        { name: "Smart Contract Development", description: "Writing Ethereum Solidity code, testing logic, and optimizing contract gas." },
        { name: "Secure MCU Firmware", description: "Configuring hardware cryptographic chips, secure boot loaders, and key storage." }
      ],
      tools: ["Solidity & Hardhat", "Metamask", "STM32CubeIDE", "Python", "Truffle", "OpenZeppelin"],
      softSkills: ["Zero-Trust Security Reasoning", "Decentralized Architecture Logic", "Auditing Code Vulnerabilities"],
    },
    roles: [
      { title: "Blockchain Solutions Engineer", description: "Design smart contracts, deploy blockchain nodes, and build Web3 APIs.", salaryRange: "₹8,50,000 - ₹22,00,000" },
      { title: "IoT Security Integrator", description: "Secure firmware boot processes, configure chip keys, and write API logic.", salaryRange: "₹7,00,000 - ₹18,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "MCU C/C++ & Firmware Encryption",
        focus: "GPIO control, hardware symmetric decryption, and keys.",
        milestones: ["Write microcontroller code encrypting local sensor values.", "Configure AES hardware decryption registers on STM32 boards.", "Perform secure key exchange updates over serial interfaces."]
      },
      sixWeeks: {
        title: "Solidity Smart Contract Syntax",
        focus: "Data arrays, state variables, and transaction logic.",
        milestones: ["Write basic Solidity contracts storing sensor logs.", "Configure user modifier logic limiting contract function calls.", "Compile and run unit tests on contracts using Hardhat tools."]
      },
      eightWeeks: {
        title: "ERC-20 & Smart Token Standards",
        focus: "Token balance maps, transfers, and compiler configurations.",
        milestones: ["Deploy ERC-20 token contracts following OpenZeppelin templates.", "Implement token transfer functions tracking custom balances.", "Verify contract execution gas usage optimization profiles."]
      },
      twelveWeeks: {
        title: "IoT Node Blockchain Connections",
        focus: "Node RPC gateways, API signatures, and transaction feeds.",
        milestones: ["Connect ESP32 microcontrollers to blockchain RPC endpoints.", "Sign transaction hashes inside microcontroller firmware scripts.", "Publish sensor data entries to public testnet blockchains."],
      },
      twentyFourWeeks: {
        title: "Decentralized Secure Asset Tracker Project",
        focus: "Custom sensor layout, Solidity contracts, and dashboard UI.",
        milestones: ["Design custom sensor node firmware with secure boots.", "Deploy ERC-721 token contracts representing asset records.", "Build React UI dashboards showing asset paths and records."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Cryptography & Network Security", "Blockchain Architecture", "IoT Protocols & Security"],
      labSkills: ["Deploying smart contracts to test networks using Hardhat", "Analyzing embedded hardware vulnerabilities via side-channel probes"],
      industryStandards: ["ERC-20 and ERC-721 Token Standards", "ISO/IEC 29147 (Vulnerability Disclosure Protocols)"],
    }
  },
  ROBOTICS_AUTO: {
    name: "Robotics & Automation",
    tagline: "Industrial Robot Cells, PLC Line Control, and Kinematics Simulation",
    summary: "Developing and optimizing automated machinery by designing robotic workcells, programming logic controllers, and tuning joint paths.",
    industryGrowth: {
      growthRate: "10.8% CAGR",
      marketValue: "$280B by 2030",
      topEmployers: ["Fanuc India", "Yaskawa", "Kuka Robotics", "ABB Automation", "L&T Automation", "Schneider Electric"],
      demandDriver: "Factory automation upgrades, automated welding cells, and warehouse transport systems.",
    },
    keySkills: {
      technical: [
        { name: "Robotic Path Programming", description: "Design of tool trajectories, joint coordinate systems, and cycle times." },
        { name: "PLC System Configuration", description: "Writing ladder logic programs, mapping registers, and HMI design." }
      ],
      tools: ["Siemens TIA Portal", "Fanuc Roboguide", "AutoCAD Electrical", "SolidWorks", "Python", "MS Project"],
      softSkills: ["Factory Safety Orientation", "Process Diagnostics Reasoning", "Coordination in Automation Tasks"],
    },
    roles: [
      { title: "Robotics Cell Programmer", description: "Design robotic arm trajectories, program path speeds, and write logic.", salaryRange: "₹5,00,000 - ₹12,50,000" },
      { title: "PLC Commissioning Engineer", description: "Program PLC systems, configure SCADA monitoring panels, and test wiring.", salaryRange: "₹5,50,000 - ₹14,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Electrical CAD & Control Schematic Basics",
        focus: "Control cabinet wiring, input symbols, and terminal plans.",
        milestones: ["Draft PLC control panel wiring layouts in AutoCAD.", "Add proper wiring labels and cross-reference markings.", "Design terminal connections blocks for sensor signals."]
      },
      sixWeeks: {
        title: "Siemens PLC Programming basics",
        focus: "Digital inputs, ladder logic loops, and coil signals.",
        milestones: ["Write digital logic programs in TIA Portal software.", "Calibrate timer values for automated conveyer belts.", "Monitor PLC outputs on simulator test interfaces."]
      },
      eightWeeks: {
        title: "Robotic Cell Kinematic paths",
        focus: "Tool center points, joint parameters, and coordinate bases.",
        milestones: ["Configure tool center points (TCP) in Fanuc Roboguide.", "Program speed variables, avoiding joint path constraints.", "Simulate cell operations, verifying cycle time targets."]
      },
      twelveWeeks: {
        title: "SCADA & Factory Networks",
        focus: "SCADA screens, database records, and network cables.",
        milestones: ["Design HMI screens showing active conveyor speed metrics.", "Log PLC parameters to historical data files.", "Connect PLC units over local Profinet cabling networks."]
      },
      twentyFourWeeks: {
        title: "Automated Sorting Robotic Cell Project",
        focus: "Robot path design, PLC logic integrations, and verification.",
        milestones: ["Design mechanical cell structures using SolidWorks modeling.", "Program joint paths and coordinate PLC handshake signals.", "Deliver complete single-line drawings and safety layouts."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Robotics Engineering", "Industrial Automation", "Control Systems"],
      labSkills: ["Wiring field sensors to industrial PLC cabinet units", "Calibrating tool coordinates on physical robotic arms"],
      industryStandards: ["IEC 61131-3 (PLC Programming Languages)", "ISO 10218 (Industrial Robot Safety Standards)"],
    }
  },
  INSTRUMENTATION: {
    name: "Instrumentation Engineering",
    tagline: "Industrial Process Sensors, Calibration loops, and SCADA monitoring",
    summary: "Designing, calibrating, and maintaining high-precision industrial measurement instruments and automated control systems for process industries.",
    industryGrowth: {
      growthRate: "5.6% CAGR",
      marketValue: "$95B by 2030",
      topEmployers: ["Honeywell", "Emerson Process", "Yokogawa", "Siemens", "L&T", "Reliance Industries"],
      demandDriver: "Upgrades in chemical factory sensors, automation in oil refineries, and data monitoring requirements.",
    },
    keySkills: {
      technical: [
        { name: "Sensor Calibration Design", description: "Configuring sensor scaling, analyzing measurement errors, and loop testing." },
        { name: "Control Loop Engineering", description: "Design of PID tuning parameters, control valves, and process safety." }
      ],
      tools: ["AutoCAD", "MATLAB", "LabVIEW", "Siemens TIA Portal", "BOD/COD Analyzers", "Pressure Calibrators"],
      softSkills: ["Instrumentation Detail Focus", "Diagnostics Troubleshooting Logic", "System Calibration Precision"],
    },
    roles: [
      { title: "Instrumentation Design Engineer", description: "Draft loop diagrams, size control valves, and select sensors.", salaryRange: "₹4,50,000 - ₹11,50,000" },
      { title: "Control Commissioning Specialist", description: "Calibrate process sensors, tune PID loops, and test wiring loops.", salaryRange: "₹5,00,000 - ₹13,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "P&ID Drafting & Symbol Basics",
        focus: "Process lines, control symbols, and instrument tags.",
        milestones: ["Draft piping and instrumentation diagrams (P&ID) in AutoCAD.", "Add standard instrument tags following ISA-5.1 regulations.", "Design sensor installation drawings showing process flanges."]
      },
      sixWeeks: {
        title: "Sensor Transducers & Signal Isolation",
        focus: "Analog voltage signals, current loops, and buffer circuits.",
        milestones: ["Simulate analog 4-20mA sensor current loops in LTspice.", "Build opto-isolator circuits separating sensor lines.", "Measure ADC signal conversion accuracy on microcontrollers."]
      },
      eightWeeks: {
        title: "LabVIEW Virtual Instrumentation",
        focus: "Graphical code loops, block diagrams, and data logs.",
        milestones: ["Build virtual measurement systems in LabVIEW software.", "Create data collection charts showing live signal inputs.", "Write measurement logs to CSV data files automatically."]
      },
      twelveWeeks: {
        title: "Control Valves & PID Tuning",
        focus: "Valve sizing, flow profiles, and PID coefficients.",
        milestones: ["Calculate control valve sizing coefficients (Cv) in Excel.", "Program PID control blocks in Siemens PLC setups.", "Tune loop parameters, optimizing response speeds for control valves."]
      },
      twentyFourWeeks: {
        title: "Industrial Distillation Control Loop Project",
        focus: "P&ID diagrams, PLC PID programming, and validation.",
        milestones: ["Design P&ID loop architectures for distillation systems.", "Program PLC control systems managing temperature and level signals.", "Configure SCADA dashboards monitoring process parameters."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Industrial Instrumentation", "Process Control Systems", "Transducers & Sensors"],
      labSkills: ["Calibrating pressure and temperature sensors", "Programming PID control systems in LabVIEW environments"],
      industryStandards: ["ISA-5.1 (Instrumentation Symbols & Identification)", "IEC 61511 (Functional Safety in Process Industry)"],
    }
  },
  AGRICULTURAL: {
    name: "Agricultural Engineering",
    tagline: "Micro-Irrigation Systems, Farm Machinery Design, and Precision Farming",
    summary: "Designing automated farm machinery, planning precision micro-irrigation systems, and managing food storage facilities using spatial data.",
    industryGrowth: {
      growthRate: "5.2% CAGR",
      marketValue: "$65B by 2030",
      topEmployers: ["Mahindra & Mahindra", "John Deere", "Jain Irrigation", "TAFE", "Escorts", "NABARD"],
      demandDriver: "Water conservation mandates, mechanization in farming, and post-harvest preservation needs.",
    },
    keySkills: {
      technical: [
        { name: "Irrigation Network Design", description: "Calculating pipe flows, sizing pumps, and designing drip emitters." },
        { name: "Farm Machinery Design", description: "Modeling tractor structures, power transmission shafts, and load margins." }
      ],
      tools: ["AutoCAD", "SolidWorks", "QGIS / ArcGIS", "MATLAB", "Design Expert", "MS Excel"],
      softSkills: ["Sustainability Planning Mindset", "Rural Logistics Analysis", "Ecological Impact Concern"],
    },
    roles: [
      { title: "Drip Irrigation Designer", description: "Design field layouts, size irrigation tubes, and calculate pump sizes.", salaryRange: "₹4,0,00,000 - ₹9,50,000" },
      { title: "Tractor Development Engineer", description: "Model transmission components, analyze casing stress, and run tests.", salaryRange: "₹5,00,000 - ₹12,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Farm Layout Drafting Basics",
        focus: "Topographic maps, plot outlines, and pipeline routes.",
        milestones: ["Draft farm site boundaries and terrain details in AutoCAD.", "Place pipeline route paths showing control valve locations.", "Incorporate spatial coordinates into elevation planning maps."]
      },
      sixWeeks: {
        title: "QGIS Spatial Soil Mapping",
        focus: "Coordinate frameworks, GIS layer blocks, and soil parameters.",
        milestones: ["Import geological soil maps into QGIS software.", "Create spatial overlay layers showing soil nutrient values.", "Generate thematic maps showing irrigation suitability zones."]
      },
      eightWeeks: {
        title: "Tractor Transmission Part modeling",
        focus: "Gear designs, assembly constraints, and shafts.",
        milestones: ["Model spur and bevel gears using SolidWorks tools.", "Assemble transmission shaft parts with bearings.", "Perform mechanical clearance checks on dynamic assemblies."]
      },
      twelveWeeks: {
        title: "Drip Irrigation Sizing Calculations",
        focus: "Water pressure calculations, head losses, and pumps.",
        milestones: ["Calculate total friction head losses in drip lines.", "Size pump motor requirements for agricultural fields.", "Draft Bill of Materials (BOM) detailing pipe lengths and emitters."]
      },
      twentyFourWeeks: {
        title: "Precision Smart Farm Design Project",
        focus: "Irrigation piping designs, solar pumps, and soil monitors.",
        milestones: ["Design smart farm layouts integrating soil moisture sensors.", "Size solar powered water pumps and pipeline network pipes.", "Compile comprehensive sustainability reports detailing water savings."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Farm Machinery and Power", "Soil and Water Conservation Engineering", "Post-Harvest Technology"],
      labSkills: ["Testing hydraulic performance of drip emitters", "Measuring engine torque-power outputs on dynamometers"],
      industryStandards: ["IS 12288 (Code of Practice for Drip Irrigation)", "ISO 500 (Tractor Power Take-Off Standards)"],
    }
  },
  WASTE_MGMT: {
    name: "Waste Management",
    tagline: "Solid Waste Processing, Landfill Design, and Recycling Systems Engineering",
    summary: "Designing sustainable municipal recycling systems, engineering secure landfills, and optimizing biological waste processing plants.",
    industryGrowth: {
      growthRate: "5.4% CAGR",
      marketValue: "$560B by 2030",
      topEmployers: ["Ramky Enviro", "Suez India", "Veolia", "Municipal Corporations", "Tata Projects", "Re-Sustainability"],
      demandDriver: "Urban density growth, stricter recycling codes, and bio-gas production targets.",
    },
    keySkills: {
      technical: [
        { name: "Landfill Infrastructure Design", description: "Sizing leachate pipes, designing clay liners, and monitoring gas wells." },
        { name: "Effluent Process Management", description: "Design of biological waste treatment systems and organic digesters." }
      ],
      tools: ["AutoCAD", "QGIS / ArcGIS", "FDS Simulator", "MATLAB", "Spectrophotometers", "BOD/COD Analyzers"],
      softSkills: ["Environmental Safety Rigor", "Regulatory Compliance Checking", "Community Resource Planning"],
    },
    roles: [
      { title: "Landfill Design Engineer", description: "Design cell containment structures, size leachate systems, and write plans.", salaryRange: "₹4,50,000 - ₹11,00,000" },
      { title: "Waste Treatment Supervisor", description: "Supervise bio-gas processing lines, monitor outputs, and run tests.", salaryRange: "₹4,0,000 - ₹10,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Waste Facility Drafting Basics",
        focus: "Facility layout maps, pipe routings, and structural boundaries.",
        milestones: ["Draft sorting facility floor plans in AutoCAD.", "Draw pipeline routes linking bio-reactor tanks.", "Incorporate terrain contour metrics into facility planning maps."]
      },
      sixWeeks: {
        title: "QGIS Facility Site Mapping",
        focus: "GIS data files, water buffers, and coordinates.",
        milestones: ["Import site elevation data tables into QGIS.", "Map distance buffer zones from local water bodies.", "Identify optimal facility locations using spatial mapping tools."]
      },
      eightWeeks: {
        title: "Leachate Pipe Sizing Calculations",
        focus: "Flow capacities, pipe slopes, and collection tanks.",
        milestones: ["Calculate leachate pipe flows under peak rainfall inputs.", "Size collection tank volumes using historical weather data.", "Specify chemical filter materials for leachate treatment cells."]
      },
      twelveWeeks: {
        title: "Bio-Gas Reactor designs",
        focus: "Organic reaction rates, heater loops, and pressure valves.",
        milestones: ["Size organic digester tank volumes in Excel models.", "Design heating systems maintaining digester temperatures.", "Perform mass balance calculations for biogas production lines."]
      },
      twentyFourWeeks: {
        title: "Zero Waste Municipal Plant Design Project",
        focus: "Material sorting setups, bio-gas designs, and ZLD loops.",
        milestones: ["Design sorting plant layout maps showing equipment locations.", "Size municipal bio-gas digestion reactor tanks.", "Write complete environmental safety compliance audit documents."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Solid Waste Management", "Hazardous Waste Engineering", "Environmental Biotechnology"],
      labSkills: ["Testing biological oxygen demand (BOD) in effluents", "Measuring compost nutrient ratios using chemistry steps"],
      industryStandards: ["Solid Waste Management Rules of India", "ISO 14001 Environmental Management Systems"],
    }
  },
  PETROCHEMICAL: {
    name: "Petrochemical Engineering",
    tagline: "Hydrocarbon Refining, Distillation Columns, and Refinery safety systems",
    summary: "Designing, optimizing, and operating high-capacity hydrocarbon refining and extraction facilities with strict focus on thermodynamics and safety.",
    industryGrowth: {
      growthRate: "4.1% CAGR",
      marketValue: "$620B by 2030",
      topEmployers: ["Reliance Industries", "ONGC", "Indian Oil", "BPCL", "Shell", "Chevron"],
      demandDriver: "Polymer production demands, transportation fuel refining, and chemical processing upgrades.",
    },
    keySkills: {
      technical: [
        { name: "Hydrocarbon Process Design", description: "Design of distillation columns, heat exchanger tubes, and pumps." },
        { name: "Refinery Safety Management", description: "Conducting HAZOP analyses, sizing relief valves, and gas detection." }
      ],
      tools: ["ASPEN HYSYS", "MATLAB", "AutoCAD", "Design Expert", "GC-MS Testing", "Spectrophotometer"],
      softSkills: ["Process Safety Awareness", "Diagnostic Troubleshooting Logic", "Plant Operations Coordination"],
    },
    roles: [
      { title: "Refinery Process Engineer", description: "Model hydrocarbon lines, calculate tray counts, and size piping.", salaryRange: "₹6,00,000 - ₹16,00,000" },
      { title: "Petrochemical Safety Specialist", description: "Evaluate safety systems, check pressure limits, and write audits.", salaryRange: "₹5,50,000 - ₹14,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Refinery PFD Drafting Basics",
        focus: "Process streams, vessel symbols, and piping lines.",
        milestones: ["Draft hydrocarbon Process Flow Diagrams (PFD) in AutoCAD.", "Add standard valve and instrumentation symbols to drawings.", "Design equipment layout plans showing tower coordinates."]
      },
      sixWeeks: {
        title: "Vapor-Liquid Equilibrium calculations",
        focus: "State equations, component variables, and flash drums.",
        milestones: ["Simulate multicomponent hydrocarbon flash units in HYSYS.", "Compare thermodynamic models (PR vs SRK) for refining.", "Plot phase envelope curves showing hydrocarbon margins."]
      },
      eightWeeks: {
        title: "Crude Distillation Column modeling",
        focus: "Column trays, reflux ratios, and product fractions.",
        milestones: ["Size crude distillation columns in ASPEN Plus.", "Evaluate reflux changes, optimizing output compositions.", "Calculate condenser heat load profiles under peak feeds."]
      },
      twelveWeeks: {
        title: "Hydrocracking Reactor Design",
        focus: "Reaction kinetics, catalyst shapes, and cooling loops.",
        milestones: ["Size catalytic cracking reactor vessel shapes in Excel.", "Determine temperature profiles inside reactor tubes.", "Design high-pressure safety relief valve sizing targets."]
      },
      twentyFourWeeks: {
        title: "Hydrocarbon Refinery Process Plant Project",
        focus: "HYSYS simulation models, HAZOP studies, and cost estimates.",
        milestones: ["Simulate a crude processing refinery plant in ASPEN.", "Perform a detailed HAZOP safety audit study on a reactor.", "Compile full capital cost lists and equipment data sheets."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Petrochemical Processes", "Petroleum Refinery Engineering", "Process Dynamics & Control"],
      labSkills: ["Measuring petroleum flash point and viscosity values", "Conducting hydrocarbon separations using distillation setups"],
      industryStandards: ["API 521 (Pressure Relieving System Specifications)", "OSHA 1910.119 (Process Safety Rules)"],
    }
  },
  CHEM_PLASTIC_POLYMER: {
    name: "Chemical Engineering (Plastic & Polymer)",
    tagline: "Polymer Processing, Injection Molding Design, and Composite Materials",
    summary: "Formulating novel polymer compounds, designing injection mold tools, and optimizing plastics recycling processes for high-durability products.",
    industryGrowth: {
      growthRate: "5.8% CAGR",
      marketValue: "$750B by 2030",
      topEmployers: ["Reliance Industries", "Supreme Industries", "Pidilite", "Dow Chemical", "BASF", "CIPET"],
      demandDriver: "High-strength automotive composite demand, eco-friendly bioplastics, and recycling innovations.",
    },
    keySkills: {
      technical: [
        { name: "Polymer Blend Formulation", description: "Designing additive ratios, blending parameters, and thermal analysis." },
        { name: "Injection Mold Design", description: "Sizing mold gates, analyzing runner channels, and cooling line layouts." }
      ],
      tools: ["Moldex3D", "SolidWorks", "ANSYS Workbench", "GC-MS Polymer Testing", "Tensile Testing Machine", "AutoCAD"],
      softSkills: ["Materials Testing Precision", "Environmental Safety Awareness", "Production Quality Auditing"],
    },
    roles: [
      { title: "Polymer R&D Chemist", description: "Formulate composite compounds, test thermal limits, and analyze structures.", salaryRange: "₹4,80,000 - ₹12,00,000" },
      { title: "Mold Design Engineer", description: "Design injection molds, run fill simulations, and verify tooling layouts.", salaryRange: "₹5,00,000 - ₹13,00,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Plastic Mold Drafting Basics",
        focus: "Core and cavity structures, mold plates, and split lines.",
        milestones: ["Draft injection mold core-and-cavity layouts in AutoCAD.", "Add standard alignment pin symbols to mold drawings.", "Design basic cooling plate schematics showing water channels."]
      },
      sixWeeks: {
        title: "Polymer Material Characterization",
        focus: "Thermal analyses, melting points, and tensile curves.",
        milestones: ["Measure polymer melting points using DSC test data.", "Plot stress-strain curves for different plastic alloys.", "Analyze degradation profiles under high-heat parameters."]
      },
      eightWeeks: {
        title: "SolidWorks Mold Design toolsets",
        focus: "Split line selections, shut-off surfaces, and mold bases.",
        milestones: ["Design 3D cavity blocks in SolidWorks Mold Tools.", "Place runner channels and gate feeds on mold models.", "Perform draft analysis checks, verifying part ejectability."]
      },
      twelveWeeks: {
        title: "Moldex3D Injection Fill Simulations",
        focus: "Weld line positions, air trap locations, and fill times.",
        milestones: ["Simulate polymer flow patterns inside mold cavities.", "Optimize gate positions to avoid visible weld lines.", "Analyze mold cooling cycles, calculating overall part shrinkage."]
      },
      twentyFourWeeks: {
        title: "Automotive Polymeric Composite Project",
        focus: "Polymer compound formulations, mold designs, and FEA checks.",
        milestones: ["Formulate a glass-reinforced polymer compound model.", "Design a complete injection mold layout for a car component.", "Verify component structural load capacities using FEA models."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Polymer Science & Technology", "Plastics Processing Technology", "Mold & Die Design"],
      labSkills: ["Operating injection molding equipment and tuning parameters", "Conducting polymer DSC thermal analysis scans"],
      industryStandards: ["ASTM D638 (Tensile Properties of Plastics)", "ISO 294 (Injection Moulding of Plastic Test Specimens)"],
    }
  },
  MARINE: {
    name: "Marine Engineering",
    tagline: "Ship Propulsion Systems, Auxiliary Plant Designs, and Marine Hull stability",
    summary: "Designing, operating, and maintaining marine propulsion systems, diesel generator plants, and shipboard auxiliary systems with focus on stability and safety.",
    industryGrowth: {
      growthRate: "3.5% CAGR",
      marketValue: "$120B by 2030",
      topEmployers: ["Mazagon Dock", "Cochin Shipyard", "L&T Shipbuilding", "Maersk", "Adani Ports", "Indian Navy"],
      demandDriver: "Growth in commercial maritime routes, green fuel propulsion upgrades, and navy modernization.",
    },
    keySkills: {
      technical: [
        { name: "Ship Propulsion Design", description: "Sizing marine boilers, auxiliary cooling loops, and propeller shafts." },
        { name: "Hull Stability Analysis", description: "Calculating ship displacement, buoyancy centers, and cargo load margins." }
      ],
      tools: ["AutoCAD", "MATLAB", "SolidWorks", "Maxsurf (Ship Stability)", "MS Project", "GC-MS Oil Testing"],
      softSkills: ["Maritime Operations Safety", "Emergency Action Coordination", "Regulatory Compliance auditing"],
    },
    roles: [
      { title: "Marine Auxiliary Engineer", description: "Design fuel lines, size cooling loops, and manage shipboard boilers.", salaryRange: "₹5,0,000 - ₹13,00,000" },
      { title: "Ship Stability Specialist", description: "Perform hull buoyancy calculations, optimize cargo layouts, and run tests.", salaryRange: "₹5,50,000 - ₹14,50,000" }
    ],
    curriculumPaths: {
      fourWeeks: {
        title: "Marine Layout Drafting Basics",
        focus: "Piping routes, auxiliary equipment positions, and hull contours.",
        milestones: ["Draft marine bilge piping layouts in AutoCAD.", "Draw bulkhead structural outlines showing watertight doors.", "Incorporate compartment coordinates into general ship layouts."]
      },
      sixWeeks: {
        title: "Diesel Engine Fuel system sizing",
        focus: "Fuel flow calculations, filter sizes, and pump ratings.",
        milestones: ["Calculate auxiliary engine fuel rates under full load.", "Size fuel oil purifier lines using Excel templates.", "Draft fuel schematic loops showing safety bypass lines."]
      },
      eightWeeks: {
        title: "Maxsurf Hull buoyancy models",
        focus: "Buoyancy centers, hydrostatic curves, and displacement.",
        milestones: ["Model hull shapes in Maxsurf stability software.", "Plot hydrostatic curves showing displacement changes.", "Calculate initial transverse metacentric heights for cargo loads."]
      },
      twelveWeeks: {
        title: "Propeller Shaft FEA Analysis",
        focus: "Torsional stresses, bearing supports, and fatigue life.",
        milestones: ["Calculate shaft torque forces under full engine power.", "Model shaft structural segments in SolidWorks CAD.", "Verify stress points under combined bending and torsion loads."]
      },
      twentyFourWeeks: {
        title: "Shipboard Auxiliary Engine System Design Project",
        focus: "Piping layouts, stability models, engine sizes, and safety documents.",
        milestones: ["Design cooling water piping diagrams for marine engines.", "Simulate hull stability curves under variable cargo distributions.", "Compile safety logs matching international maritime codes."],
      }
    },
    academicAlignment: {
      coreSubjects: ["Marine Diesel Engines", "Ship Structure & Construction", "Marine Auxiliary Machinery"],
      labSkills: ["Operating marine diesel engines and tuning controls", "Conducting oil viscosity tests and metal wear analyses"],
      industryStandards: ["SOLAS (Safety of Life at Sea) Regulations", "MARPOL (Prevention of Pollution from Ships) Rules"],
    }
  }
};
