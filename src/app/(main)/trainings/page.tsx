import React from "react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CourseCard from "@/components/courses/CourseCard";
import BranchFilterGrid from "@/components/courses/BranchFilterGrid";
import { client } from "../../../../sanity/lib/client";
import { allCoursesQuery } from "../../../../sanity/lib/queries";
import { Course } from "@/types";
import { BRANCHES, BranchKey, BRANCH_KEYS_TO_SLUGS } from "@/lib/constants";
import { Award, BookOpen, Layers } from "lucide-react";

// Robust fallback courses list — at least 4 courses per branch for all 34 branches
const ALL_MOCK_COURSES: Course[] = [
  // ─── CSE & IT ─────────────────────────────────────────
  { _id: "cse-1", title: "Full-Stack Web Development", slug: { _type: "slug", current: "full-stack-web-development" }, branch: "CSE_IT", domain: "Web Engineering", description: "Master React, Next.js, Node.js, and MongoDB. Build production-ready SaaS projects with OAuth, database integrations, and Vercel hosting.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cse-2", title: "AI/ML Engineering", slug: { _type: "slug", current: "ai-ml-engineering" }, branch: "CSE_IT", domain: "Artificial Intelligence", description: "Deep dive into Python, PyTorch, machine learning models, neural networks, and agentic AI architectures for production deployments.", duration: "16 Weeks", trainingTracks: ["Student (College)", "General", "Teachers' College"] },
  { _id: "cse-3", title: "Cybersecurity & Digital Forensics", slug: { _type: "slug", current: "cybersecurity-digital-forensics" }, branch: "CSE_IT", domain: "Security Engineering", description: "Cover network penetration testing, ethical hacking, digital forensics, and incident response in collaboration with Cyber Cells.", duration: "14 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cse-4", title: "Agentic AI Architectures", slug: { _type: "slug", current: "agentic-ai-architectures" }, branch: "CSE_IT", domain: "Advanced AI", description: "Build multi-agent autonomous coding assistants, LangChain configurations, vector search databases, and LLM orchestration tools.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Civil Engineering ────────────────────────────────
  { _id: "civil-1", title: "Building Information Modeling (BIM) Lifecycle Coordination", slug: { _type: "slug", current: "building-information-modeling-bim-lifecycle-coordination" }, branch: "CIVIL", domain: "Drafting & BIM", description: "Traditional 2D drafting has been replaced by multidimensional BIM workflows in modern AEC (Architecture, Engineering, Construction) firms. This course bridges the gap between static structural design and lifecycle asset management.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "civil-2", title: "Computational Structural Engineering & Finite Element Analysis (FEA)", slug: { _type: "slug", current: "computational-structural-engineering-finite-element-analysis-fea" }, branch: "CIVIL", domain: "Structural Engineering", description: "Structural design requires rigorous verification through non-linear analytical packages to optimize materials and ensure high-load structural resilience.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "civil-3", title: "Infrastructure Project Control & Cost Engineering", slug: { _type: "slug", current: "infrastructure-project-control-cost-engineering" }, branch: "CIVIL", domain: "Construction Management", description: "Infrastructure projects frequently suffer from catastrophic delays and cost overruns. Global construction operators rely heavily on specialists skilled in predictive scheduling, critical path tracking, and data-driven project control.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "civil-4", title: "Geo-Spatial Infrastructure Engineering & Smart City Planning", slug: { _type: "slug", current: "geo-spatial-infrastructure-engineering-smart-city-planning" }, branch: "CIVIL", domain: "Geospatial Engineering", description: "Large-scale infrastructure layout design, regional site feasibility, and asset management rely heavily on GIS spatial data layers to automate geometric optimization.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Mechanical Engineering ────────────────────────────
  { _id: "me-1", title: "Advanced Automotive Powertrain & Electric Vehicle (EV) Drivetrain Simulation", slug: { _type: "slug", current: "advanced-automotive-powertrain-electric-vehicle-ev-drivetrain-simulation" }, branch: "ME", domain: "Vehicle Engineering", description: "Automotive manufacturers are transitioning directly to electric, hybrid, and software-defined mobility systems. Design consulting firms look for engineers who understand vehicle dynamics, thermal balance, and electronic powertrain controls.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "me-2", title: "Mechanical Product Design, Geometric Dimensioning & Tolerancing (GD&T) & DFM", slug: { _type: "slug", current: "mechanical-product-design-geometric-dimensioning-tolerancing-gd-t-dfm" }, branch: "ME", domain: "Product Design", description: "Standard CAD skills without strict manufacturing constraints yield unproducible models. Modern production environments demand complete understanding of tolerance allocation (GD&T), casting/injection-mold rules, and PLM pipelines.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "me-3", title: "Computational Fluid Dynamics (CFD) & Thermal Systems Simulation", slug: { _type: "slug", current: "computational-fluid-dynamics-cfd-thermal-systems-simulation" }, branch: "ME", domain: "Simulation Engineering", description: "Physical aerodynamic and thermal prototyping loops are costly and slow. Automotive, aerospace, and electronics companies rely heavily on numerical simulations to optimize system design.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "me-4", title: "Structural Integrity, FEA & Durability Analyst", slug: { _type: "slug", current: "structural-integrity-fea-durability-analyst" }, branch: "ME", domain: "Simulation Engineering", description: "Structural subassemblies subject to cyclic or high-load conditions must be validated against structural deformation, resonance, and material fatigue limits to prevent early failure.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Electrical Engineering ────────────────────────────
  { _id: "ee-1", title: "Smart Grid Infrastructure & Power Systems Analysis", slug: { _type: "slug", current: "smart-grid-infrastructure-power-systems-analysis" }, branch: "EE", domain: "Power Systems", description: "Grid modernization requires electrical engineers capable of modeling complex distribution grids, conducting transient faults analysis, and designing protective switchgear systems to prevent regional power failures.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ee-2", title: "Industrial Automation, Programmable Logic Controllers (PLC) & SCADA Systems", slug: { _type: "slug", current: "industrial-automation-programmable-logic-controllers-plc-scada-systems" }, branch: "EE", domain: "Industrial Automation", description: "High-throughput manufacturing plants rely heavily on automation frameworks. Plant operators demand electrical engineers capable of writing PLC ladder logic, designing SCADA visualization decks, and integrating industrial network loops.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Electronics & Communication Engineering ──────────
  { _id: "ece-1", title: "IoT & Embedded Systems", slug: { _type: "slug", current: "iot-embedded-systems" }, branch: "ECE", domain: "Embedded Systems", description: "Design connected microcontrollers using RTOS, ESP32, Raspberry Pi, and MQTT. Build complete smart automation systems from scratch.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ece-2", title: "ASIC/FPGA Digital Design", slug: { _type: "slug", current: "asic-fpga-digital-design" }, branch: "ECE", domain: "Hardware Design", description: "FPGA synthesis, static timing analysis, RTL design guidelines, and logic simulation using Xilinx Vivado and Cadence EDA suites.", duration: "16 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ece-3", title: "PCB Design with Altium Designer", slug: { _type: "slug", current: "pcb-design-altium" }, branch: "ECE", domain: "Circuit Design", description: "Schematic capture, multi-layer PCB layout, signal integrity analysis, and DFM/DFA checks for production-grade boards.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ece-4", title: "5G RF & Wireless Systems", slug: { _type: "slug", current: "5g-rf-wireless-systems" }, branch: "ECE", domain: "Telecommunications", description: "5G NR architecture, mmWave propagation, antenna design simulation in HFSS, and link budget analysis for next-gen wireless infrastructure.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Computer Science & Engineering ────────────────────
  { _id: "cse-s-1", title: "Data Structures & Algorithms Mastery", slug: { _type: "slug", current: "dsa-mastery" }, branch: "CSE", domain: "Core CS", description: "Intensive problem-solving in arrays, trees, graphs, DP, and greedy algorithms. Prepare for FAANG-level coding interviews with 300+ curated problems.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cse-s-2", title: "Cloud Architecture with AWS", slug: { _type: "slug", current: "cloud-architecture-aws" }, branch: "CSE", domain: "Cloud Engineering", description: "Design scalable cloud-native architectures using EC2, Lambda, S3, DynamoDB, and VPC. Prepare for AWS Solutions Architect certification.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cse-s-3", title: "DevOps & CI/CD Pipeline Engineering", slug: { _type: "slug", current: "devops-cicd-pipeline" }, branch: "CSE", domain: "DevOps", description: "Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, and monitoring with Grafana/Prometheus for enterprise release pipelines.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cse-s-4", title: "Mobile App Development (Flutter)", slug: { _type: "slug", current: "mobile-app-development-flutter" }, branch: "CSE", domain: "Mobile Engineering", description: "Build cross-platform iOS/Android apps with Flutter & Dart. State management, Firebase integration, and Play Store/App Store deployment.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Information Technology ────────────────────────────
  { _id: "it-1", title: "High-Performance Enterprise Backend Engineering", slug: { _type: "slug", current: "high-performance-enterprise-backend-engineering" }, branch: "IT", domain: "Backend Engineering", description: "Deep dive into Go's runtime scheduler, memory synchronization, lock-free atomics, gRPC, PostgreSQL MVCC, and pprof profiling controls.", duration: "4 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "it-2", title: "Scalable Cloud Architecture & Declarative Infrastructure", slug: { _type: "slug", current: "scalable-cloud-architecture-declarative-infrastructure" }, branch: "IT", domain: "Cloud Engineering", description: "Master VPC partitioning, HCL Terraform modules, remote state locking, dynamic Ansible configurations, and ALB auto-scaling telemetry.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "it-3", title: "Large-Scale Streaming Data Pipeline Infrastructure", slug: { _type: "slug", current: "large-scale-streaming-data-pipeline-infrastructure" }, branch: "IT", domain: "Data Engineering", description: "Configure Kafka message brokers, stream stateful graphs in Apache Flink, manage watermarks, dynamic time windows, and Exactly-Once Semantics.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "it-4", title: "Cloud-Native Container Orchestration & Edge Defense Systems", slug: { _type: "slug", current: "cloud-native-container-orchestration-edge-defense-systems" }, branch: "IT", domain: "DevOps", description: "Deploy Kubernetes control planes, Helm packaging structures, sidecar service meshes (mTLS), edge WAF defenses, and chaos injection frameworks.", duration: "24 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Chemical Technology (Leather Technology) ─────────
  { _id: "cl-1", title: "Advanced Beamhouse Chemistry & Macromolecular Processing", slug: { _type: "slug", current: "advanced-beamhouse-chemistry-macromolecular-processing" }, branch: "CHEM_LEATHER", domain: "Leather Processing", description: "Biochemical tissue isolation, calcium hydroxide/sodium sulfide kinetics, pancreatic tryptic bating, and pickling electrolyte calculations.", duration: "4 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cl-2", title: "Sustainable Mineral-Free Tanning Matrix Engineering", slug: { _type: "slug", current: "sustainable-mineral-free-tanning-matrix-engineering" }, branch: "CHEM_LEATHER", domain: "Leather Engineering", description: "Chrome oxidation risk modeling, organic vegetable tanning dynamics, glutaraldehyde cross-linking, and spent liquor recirculation loops.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cl-3", title: "Performance Dyeing, Fatliquoring & Surface Finishing Kinetics", slug: { _type: "slug", current: "performance-dyeing-fatliquoring-surface-finishing-kinetics" }, branch: "CHEM_LEATHER", domain: "Finishing Technology", description: "Multi-component dye diffusion kinetics, fatliquor emulsion oil-in-water physics, cross-sectional microscopy, and automotive wear fastness.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cl-4", title: "Greenfield Leather Manufacturing Plant & Effluent Treatment Synthesis", slug: { _type: "slug", current: "greenfield-leather-manufacturing-plant-effluent-treatment-synthesis" }, branch: "CHEM_LEATHER", domain: "Environmental Engineering", description: "Plant layout sizing, chrome precipitation flowsheets, biological COD/BOD reactors, multi-effect evaporators, and zero-liquid discharge (ZLD).", duration: "24 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Biomedical & Robotic Engineering ─────────────────
  { _id: "br-1", title: "Biosignal Acquisition & High-Precision Analog Front-Ends", slug: { _type: "slug", current: "biosignal-acquisition-high-precision-analog-front-ends" }, branch: "BIOMED_ROBOTIC", domain: "Medical Devices", description: "Model membrane bio-potentials, design high-CMRR instrumentation amplifiers, active DRL cancellation loops, and active Butterworth filters.", duration: "4 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "br-2", title: "Robotic Kinematics, Dynamics & Spatial Trajectory Tracking", slug: { _type: "slug", current: "robotic-kinematics-dynamics-spatial-trajectory-tracking" }, branch: "BIOMED_ROBOTIC", domain: "Robotics", description: "Quaternion rotations, forward/inverse kinematic DH parameter tables, Jacobian matrices, Euler-Lagrange equations, and ROS2 simulation.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "br-3", title: "Implantable Medical Device Development & Biocompatible FEA", slug: { _type: "slug", current: "implantable-medical-device-development-biocompatible-fea" }, branch: "BIOMED_ROBOTIC", domain: "Medical Engineering", description: "Process anatomical DICOM streams, evaluate titanium/PEEK degradation, optimize structural stress-shielding, and design hermetic laser-weld patterns.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "br-4", title: "Autonomous Surgical Robotics & Intelligent Computer Vision Infrastructure", slug: { _type: "slug", current: "autonomous-surgical-robotics-intelligent-computer-vision-infrastructure" }, branch: "BIOMED_ROBOTIC", domain: "Surgical Robotics", description: "Real-time RTOS joint controllers, computer vision tool segmentation models, haptic virtual constraints, and remote teleoperation loops.", duration: "24 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Electrical & Electronics Engineering ─────────────
  { _id: "eee-1", title: "Power System Transient Stability & Grid Physics Optimization", slug: { _type: "slug", current: "power-system-transient-stability-grid-physics-optimization" }, branch: "EEE", domain: "Power Systems", description: "Derive generator swing equations, calculate critical fault clearing times, implement Runge-Kutta solvers, and configure excitation stabilizers.", duration: "4 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "eee-2", title: "High-Efficiency Industrial Power Converters & Thermal Design", slug: { _type: "slug", current: "high-efficiency-industrial-power-converters-thermal-design" }, branch: "EEE", domain: "Power Electronics", description: "Compare SiC/GaN switches, size LLC resonant tanks, design isolated gate-drivers, write space-vector PWM code, and run CHT cooling CFD.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "eee-3", title: "Closed-Loop Electric Drive Tuning & Field Oriented Vector Control", slug: { _type: "slug", current: "closed-loop-electric-drive-tuning-field-oriented-vector-control" }, branch: "EEE", domain: "Motor Control", description: "Clarke/Park PMSM coordinates transformations, Field Oriented Control decoupling, PI loop cascades, and HIL road cycle validation.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "eee-4", title: "Substation Automation, Protective Relaying & Smart Microgrid Systems", slug: { _type: "slug", current: "substation-automation-protective-relaying-smart-microgrid-systems" }, branch: "EEE", domain: "Substation Automation", description: "Calculate short-circuit fault paths, configure IEC 61850 GOOSE communications, design wind/solar batteries, and audit grid compliance.", duration: "24 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Civil Engineering with Computer Application ──────
  { _id: "cc-1", title: "Finite Element Formulations & Computational Matrix Structural Analysis", slug: { _type: "slug", current: "finite-element-formulations-computational-matrix-structural-analysis" }, branch: "CIVIL_COMP", domain: "Computational Engineering", description: "Direct stiffness formulations, coordinate transformation global compiles, partition boundary constraints, and code custom solvers in Python.", duration: "4 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cc-2", title: "Applied Geotechnical Modeling & Soil-Structure Interaction", slug: { _type: "slug", current: "applied-geotechnical-modeling-soil-structure-interaction" }, branch: "CIVIL_COMP", domain: "Geotechnical Engineering", description: "Constitutive elastoplastic soil models, design deep foundation pile groups, anchored sheet walls, slope stability, and tunnels.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cc-3", title: "Geometric Corridor Optimization & Automated Pavement Sizing", slug: { _type: "slug", current: "geometric-corridor-optimization-automated-pavement-sizing" }, branch: "CIVIL_COMP", domain: "Transportation Engineering", description: "Filter LiDAR point clouds, configure horizontal curves and vertical sight parabolas, design multilayer structural pavement sub-bases, and balance 3D mass profiles.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cc-4", title: "5D BIM Automation, Virtual Coordination & Urban Digital Twins", slug: { _type: "slug", current: "5d-bim-automation-virtual-coordinator-urban-digital-twins" }, branch: "CIVIL_COMP", domain: "BIM Management", description: "Implement federated ISO 19650 clash models, program 5D cost-sequence loops, deploy IoT structural sensor clouds, and scale GIS city wind/heat twin dashboards.", duration: "24 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── CSE (Artificial Intelligence) ────────────────────
  { _id: "cai-1", title: "Deep Learning & Neural Networks", slug: { _type: "slug", current: "deep-learning-neural-networks" }, branch: "CSE_AI", domain: "Deep Learning", description: "CNNs, RNNs, Transformers, GANs — from mathematical foundations to production deployment with PyTorch and TensorFlow.", duration: "14 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cai-2", title: "Computer Vision & Image Processing", slug: { _type: "slug", current: "computer-vision-image-processing" }, branch: "CSE_AI", domain: "Computer Vision", description: "Object detection (YOLO, SSD), image segmentation, face recognition, and real-time video analytics using OpenCV and deep learning.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cai-3", title: "Natural Language Processing", slug: { _type: "slug", current: "natural-language-processing" }, branch: "CSE_AI", domain: "NLP Engineering", description: "Text classification, sentiment analysis, named entity recognition, and LLM fine-tuning with Hugging Face Transformers.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cai-4", title: "Reinforcement Learning for Robotics", slug: { _type: "slug", current: "reinforcement-learning-robotics" }, branch: "CSE_AI", domain: "RL & Robotics", description: "Q-learning, policy gradients, PPO, and sim-to-real transfer for autonomous robot navigation and manipulation tasks.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Fire Technology & Safety ─────────────────────────
  { _id: "fs-1", title: "Fire Prevention & Risk Assessment", slug: { _type: "slug", current: "fire-prevention-risk-assessment" }, branch: "FIRE_SAFETY", domain: "Fire Safety", description: "Fire hazard identification, risk assessment matrices, fire load calculations, and emergency preparedness planning per NBC standards.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "fs-2", title: "Fire Alarm & Detection System Design", slug: { _type: "slug", current: "fire-alarm-detection-design" }, branch: "FIRE_SAFETY", domain: "Fire Protection Engineering", description: "Addressable fire alarm design, smoke/heat detector placement per NFPA 72, control panel programming, and system commissioning.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "fs-3", title: "Industrial Safety & HAZOP Analysis", slug: { _type: "slug", current: "industrial-safety-hazop" }, branch: "FIRE_SAFETY", domain: "Process Safety", description: "HAZOP studies, job safety analysis, permit-to-work systems, and OSHA compliance for refineries, chemical plants, and manufacturing.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "fs-4", title: "Fire Sprinkler & Suppression Systems", slug: { _type: "slug", current: "fire-sprinkler-suppression" }, branch: "FIRE_SAFETY", domain: "Fire Protection", description: "Hydraulic calculation, sprinkler head selection, clean agent systems (FM-200, Novec), and fire pump sizing per NFPA 13.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },

  // ─── CSE (Cyber Security) ─────────────────────────────
  { _id: "ccy-1", title: "Ethical Hacking & Penetration Testing", slug: { _type: "slug", current: "ethical-hacking-penetration-testing" }, branch: "CSE_CYBER", domain: "Offensive Security", description: "Kali Linux, Metasploit, Burp Suite, web app pentesting, privilege escalation, and professional report writing. CEH aligned.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ccy-2", title: "SOC Analyst & Threat Intelligence", slug: { _type: "slug", current: "soc-analyst-threat-intelligence" }, branch: "CSE_CYBER", domain: "Defensive Security", description: "SIEM (Splunk/Wazuh), log analysis, threat hunting, MITRE ATT&CK framework, and incident response playbooks for SOC operations.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "ccy-3", title: "Network Security & Firewall Administration", slug: { _type: "slug", current: "network-security-firewall" }, branch: "CSE_CYBER", domain: "Network Defense", description: "Firewall rule sets (pfSense, Fortinet), IDS/IPS configuration, VPN tunnel design, and network segmentation strategies.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ccy-4", title: "Digital Forensics & Malware Analysis", slug: { _type: "slug", current: "digital-forensics-malware-analysis" }, branch: "CSE_CYBER", domain: "Cyber Forensics", description: "Disk imaging, memory forensics with Volatility, malware reverse engineering, and chain-of-custody documentation for legal proceedings.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Aeronautical Engineering ─────────────────────────
  { _id: "aero-1", title: "Aircraft Structural Analysis", slug: { _type: "slug", current: "aircraft-structural-analysis" }, branch: "AERO", domain: "Aerospace Structures", description: "Thin-walled structures, shear flow, fatigue analysis, and FEA of airframe components using NASTRAN and HyperMesh.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "aero-2", title: "Computational Fluid Dynamics for Aerospace", slug: { _type: "slug", current: "cfd-aerospace" }, branch: "AERO", domain: "Aerodynamics", description: "RANS simulations, turbulence modeling, airfoil optimization, and transonic flow analysis using ANSYS Fluent and OpenFOAM.", duration: "14 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "aero-3", title: "UAV/Drone Design & Manufacturing", slug: { _type: "slug", current: "uav-drone-design" }, branch: "AERO", domain: "Unmanned Systems", description: "Fixed-wing and multirotor design, propulsion sizing, flight controller tuning (ArduPilot/PX4), and DGCA regulatory compliance.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "aero-4", title: "CATIA V5 for Aerospace Design", slug: { _type: "slug", current: "catia-v5-aerospace" }, branch: "AERO", domain: "Aerospace CAD", description: "Surface modeling of wing profiles, fuselage lofts, structural assemblies, and DMU analysis for aerospace components in CATIA V5.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Food Processing & Preservation ───────────────────
  { _id: "fp-1", title: "Food Safety & HACCP Certification", slug: { _type: "slug", current: "food-safety-haccp" }, branch: "FOOD_PRESERV", domain: "Food Safety", description: "HACCP plan development, critical control point analysis, GMP compliance, and FSSAI licensing requirements for food processing units.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "fp-2", title: "Dairy Processing Technology", slug: { _type: "slug", current: "dairy-processing-technology" }, branch: "FOOD_PRESERV", domain: "Dairy Engineering", description: "Pasteurization, UHT processing, cheese/yogurt manufacturing, cold chain logistics, and quality control per BIS/ISO standards.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "fp-3", title: "Food Packaging & Shelf-Life Extension", slug: { _type: "slug", current: "food-packaging-shelf-life" }, branch: "FOOD_PRESERV", domain: "Packaging Engineering", description: "MAP, vacuum packaging, aseptic filling, biodegradable packaging materials, and accelerated shelf-life testing protocols.", duration: "6 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "fp-4", title: "Beverage Processing & Quality Control", slug: { _type: "slug", current: "beverage-processing-qc" }, branch: "FOOD_PRESERV", domain: "Beverage Technology", description: "Fruit juice extraction, carbonation processes, water purification, sensory evaluation panels, and regulatory compliance.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── CSE (Internet of Things) ─────────────────────────
  { _id: "ciot-1", title: "IoT Platform Development (AWS IoT)", slug: { _type: "slug", current: "iot-platform-aws" }, branch: "CSE_IOT", domain: "IoT Cloud", description: "AWS IoT Core, device shadows, MQTT messaging, Lambda edge compute, and dashboard analytics for fleet-scale IoT deployments.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ciot-2", title: "Smart Home Automation Systems", slug: { _type: "slug", current: "smart-home-automation" }, branch: "CSE_IOT", domain: "Home Automation", description: "Z-Wave/Zigbee protocols, Home Assistant integration, voice control (Alexa/Google), and energy monitoring dashboard design.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "ciot-3", title: "Edge Computing & TinyML", slug: { _type: "slug", current: "edge-computing-tinyml" }, branch: "CSE_IOT", domain: "Edge AI", description: "Deploy ML models on Arduino Nano 33 BLE, ESP32, and STM32 using TensorFlow Lite Micro for keyword detection and anomaly sensing.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "ciot-4", title: "Industrial IoT & Industry 4.0", slug: { _type: "slug", current: "industrial-iot-industry-4" }, branch: "CSE_IOT", domain: "IIoT", description: "OPC-UA protocols, digital twin modeling, predictive maintenance dashboards, and SCADA-IoT convergence for smart factories.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── ECE (Advanced Communication Technology) ──────────
  { _id: "eadv-1", title: "5G Network Planning & Optimization", slug: { _type: "slug", current: "5g-network-planning" }, branch: "ECE_ADV_COMM", domain: "5G Networks", description: "5G NR radio planning, coverage prediction, massive MIMO beamforming, and network KPI optimization using Atoll/TEMS tools.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "eadv-2", title: "Optical Fiber Communication Design", slug: { _type: "slug", current: "optical-fiber-communication" }, branch: "ECE_ADV_COMM", domain: "Optical Networks", description: "DWDM systems, fiber splicing, OTDR testing, link budget calculations, and FTTH network design per ITU-T standards.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "eadv-3", title: "Satellite Communication Systems", slug: { _type: "slug", current: "satellite-communication-systems" }, branch: "ECE_ADV_COMM", domain: "Satellite Engineering", description: "Transponder design, orbit mechanics, link margin analysis, VSAT terminal configuration, and LEO constellation planning.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "eadv-4", title: "Software Defined Networking (SDN/NFV)", slug: { _type: "slug", current: "sdn-nfv-networking" }, branch: "ECE_ADV_COMM", domain: "Network Virtualization", description: "OpenFlow protocol, SDN controllers (ONOS/OpenDaylight), virtual network functions, and service chaining for carrier-grade networks.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── CSE (AI & Machine Learning) ──────────────────────
  { _id: "cml-1", title: "MLOps & Model Deployment Pipeline", slug: { _type: "slug", current: "mlops-model-deployment" }, branch: "CSE_AI_ML", domain: "MLOps", description: "MLflow experiment tracking, model versioning, Docker containerization, Kubernetes serving, and CI/CD for ML pipelines.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cml-2", title: "Generative AI & Large Language Models", slug: { _type: "slug", current: "generative-ai-llm" }, branch: "CSE_AI_ML", domain: "GenAI", description: "GPT architecture, LoRA fine-tuning, RAG pipelines, prompt engineering, and building production chatbots with guardrails.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cml-3", title: "Time Series Forecasting & Analytics", slug: { _type: "slug", current: "time-series-forecasting" }, branch: "CSE_AI_ML", domain: "Predictive Analytics", description: "ARIMA, Prophet, LSTM-based forecasting, anomaly detection, and dashboarding for financial, weather, and industrial datasets.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cml-4", title: "Recommendation Systems Engineering", slug: { _type: "slug", current: "recommendation-systems" }, branch: "CSE_AI_ML", domain: "RecSys", description: "Collaborative filtering, content-based methods, hybrid models, A/B testing frameworks, and real-time serving with Redis/Kafka.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Chemical Engineering ─────────────────────────────
  { _id: "che-1", title: "Process Simulation with Aspen HYSYS", slug: { _type: "slug", current: "aspen-hysys-process-simulation" }, branch: "CHEM", domain: "Process Engineering", description: "Steady-state simulation of distillation columns, heat exchangers, reactors, and compressors. Energy optimization and pinch analysis.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "che-2", title: "Chemical Plant Design & Safety", slug: { _type: "slug", current: "chemical-plant-design-safety" }, branch: "CHEM", domain: "Plant Design", description: "P&ID development, equipment sizing, piping layout, HAZOP studies, and SIL assessment per IEC 61511 for safe plant operations.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "che-3", title: "Water Treatment & Membrane Technology", slug: { _type: "slug", current: "water-treatment-membrane" }, branch: "CHEM", domain: "Environmental Engineering", description: "RO membrane design, UF/NF systems, chemical dosing, sludge management, and ZLD plant configurations for industrial wastewater.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "che-4", title: "Polymer Processing & Characterization", slug: { _type: "slug", current: "polymer-processing-characterization" }, branch: "CHEM", domain: "Polymer Engineering", description: "Extrusion, injection molding, blow molding, rheology testing, DSC/TGA thermal analysis, and polymer blend optimization.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },

  // ─── CSE (Data Science) ───────────────────────────────
  { _id: "cds-1", title: "Python for Data Science", slug: { _type: "slug", current: "python-data-science" }, branch: "CSE_DATA", domain: "Data Science", description: "NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn for data wrangling, EDA, and building predictive ML models from scratch.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cds-2", title: "Big Data Engineering (Spark & Hadoop)", slug: { _type: "slug", current: "big-data-spark-hadoop" }, branch: "CSE_DATA", domain: "Big Data", description: "HDFS, MapReduce, Spark SQL, PySpark streaming, Delta Lake, and data lake architecture on cloud platforms.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cds-3", title: "Business Intelligence & Power BI", slug: { _type: "slug", current: "business-intelligence-power-bi" }, branch: "CSE_DATA", domain: "BI & Analytics", description: "DAX formulas, data modeling, interactive dashboards, row-level security, and automated report publishing in Power BI Service.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cds-4", title: "Statistical Modeling & A/B Testing", slug: { _type: "slug", current: "statistical-modeling-ab-testing" }, branch: "CSE_DATA", domain: "Applied Statistics", description: "Hypothesis testing, regression analysis, Bayesian inference, experiment design, and causal inference for product analytics.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Electronics Engineering (VLSI Design & Technology)
  { _id: "evlsi-1", title: "RTL Design with Verilog/SystemVerilog", slug: { _type: "slug", current: "rtl-design-verilog" }, branch: "ECE_VLSI", domain: "VLSI Design", description: "Synthesizable RTL coding, testbench writing, functional simulation, and synthesis using Synopsys Design Compiler.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "evlsi-2", title: "Physical Design & STA", slug: { _type: "slug", current: "physical-design-sta" }, branch: "ECE_VLSI", domain: "VLSI Backend", description: "Floorplanning, placement, CTS, routing, IR drop analysis, and static timing analysis using Cadence Innovus and PrimeTime.", duration: "16 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "evlsi-3", title: "Analog IC Design with Cadence Virtuoso", slug: { _type: "slug", current: "analog-ic-design-virtuoso" }, branch: "ECE_VLSI", domain: "Analog Design", description: "MOSFET amplifiers, op-amp design, bandgap references, PLL circuits, and layout-versus-schematic (LVS) verification.", duration: "14 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "evlsi-4", title: "DFT & JTAG Testing", slug: { _type: "slug", current: "dft-jtag-testing" }, branch: "ECE_VLSI", domain: "Test Engineering", description: "Scan insertion, ATPG pattern generation, BIST architectures, boundary scan (JTAG), and fault coverage analysis.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Mining Engineering ───────────────────────────────
  { _id: "min-1", title: "Mine Planning with Surpac & Whittle", slug: { _type: "slug", current: "mine-planning-surpac" }, branch: "MINING", domain: "Mine Planning", description: "Geological modeling, pit optimization, drill-blast design, and production scheduling using Geovia Surpac and Whittle.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "min-2", title: "Mine Safety & Ventilation Design", slug: { _type: "slug", current: "mine-safety-ventilation" }, branch: "MINING", domain: "Mine Safety", description: "Ventilation network analysis (VnetPC), gas monitoring, strata control, rescue operations, and DGMS regulatory compliance.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "min-3", title: "Drilling & Blasting Technology", slug: { _type: "slug", current: "drilling-blasting-technology" }, branch: "MINING", domain: "Rock Engineering", description: "Blast design parameters, delay timing, fragmentation analysis, vibration monitoring, and controlled blasting techniques.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "min-4", title: "Environmental Management in Mining", slug: { _type: "slug", current: "environmental-management-mining" }, branch: "MINING", domain: "Environmental Mining", description: "Mine closure planning, acid mine drainage treatment, progressive rehabilitation, and EIA documentation per MoEFCC norms.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── 3D Animation & Graphics ──────────────────────────
  { _id: "anim-1", title: "3D Modeling & Texturing with Blender", slug: { _type: "slug", current: "3d-modeling-blender" }, branch: "ANIMATION_3D", domain: "3D Art", description: "Polygon modeling, UV unwrapping, PBR texturing with Substance Painter, and Blender Cycles rendering for photorealistic output.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "anim-2", title: "Character Animation & Rigging", slug: { _type: "slug", current: "character-animation-rigging" }, branch: "ANIMATION_3D", domain: "Animation", description: "Bone rigging, IK/FK setup, walk cycles, lip sync, facial expressions, and animation principles using Maya and Blender.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "anim-3", title: "Motion Graphics & VFX Compositing", slug: { _type: "slug", current: "motion-graphics-vfx" }, branch: "ANIMATION_3D", domain: "Visual Effects", description: "After Effects expressions, particle systems, 3D tracking, green screen keying, and Nuke compositing for film production.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "anim-4", title: "Game Environment Design (Unreal Engine)", slug: { _type: "slug", current: "game-environment-unreal" }, branch: "ANIMATION_3D", domain: "Game Development", description: "Landscape sculpting, material editor, Nanite/Lumen, level design, blueprint scripting, and packaging for PC and mobile.", duration: "14 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Mechanical & Smart Manufacturing ─────────────────
  { _id: "msm-1", title: "Industry 4.0 & Smart Factory Design", slug: { _type: "slug", current: "industry-4-smart-factory" }, branch: "MECH_SMART", domain: "Smart Manufacturing", description: "Digital twin modeling, MES integration, AGV routing, OEE monitoring dashboards, and factory floor IoT sensor networks.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "msm-2", title: "Additive Manufacturing & 3D Printing", slug: { _type: "slug", current: "additive-manufacturing-3d-printing" }, branch: "MECH_SMART", domain: "Additive Manufacturing", description: "FDM, SLA, SLS process parameters, metal 3D printing (DMLS), topology optimization, and post-processing for functional parts.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "msm-3", title: "Robotics Process Automation in Manufacturing", slug: { _type: "slug", current: "robotics-process-automation-mfg" }, branch: "MECH_SMART", domain: "Robotic Manufacturing", description: "KUKA/ABB robot programming, pick-and-place cells, welding automation, vision-guided systems, and RAPID/KRL scripting.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "msm-4", title: "Lean Six Sigma for Manufacturing", slug: { _type: "slug", current: "lean-six-sigma-manufacturing" }, branch: "MECH_SMART", domain: "Quality Engineering", description: "DMAIC methodology, process capability studies, value stream mapping, kaizen events, and Green Belt certification preparation.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Mechatronics Engineering ─────────────────────────
  { _id: "mct-1", title: "ROS2 & Autonomous Robot Programming", slug: { _type: "slug", current: "ros2-autonomous-robot" }, branch: "MECHATRONICS", domain: "Robotics Software", description: "ROS2 nodes, topics, services, SLAM navigation, path planning, and Gazebo simulation for mobile and manipulator robots.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "mct-2", title: "PLC & Motion Control Systems", slug: { _type: "slug", current: "plc-motion-control" }, branch: "MECHATRONICS", domain: "Automation", description: "Servo drive tuning, cam profiles, multi-axis coordination, Beckhoff TwinCAT, and Siemens TIA Portal for motion applications.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "mct-3", title: "Sensor Fusion & Control Systems", slug: { _type: "slug", current: "sensor-fusion-control" }, branch: "MECHATRONICS", domain: "Control Engineering", description: "Kalman filters, PID tuning, IMU-GPS fusion, LiDAR point cloud processing, and state estimation for autonomous systems.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "mct-4", title: "Hydraulic & Pneumatic System Design", slug: { _type: "slug", current: "hydraulic-pneumatic-design" }, branch: "MECHATRONICS", domain: "Fluid Power", description: "Circuit design, valve selection, actuator sizing, proportional control, and FluidSIM simulation for industrial hydraulic systems.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── CSE (Networks) ───────────────────────────────────
  { _id: "cnet-1", title: "Cisco CCNP Enterprise Routing", slug: { _type: "slug", current: "ccnp-enterprise-routing" }, branch: "CSE_NETWORKS", domain: "Network Engineering", description: "OSPF multi-area, EIGRP, BGP peering, route redistribution, and SD-WAN overlay design aligned with CCNP ENCOR 350-401.", duration: "14 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cnet-2", title: "Network Security & Ethical Hacking", slug: { _type: "slug", current: "network-security-ethical-hacking" }, branch: "CSE_NETWORKS", domain: "Security", description: "Firewall administration, IDS/IPS, VPN technologies, network forensics, and vulnerability assessment with Nessus/Nmap.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cnet-3", title: "Cloud Networking (Azure/GCP)", slug: { _type: "slug", current: "cloud-networking-azure-gcp" }, branch: "CSE_NETWORKS", domain: "Cloud Infrastructure", description: "Virtual networks, load balancers, VPN gateways, peering, DNS zones, and hybrid connectivity on Azure and Google Cloud.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cnet-4", title: "Network Automation with Python", slug: { _type: "slug", current: "network-automation-python" }, branch: "CSE_NETWORKS", domain: "NetDevOps", description: "Netmiko, NAPALM, Ansible network modules, REST API integration, and YANG/NETCONF for automated network configuration.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },

  // ─── CSE (IoT & Cyber Security including Blockchain) ──
  { _id: "cicb-1", title: "Blockchain Development (Solidity & Web3)", slug: { _type: "slug", current: "blockchain-development-solidity" }, branch: "CSE_IOT_CYBER_BLOCK", domain: "Blockchain", description: "Smart contract development, ERC-20/721 tokens, DApp frontend with ethers.js, and Hardhat testing/deployment pipelines.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cicb-2", title: "IoT Security & Firmware Analysis", slug: { _type: "slug", current: "iot-security-firmware" }, branch: "CSE_IOT_CYBER_BLOCK", domain: "IoT Security", description: "Firmware extraction (Binwalk), UART/JTAG debugging, protocol fuzzing, device hardening, and OWASP IoT Top 10 compliance.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cicb-3", title: "Hyperledger Fabric for Enterprise", slug: { _type: "slug", current: "hyperledger-fabric-enterprise" }, branch: "CSE_IOT_CYBER_BLOCK", domain: "Enterprise Blockchain", description: "Permissioned blockchain design, chaincode (Go/Node), channel architecture, and supply chain traceability use cases.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cicb-4", title: "Secure IoT Architecture Design", slug: { _type: "slug", current: "secure-iot-architecture" }, branch: "CSE_IOT_CYBER_BLOCK", domain: "Secure Systems", description: "Zero-trust IoT architectures, PKI certificate management, TLS mutual auth, device attestation, and OTA update security.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Robotics & Automation ────────────────────────────
  { _id: "ra-1", title: "Industrial Robot Programming (KUKA/ABB)", slug: { _type: "slug", current: "industrial-robot-programming" }, branch: "ROBOTICS_AUTO", domain: "Industrial Robotics", description: "KUKA KRL and ABB RAPID programming, tool calibration, pick-and-place cells, welding paths, and safety zone configuration.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ra-2", title: "Computer Vision for Robotics", slug: { _type: "slug", current: "computer-vision-robotics" }, branch: "ROBOTICS_AUTO", domain: "Robot Perception", description: "Camera calibration, stereo vision, point cloud processing, object recognition, and bin-picking applications using OpenCV and PCL.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "ra-3", title: "Collaborative Robots (Cobots)", slug: { _type: "slug", current: "collaborative-robots-cobots" }, branch: "ROBOTICS_AUTO", domain: "Cobot Applications", description: "Universal Robots programming (Polyscope), safety-rated monitored stop, force-torque sensing, and human-robot interaction design.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "ra-4", title: "Autonomous Mobile Robots (AMR)", slug: { _type: "slug", current: "autonomous-mobile-robots" }, branch: "ROBOTICS_AUTO", domain: "Mobile Robotics", description: "SLAM algorithms, path planning (A*, RRT), obstacle avoidance, fleet management software, and warehouse logistics integration.", duration: "12 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Instrumentation Engineering ──────────────────────
  { _id: "inst-1", title: "Process Instrumentation & Control Valves", slug: { _type: "slug", current: "process-instrumentation-control-valves" }, branch: "INSTRUMENTATION", domain: "Process Control", description: "Pressure, temperature, level, and flow measurement. Control valve sizing (ISA), actuator selection, and P&ID interpretation.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "inst-2", title: "DCS & Advanced Process Control", slug: { _type: "slug", current: "dcs-advanced-process-control" }, branch: "INSTRUMENTATION", domain: "DCS Engineering", description: "Honeywell Experion / ABB 800xA configuration, PID loop tuning, cascade/ratio control, and APC (model predictive control).", duration: "12 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "inst-3", title: "Safety Instrumented Systems (SIS)", slug: { _type: "slug", current: "safety-instrumented-systems" }, branch: "INSTRUMENTATION", domain: "Functional Safety", description: "SIL determination (IEC 61511), SIF design, proof testing, reliability calculations, and safety system lifecycle management.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "inst-4", title: "Industrial Data Analytics (IIOT Sensors)", slug: { _type: "slug", current: "industrial-data-analytics-iiot" }, branch: "INSTRUMENTATION", domain: "IIoT Analytics", description: "Sensor data pipelines, historian databases (OSIsoft PI), vibration analysis, and predictive maintenance dashboards.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Agricultural Engineering ─────────────────────────
  { _id: "agri-1", title: "Precision Agriculture & Drone Mapping", slug: { _type: "slug", current: "precision-agriculture-drone" }, branch: "AGRICULTURAL", domain: "Precision Farming", description: "NDVI mapping, multispectral imaging, variable rate application, GPS-guided machinery, and drone-based crop monitoring.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "agri-2", title: "Irrigation System Design", slug: { _type: "slug", current: "irrigation-system-design" }, branch: "AGRICULTURAL", domain: "Water Resources", description: "Drip and sprinkler system hydraulics, pump selection, soil-moisture sensor integration, and SCADA-based irrigation automation.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "agri-3", title: "Farm Machinery Design & Maintenance", slug: { _type: "slug", current: "farm-machinery-design" }, branch: "AGRICULTURAL", domain: "Farm Mechanization", description: "Tractor PTO systems, harvester mechanisms, tillage equipment design, preventive maintenance schedules, and CAD modeling.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "agri-4", title: "Post-Harvest Technology & Cold Chain", slug: { _type: "slug", current: "post-harvest-technology" }, branch: "AGRICULTURAL", domain: "Post-Harvest Engineering", description: "Grain storage systems, cold room design, refrigeration cycle optimization, and losses reduction per NABARD guidelines.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Waste Management ─────────────────────────────────
  { _id: "wm-1", title: "Solid Waste Management & Landfill Design", slug: { _type: "slug", current: "solid-waste-landfill-design" }, branch: "WASTE_MGMT", domain: "Solid Waste", description: "Waste characterization, collection route optimization, engineered landfill design (liner systems), and leachate treatment.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "wm-2", title: "Biogas Plant Design & Operation", slug: { _type: "slug", current: "biogas-plant-design" }, branch: "WASTE_MGMT", domain: "Bioenergy", description: "Anaerobic digestion fundamentals, CSTR/UASB reactor sizing, biogas purification, and energy recovery economics.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "wm-3", title: "E-Waste Recycling & Material Recovery", slug: { _type: "slug", current: "e-waste-recycling" }, branch: "WASTE_MGMT", domain: "E-Waste Management", description: "WEEE classification, dismantling protocols, precious metal recovery, hydrometallurgical processing, and EPR compliance.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "wm-4", title: "Wastewater Treatment Plant Operations", slug: { _type: "slug", current: "wastewater-treatment-plant" }, branch: "WASTE_MGMT", domain: "Water Treatment", description: "Activated sludge process, SBR, MBBR, sludge dewatering, effluent quality monitoring, and CPCB standard compliance.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Petrochemical Engineering ────────────────────────
  { _id: "petro-1", title: "Refinery Process Operations", slug: { _type: "slug", current: "refinery-process-operations" }, branch: "PETROCHEMICAL", domain: "Refinery Operations", description: "Crude distillation, catalytic cracking, reforming, hydroprocessing, and yield optimization in petroleum refinery units.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "petro-2", title: "Pipeline Design & Integrity Management", slug: { _type: "slug", current: "pipeline-design-integrity" }, branch: "PETROCHEMICAL", domain: "Pipeline Engineering", description: "Pipeline hydraulics, stress analysis (Caesar II), corrosion protection (CP systems), and pigging/inspection schedules per ASME B31.3.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "petro-3", title: "Gas Processing & LNG Technology", slug: { _type: "slug", current: "gas-processing-lng" }, branch: "PETROCHEMICAL", domain: "Gas Engineering", description: "Natural gas sweetening, dehydration, NGL fractionation, LNG liquefaction cycles, and cryogenic storage tank design.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "petro-4", title: "Petroleum Product Testing & Quality", slug: { _type: "slug", current: "petroleum-product-testing" }, branch: "PETROCHEMICAL", domain: "Quality Control", description: "Flash point, pour point, viscosity, octane/cetane testing per ASTM/IP standards, and blending optimization for specifications.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },

  // ─── Chemical Engineering (Plastic & Polymer) ─────────
  { _id: "cpp-1", title: "Injection Molding Process & Tooling", slug: { _type: "slug", current: "injection-molding-process" }, branch: "CHEM_PLASTIC_POLYMER", domain: "Plastics Processing", description: "Mold design, gate/runner optimization, process parameter setting, defect troubleshooting, and Moldflow simulation.", duration: "10 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cpp-2", title: "Rubber Compounding & Testing", slug: { _type: "slug", current: "rubber-compounding-testing" }, branch: "CHEM_PLASTIC_POLYMER", domain: "Rubber Technology", description: "Elastomer formulation, vulcanization kinetics, Mooney viscosity, MDR cure curves, and physical property testing per ASTM.", duration: "8 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "cpp-3", title: "Plastics Product Design for Manufacturing", slug: { _type: "slug", current: "plastics-product-design" }, branch: "CHEM_PLASTIC_POLYMER", domain: "Product Design", description: "Wall thickness optimization, draft angles, snap fits, living hinges, material selection (Ashby charts), and prototyping workflow.", duration: "8 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "cpp-4", title: "Polymer Recycling & Circular Economy", slug: { _type: "slug", current: "polymer-recycling-circular" }, branch: "CHEM_PLASTIC_POLYMER", domain: "Sustainability", description: "Mechanical recycling, chemical recycling (pyrolysis/depolymerization), recyclability assessment, and EPR compliance frameworks.", duration: "6 Weeks", trainingTracks: ["Student (College)"] },

  // ─── Marine Engineering ───────────────────────────────
  { _id: "mar-1", title: "Marine Diesel Engine Systems", slug: { _type: "slug", current: "marine-diesel-engine-systems" }, branch: "MARINE", domain: "Marine Propulsion", description: "Two-stroke and four-stroke marine engines, fuel injection systems, turbocharging, performance monitoring, and MAN B&W/Wärtsilä manuals.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "mar-2", title: "Ship Stability & Naval Architecture", slug: { _type: "slug", current: "ship-stability-naval-architecture" }, branch: "MARINE", domain: "Naval Architecture", description: "Hydrostatics, trim/stability calculations, GZ curves, damage stability, and Maxsurf modeling per IMO SOLAS regulations.", duration: "12 Weeks", trainingTracks: ["Student (College)", "General"] },
  { _id: "mar-3", title: "Marine Electrical & Automation Systems", slug: { _type: "slug", current: "marine-electrical-automation" }, branch: "MARINE", domain: "Marine Electrics", description: "Ship power distribution, switchboard design, alarm monitoring systems, DP (dynamic positioning), and GMDSS communication.", duration: "10 Weeks", trainingTracks: ["Student (College)"] },
  { _id: "mar-4", title: "Maritime Safety & Environmental Compliance", slug: { _type: "slug", current: "maritime-safety-environmental" }, branch: "MARINE", domain: "Maritime Safety", description: "ISM Code, MARPOL Annex I-VI, ballast water management, oil spill response planning, and Port State Control inspection preparation.", duration: "6 Weeks", trainingTracks: ["Student (College)", "General"] },
];

interface PageProps {
  searchParams: Promise<{ track?: string }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function TrainingsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const trackQuery = params.track;

  // Map URL query slugs to TrainingTrack tags in our schema
  let selectedTrack: string | null = null;
  if (trackQuery === "teachers-school") selectedTrack = "Teachers' School";
  else if (trackQuery === "teachers-college") selectedTrack = "Teachers' College";
  else if (trackQuery === "students-college") selectedTrack = "Student (College)";
  else if (trackQuery === "students-school") selectedTrack = "Student (School)";
  else if (trackQuery === "students") selectedTrack = "Students"; // compatibility
  else if (trackQuery === "general") selectedTrack = "General";

  let rawCourses: Course[] = [];
  try {
    rawCourses = await client.fetch<Course[]>(allCoursesQuery);
  } catch (error) {
    console.warn("Failed to fetch courses from Sanity. Utilizing local mock data fallback.");
  }

  if (!rawCourses || rawCourses.length === 0) {
    rawCourses = ALL_MOCK_COURSES;
  }

  // Filter courses by selected track
  const filteredCourses = selectedTrack
    ? rawCourses.filter((course) => {
        if (selectedTrack === "Student (College)") {
          return course.trainingTracks?.includes("Student (College)") || course.trainingTracks?.includes("Students");
        }
        if (selectedTrack === "Student (School)") {
          return course.trainingTracks?.includes("Student (School)");
        }
        return course.trainingTracks?.includes(selectedTrack as any);
      })
    : rawCourses;

  // Group courses by branch dynamically for all 34 branches
  const coursesByBranch = {} as Record<BranchKey, Course[]>;
  (Object.keys(BRANCHES) as BranchKey[]).forEach((key) => {
    coursesByBranch[key] = [];
  });

  filteredCourses.forEach((course) => {
    if (coursesByBranch[course.branch]) {
      coursesByBranch[course.branch].push(course);
    }
  });

  const trackTabs = [
    { label: "All Tracks", slug: "" },
    { label: "Teachers' School", slug: "teachers-school" },
    { label: "Teachers' College", slug: "teachers-college" },
    { label: "Student (College)", slug: "students-college" },
    { label: "Student (School)", slug: "students-school" },
    { label: "General", slug: "general" },
  ];

  const breadcrumbs = [{ label: "Trainings" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Training & Certification Tracks"
        breadcrumbs={breadcrumbs}
        subtitle="Specialized hands-on curricula bridging engineering science and industrial development standards."
      />

      {/* Course Filter Tabs */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 sticky top-[72px] sm:top-[80px] z-30 shadow-sm backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 overflow-x-auto pb-1.5 scrollbar-none">
            <div className="flex items-center gap-2 text-slate-400 shrink-0 font-semibold text-sm">
              <Layers className="w-4 h-4" />
              <span>Filter Track:</span>
            </div>
            
            <div className="flex gap-2 sm:gap-3">
              {trackTabs.map((tab) => {
                const isActive = (!trackQuery && tab.slug === "") || trackQuery === tab.slug;
                const url = tab.slug ? `/trainings?track=${tab.slug}` : "/trainings";

                return (
                  <Link
                    key={tab.label}
                    href={url}
                    className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all border ${
                      isActive
                        ? "bg-brand-blue-deep text-white border-brand-blue-deep shadow-md"
                        : "bg-slate-50 dark:bg-slate-850 hover:bg-brand-blue-light/50 hover:text-brand-blue-deep dark:hover:bg-slate-800 text-slate-650 dark:text-slate-400 border-slate-200/50 dark:border-slate-800"
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Listing Dynamic Filter Grid */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BranchFilterGrid
            courses={filteredCourses}
            branches={BRANCHES}
            branchKeysToSlugs={BRANCH_KEYS_TO_SLUGS}
          />
        </div>
      </section>
    </div>
  );
}
