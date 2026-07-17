import { BranchKey } from "./constants";
import { SyllabusModule } from "@/types";

export interface CourseTrackDetails {
  title: string;
  objective: string;
  deliveryMetrics: {
    learningHours: string;
    liveSessions: string;
    practicalLabs: string;
    miniAssignments: string;
    projects: string;
  };
  syllabus: SyllabusModule[];
  complianceStandards?: string[];
  careerOutcome: string;
}

export interface DetailedCourseData {
  title: string;
  branch: BranchKey;
  domain: string;
  trendingKeywords: string[];
  targetJobRoles: string[];
  industryRelevance: string;
  tracks: {
    fourWeeks?: CourseTrackDetails;
    sixWeeks?: CourseTrackDetails;
    eightWeeks?: CourseTrackDetails;
    twelveWeeks?: CourseTrackDetails;
    twentyFourWeeks?: CourseTrackDetails;
  };
}

export const DETAILED_COURSES_DATA: Record<string, DetailedCourseData> = {
  "building-information-modeling-bim-lifecycle-coordination": {
    title: "Building Information Modeling (BIM) Lifecycle Coordination",
    branch: "CIVIL",
    domain: "Drafting & BIM",
    trendingKeywords: ["BIM Coordination", "Clash Detection", "4D/5D Simulation", "ISO 19650", "CDE Management"],
    targetJobRoles: ["BIM Coordinator", "Virtual Design & Construction (VDC) Engineer", "Model Validation Analyst"],
    industryRelevance: "Traditional 2D drafting has been replaced by multidimensional BIM workflows in modern AEC (Architecture, Engineering, Construction) firms. This course bridges the gap between static structural design and lifecycle asset management.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Establish baseline core competency in parametric 3D structural modeling and documentation.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "bim-4w-1",
            title: "Introduction & Parametric Principles",
            topics: ["Introduction to BIM paradigms vs. CAD", "Parametric modeling principles", "Coordinate setup and grid initialization"],
            prerequisites: ["Autodesk Revit basic installation"],
            projects: ["Grid setup & Level initialization project"]
          },
          {
            _key: "bim-4w-2",
            title: "Modeling Foundational Elements",
            topics: ["Retaining walls modeling", "Spread footings design", "Structural columns and beam networks"],
            prerequisites: ["Revit basic modeling concepts"]
          },
          {
            _key: "bim-4w-3",
            title: "Construction Documentation & BOMs",
            topics: ["Developing construction documentation", "Custom structural tags creation", "Automated bill of materials (BOM) schedules"],
            prerequisites: ["Foundational modeling"]
          },
          {
            _key: "bim-4w-4",
            title: "Mini Project",
            topics: ["Authoring a complete 3D structural model of a G+2 residential structure with verified material take-offs"],
            projects: ["G+2 structural model design with BOQ generation"]
          }
        ],
        careerOutcome: "Entry-level readiness for structural drafting or technical modeling roles."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Achieve multi-disciplinary project coordination and clash resolution capabilities.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "bim-6w-1",
            title: "BIM Foundations (Weeks 1-4)",
            topics: ["Revit interface, grids and coordinate systems", "Structural modeling of walls, footings, columns & beams", "Automated schedules and documentation creation"],
            prerequisites: ["None"]
          },
          {
            _key: "bim-6w-2",
            title: "Multi-disciplinary Cross-linking",
            topics: ["Synchronizing Architectural, Structural, and MEP models within a shared coordinate system", "Linking local models vs central cloud worksharing"],
            prerequisites: ["BIM Foundations"]
          },
          {
            _key: "bim-6w-3",
            title: "Applied Project: Coordination Review",
            topics: ["Execution of a coordination review on a complex commercial model", "Producing a resolved structural-MEP clash matrix report"],
            projects: ["Commercial model clash matrix & audit log generation"]
          }
        ],
        careerOutcome: "Eligibility for Junior BIM Modeler internships."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Master construction sequencing, dynamic cost estimation, and algorithmic automation workflows.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "bim-8w-1",
            title: "BIM Modeling & Clash Matrix (Weeks 1-6)",
            topics: ["Structural and MEP parametric modeling", "Multi-disciplinary cross-linking", "Clash matrix review and resolution reports"],
            prerequisites: ["None"]
          },
          {
            _key: "bim-8w-2",
            title: "4D Scheduling & 5D Cost-Estimation",
            topics: ["4D construction scheduling and timeline matching", "5D cost-estimation matrix deployment", "Algorithmic geometry manipulation introduction"],
            prerequisites: ["Autodesk Navisworks basic, Dynamo basic"]
          },
          {
            _key: "bim-8w-3",
            title: "Final Project",
            topics: ["4D visual construction sequencing timeline", "Automated clash resolution playbook for an industrial warehouse structure"],
            projects: ["4D sequencing animation & Dynamo automated clash playbook"]
          }
        ],
        careerOutcome: "Portfolio-ready competency for a BIM Analyst career track."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Author comprehensive, code-compliant BIM execution strategies for enterprise-tier projects.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "bim-12w-1",
            title: "Month 1: Foundational Modeling & Family Creation",
            topics: ["Comprehensive foundational modeling", "Structural family creation and custom configurations", "Parameter configuration and shared parameters setup"],
            prerequisites: ["None"]
          },
          {
            _key: "bim-12w-2",
            title: "Month 2: Interference Analysis & Visual Programming",
            topics: ["Advanced multi-disciplinary interference analysis", "Visual programming scripts development", "Point-cloud scan data integration into standard coordinate grids"],
            prerequisites: ["Month 1 concepts", "Dynamo & Navisworks basic interface"]
          },
          {
            _key: "bim-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete execution of a formal BIM Execution Plan (BEP) for an asymmetrical high-rise", "Delivering validation reports, model audit logs, and client handover presentation deck"],
            projects: ["High-rise BEP & Model Handover Deck"]
          }
        ],
        complianceStandards: ["ISO 19650 (BIM Lifecycle Specification)", "buildingSMART IFC Data Standards"],
        careerOutcome: "Job-ready capability for designated BIM Coordinator vacancies."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Full lifecycle competence as a VDC/BIM Management Specialist capable of administering multi-tier enterprise configurations.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "bim-24w-1",
            title: "Month 1: Skeletal Framing & Architectural Alignment",
            topics: ["High-fidelity skeletal framing modeling", "Architectural and structural model alignments in coordinate matrices"],
            prerequisites: ["None"]
          },
          {
            _key: "bim-24w-2",
            title: "Month 2: Takeoff Automation & Dynamo Scripting",
            topics: ["Quantity takeoff automation", "Geometric optimization scripts using visual logic", "Family nesting and nested formulas creation in Revit Families"],
            prerequisites: ["Month 1 Concepts", "Dynamo coding logic"]
          },
          {
            _key: "bim-24w-3",
            title: "Month 3: Spatial Coordination & Conflict Management",
            topics: ["Cross-model synthesis and coordination checks", "Spatial coordination templates", "Automated conflict management matrices using Navisworks Manage"],
            prerequisites: ["Month 2 Concepts"]
          },
          {
            _key: "bim-24w-4",
            title: "Month 4: Common Data Environment (CDE) Deployment",
            topics: ["CDE deployment and access structures setup", "Role-based access management", "Cloud syncing and file coordination protocols"],
            prerequisites: ["Month 3 Concepts", "Autodesk Construction Cloud interface"]
          },
          {
            _key: "bim-24w-5",
            title: "Month 5: 6D BIM Asset Data & Lifecycle FM",
            topics: ["Asset management data injection into building models (6D BIM)", "Lifecycle facilities management hand-back parameters", "Cobie data spreadsheets generation"],
            prerequisites: ["Month 4 Concepts"]
          },
          {
            _key: "bim-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Complete design-to-handover portfolio of a major transportation terminal or stadium asset", "Parametric zero-clash model, 5D construction playback, customized Dynamo nodes, certified BEP documentation", "Professional portfolio evaluation and simulation of vendor-qualification interviews"],
            projects: ["Terminal or Stadium Handover Package, including BEP & 5D Timeline"]
          }
        ],
        careerOutcome: "Ready for direct placement as a Virtual Design & Construction (VDC) Engineer or BIM Manager."
      }
    }
  },
  "computational-structural-engineering-finite-element-analysis-fea": {
    title: "Computational Structural Engineering & Finite Element Analysis (FEA)",
    branch: "CIVIL",
    domain: "Structural Engineering",
    trendingKeywords: ["FEA Modeling", "Seismic Performance", "Dynamic Analysis", "IS 1893", "Pushover Analysis"],
    targetJobRoles: ["Structural Design Engineer", "FEA Specialist", "Structural Integrity Analyst"],
    industryRelevance: "Structural design requires rigorous verification through non-linear analytical packages to optimize materials and ensure high-load structural resilience.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Understand basic skeletal structural idealization and linear static structural validation.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "fea-4w-1",
            title: "Structural Analysis Lifecycle Models",
            topics: ["Grid assignment & coordinate initialization", "Boundary condition definition", "Material stiffness mapping (ETABS)"],
            prerequisites: ["Structural Mechanics basics"]
          },
          {
            _key: "fea-4w-2",
            title: "Code-compliant Loading Frameworks",
            topics: ["Superimposed dead loads and live loads application", "Automated load combination envelopes matching code guidelines"],
            prerequisites: ["Structural Analysis Lifecycle"]
          },
          {
            _key: "fea-4w-3",
            title: "Linear Static Processing",
            topics: ["Linear static processing of symmetrical multi-story RC frames", "Extracting bending moments, shear force envelopes, and drift ratios"],
            prerequisites: ["Code-compliant Loading"]
          },
          {
            _key: "fea-4w-4",
            title: "Mini Project",
            topics: ["Analysis and structural verification of a G+5 regular RC frame configuration under worst-case static combinations"],
            projects: ["G+5 RC frame design checks portfolio"]
          }
        ],
        careerOutcome: "Entry-level proficiency as a Structural Detailing Draftsman or Structural Data Assistant."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Implement advanced concrete design and sub-component shear load paths.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "fea-6w-1",
            title: "Skeletal Idealization & Analysis (Weeks 1-4)",
            topics: ["ETABS grids, boundaries, and materials definitions", "Load mappings (DL, LL, combinations)", "Moment and shear extracting for RC frames"],
            prerequisites: ["None"]
          },
          {
            _key: "fea-6w-2",
            title: "Advanced Concrete Elements Design",
            topics: ["Modeling spatial shear wall layouts", "Flat-slab systems modeling", "Drop panel configurations design"],
            prerequisites: ["Skeletal Idealization"]
          },
          {
            _key: "fea-6w-3",
            title: "Applied Project: Irregular Commercial detaling",
            topics: ["Structural detailing, optimization, and rebar calculation optimization for an irregular commercial layout utilizing shear cores"],
            projects: ["Detailed drawing set & optimization calculation log"]
          }
        ],
        careerOutcome: "Readiness for Junior Structural Engineer internships."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Model integrated substructures and execute interactive soil-structure boundary validations.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "fea-8w-1",
            title: "RC Frame & Shear Wall Design (Weeks 1-6)",
            topics: ["RC structural analysis and loading layouts", "Shear walls & flat slabs systems modelling", "Rebar calculation and framing detailing"],
            prerequisites: ["None"]
          },
          {
            _key: "fea-8w-2",
            title: "Substructure Design Optimization",
            topics: ["Modeling isolated pads and combined configurations", "Flexible raft slab systems over spring soil beds (SAFE)"],
            prerequisites: ["RC Frame & Shear Wall Design"]
          },
          {
            _key: "fea-8w-3",
            title: "Final Project",
            topics: ["Integrated design verification of an 8-story structural frame paired with its corresponding finite-element raft foundation layout"],
            projects: ["8-Story superstructure-foundation combined structural report"]
          }
        ],
        careerOutcome: "Competency for mid-tier Structural Design Engineer roles."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Verify multi-story civil assets against extreme lateral loads using dynamic analysis routines.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "fea-12w-1",
            title: "Month 1: Discretization & Member Properties",
            topics: ["Discretization models configuration", "Member properties initialization", "Code-based load case application (ETABS)"],
            prerequisites: ["None"]
          },
          {
            _key: "fea-12w-2",
            title: "Month 2: Dynamic Lateral Modeling Profiles",
            topics: ["Dynamic lateral modeling profiles", "Response Spectrum analysis for seismic design", "Wind envelope generations per terrain categories"],
            prerequisites: ["Month 1 concepts", "Dynamics basics"]
          },
          {
            _key: "fea-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete structural analysis portfolio of a 15-story irregular high-rise asset subject to seismic zones", "Design verification calculations, structural drift checks, and full detail drawings"],
            projects: ["15-Story Dynamic Seismic Analysis & Detail Drawings Dossier"]
          }
        ],
        complianceStandards: ["IS 1893 (Part 1 - Seismic Criteria)", "IS 875 (Part 3 - Wind Loads)", "ACI 318", "Eurocode 2"],
        careerOutcome: "Structural Design Associate ready for design consultancy roles."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Master complex, non-linear, performance-based structural simulations for safety-critical civic infrastructure.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "fea-24w-1",
            title: "Month 1: Finite Element Formulations & Convergence",
            topics: ["Structural finite element formulations", "Meshing convergence testing", "Linear skeletal analysis frameworks"],
            prerequisites: ["None"]
          },
          {
            _key: "fea-24w-2",
            title: "Month 2: Soil-Structure Boundaries & Foundation Slabs",
            topics: ["Soil-structure boundary conditions modeling", "Non-uniform mat foundation evaluations (SAFE)"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "fea-24w-3",
            title: "Month 3: Industrial Steel Geometry & Connections",
            topics: ["Industrial steel geometry structures design", "Lattice trusses & gantry crane beams", "Complex moment connections design (STAAD.Pro / Tekla)"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "fea-24w-4",
            title: "Month 4: Advanced Structural Dynamics",
            topics: ["Time-History evaluation", "Material yielding limits mapping", "Non-linear performance-based engineering"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "fea-24w-5",
            title: "Month 5: Special Asset Performance Validation",
            topics: ["Performance validation of cable-stayed components", "Long-span bridges structural check", "Shell roofs validation via refined solid element analysis"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "fea-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Performance-Based Seismic Design and non-linear pushover assessment portfolio of an industrial refinery structure or multi-span flyover asset", "Ductility verification logs, plastic hinge formation diagrams, and presentation decks", "Technical review panels mimicking engineering design consultants"],
            projects: ["Industrial refinery structure non-linear performance engineering validation report"]
          }
        ],
        careerOutcome: "Specialist FEA Structural Analyst or Structural Integrity Engineer."
      }
    }
  },
  "infrastructure-project-control-cost-engineering": {
    title: "Infrastructure Project Control & Cost Engineering",
    branch: "CIVIL",
    domain: "Construction Management",
    trendingKeywords: ["Critical Path Method (CPM)", "Earned Value Management (EVM)", "Resource Leveling", "Delay Claims", "Primavera P6"],
    targetJobRoles: ["Planning Engineer", "Cost Controller", "Project Controls Analyst"],
    industryRelevance: "Infrastructure projects frequently suffer from catastrophic delays and cost overruns. Global construction operators rely heavily on specialists skilled in predictive scheduling, critical path tracking, and data-driven project control.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Master deterministic project network logic and Critical Path Method (CPM) calculation models.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "ipc-4w-1",
            title: "EPS & WBS Architectures",
            topics: ["Project lifecycle management architectures", "Designing Enterprise Project Structures (EPS)", "Work Breakdown Structures (WBS) (Primavera P6)"],
            prerequisites: ["Basic construction management terminology"]
          },
          {
            _key: "ipc-4w-2",
            title: "Activity Mapping & Network Calculations",
            topics: ["Activity mapping and logic relationships (FS, SS, FF, SF)", "Boundary constraints application", "Forward/backward pass network calculations"],
            prerequisites: ["EPS & WBS Architectures"]
          },
          {
            _key: "ipc-4w-3",
            title: "Resource Dictionaries & Allocation Rules",
            topics: ["Material, labor, and machinery resource dictionaries configuration", "Resource loading allocation rules"],
            prerequisites: ["Activity Mapping"]
          },
          {
            _key: "ipc-4w-4",
            title: "Mini Project",
            topics: ["Baseline schedule construction for a 12-month rural highway stretch complete with milestone tracking"],
            projects: ["12-month highway baseline Primavera P6 schedule"]
          }
        ],
        careerOutcome: "Technical project coordination assistant or junior site scheduler."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Resolve resource deployment bottlenecks and establish immutable tracking baselines.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "ipc-6w-1",
            title: "Primavera Scheduling & Resources (Weeks 1-4)",
            topics: ["EPS, WBS and baseline logic relationships creation", "Resource definitions & loading in P6", "Forward & backward pass networks setup"],
            prerequisites: ["None"]
          },
          {
            _key: "ipc-6w-2",
            title: "Resource Leveling Protocols",
            topics: ["Strategic resource leveling protocols", "Analyzing profile histograms", "Managing logic overrides during resource shortfalls"],
            prerequisites: ["Primavera Scheduling"]
          },
          {
            _key: "ipc-6w-3",
            title: "Applied Project: Resource-constrained complex",
            topics: ["Re-aligning a resource-constrained commercial complex schedule to eliminate allocation spikes while protecting target finish dates"],
            projects: ["Resource leveled commercial project schedule & baseline layout"]
          }
        ],
        careerOutcome: "Junior Planning Intern readiness."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Implement quantitative project tracking matrices and manage dynamic variance diagnostics.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "ipc-8w-1",
            title: "Advanced P6 Scheduling & Leveling (Weeks 1-6)",
            topics: ["WBS mapping and dynamic dependency loops configuration", "Resource leveling algorithms configuration", "Schedule baseline validation reviews"],
            prerequisites: ["None"]
          },
          {
            _key: "ipc-8w-2",
            title: "Earned Value Management (EVM)",
            topics: ["Project tracking metrics configuration", "Baselining & recording actual performance metrics", "Executing Earned Value Management (EVM) analyses"],
            prerequisites: ["Advanced P6 Scheduling"]
          },
          {
            _key: "ipc-8w-3",
            title: "Final Project",
            topics: ["Generating a comprehensive mid-term status recovery performance playbook for a delayed water pipeline network asset"],
            projects: ["EVM project performance tracking & delay recovery dashboard"]
          }
        ],
        careerOutcome: "Competency for intermediate Planning Engineer positions."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Design enterprise-grade project control control decks incorporating schedule diagnostics and cost optimization.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "ipc-12w-1",
            title: "Month 1: P6 WBS Layouts & Dependencies",
            topics: ["Comprehensive WBS layout definition", "Multi-tiered dependency routing", "Resource configuration structures (Primavera P6)"],
            prerequisites: ["None"]
          },
          {
            _key: "ipc-12w-2",
            title: "Month 2: Cost Engineering & Schedule Diagnostics",
            topics: ["Cost control engineering metrics ($CV, SV, CPI, SPI, EAC$)", "Schedule health check analytics", "Automated dashboard configurations for stakeholders"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "ipc-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete Project Controls Portfolio for a high-density urban metro station layout", "Look-ahead schedules, dynamic s-curves, and delay mitigation strategies"],
            projects: ["Urban Metro Station Project Controls Playbook & S-Curves"]
          }
        ],
        complianceStandards: ["AACE International Recommended Practices", "PMI-SP (Scheduling Professional) Framework"],
        careerOutcome: "Job-ready capability for Project Planning and Controls Engineer positions."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Administer complex programs, perform probabilistic risk modeling, and manage legal forensic delay analysis portfolios.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "ipc-24w-1",
            title: "Month 1: Portfolio Structure & Resource Rules",
            topics: ["Enterprise portfolio structure optimization", "Advanced resource pricing rule sets in multi-project networks"],
            prerequisites: ["None"]
          },
          {
            _key: "ipc-24w-2",
            title: "Month 2: Schedule Diagnostics & Cost Control",
            topics: ["Integrated schedule diagnostics", "Cost engineering accounting and resource budgeting matrices", "Variance threshold configuration"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "ipc-24w-3",
            title: "Month 3: Quantitative Schedule Risk Analysis (QSRA)",
            topics: ["Monte Carlo simulations application on scheduling loops", "Risk registers mapping to activities", "Critical path sensitivity reviews (Primavera Risk Analysis)"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "ipc-24w-4",
            title: "Month 4: Forensic Delay Analysis",
            topics: ["Forensic Delay Analysis methodologies: Impacted As-Is", "Time Impact Analysis (TIA)", "Legal extension of time (EOT) claims preparation"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "ipc-24w-5",
            title: "Month 5: Program Optimization & Enterprise Dashboards",
            topics: ["Multi-project program optimization", "Cross-project resource sharing models", "Executive reporting architecture configurations"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "ipc-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Comprehensive Project Controls Playbook for a mega-scale airport or seaport expansion project", "Quantitative risk models, validated forensic TIA delay claim dossier, interactive cost dashboards", "Professional interview drills and portfolio presentation coaching"],
            projects: ["Mega-scale Seaport Extension TIA Delay Dossier & Dashboard"]
          }
        ],
        careerOutcome: "Advanced Project Controls Specialist or Senior Planner."
      }
    }
  },
  "geo-spatial-infrastructure-engineering-smart-city-planning": {
    title: "Geo-Spatial Infrastructure Engineering & Smart City Planning",
    branch: "CIVIL",
    domain: "Geospatial Engineering",
    trendingKeywords: ["Spatial Analysis", "Remote Sensing", "LiDAR Data Processing", "Hydrological Modeling", "ArcGIS Pro"],
    targetJobRoles: ["GIS Engineer", "Geospatial Infrastructure Analyst", "Remote Sensing Engineer"],
    industryRelevance: "Large-scale infrastructure layout design, regional site feasibility, and asset management rely heavily on GIS spatial data layers to automate geometric optimization.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Master spatial coordinate projections, vector/raster datasets creation, and maps presentation templates.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "geo-4w-1",
            title: "Coordinate Projections & DB Design",
            topics: ["Geographic vs. Projected Coordinate Systems (WGS84, UTM projections)", "Spatial database design and architecture (ArcGIS Pro / QGIS)"],
            prerequisites: ["None"]
          },
          {
            _key: "geo-4w-2",
            title: "Feature Digitization & Attribute Tables",
            topics: ["Feature digitization techniques", "Attribute table schema creation", "Tabular SQL data filtering expressions"],
            prerequisites: ["Coordinate Projections"]
          },
          {
            _key: "geo-4w-3",
            title: "Vector Geoprocessing Corridors",
            topics: ["Core Vector Geoprocessing: Intersect routing", "Buffering corridors", "Union processing and spatial proximity query models"],
            prerequisites: ["Feature Digitization"]
          },
          {
            _key: "geo-4w-4",
            title: "Mini Project",
            topics: ["Engineering a multi-layered thematic regional map illustrating land-use zoning patterns for a municipal corporation"],
            projects: ["Regional Municipal Zoning Layout Map Output"]
          }
        ],
        careerOutcome: "Structural spatial draftsman or entry-level GIS Data Technician."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Integrate multispectral satellite data arrays and evaluate digital terrain topographies.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "geo-6w-1",
            title: "GIS Coordinates & Geoprocessing (Weeks 1-4)",
            topics: ["Coordinate setups and database schema creation", "Digitization and SQL queries on attribute fields", "Vector geoprocessing (intersect, union, buffer corridors)"],
            prerequisites: ["None"]
          },
          {
            _key: "geo-6w-2",
            title: "Remote Sensing Analytics",
            topics: ["Remote Sensing analytics: Image pre-processing", "Normalized Difference Vegetation Index (NDVI) mapping", "Digital Elevation Model (DEM) processing"],
            prerequisites: ["GIS Coordinates & Geoprocessing"]
          },
          {
            _key: "geo-6w-3",
            title: "Applied Project: Site Selection Matrix",
            topics: ["Executing a Multi-Criteria Spatial Evaluation matrix to determine the optimal geographic location for an upcoming waste plant"],
            projects: ["Waste Plant Site Suitability Layout Report"]
          }
        ],
        careerOutcome: "Preparedness for Junior Geospatial Analyst roles."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Model terrain hydrological behaviors and simulate flood inundation routing profiles.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "geo-8w-1",
            title: "Vector GIS & Remote Sensing (Weeks 1-6)",
            topics: ["Advanced feature geoprocessing corridors", "Multispectral remote sensing and image classification", "Digital Elevation Model (DEM) hydrological setups"],
            prerequisites: ["None"]
          },
          {
            _key: "geo-8w-2",
            title: "3D Spatial Surface Analysis",
            topics: ["Calculating slopes, aspects", "Watershed boundary delineation", "Hydrological flow routing models"],
            prerequisites: ["Vector GIS & Remote Sensing"]
          },
          {
            _key: "geo-8w-3",
            title: "Final Project",
            topics: ["Hydrological catchment characterization and river flood zone hazard mapping for an urban expansion valley corridor"],
            projects: ["Catchment Hydrological Model & Inundation Map Portfolio"]
          }
        ],
        careerOutcome: "Ready for Geospatial Infrastructure Analyst design slots."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Deploy advanced urban network allocation layouts and configure interactive web-GIS solutions.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "geo-12w-1",
            title: "Month 1: Spatial Schemas & Topologies",
            topics: ["Spatial data schema design", "Vector topological error fixing and cleaning", "Production cartography layout rules (ArcGIS Pro/QGIS)"],
            prerequisites: ["None"]
          },
          {
            _key: "geo-12w-2",
            title: "Month 2: Network Analyst & Cloud Web GIS",
            topics: ["Network Analyst engines deployment (shortest route optimization, service coverage allocation zones)", "Interactive cloud web maps deployment"],
            prerequisites: ["Month 1 concepts", "Advanced Vector layouts"]
          },
          {
            _key: "geo-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete Geo-Spatial Layout Strategy for an urban water distribution network or smart solid-waste routing optimization engine", "Interactive web dashboard panels configuration"],
            projects: ["Smart Urban Water Network Geo-Spatial Layout & Web GIS App"]
          }
        ],
        complianceStandards: ["Open Geospatial Consortium (OGC) Standards", "National Spatial Data Infrastructure (NSDI) Directives"],
        careerOutcome: "Job-ready capability for designated GIS Engineer openings."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Architect automated spatial pipelines using programming logic and handle extreme-scale cloud databases.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "geo-24w-1",
            title: "Month 1: Geodatabase Engineering & Vector analysis",
            topics: ["Geodatabase engineering configuration", "Multi-layer vector spatial geometry analysis in server databases"],
            prerequisites: ["None"]
          },
          {
            _key: "geo-24w-2",
            title: "Month 2: Image Classifications & LiDAR Point-Clouds",
            topics: ["Satellite sensor data extraction & classification algorithms", "High-density LiDAR point-cloud topographic parsing"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "geo-24w-3",
            title: "Month 3: Spatial Programming Automation",
            topics: ["Developing custom geoprocessing tools using scripting libraries", "Python scripting for spatial automation (ArcPy, GeoPandas)"],
            prerequisites: ["Month 2 concepts", "Basic Python programming"]
          },
          {
            _key: "geo-24w-4",
            title: "Month 4: Enterprise GIS Systems",
            topics: ["Hosting multi-user database clusters", "Configuring spatial indexes", "Cloud servers setup (PostGIS / ArcGIS Enterprise)"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "geo-24w-5",
            title: "Month 5: Environmental Indexing & Growth Modeling",
            topics: ["Environmental vulnerability indexing", "Urban heat island tracking models", "Predictive growth modeling frameworks"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "geo-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Development of an Automated Spatial Analytics Toolset for Regional Linear Infrastructure Route Optimization (e.g., Rail/Pipeline)", "Custom Python toolsets, web-GIS hosting layers, and environmental risk assessment metrics", "Portfolio code reviews and mock interview loops"],
            projects: ["Automated Route Optimization Python Toolset & Web-GIS App"]
          }
        ],
        careerOutcome: "Advanced Geo-Spatial Systems Engineer or Spatial Solutions Architect."
      }
    }
  },
  "advanced-automotive-powertrain-electric-vehicle-ev-drivetrain-simulation": {
    title: "Advanced Automotive Powertrain & Electric Vehicle (EV) Drivetrain Simulation",
    branch: "ME",
    domain: "Vehicle Engineering",
    trendingKeywords: ["EV Drivetrain", "Simulink Vehicle Modeling", "BMS Logic Design", "Battery Thermal CFD", "SAE J2929"],
    targetJobRoles: ["EV Powertrain Simulation Engineer", "Battery Management System (BMS) Control Modeler", "Vehicle Dynamics Engineer"],
    industryRelevance: "Automotive manufacturers are transitioning directly to electric, hybrid, and software-defined mobility systems. Design consulting firms look for engineers who understand vehicle dynamics, thermal balance, and electronic powertrain controls.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Simulate rigid vehicle longitudinal physics and build component blocks for electrified drivetrains.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "ev-4w-1",
            title: "Longitudinal Physics Mapping",
            topics: ["Mathematical mapping of longitudinal physics", "Aerodynamic drag, rolling resistance, inertial grading, and wheel torque equations (MATLAB / Simulink)"],
            prerequisites: ["Engineering Mechanics basics"]
          },
          {
            _key: "ev-4w-2",
            title: "Modular EV Architecture Modeling",
            topics: ["Building battery cell source networks", "DC-DC converter models configuration", "PMSM traction blocks setup"],
            prerequisites: ["Longitudinal Physics"]
          },
          {
            _key: "ev-4w-3",
            title: "Driving Cycles Validation Profiles",
            topics: ["Driving cycles validation profiles (WLTP, FTP-75, MIDC) execution", "Evaluating transient battery energy drain configurations"],
            prerequisites: ["Modular EV Architecture"]
          },
          {
            _key: "ev-4w-4",
            title: "Mini Project",
            topics: ["Performance tracking and configuration optimization of a compact commuter EV to meet range constraints across standard test cycles"],
            projects: ["Commuter EV Range simulation portfolio"]
          }
        ],
        careerOutcome: "Entry-level readiness for EV Powertrain Simulation assistant tracks."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Construct regenerative braking energy harvesting control logic and battery state trackers.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "ev-6w-1",
            title: "Longitudinal Physics & EV Blocks (Weeks 1-4)",
            topics: ["Aerodynamic, grading and torque modeling", "Simulink battery networks and PMSM blocks mapping", "WLTP and FTP-75 drive cycle tracking"],
            prerequisites: ["None"]
          },
          {
            _key: "ev-6w-2",
            title: "Regenerative Braking & State-of-Charge (SoC) Trackers",
            topics: ["Regenerative braking control logic deployment", "Adaptive State-of-Charge (SoC) tracker architectures using filtering equations"],
            prerequisites: ["Longitudinal Physics & EV Blocks"]
          },
          {
            _key: "ev-6w-3",
            title: "Applied Project: Brake Energy Recovery",
            topics: ["Implementing an optimized brake energy recovery algorithm into a standard EV vehicle template to expand range profiles by 12% or more"],
            projects: ["Range extension control algorithm design in Simulink"]
          }
        ],
        careerOutcome: "Junior EV Controls Engineering intern."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Evaluate transient heat profiles of dense battery arrays using numerical fluid software.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "ev-8w-1",
            title: "Powertrain Physics & Brake Logic (Weeks 1-6)",
            topics: ["Full longitudinal multi-body vehicle block modeling", "Regenerative braking integration and SoC estimators", "Drive cycle range optimizations"],
            prerequisites: ["None"]
          },
          {
            _key: "ev-8w-2",
            title: "Battery Module Micro-climate Modeling",
            topics: ["Simulating core heat generation variations during quick-charge operations (Ansys Fluent)"],
            prerequisites: ["Powertrain Physics & Brake Logic"]
          },
          {
            _key: "ev-8w-3",
            title: "Final Project",
            topics: ["Comparative Conjugate Heat Transfer (CHT) CFD evaluation of an air-cooled vs. liquid-jacket-cooled high-capacity battery cell configuration"],
            projects: ["Battery pack fluid-thermal cooling CFD analysis report"]
          }
        ],
        careerOutcome: "Product Validation Engineer (Thermal/EV focus)."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Verify multi-domain EV vehicle controllers alongside full safety sub-routine logic loops.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "ev-12w-1",
            title: "Month 1: Longitudinal Multi-domain Physics",
            topics: ["Longitudinal multi-domain physical asset modeling", "Track load validation", "Energy efficiency calculation loops (Simulink/Simscape)"],
            prerequisites: ["None"]
          },
          {
            _key: "ev-12w-2",
            title: "Month 2: BMS Control Safety Coding",
            topics: ["Battery Management System (BMS) safe operations coding", "Over-voltage cutoff & thermal throttling automation", "Passive cell balancing algorithms design"],
            prerequisites: ["Month 1 concepts", "Simulink Stateflow"]
          },
          {
            _key: "ev-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete Hardware-in-the-Loop (HIL) powertrain simulation report dossier for a urban electric transport vehicle", "Performance optimization and energy maps charts generation"],
            projects: ["Urban EV HIL Powertrain simulation dossier"]
          }
        ],
        complianceStandards: ["ISO 26262 (Automotive Functional Safety)", "AIS 156 (Indian EV Battery Safety Standards)", "SAE J2929"],
        careerOutcome: "Job-ready capability for EV Powertrain Integration Engineer posts."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Architect multi-motor torque vectoring strategies and design complete vehicle propulsion layouts from scratch.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "ev-24w-1",
            title: "Month 1: Rigid Lateral/Longitudinal Dynamics",
            topics: ["Vehicle multi-body rigid lateral/longitudinal dynamics math", "Multi-domain physical system modeling foundations"],
            prerequisites: ["None"]
          },
          {
            _key: "ev-24w-2",
            title: "Month 2: Battery Aging & Thermal Modeling",
            topics: ["Electrochemical battery aging modeling", "Cell degradation curve loops", "Complex pack thermal parameters calibration in Simulink"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "ev-24w-3",
            title: "Month 3: Field-Oriented Control (FOC) Design",
            topics: ["Field-Oriented Control (FOC) algorithms formulation", "Traction machine vector inverter fine-tuning parameters"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "ev-24w-4",
            title: "Month 4: Enclosure Structural & Vibration Validation",
            topics: ["Structural sub-frame design", "Battery enclosure validation under random frequency vibration profiles"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "ev-24w-5",
            title: "Month 5: Supervisory Energy Controls",
            topics: ["Supervisory energy optimization controls coding for multi-mode parallel hybrid drivetrains"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "ev-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Production-grade system simulation portfolio of a dual-motor AWD electric performance vehicle", "Active electronic differential controls, optimized liquid-chilled pack configuration, crashworthiness structural frame data", "Professional portfolio preparation and mock interview loops with EV technical leads"],
            projects: ["AWD Performance EV System Simulation & Control Playbook"]
          }
        ],
        careerOutcome: "Advanced EV Powertrain & Systems Control Engineer."
      }
    }
  },
  "mechanical-product-design-geometric-dimensioning-tolerancing-gd-t-dfm": {
    title: "Mechanical Product Design, Geometric Dimensioning & Tolerancing (GD&T) & DFM",
    branch: "ME",
    domain: "Product Design",
    trendingKeywords: ["Top-Down Assembly", "GD&T ASME Y14.5", "Tolerance Stack-up", "DFM/DFA", "Enclosure Design"],
    targetJobRoles: ["Mechanical Product Design Engineer", "Tool & Die Designer", "BIW Design Engineer"],
    industryRelevance: "Standard CAD skills without strict manufacturing constraints yield unproducible models. Modern production environments demand complete understanding of tolerance allocation (GD&T), casting/injection-mold rules, and PLM pipelines.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Master complex parametric feature frameworks and production drafting standards.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "mpd-4w-1",
            title: "Parametric Model Intent",
            topics: ["Parametric model intent: Parent-child relationship tracking", "Robust sketch constraints configurations", "Fully-defined solid features creation (SolidWorks / CATIA)"],
            prerequisites: ["Basic drawing concepts"]
          },
          {
            _key: "mpd-4w-2",
            title: "Complex Assembly Design Layouts",
            topics: ["Managing bottom-up vs. top-down skeletal mechanisms", "Interference checking and clearance tracking rules"],
            prerequisites: ["Parametric Model Intent"]
          },
          {
            _key: "mpd-4w-3",
            title: "Engineering Print Layout Generation",
            topics: ["Creating orthographic projected configurations", "Assembly exploded views layout", "Automated bill of materials (BOM) structure config"],
            prerequisites: ["Complex Assembly Design Layouts"]
          },
          {
            _key: "mpd-4w-4",
            title: "Mini Project",
            topics: ["Parametric production drawing layout design of a high-load industrial power transmission subassembly complete with active BOM mapping"],
            projects: ["Power transmission drawing pack & BOM ledger"]
          }
        ],
        careerOutcome: "Mechanical CAD Draftsman or Design Assistant."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Design complex freeform surface components matching plastic manufacturing constraints.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "mpd-6w-1",
            title: "Parametric Drawings & Assemblies (Weeks 1-4)",
            topics: ["Solid modeling constraints and sketch intent rules", "Dynamic assembly mates (bottom-up and top-down)", "Exploded views and BOM table mappings"],
            prerequisites: ["None"]
          },
          {
            _key: "mpd-6w-2",
            title: "Advanced Surface Sculpting & Plastic Ribs",
            topics: ["Advanced surface sculpting toolsets: Boundary surfaces, lofts", "Draft angles optimization & uniform wall thickness constraints", "Plastic rib configurations modeling"],
            prerequisites: ["Parametric Drawings & Assemblies"]
          },
          {
            _key: "mpd-6w-3",
            title: "Applied Project: Enclosure Design",
            topics: ["Design optimization of an ergonomic handheld consumer electronic plastic enclosure following strict injection-molding constraints"],
            projects: ["Plastic electronic enclosure 3D model & moldability report"]
          }
        ],
        careerOutcome: "Readiness for Product Design Engineering internships."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Embed definitive geometric controls (GD&T) onto mechanical prints based on functional constraints.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "mpd-8w-1",
            title: "Solid & Surface Modeling (Weeks 1-6)",
            topics: ["Parametric parts and top-down skeletal mechanisms", "Plastic surfaces design constraints & rib rules", "Assembly clearances and BOM extraction"],
            prerequisites: ["None"]
          },
          {
            _key: "mpd-8w-2",
            title: "ASME Y14.5 GD&T Standards Application",
            topics: ["ASME Y14.5 standard application: Datum feature reference systems", "Form controls, orientation guidelines", "Profile constraints and position parameters"],
            prerequisites: ["Solid & Surface Modeling"]
          },
          {
            _key: "mpd-8w-3",
            title: "Final Project",
            topics: ["Compiling a complete, certified GD&T blueprint suite for a high-speed automotive engine crankshaft assembly"],
            projects: ["Crankshaft GD&T print package & datum validation logs"]
          }
        ],
        careerOutcome: "Drawing Detailing Specialist / Design Reviewer."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Author production drawings backed by quantitative linear tolerance stack-up logic.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "mpd-12w-1",
            title: "Month 1: High-Fidelity Master-Models",
            topics: ["High-fidelity master-model configurations", "Top-down product design structures", "Kinematic mechanism assembly setups (SolidWorks/CATIA)"],
            prerequisites: ["None"]
          },
          {
            _key: "mpd-12w-2",
            title: "Month 2: Linear Tolerance Stack-up Calculations",
            topics: ["Worst-Case linear tolerance stack-up analysis", "Root-Sum-Square (RSS) statistical tolerance stack-up analysis across mechanical loops"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "mpd-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete manufacturing-ready blueprint portfolio for a multi-stage industrial reduction gearbox casing", "Tolerance loop analysis charts and DFM check-sheets development"],
            projects: ["Reduction Gearbox Manufacturing Prints & Tolerance Loop Spreadsheet"]
          }
        ],
        complianceStandards: ["ASME Y14.5-2018", "ISO 1101 (Geometrical Product Specifications)"],
        careerOutcome: "Certified Component Design Engineer or Enclosure Designer."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Manage large-scale product master-models through enterprise data validation pipelines from concept to tooling validation.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "mpd-24w-1",
            title: "Month 1: Skeletal parametric assemblies & multi-body solids",
            topics: ["Skeletal parametric product assembly architectures", "Complex multi-body solid models configuration"],
            prerequisites: ["None"]
          },
          {
            _key: "mpd-24w-2",
            title: "Month 2: Sheet Metal Stamping & Flattening",
            topics: ["Advanced sheet metal layout features", "Stamping deformation allowances mapping", "Automated flattening algorithms configuration"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "mpd-24w-3",
            title: "Month 3: Mold-Flow & Slider Tooling Design",
            topics: ["Mold-flow optimization configurations", "Gate placement validations", "Core/cavity tooling slider designs"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "mpd-24w-4",
            title: "Month 4: Dynamic Linkage Clearance Analysis",
            topics: ["1D, 2D, and 3D non-linear clearance stack-up analysis over dynamic moving machine linkages"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "mpd-24w-5",
            title: "Month 5: Enterprise PLM Workflows",
            topics: ["Managing Engineering Change Orders (ECO)", "Data vault check-ins", "Bill of materials formatting (PTC Windchill / Teamcenter)"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "mpd-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Full manufacturing-ready engineering deployment portfolio for a high-complexity automotive Body-in-White (BIW) sub-assembly or consumer appliance system", "Fully toleranced GD&T prints, complete PLM modification logs, mold tool data, and comprehensive DFM/DFA compliance documentation", "Interview preparation and portfolio defense drills before senior tool designers"],
            projects: ["BIW Sub-Assembly CAD, GD&T drawings & PLM ECO Logs"]
          }
        ],
        careerOutcome: "Senior Product Design Engineer or PLM Release Architect."
      }
    }
  },
  "computational-fluid-dynamics-cfd-thermal-systems-simulation": {
    title: "Computational Fluid Dynamics (CFD) & Thermal Systems Simulation",
    branch: "ME",
    domain: "Simulation Engineering",
    trendingKeywords: ["CFD Simulation", "Turbulence Modeling", "Conjugate Heat Transfer", "Mesh Convergence", "Ansys Fluent"],
    targetJobRoles: ["CFD Engineer", "Thermal Analyst", "Aerodynamics Simulation Engineer"],
    industryRelevance: "Physical aerodynamic and thermal prototyping loops are costly and slow. Automotive, aerospace, and electronics companies rely heavily on numerical simulations to optimize system design.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Discretize continuous fluid fields and resolve fluid flow velocity distributions.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "cfd-4w-1",
            title: "Boundary Isolation & Cleanup",
            topics: ["Fluid boundary isolation", "Topological cleanup models", "Computational volume extraction workflows (Ansys SpaceClaim / Fluent Meshing)"],
            prerequisites: ["Fluid Mechanics basics"]
          },
          {
            _key: "cfd-4w-2",
            title: "Discretization Engineering",
            topics: ["Computing boundary inflation height", "Checking grid orthogonal quality", "Tracking mesh dependency"],
            prerequisites: ["Boundary Isolation"]
          },
          {
            _key: "cfd-4w-3",
            title: "Physics Solvers & Convergence",
            topics: ["Incompressible Navier-Stokes architectures setup", "Boundary condition mapping", "Tracking residual convergence"],
            prerequisites: ["Discretization Engineering"]
          },
          {
            _key: "cfd-4w-4",
            title: "Mini Project",
            topics: ["Flow field characterization and pressure-drop verification throughout an industrial piping manifold setup"],
            projects: ["Piping manifold mesh convergence & flow profile report"]
          }
        ],
        careerOutcome: "Entry-level assistant for fluid simulation processing tracks."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Simulate thermal energy cross-conduction through solid-fluid multi-domain regimes.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "cfd-6w-1",
            title: "Mesh Generation & Solvers (Weeks 1-4)",
            topics: ["Topological cleanup & volume extraction", "Grid quality checks and inflation settings", "Navier-Stokes setup and boundary mappings"],
            prerequisites: ["None"]
          },
          {
            _key: "cfd-6w-2",
            title: "Conjugate Heat Transfer (CHT)",
            topics: ["CHT boundary modeling setups", "Defining thermal interface resistances", "Calculating heat transfer coefficients"],
            prerequisites: ["Mesh Generation & Solvers"]
          },
          {
            _key: "cfd-6w-3",
            title: "Applied Project: Heat Sink Dissipation",
            topics: ["Steady-state thermal dissipation analysis of a high-density aluminum electronic heat sink array under forced convection conditions"],
            projects: ["Forced convection heat sink CFD thermal layout"]
          }
        ],
        careerOutcome: "Junior Thermal Analyst intern."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Predict external aerodynamic force metrics and compute complex near-wall turbulence boundaries.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "cfd-8w-1",
            title: "Fluid Dynamics & Heat Transfer (Weeks 1-6)",
            topics: ["Computational domain setup & meshing", "Conjugate Heat Transfer (CHT) boundary interfaces", "Solver parameters & residual controls"],
            prerequisites: ["None"]
          },
          {
            _key: "cfd-8w-2",
            title: "Viscous Turbulence Modeling",
            topics: ["Viscous turbulence solver matrices ($k-\\epsilon, k-\\omega\\text{ SST}$ profiles)", "Calculating first layer cell dimensions ($y+$ wall functions)"],
            prerequisites: ["Fluid Dynamics & Heat Transfer"]
          },
          {
            _key: "cfd-8w-3",
            title: "Final Project",
            topics: ["Aerodynamic lift and drag coefficient verification modeling over a symmetric aircraft wing profile at varying angles of attack"],
            projects: ["Symmetric wing external aerodynamic lift-drag validation curves"]
          }
        ],
        careerOutcome: "Intermediate Aerodynamicist / Simulation Consultant."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Verify transient multi-phase fluid systems according to formal validation protocols.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "cfd-12w-1",
            title: "Month 1: Polyhedral Meshing & Initialization",
            topics: ["Refined polyhedral meshing setups", "Fluid zone properties mapping", "Steady-state initialization controls (Ansys Fluent)"],
            prerequisites: ["None"]
          },
          {
            _key: "cfd-12w-2",
            title: "Month 2: Transient & Compressible Gas Flows",
            topics: ["Transient time-stepping simulations", "Volume of Fluid (VOF) multi-phase boundary tracking", "Compressible gas flow processing"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "cfd-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete aerothermal optimization dossier for an industrial centrifugal fan component", "Validation data alignments and velocity vector mappings"],
            projects: ["Centrifugal Fan Aerothermal Design Optimization Dossier"]
          }
        ],
        complianceStandards: ["ASME V&V 20 (Verification and Validation in Computational Fluid Dynamics and Heat Transfer)"],
        careerOutcome: "Certified CFD Simulation Engineer."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Architect coupled multi-physics pipelines and model complex chemically reacting flow fields from scratch.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "cfd-24w-1",
            title: "Month 1: Structured Hexahedral Meshing",
            topics: ["Refined structured hexahedral mesh generation frameworks over intricate geometric configurations"],
            prerequisites: ["None"]
          },
          {
            _key: "cfd-24w-2",
            title: "Month 2: Thermal Radiation & Transient Solvers",
            topics: ["Non-isothermal fluid mixing layouts", "Surface-to-surface thermal radiation models", "High-order transient solvers configuration"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "cfd-24w-3",
            title: "Month 3: Supersonic Aerodynamics & Separation Profiles",
            topics: ["High-speed external aerodynamics validation", "Supersonic shockwave capturing", "Boundary layer separation profiling"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "cfd-24w-4",
            title: "Month 4: Species Transport & Combustion Reaction Kinetics",
            topics: ["Species transport modeling", "Gas-phase chemical reaction kinetics", "Industrial furnace burner combustion profiles mapping"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "cfd-24w-5",
            title: "Month 5: Fluid-Structure Interaction (FSI)",
            topics: ["Fluid-Structure Interaction (FSI) pipeline modeling", "Transitioning transient CFD fluid pressure fields into mechanical structural stress models"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "cfd-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Complete Aerothermal and Structural optimization portfolio of an industrial gas turbine rotor stage or high-power computing server rack enclosure", "Transient thermal lifecycle data, mesh verification reports, and validated FSI stress profiles", "Portfolio defenses hosted by engineering simulation directors"],
            projects: ["Industrial gas turbine rotor FSI thermal-stress analysis report"]
          }
        ],
        careerOutcome: "Senior CFD Analyst / Principal Thermal Solutions Architect."
      }
    }
  },
  "structural-integrity-fea-durability-analyst": {
    title: "Structural Integrity, FEA & Durability Analyst",
    branch: "ME",
    domain: "Simulation Engineering",
    trendingKeywords: ["Linear Static FEA", "Modal Frequency", "Plastic Deformation", "Fatigue Life Estimation", "Ansys Mechanical"],
    targetJobRoles: ["FEA Analyst", "Stress Engineer", "Structural Durability Consultant"],
    industryRelevance: "Structural subassemblies subject to cyclic or high-load conditions must be validated against structural deformation, resonance, and material fatigue limits to prevent early failure.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Build linear static structural models and determine primary component stress concentrations.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "str-4w-1",
            title: "Material Profiles & Simplify",
            topics: ["Engineering material profiles parsing: Yield limits definition", "Poisson ratios mapping", "CAD geometry simplification rules"],
            prerequisites: ["Solid mechanics basics"]
          },
          {
            _key: "str-4w-2",
            title: "Constraining Solid Models",
            topics: ["Designing fixed roots and frictionless sliders", "Modeling multi-bolt pre-tensioned joint connections"],
            prerequisites: ["Material Profiles"]
          },
          {
            _key: "str-4w-3",
            title: "Linear Static Solutions",
            topics: ["Extracting Von-Mises stress fields", "Monitoring structural displacement & load pathways", "Checking factor-of-safety margins"],
            prerequisites: ["Constraining Solid Models"]
          },
          {
            _key: "str-4w-4",
            title: "Mini Project",
            topics: ["Structural factor-of-safety calculation and optimization portfolio for an industrial lifting crane hook mechanism under max weight load"],
            projects: ["Crane hook factor-of-safety stress analysis report"]
          }
        ],
        careerOutcome: "Junior Structural Data Draftsman or Stress Assistant."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Solve component structural natural frequencies and map structural harmonic resonance issues.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "str-6w-1",
            title: "Linear Static Modelling (Weeks 1-4)",
            topics: ["Simplify geometry and assign yield parameters", "Bolted joint configurations and slide boundaries setup", "Factor-of-safety maps & deflection reviews"],
            prerequisites: ["None"]
          },
          {
            _key: "str-6w-2",
            title: "Modal Analysis Algorithms",
            topics: ["Determining structural mode shapes", "Extracting eigenvalue parameters", "Identifying resonance points in structures"],
            prerequisites: ["Linear Static Modelling"]
          },
          {
            _key: "str-6w-3",
            title: "Applied Project: Engine Mount Bracket",
            topics: ["Dynamic frequency tuning and design reconfiguration of an automotive engine mounting bracket to shift resonance outside running motor frequency ranges"],
            projects: ["Vibration frequency check & bracket design adjustments"]
          }
        ],
        careerOutcome: "Structural Vibration Intern readiness."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Track permanent deformation profiles across materials undergoing large non-linear strains.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "str-8w-1",
            title: "Static & Modal Durability (Weeks 1-6)",
            topics: ["Structural stress meshes and constraints configuration", "Modal shapes extraction and frequency mappings", "Resonance elimination adjustments"],
            prerequisites: ["None"]
          },
          {
            _key: "str-8w-2",
            title: "Non-linear Material Configurations",
            topics: ["Defining bilinear elastoplastic material behavior", "Large displacement controls configurations", "Frictional contact parameters setups"],
            prerequisites: ["Static & Modal Durability"]
          },
          {
            _key: "str-8w-3",
            title: "Final Project",
            topics: ["Permanent stress and buckling trend tracking across an industrial sheet metal component during deep draw manufacturing stages"],
            projects: ["Deep draw metal stamping sheet non-linear buckling report"]
          }
        ],
        careerOutcome: "Intermediate FEA Modeling Professional."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Predict structural asset fatigue lifespans under continuous cyclic operating forces.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "str-12w-1",
            title: "Month 1: High-Fidelity Meshes & Contacts",
            topics: ["High-fidelity mesh generation", "Mesh refinement modeling at stress concentration holes", "Complex multi-part contact assemblies definition (Ansys Mechanical)"],
            prerequisites: ["None"]
          },
          {
            _key: "str-12w-2",
            title: "Month 2: Cyclic Fatigue Life Evaluation",
            topics: ["Parsing Stress-Life ($S-N$) data curves", "Calculating damage accumulation factors", "Identifying fatigue hotspots in structural members"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "str-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete structural safety and durability certification package for an industrial machine axle component undergoing asymmetric cyclical load distributions"],
            projects: ["Industrial Axle Fatigue Life & Structural Integrity Certification Dossier"]
          }
        ],
        complianceStandards: ["ASME Section VIII Division 2 (Alternative Rules for Pressure Vessels)", "ASTM E1049 (Standard Practices for Cycle Counting in Fatigue Analysis)"],
        careerOutcome: "Certified Structural Stress Analyst."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Model extreme transient high-impact environments and analyze crack propagation parameters across critical mechanical assets.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "str-24w-1",
            title: "Month 1: Element Selection & Converge checks",
            topics: ["Refined element selection criteria (solid, shell, beam elements)", "Multi-tier convergence tracking rules"],
            prerequisites: ["None"]
          },
          {
            _key: "str-24w-2",
            title: "Month 2: Material Creep & Hyperelastic Polymers",
            topics: ["Non-linear contact mechanics", "Material creep simulation models setup", "Hyperelastic polymer material formulations (e.g. Mooney-Rivlin)"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "str-24w-3",
            title: "Month 3: Fracture Mechanics & Initial Defects",
            topics: ["Linear Elastic Fracture Mechanics (LEFM) execution", "Modeling initial crack defects", "Calculating stress intensity criteria"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "str-24w-4",
            title: "Month 4: Explicit Dynamics & High-Velocity Impacts",
            topics: ["Explicit dynamic structural modeling", "Simulating high-velocity impact", "Material tearing & progressive collapsing models (Ansys LS-DYNA)"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "str-24w-5",
            title: "Month 5: Random Vibrations & Seismic Response",
            topics: ["Random vibration spectrum modeling", "Structural response calculations under seismic or turbulent environments"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "str-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Full explicit crashworthiness validation portfolio or blast containment structural assessment report for an automotive frame segment or industrial pressure vessel asset", "Damage propagation timelines, remaining cycle calculations, and structural detailing fixes", "Technical review panels structured like aerospace safety certification audits"],
            projects: ["Automotive Sub-Frame crashworthiness crash analysis folder"]
          }
        ],
        careerOutcome: "Senior FEA Specialist / Durability & Structural Integrity Lead."
      }
    }
  },
  "smart-grid-infrastructure-power-systems-analysis": {
    title: "Smart Grid Infrastructure & Power Systems Analysis",
    branch: "EE",
    domain: "Power Systems",
    trendingKeywords: ["Load Flow Analysis", "Short Circuit Studies", "Relay Coordination", "Smart Grid Topology", "ETAP"],
    targetJobRoles: ["Power Systems Engineer", "Electrical Protection Engineer", "Substation Design Consultant"],
    industryRelevance: "Grid modernization requires electrical engineers capable of modeling complex distribution grids, conducting transient faults analysis, and designing protective switchgear systems to prevent regional power failures.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Build single-line industrial electrical network maps and run balanced load flow metrics.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "sg-4w-1",
            title: "Single-line Diagrams Mapping",
            topics: ["Structural mapping of single-line electrical diagrams (SLD)", "Configuring infinite grids, transformers, bus ducts, and lumped load models (ETAP)"],
            prerequisites: ["Circuit theory, Power systems basics"]
          },
          {
            _key: "sg-4w-2",
            title: "Balanced Load Flow Simulations",
            topics: ["Balanced load flow simulation algorithms configuration", "Running Newton-Raphson iterations", "Monitoring bus voltage drops & transformer loading constraints"],
            prerequisites: ["Single-line Diagrams"]
          },
          {
            _key: "sg-4w-3",
            title: "Power Factor Correction & Taps",
            topics: ["Adjusting transformer tap changers", "Calculating shunt capacitor configurations to stabilize voltage profiles"],
            prerequisites: ["Balanced Load Flow Simulations"]
          },
          {
            _key: "sg-4w-4",
            title: "Mini Project",
            topics: ["Load flow evaluation and reactive power compensation layout design for a medium-scale manufacturing facility network"],
            projects: ["Factory power grid load flow & capacitor sizing layouts"]
          }
        ],
        careerOutcome: "Junior Power Systems Draftsman or Design Data Assistant."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Predict system behavior under abnormal short-circuit conditions and determine circuit breaker ratings.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "sg-6w-1",
            title: "Power Grid Mapping & Flow (Weeks 1-4)",
            topics: ["Single-line diagrams definition and source grids setup", "Newton-Raphson load flow simulations", "Capacitor size calculations for reactive support"],
            prerequisites: ["None"]
          },
          {
            _key: "sg-6w-2",
            title: "Short-Circuit Fault Modeling",
            topics: ["Symmetrical and asymmetrical short-circuit fault analysis modeling (3-phase, LG, LL, LLG faults)", "Industrial protection rules applied to grids"],
            prerequisites: ["Power Grid Mapping & Flow"]
          },
          {
            _key: "sg-6w-3",
            title: "Applied Project: Short-Circuit Rating",
            topics: ["Executing a complete short-circuit fault assessment on an industrial site layout to verify interrupting capacities of existing circuit breakers"],
            projects: ["Short-circuit study & breaker capacity checklist"]
          }
        ],
        careerOutcome: "Ready for Electrical Power Engineering internships."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Establish coordinated protective relay sequence profiles to isolate grid fault zones.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "sg-8w-1",
            title: "Grid Load Flow & Fault Study (Weeks 1-6)",
            topics: ["Dynamic load flow mappings and bus setups", "Symmetrical & asymmetrical fault calculations", "Circuit breaker capacity allocations"],
            prerequisites: ["None"]
          },
          {
            _key: "sg-8w-2",
            title: "Protective Device Coordination",
            topics: ["Coordinating protection device thresholds", "Configuring Overcurrent (50/51) and Ground Fault (51N) relay time-current characteristic (TCC) logs"],
            prerequisites: ["Grid Load Flow & Fault Study"]
          },
          {
            _key: "sg-8w-3",
            title: "Final Project",
            topics: ["Relay discrimination coordination and discrimination mapping for a radial industrial distribution grid"],
            projects: ["Radial distribution grid TCC relay coordination curves pack"]
          }
        ],
        careerOutcome: "Assistant Electrical Protection Engineer."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Perform flash hazard safety tracking and document system parameter calculations according to safety codes.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "sg-12w-1",
            title: "Month 1: Multi-Bus Network Configurations",
            topics: ["Multi-bus network diagram configuration", "Dynamic load profiling", "Transformer impedance definitions (ETAP / DigSILENT)"],
            prerequisites: ["None"]
          },
          {
            _key: "sg-12w-2",
            title: "Month 2: Arc Flash Hazard Calculations",
            topics: ["Arc Flash hazard calculation modeling", "Estimating incident energy boundaries", "Calculating flash approach perimeters and label requirements"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "sg-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Industrial Substation Power System Evaluation Dossier", "Short-circuit maps, certified TCC relay matching schedules, and full Arc Flash safety assessments"],
            projects: ["Substation Grid Protection & Arc Flash Safety Report"]
          }
        ],
        complianceStandards: ["IEEE 1584 (Guide for Performing Arc-Flash Hazard Calculations)", "IEEE 242 (Protection and Coordination of Power Systems)", "NEC Article 240"],
        careerOutcome: "Certified Power Systems Analysis Specialist."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Model dynamic transient stability profiles over massive hybrid utility networks incorporating decentralized renewable inputs.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "sg-24w-1",
            title: "Month 1: Utility-scale Transmission Grids",
            topics: ["Utility-scale transmission network layout setups", "Multi-machine database validation loops"],
            prerequisites: ["None"]
          },
          {
            _key: "sg-24w-2",
            title: "Month 2: Generator & Governor Dynamic Tuning",
            topics: ["Dynamic generator modeling configuration", "Governor tuning loops setup", "Excitation system block structures"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "sg-24w-3",
            title: "Month 3: Transient Grid Stability Simulations",
            topics: ["Transient Grid Stability Simulations", "Evaluating critical fault clearing time parameters", "Rotor angle swing stability and voltage recovery profiles"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "sg-24w-4",
            title: "Month 4: Harmonics & Power Quality Optimization",
            topics: ["Power Quality and Harmonics optimization", "Modeling non-linear harmonic source models", "Checking distortion metrics ($THD$) and active filter tuning"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "sg-24w-5",
            title: "Month 5: Wide-Area Smart Grid Infrastructures",
            topics: ["Smart Grid Topologies design", "Wide-area monitoring infrastructure (PMU setups)", "Microgrid control loops & energy storage integration"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "sg-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: Complete Grid Interconnection Grid-Code Compliance Dossier for a 100MW Hybrid Wind-Solar Power Generation Facility", "Dynamic transient stabilization configurations, active harmonic filter designs, and grid-islanding protection matrices", "Portfolio review loops with utility grid engineers"],
            projects: ["100MW Hybrid Wind-Solar Grid-Code compliance study report"]
          }
        ],
        careerOutcome: "Senior Power Systems Consultant / Smart Grid Integration Lead."
      }
    }
  },
  "industrial-automation-programmable-logic-controllers-plc-scada-systems": {
    title: "Industrial Automation, Programmable Logic Controllers (PLC) & SCADA Systems",
    branch: "EE",
    domain: "Industrial Automation",
    trendingKeywords: ["Ladder Logic Development", "HMI Integration", "SCADA Systems Architecture", "Industrial Networks", "TIA Portal"],
    targetJobRoles: ["Industrial Automation Engineer", "PLC Programmer", "SCADA/DCS Systems Integrator"],
    industryRelevance: "High-throughput manufacturing plants rely heavily on automation frameworks. Plant operators demand electrical engineers capable of writing PLC ladder logic, designing SCADA visualization decks, and integrating industrial network loops.",
    tracks: {
      fourWeeks: {
        title: "Foundation Track",
        objective: "Program discrete industrial control automation processes using standard PLC logic languages.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "aut-4w-1",
            title: "Memory Structures & I/O Address",
            topics: ["Industrial automation structural design", "Memory structures modeling & input/output addressing", "Hardware config setups (Siemens TIA Portal / Rockwell Studio 5000)"],
            prerequisites: ["Digital logic, Electrical wiring basics"]
          },
          {
            _key: "aut-4w-2",
            title: "Boolean Logic & Timer Blocks",
            topics: ["Boolean bit logic loops", "Latching systems configuration", "On/off timer blocks & up/down counters"],
            prerequisites: ["Memory Structures"]
          },
          {
            _key: "aut-4w-3",
            title: "Sensor & Actuator Interfaces",
            topics: ["Interfacing physical sensors (limit switches, proximity eyes)", "Calibrating electrical actuators (relays, motor starters)"],
            prerequisites: ["Boolean Logic"]
          },
          {
            _key: "aut-4w-4",
            title: "Mini Project",
            topics: ["Complete programming framework design for a automated 3-axis industrial sorting conveyor assembly"],
            projects: ["3-Axis sorting conveyor logic program"]
          }
        ],
        careerOutcome: "Entry-level PLC programmer or plant maintenance assistant."
      },
      sixWeeks: {
        title: "Applied Track",
        objective: "Build local visualization interfaces (HMI) and implement analog signal scaling loops.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "aut-6w-1",
            title: "PLC Memory & Discrete Control (Weeks 1-4)",
            topics: ["Hardware addressing and memory layouts", "Latching, timers and logic rungs in Ladder logic", "Sensor wiring and actuator coils mappings"],
            prerequisites: ["None"]
          },
          {
            _key: "aut-6w-2",
            title: "Analog Signal Scaling & HMI Config",
            topics: ["Scaling 4-20mA sensor signals", "Processing temperature inputs", "Designing HMI screens with active alarm configurations"],
            prerequisites: ["PLC Memory & Discrete Control"]
          },
          {
            _key: "aut-6w-3",
            title: "Applied Project: Mixing Tank Control",
            topics: ["Designing and testing an automated industrial mixing tank fluid control system complete with a custom localized HMI touch panel tracking layout"],
            projects: ["Mixing tank PLC project with HMI visualization screens"]
          }
        ],
        careerOutcome: "Junior Automation Systems Intern."
      },
      eightWeeks: {
        title: "Intermediate Industry Track",
        objective: "Implement automated closed-loop process tracking systems using industrial controller blocks.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "aut-8w-1",
            title: "PLC Programming & HMI (Weeks 1-6)",
            topics: ["Analog signal mapping & calibration loops", "HMI alarms & active trending screens", "Interfacing physical motors and VFD basic configs"],
            prerequisites: ["None"]
          },
          {
            _key: "aut-8w-2",
            title: "PID Controller Tuning Loops",
            topics: ["Proportional-Integral-Derivative (PID) controller block tuning loops", "PWM control paths integration", "Variable frequency drive (VFD) speed interfacing via fieldbus"],
            prerequisites: ["PLC Programming & HMI"]
          },
          {
            _key: "aut-8w-3",
            title: "Final Project",
            topics: ["Development of an automated steady-state pressure control loop for a variable-speed industrial pumping station layout"],
            projects: ["Variable-speed pump PID loop layout & tuning log"]
          }
        ],
        careerOutcome: "Intermediate Automation Specialist / Site Commissioning Engineer."
      },
      twelveWeeks: {
        title: "Professional Certification Track",
        objective: "Architect factory-wide supervisory data tracking (SCADA) platforms linked over reliable hardware buses.",
        deliveryMetrics: {
          learningHours: "100",
          liveSessions: "18",
          practicalLabs: "30",
          miniAssignments: "20",
          projects: "5"
        },
        syllabus: [
          {
            _key: "aut-12w-1",
            title: "Month 1: Advanced PLC Programming",
            topics: ["Advanced structural block architecture (FBD, Structured Text programming)", "Memory block structures", "Safety PLC rules (TIA Portal)"],
            prerequisites: ["None"]
          },
          {
            _key: "aut-12w-2",
            title: "Month 2: SCADA Engineering & Historization",
            topics: ["SCADA systems engineering: Dynamic graphic generation", "Configuring centralized historical data logs & reporting", "Scripts execution & OPC UA server communication setups"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "aut-12w-3",
            title: "Month 3: Industry Simulation Project",
            topics: ["Complete Supervisory Automation Playbook for a multi-stage automated bottling line asset", "Synchronized PLC logic loops & centralized SCADA screen arrays design"],
            projects: ["Bottling line SCADA system & PLC sync layout"]
          }
        ],
        complianceStandards: ["IEC 61131-3 (PLC Programming Standard)", "ISA-101 (Human Machine Interfaces Framework)", "ISA-88 (Batch Control Architecture)"],
        careerOutcome: "Job-ready capability for Automation Controls Engineer positions."
      },
      twentyFourWeeks: {
        title: "Advanced Career Track",
        objective: "Architect enterprise-tier Distributed Control Systems (DCS) featuring multi-ring network backbones and production data tracking integration (MES).",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "aut-24w-1",
            title: "Month 1: Processor Groupings & Redundancy",
            topics: ["Multi-tier PLC processor grouping layouts", "Safe hardware redundant configuration models"],
            prerequisites: ["None"]
          },
          {
            _key: "aut-24w-2",
            title: "Month 2: Industrial Networking Design",
            topics: ["Industrial networking design", "Ethernet/IP, Modbus TCP, Profinet configurations", "Managed switch configuration and VLAN partitioning"],
            prerequisites: ["Month 1 concepts"]
          },
          {
            _key: "aut-24w-3",
            title: "Month 3: DCS Architecture & Systems Servers",
            topics: ["Distributed Control Systems (DCS) architecture", "Control server configuration", "Redundant system design and operator station layouts"],
            prerequisites: ["Month 2 concepts"]
          },
          {
            _key: "aut-24w-4",
            title: "Month 4: SCADA Database & Historian Scripts",
            topics: ["Supervisory SCADA scripting", "Historical database integration (SQL)", "Alarm logging frameworks and historization algorithms"],
            prerequisites: ["Month 3 concepts"]
          },
          {
            _key: "aut-24w-5",
            title: "Month 5: MES & Enterprise OPC UA Systems",
            topics: ["Manufacturing Execution Systems (MES) integration", "Enterprise OPC UA connectivity", "Production reporting and scheduling dashboards"],
            prerequisites: ["Month 4 concepts"]
          },
          {
            _key: "aut-24w-6",
            title: "Month 6: Capstone Project & Portfolio Defense",
            topics: ["Capstone Project: High-throughput automated process plant simulator featuring redundant PLC loops", "Multi-ring Ethernet configuration, SCADA historization, MES production scheduling dashboards", "Panel defense and system validation loops"],
            projects: ["High-throughput Process Plant Automation & DCS design portfolio"]
          }
        ],
        complianceStandards: ["IEC 61131-3", "ISA-99/IEC 62443 (Industrial Cyber Security)", "ISA-88 (Batch Control)", "ISA-95 (Enterprise-Control Integration)"],
        careerOutcome: "Senior Automation Systems Engineer, DCS Commissioning Lead, or Industrial Controls Architect."
      }
    }
  },
  "high-performance-enterprise-backend-engineering": {
    title: "High-Performance Enterprise Backend Engineering",
    branch: "IT",
    domain: "Backend Engineering",
    trendingKeywords: ["Go Concurrency", "gRPC", "PostgreSQL MVCC", "Runtime Profiling", "pprof"],
    targetJobRoles: ["Enterprise Backend Engineer", "Systems Programmer", "Low-Latency Software Engineer"],
    industryRelevance: "High-performance backend systems demand absolute resource efficiency. Moving beyond high-level abstractions, this course trains engineers to optimize Go's runtime, design binary protocol buffers, tune PostgreSQL access paths, and debug profiling graphs.",
    tracks: {
      fourWeeks: {
        title: "Foundation Standalone Track",
        objective: "Master Go's runtime scheduler, gRPC protocols, transaction isolation levels, and native profiling engines.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "it-be-1",
            title: "Week 1: Advanced Concurrency, Memory Model Boundaries & Race Mitigations",
            topics: ["Deep dive into Go's runtime scheduler (M:N multiplexing model)", "Lifecycle of green threads vs native OS threads", "Memory synchronization boundaries & buffered/unbuffered channels", "Explicit sync.Mutex and RWMutex locks and lock-free atomic operations"],
            projects: ["High-concurrency worker pool preventing memory leaks and race conditions"]
          },
          {
            _key: "it-be-2",
            title: "Week 2: Low-Latency API Engineering via gRPC & Protocol Buffers over HTTP/2",
            topics: ["Binary serialization mechanics and .proto contract schemas", "Underlying protocol-buffer wire format analysis", "Four communication archetypes: unary, client-streaming, server-streaming, bidirectional streaming", "High-speed network interceptors for trace logging and token validation"]
          },
          {
            _key: "it-be-3",
            title: "Week 3: Storage Layer Optimization, Transaction Isolation & MVCC Analytics",
            topics: ["PostgreSQL's Multi-Version Concurrency Control (MVCC) and Write-Ahead Logging (WAL)", "Transaction isolation levels (Read Committed up to Serializable) to eliminate anomalies", "Composite, partial, and expression indices configuration", "Auditing execution paths via EXPLAIN ANALYZE"]
          },
          {
            _key: "it-be-4",
            title: "Week 4: Runtime Profiling, Memory Leak Identification & Production Health Controls",
            topics: ["Live system profiling (CPU, heap allocations, block profiles) utilizing Go's native pprof", "Locating CPU bottlenecks and tracing hidden garbage collection triggers", "Native health frameworks with strict, multi-stage /live and /ready validation paths"],
            projects: ["Production-ready API service optimized via pprof profiling reports"]
          }
        ],
        careerOutcome: "Ready for low-latency Go backend engineering positions."
      }
    }
  },
  "scalable-cloud-architecture-declarative-infrastructure": {
    title: "Scalable Cloud Architecture & Declarative Infrastructure",
    branch: "IT",
    domain: "Cloud Engineering",
    trendingKeywords: ["Terraform HCL", "VPC Topology", "State Locking", "Ansible Playbooks", "Auto-Scaling"],
    targetJobRoles: ["Cloud Infrastructure Engineer", "DevOps Engineer", "Site Reliability Engineer"],
    industryRelevance: "Enterprise scale requires immutable, repeatable infrastructure configurations. This curriculum bridges theoretical network design with active automation via Terraform and Ansible, building high-availability cloud layouts.",
    tracks: {
      sixWeeks: {
        title: "Applied Standalone Track",
        objective: "Configure enterprise-grade AWS VPC topographies, author reusable Terraform modules, secure shared state backends, and coordinate auto-scaling systems.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "it-ca-1",
            title: "Week 1: Virtual Private Cloud (VPC) Subnet Isolation & Enterprise Network Topologies",
            topics: ["Calculating classless inter-domain routing (CIDR) blocks across availability zones", "Deploying fault-tolerant multi-tier routing tables", "Provisioning public internet gateways", "Establishing isolated network access control lists (NACLs) to block malicious traffic"]
          },
          {
            _key: "it-ca-2",
            title: "Week 2: Declarative Infrastructure Automation via Reusable HashiCorp HCL Modules",
            topics: ["Syntax mechanics of HashiCorp Configuration Language (HCL)", "Mastering input variables, outputs, and variable interpolation", "Building scalable, multi-tier deployment modules for compute, stores, and relational platforms"]
          },
          {
            _key: "it-ca-3",
            title: "Week 3: State Store Concurrency Protection & Secure Distributed Workspaces",
            topics: ["Abstracting the local terraform state file to remote backends", "Constructing remote state backends using secure object stores with transactional key-value databases", "Enforcing hard state locking and encrypting sensitive infrastructure credentials"]
          },
          {
            _key: "it-ca-4",
            title: "Week 4: Dynamic Configuration Management via Idempotent Multi-Stage Ansible Playbooks",
            topics: ["Configuring central control nodes and defining inventory arrays", "Writing idempotent Ansible playbooks using modular roles", "Automating host OS patching, internal firewall rules, and preparing runtimes for containers"]
          },
          {
            _key: "it-ca-5",
            title: "Week 5: High-Availability Elastic Load Balancing & Telemetry-Driven Auto-Scaling",
            topics: ["Deploying Application Load Balancers (ALBs) with targeted health checks", "Defining telemetry-driven auto-scaling parameters linked to performance indicators", "Monitoring CPU saturation, memory depletion, and queue lengths to scale compute fleets"]
          },
          {
            _key: "it-ca-6",
            title: "Week 6: Chaos Injection Frameworks, Hot Backups & Automated Cloud Disaster Recovery",
            topics: ["Introducing automated fault injections: isolating availability zones and destroying database masters", "Measuring failover delays and logging recovery performance", "Writing automated scripts to restore wiped environments to production status in under 15 minutes"],
            projects: ["Terraform-orchestrated auto-scaling app cluster with validated 15-minute disaster recovery scripts"]
          }
        ],
        careerOutcome: "Competent in orchestrating automated multi-zone cloud systems using HCL and Ansible."
      }
    }
  },
  "large-scale-streaming-data-pipeline-infrastructure": {
    title: "Large-Scale Streaming Data Pipeline Infrastructure",
    branch: "IT",
    domain: "Data Engineering",
    trendingKeywords: ["Apache Kafka", "Apache Flink", "Exactly-Once Semantics", "Watermarks", "Schema Registry"],
    targetJobRoles: ["Data Pipeline Engineer", "Streaming Data Architect", "Real-Time Analytics Developer"],
    industryRelevance: "Modern user experiences rely on real-time event analytics. This course teaches students to configure Apache Kafka message brokers, program distributed stateful stream transforms in Apache Flink, and package streaming lakehouses.",
    tracks: {
      eightWeeks: {
        title: "Intermediate Standalone Track",
        objective: "Manage Kafka partition mechanics, implement stateful Flink stream operators, resolve time anomalies via watermarks, and guarantee exactly-once transactional semantics.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "it-sd-1",
            title: "Week 1: Apache Kafka Distributed Cluster Internals & Log Partition Kinetics",
            topics: ["Kafka's storage architecture and partition log segment generation", "Disk optimization via sequential I/O and zero-copy transfers", "Consumer group coordination and topic retention/index parameters"]
          },
          {
            _key: "it-sd-2",
            title: "Week 2: High-Throughput Production-Grade Producers & Manual Offset Management",
            topics: ["Configuring advanced producers (acks=all, in-flight requests, idempotent delivery)", "Handling consumer network partitions safely", "Writing manual offset tracking loops to guarantee delivery control"]
          },
          {
            _key: "it-sd-3",
            title: "Week 3: Stateful Stream Computing Engines via Apache Flink Frameworks",
            topics: ["Flink's runtime environment and distributed dataflow graphs", "Stateful operator chains and local application state management", "Configuring high-performance embedded key-value stores (RocksDB)"]
          },
          {
            _key: "it-sd-4",
            title: "Week 4: Event-Time Processing, Watermark Generations & Complex Time Windows",
            topics: ["System processing time vs actual event generation timestamps", "Implementing custom watermark generators for late-arriving packets", "Applying tumbling, sliding, and session windows over moving timelines"]
          },
          {
            _key: "it-sd-5",
            title: "Week 5: Fault-Tolerance Controls & Distributed Exactly-Once Semantics (EOS)",
            topics: ["Flink's variant of the Chandy-Lamport algorithm for distributed snapshots", "Coordinating transactional boundaries across Kafka and Flink", "Achieving exactly-once processing guarantees during infrastructure crashes"]
          },
          {
            _key: "it-sd-6",
            title: "Week 6: Schema Evolution Control, Registries & Native Avro Compression Payloads",
            topics: ["Setting up unified Schema Registries to enforce structural contracts", "Managing forward, backward, and full compatibility changes", "Writing serialization schemas using Apache Avro binary payloads"]
          },
          {
            _key: "it-sd-7",
            title: "Week 7: Streaming Storage Sinks & High-Performance Data Lakehouse Packing",
            topics: ["Connecting stream processors to cloud object stores with transaction logs", "Configuring file-compaction strategies to prevent 'tiny files' performance drops", "Configuring Apache Iceberg or Delta Lake storage sinks"]
          },
          {
            _key: "it-sd-8",
            title: "Week 8: Enterprise Clickstream Analytics Infrastructure Production Deployment",
            topics: ["End-to-end integration and stress-testing under simulated traffic", "Ingesting user clickstream events, running Flink transformations, and streaming to lakehouses", "Auditing system latency metrics under high artificial workloads"],
            projects: ["Enterprise Clickstream Real-time Analytics & Lakehouse Pipeline"]
          }
        ],
        careerOutcome: "Portfolio-ready competency for designated data streaming pipeline vacancies."
      }
    }
  },
  "cloud-native-container-orchestration-edge-defense-systems": {
    title: "Cloud-Native Container Orchestration & Edge Defense Systems",
    branch: "IT",
    domain: "DevOps & Security",
    trendingKeywords: ["Kubernetes", "Service Mesh", "Anycast WAF", "Helm Packages", "GitOps RBAC"],
    targetJobRoles: ["Platform Architect", "Lead DevSecOps Engineer", "Site Reliability Specialist"],
    industryRelevance: "Orchestrating containerized systems at scale demands rigorous control plane security, automated deployment packages, telemetry pipelines, and edge network firewalls.",
    tracks: {
      twentyFourWeeks: {
        title: "Master Career Track",
        objective: "Manage Kubernetes control planes, build persistent decoupled database volumes, configure sidecar service meshes, inject edge rate-limiting WAF firewalls, and establish zero-trust GitOps pipelines.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "it-cn-1",
            title: "Month 1: Kubernetes Core Manifest Orchestration & Control Plane Topologies",
            topics: ["Kubernetes control plane internals and etcd database synchronization", "Manifest styling and declarative deployment controllers", "Cluster network boundaries and compute limits configuration"],
            projects: ["Secure multi-pod application cluster with declarative compute limits"]
          },
          {
            _key: "it-cn-2",
            title: "Month 2: Persistent Cloud Storage Subsystems & Reusable Helm Packages",
            topics: ["Decoupling persistent volumes from dynamic container lifecycles", "Configuring volume claim parameters (PV, PVC, storage classes)", "Building templated Helm charts to automate complex application deployments"],
            projects: ["Persistent database container retention setup"]
          },
          {
            _key: "it-cn-3",
            title: "Month 3: Service Mesh Management, mTLS Security & Prometheus Telemetry",
            topics: ["Injecting sidecar proxies across microservices (Istio)", "Establishing automatic mutual TLS (mTLS) network isolation", "Controlling traffic splits for canary releases", "Setting up automated metric scraping engines (Prometheus/Grafana)"],
            projects: ["Operational service mesh with traffic splitting dashboards"]
          },
          {
            _key: "it-cn-4",
            title: "Month 4: Edge Layer Protection Frameworks & Web Application Firewall (WAF) Rule Tuning",
            topics: ["Anycast routing paths and edge protection proxies configuration", "Building custom rate-limiting rules and threat filters", "Stopping malicious injection vectors before they reach inner cluster networks"],
            projects: ["Internet-facing gateway dropping invalid or malicious request profiles"]
          },
          {
            _key: "it-cn-5",
            title: "Month 5: Industrial Chaos Engineering & Multi-Node Failover Auditing",
            topics: ["Introducing automated failure tools (Chaos Mesh / Litmus) into container clusters", "Intentionally deleting master plane resources and breaking runtime networking layers", "Verifying system self-healing behaviors under stress"],
            projects: ["Automated chaos performance profile validating zero-downtime failovers"]
          },
          {
            _key: "it-cn-6",
            title: "Month 6: Production-Grade Multi-Tenant Infrastructure Handover",
            topics: ["Enforcing strict role-based access controls (RBAC) and network isolation policies", "Automating GitOps deployment loops (ArgoCD)", "Compiling compliance audit trails and security frameworks"],
            projects: ["Master DevOps Blueprint: Production-ready multi-tenant platform with ArgoCD"]
          }
        ],
        careerOutcome: "Platform Engineer ready for senior DevOps, DevSecOps, and SRE placements."
      }
    }
  },
  "advanced-beamhouse-chemistry-macromolecular-processing": {
    title: "Advanced Beamhouse Chemistry & Macromolecular Processing",
    branch: "CHEM_LEATHER",
    domain: "Beamhouse Engineering",
    trendingKeywords: ["Hide Soaking", "Alkaline Unhairing", "Enzyme Bating", "HPLC Soaking Kinetics", "Matrix Acidification"],
    targetJobRoles: ["Tannery Chemist", "Beamhouse Supervisor", "Process Development Engineer"],
    industryRelevance: "Leather quality is established in the beamhouse. Isolating structural collagen, managing keratin disulfide cleavage, and adjusting Iso-Electric shifts are essential to preparing hides for mineral-free tanning.",
    tracks: {
      fourWeeks: {
        title: "Foundation Standalone Track",
        objective: "Understand macromolecular collagen isolation, alkaline keratin degradation reactions, tryptic bating, and pickle brine formulation.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "cl-bh-1",
            title: "Week 1: Intercellular Protein Matrix Degradation & Hide Diffusion Mechanics",
            topics: ["Biochemical makeup of raw animal hides and structural collagen isolation", "Mass transport kinetics of non-ionic surfactants diffusing through tissue channels", "Using HPLC to measure protein extraction rates during soaking"],
            projects: ["HPLC soaking kinetics analysis profile"]
          },
          {
            _key: "cl-bh-2",
            title: "Week 2: Alkaline Unhairing Kinetics & Keratin Disulfide Cleavage Chemistry",
            topics: ["Chemical reactions of calcium hydroxide and sodium sulfide in processing drums", "Nucleophilic attacks breaking down disulfide bonds within keratin structures", "Calculating and balancing osmotic swelling forces to protect collagen fibers"]
          },
          {
            _key: "cl-bh-3",
            title: "Week 3: Buffering Dynamics, Iso-Electric Shifts & Proteolytic Enzyme Bating",
            topics: ["Calculating ammonium salt loads to buffer pelt pH from 12.5 down to 8.2", "Enzyme kinetics of pancreatic tryptic agents in fiber spaces", "Selective removal of elastic fibers without degrading structural collagen"]
          },
          {
            _key: "cl-bh-4",
            title: "Week 4: Pickling Fluid Physics, Electrolyte Controls & Matrix Acidification",
            topics: ["Formulating salt-acid brine solutions to prevent acid-swelling reactions", "Shifting internal collagen structure past its iso-electric point to pH 2.8", "Physical testing to confirm even chemical distribution across pelt cross-sections"],
            projects: ["Optimized pelt pickling and validation dataset log"]
          }
        ],
        careerOutcome: "Pelt preparation chemist capable of managing raw beamhouse processing stages."
      }
    }
  },
  "sustainable-mineral-free-tanning-matrix-engineering": {
    title: "Sustainable Mineral-Free Tanning Matrix Engineering",
    branch: "CHEM_LEATHER",
    domain: "Tanning Systems",
    trendingKeywords: ["Chrome-Free Tanning", "Vegetable Tannins", "Glutaraldehyde Crosslinking", "Hydrodynamics", "Liquor Recirculation"],
    targetJobRoles: ["Sustainability Engineer", "Tanning Process Designer", "Leather Product Developer"],
    industryRelevance: "Environmental directives are forcing tanneries away from chromium formulations. This course explores organic coordination matrices, aldehyde cross-linking, and closed-loop Spent Liquor Recirculation.",
    tracks: {
      sixWeeks: {
        title: "Applied Standalone Track",
        objective: "Analyze Chromium (VI) risk parameters, design natural vegetable tanning matrices, synthesize aldehyde crosslinks, model drum fluid mechanics, and optimize spent fluid recapture loops.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "cl-tn-1",
            title: "Week 1: Chromium (VI) Oxidation Risks & Coordination Chemistry Analysis",
            topics: ["Binding mechanics between basic chromium sulfate and collagen carboxyl groups", "Modeling environmental factors (UV, high pH, unsaturated fats) triggering Cr(III) to Cr(VI) oxidation", "Establishing clean parameters to mitigate hexavalent chromium formation"]
          },
          {
            _key: "cl-tn-2",
            title: "Week 2: Natural Vegetable Tanning Phenolics & Complex Polypeptide Affinities",
            topics: ["Evaluating molecular weights of hydrolyzable vs condensed tannins", "Hydrogen bonding formations between vegetable tannins and collagen proteins", "Calculating concentration gradients to ensure complete penetration across dense corium fibers"]
          },
          {
            _key: "cl-tn-3",
            title: "Week 3: Synthetic Aldehydes & Covalent Polymeric Cross-Linking Formulations",
            topics: ["Formulating metal-free leather using glutaraldehyde and polymeric tanning agents", "Managing covalent bond formation within peptide chains", "Controlling reaction temperatures and pH levels to stabilize hydrothermal shrinkage parameters"]
          },
          {
            _key: "cl-tn-4",
            title: "Week 4: Drum Hydrodynamics & Mass Transfer Kinetic Sizing",
            topics: ["Modeling fluid movement inside rotating production drums", "Analyzing how rotation speeds, float volumes, and shelf layouts impact chemical penetration times", "Scaling up bench lab formulations into industrial production scales"]
          },
          {
            _key: "cl-tn-5",
            title: "Week 5: Spent Liquor Recirculation, Exhaustion Limits & Waste Mitigation",
            topics: ["Calculating mass balances across tanning cycles to maximize chemical exhaustion", "Designing closed-loop recirculation systems to recapture unspent processing fluids", "Optimizing chemical feed streams to minimize discharge levels in effluent flows"]
          },
          {
            _key: "cl-tn-6",
            title: "Week 6: Hydrothermal Shrinkage Validation & Sustainable Prototype Development",
            topics: ["Hands-on chemical engineering lab using a chrome-free recipe", "Validating shrink resistance using thermal testing devices", "Measuring shrinkage temperatures to ensure prototype stability exceeds 85°C"],
            projects: ["Chrome-Free Leather Prototype with Shrinkage Validation (T > 85°C)"]
          }
        ],
        careerOutcome: "Equipped to design and validate sustainable chrome-free tanning workflows."
      }
    }
  },
  "performance-dyeing-fatliquoring-surface-finishing-kinetics": {
    title: "Performance Dyeing, Fatliquoring & Surface Finishing Kinetics",
    branch: "CHEM_LEATHER",
    domain: "Leather Finishing",
    trendingKeywords: ["Dye Diffusion", "Fatliquor Emulsion", "Polymer Basecoat", "Automated Spraying", "Bally Flex Validation"],
    targetJobRoles: ["Finishing Specialist", "Automotive Leather Engineer", "QA Lab Manager"],
    industryRelevance: "Aesthetic appeal, tactile softness, and wear resilience define leather value. This module teaches color chemistry, oil emulsion lubrication, polyurethane film physics, and automated atomization metrics.",
    tracks: {
      eightWeeks: {
        title: "Intermediate Standalone Track",
        objective: "Model anionic dye diffusion, formulate oil-in-water fatliquors, design high-wear polymer basecoats, tune spray atomization, and validate finished leather against automotive test protocols.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "cl-fi-1",
            title: "Week 1: Multi-Component Dye Diffusion & Ionic Interaction Dynamics",
            topics: ["Analyzing how anionic acid, basic, and direct dyes bind with charged collagen sites", "Tracking dye penetration rates through varyingly dense leather layers", "Adjusting temperature and pH parameters to prevent uneven surface shading"]
          },
          {
            _key: "cl-fi-2",
            title: "Week 2: Fatliquor Emulsion Chemistry & Intermolecular Lubrication Systems",
            topics: ["Emulsion chemistry of sulfonated, sulfated, and raw natural marine oils", "Calculating droplet sizes and tracking diffusion pathways through the grain layer", "Balancing oil-to-water ratios to establish target softness and tensile strength"]
          },
          {
            _key: "cl-fi-3",
            title: "Week 3: Spatial Lipid Distribution Profiling via Cross-Sectional Microscopy",
            topics: ["Analyzing internal lubrication consistency using analytical extraction methods", "Using cross-sectional microscopy to map lipid distribution across grain and corium layers", "Preventing surface fat-spues and managing fiber friction coefficients"]
          },
          {
            _key: "cl-fi-4",
            title: "Week 4: High-Performance Basecoat Formulation & Polymer Dispersion Physics",
            topics: ["Blending polyurethane and acrylic resin dispersions to build flexible, high-wear layers", "Balancing elasticity, hardness, and thermal stability in coating films", "Formulating basecoats to meet strict wear requirements for automotive seating and footwear"]
          },
          {
            _key: "cl-fi-5",
            title: "Week 5: Pigment Stabilization, Dispersions & Rub Fastness Optimization",
            topics: ["Studying pigment dispersion mechanics and calculating binder-to-pigment ratios", "Preventing film cracking and optimize mechanical adhesion", "Running physical tests (dry/wet rub fastness) to confirm surface coating integrity"]
          },
          {
            _key: "cl-fi-6",
            title: "Week 6: Automated Spray Atomization Controls & Coating Equipment Parameters",
            topics: ["Configuring automated spray networks on industrial finishing lines", "Optimizing air pressure parameters, fluid nozzle diameters, and conveyor speeds", "Minimizing overspray waste and maintaining uniform dry film thicknesses (DFT)"]
          },
          {
            _key: "cl-fi-7",
            title: "Week 7: Mechanical Processing Controls: Staking, Buffing & Toggle Drying",
            topics: ["Managing mechanical operations: staking (softening), buffing (sanding), and toggle drying", "Analyzing structural changes in fiber networks and tracking surface tension adjustments", "Optimizing machine settings to maximize usable leather area and surface aesthetics"]
          },
          {
            _key: "cl-fi-8",
            title: "Week 8: Automotive-Grade Finished Leather Portfolio Validation Project",
            topics: ["Processing and finishing leather samples to meet strict automotive industry specifications", "Running validation tests: heat aging, flexing fatigue (Bally flexometer), and light fastness", "Compiling test reports aligning with international automotive guidelines"],
            projects: ["Automotive Finished Leather Portfolio (Dry/Wet Rub & Bally Flex Validated)"]
          }
        ],
        careerOutcome: "Finished Leather Specialist ready for premium automotive and footwear R&D roles."
      }
    }
  },
  "greenfield-leather-manufacturing-plant-effluent-treatment-synthesis": {
    title: "Greenfield Leather Manufacturing Plant & Effluent Treatment Synthesis",
    branch: "CHEM_LEATHER",
    domain: "Plant Design & Waste Management",
    trendingKeywords: ["Mass Balance", "Chrome Precipitation", "COD/BOD Reactors", "ZLD Evaporators", "HAZOP Gas Sensor"],
    targetJobRoles: ["Environmental Plant Manager", "Process Systems Engineer", "Effluent Consultant"],
    industryRelevance: "Modern tannery design is bounded by strict environmental regulations. This Master program teaches students to build mass balances, configure biological COD/BOD reactors, design Zero Liquid Discharge (ZLD) systems, and conduct HAZOP gas audits.",
    tracks: {
      twentyFourWeeks: {
        title: "Master Career Track",
        objective: "Size industrial drum lines, design chrome recovery precipitation loops, size biological reactors, design ZLD multi-effect evaporators, deploy toxic gas sensors, and draft greenfield plant environmental audits.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "cl-pl-1",
            title: "Month 1: Industrial Mass Balance Controls & Production Line Layout Sizing",
            topics: ["Building comprehensive mass balances for raw stock, chemical inputs, and water consumption", "Designing efficient layouts for processing drums and mechanical equipment", "Optimizing material workflows and water distribution paths within the facility"],
            projects: ["Tannery mass balance ledger and mechanical drum layout blueprint"]
          },
          {
            _key: "cl-pl-2",
            title: "Month 2: Primary Chemical Effluent Treatment Systems & Resource Recovery Loops",
            topics: ["Managing heavy industrial wastewater and chemical recovery", "Designing chrome precipitation networks and sulfide gas scrubbers", "Configuring automated chemical coagulation/flocculation systems for raw discharge"],
            projects: ["Primary effluent treatment design and chrome recovery flowsheet"]
          },
          {
            _key: "cl-pl-3",
            title: "Month 3: Secondary Biological Reactors & Activated Sludge Kinematics",
            topics: ["Biological water treatment parameters", "Calculating dissolved oxygen requirements and mixed liquor volatile suspended solids (MLVSS)", "Managing chemical and biological oxygen demands (COD/BOD)"],
            projects: ["Multi-stage activated sludge biological reactor sizing calculations"]
          },
          {
            _key: "cl-pl-4",
            title: "Month 4: Zero Liquid Discharge (ZLD) Evaporator Network Engineering",
            topics: ["Advanced zero-discharge wastewater techniques", "Designing multi-effect evaporators and mechanical vapor recompressors (MVR)", "Configuring crystallization systems to recover clean process water and dry salt solids"],
            projects: ["Zero Liquid Discharge (ZLD) evaporator network schematic and thermal balances"]
          },
          {
            _key: "cl-pl-5",
            title: "Month 5: Industrial Risk Assessments & Toxic Gas Containment Controls",
            topics: ["HAZOP analysis of high-risk points for toxic hydrogen sulfide (H2S) gas", "Designing safety ventilation networks and containment scrubbing systems", "Setting up automated gas sensors and emergency plant isolation protocols"],
            projects: ["H2S gas sensor layout and emergency plant containment protocols"]
          },
          {
            _key: "cl-pl-6",
            title: "Month 6: Greenfield Plant Environmental Audit & Regulatory Certification",
            topics: ["Compiling environmental impact statements and carbon footprint indicators", "Auditing plant workflows against ISO 14001 and LWG (Leather Working Group) standards", "Preparing the final regulatory handover dossier for plant commissioning"],
            projects: ["Greenfield Tannery Master Plan: LWG-compliant factory blueprint and ETP designs"]
          }
        ],
        careerOutcome: "Lead Environmental Engineer or Tannery Plant Director capable of commissioning clean production sites."
      }
    }
  },
  "biosignal-acquisition-high-precision-analog-front-ends": {
    title: "Biosignal Acquisition & High-Precision Analog Front-Ends",
    branch: "BIOMED_ROBOTIC",
    domain: "Medical Instrumentation",
    trendingKeywords: ["Bio-potentials", "Instrumentation Amplifier", "DRL Circuit", "Active Filters", "Operational Testing"],
    targetJobRoles: ["Biomedical Analog Engineer", "Medical Device HW Developer", "Signal Integrity Specialist"],
    industryRelevance: "Human bio-potentials (ECG, EMG, EEG) are microvolt-level signals buried under volts of ambient electrical noise. Designing clinical-grade medical devices requires high-performance analog front-ends with active noise cancellation and patient isolation.",
    tracks: {
      fourWeeks: {
        title: "Foundation Standalone Track",
        objective: "Model bio-potentials, design high-CMRR instrumentation amplifiers, implement active Driven-Right-Leg feedback loops, and formulate active filters.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "br-ba-1",
            title: "Week 1: Electro-Physiology Origins & Half-Cell Interface Modeling",
            topics: ["Membrane polarization changes and bio-potential generation", "Modeling the electrode-skin interface electrical behaviors", "Tracking shifting impedances and half-cell potentials that degrade raw signals"],
            projects: ["Equivalent electrical model of skin-electrode interface"]
          },
          {
            _key: "br-ba-2",
            title: "Week 2: High-Performance Instrumentation Amplifiers & Advanced CMRR Optimization",
            topics: ["Designing three-op-amp instrumentation amplifiers to extract microvolt-level signals", "Calculating resistor tolerance impacts on common-mode noise suppression", "Tuning CMRR to exceed 110 dB to reject powerline interference"]
          },
          {
            _key: "br-ba-3",
            title: "Week 3: Active Patient Isolation Topologies & Driven-Right-Leg (DRL) Circuits",
            topics: ["clinical electrical safety boundaries and active isolation barriers (optical/capacitive)", "Designing DRL feedback loops to actively cancel common-mode noise", "Evaluating patient leakage current limits to match safety codes"]
          },
          {
            _key: "br-ba-4",
            title: "Week 4: Multi-Stage Active Filter Formulations & Operational Testing",
            topics: ["Formulating and tuning active bandpass and notch filters (Butterworth, Chebyshev)", "Eliminating high-frequency artifacts and power grid noise", "Bench testing the complete front-end with simulated bio-signals"],
            projects: ["Clinical-Grade ECG Analog Front-End schematic and simulation dossier"]
          }
        ],
        careerOutcome: "Equipped to design noise-free analog circuits for medical diagnostic devices."
      }
    }
  },
  "robotic-kinematics-dynamics-spatial-trajectory-tracking": {
    title: "Robotic Kinematics, Dynamics & Spatial Trajectory Tracking",
    branch: "BIOMED_ROBOTIC",
    domain: "Robotic Systems",
    trendingKeywords: ["Quaternion Rotation", "DH Parameters", "Jacobian Singularity", "Euler-Lagrange Forces", "ROS2 Gazebo Simulation"],
    targetJobRoles: ["Robotics Software Engineer", "Kinematics Researcher", "Controls Engineer"],
    industryRelevance: "Precise robotic motion in surgical or industrial environments depends on solid kinematic transformation systems, dynamics load matching, and smooth trajectory planning models.",
    tracks: {
      sixWeeks: {
        title: "Applied Standalone Track",
        objective: "Formulate spatial transformations, derive Denavit-Hartenberg (DH) kinematic chains, analyze Jacobian velocity singularities, compute Euler-Lagrange equations, plan smooth polynomial curves, and deploy ROS2 control nodes.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "br-rk-1",
            title: "Week 1: Spatial Coordinate Systems & Unit Quaternion Rotations",
            topics: ["Homogeneous transformation matrices in 3D space", "Euler rotation sequences vs Unit Quaternions", "Formulating mathematical rotations without running into gimbal lock calculation errors"]
          },
          {
            _key: "br-rk-2",
            title: "Week 2: Forward & Inverse Kinematics via Denavit-Hartenberg (DH) Parameters",
            topics: ["Constructing geometric DH parameter tables for multi-axis robotic arms", "Writing forward kinematic algorithms to map joint coordinates to tool space", "Formulating inverse kinematic solutions to locate joints for a target Cartesian coordinate"]
          },
          {
            _key: "br-rk-3",
            title: "Week 3: Differential Kinematics, Velocity Profiles & Manipulator Singularities",
            topics: ["Deriving geometric Jacobian matrices mapping joint speeds to tool space velocities", "Analyzing mathematical singularity conditions causing loss of mobility degrees", "Designing velocity profile transitions around joint limits"]
          },
          {
            _key: "br-rk-4",
            title: "Week 4: Multi-Body Dynamics Optimization via Euler-Lagrange Equations",
            topics: ["Formulating equations of motion using Euler-Lagrange mechanics", "Tracking inertial tensors, centrifugal/Coriolis forces, and gravitational loads", "Building dynamic models to calculate joint torques during high-speed path travel"]
          },
          {
            _key: "br-rk-5",
            title: "Week 5: Trajectory Planning Frameworks & Smooth Velocity Blending",
            topics: ["Generating smooth joint and Cartesian paths using cubic and quintic polynomials", "Applying Trapezoidal and S-Curve velocity profiles", "Blending acceleration rates to prevent mechanical vibrations and motor overheating"]
          },
          {
            _key: "br-rk-6",
            title: "Week 6: ROS2 Controller Deployments & Gazebo Physical Simulation Validation",
            topics: ["Writing node control scripts within the ROS2 (Robot Operating System) ecosystem", "Deploying path planning packages to drive multi-axis joint states", "Validating system behaviors in Gazebo virtual physical simulation environments"],
            projects: ["ROS2 & Gazebo Simulation profile driving a 6-DOF robotic manipulator through a pick-and-place loop"]
          }
        ],
        careerOutcome: "Capable of writing kinematic equations, path planners, and simulating multi-DOF manipulators."
      }
    }
  },
  "implantable-medical-device-development-biocompatible-fea": {
    title: "Implantable Medical Device Development & Biocompatible FEA",
    branch: "BIOMED_ROBOTIC",
    domain: "Implant Engineering",
    trendingKeywords: ["DICOM CAD Segment", "PEEK Titanium Alloys", "Stress Shielding", "Laser Weld Seal", "ISO 13485 Compliance"],
    targetJobRoles: ["Implant Designer", "Biomaterials Engineer", "Medical QA Auditor"],
    industryRelevance: "Implantable hardware (pacemakers, orthopedics) must interface safely with human tissue while handling millions of physical stress cycles without structural failures or bodily leaks.",
    tracks: {
      eightWeeks: {
        title: "Intermediate Standalone Track",
        objective: "Convert DICOM scans to CAD, evaluate PEEK/titanium alloys, model stress shielding in bone, analyze hermetic packaging, run multi-axial FEA fatigue tests, and draft ISO 13485 documentation.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "br-im-1",
            title: "Week 1: Anatomical DICOM Stream Processing & 3D Structural Mesh Reconstruction",
            topics: ["Processing raw clinical CT/MRI DICOM scans using segmentation software", "Filtering threshold densities to isolate bone and organ geometries", "Transforming volumetric scans into smooth 3D CAD meshes for custom implant design"]
          },
          {
            _key: "br-im-2",
            title: "Week 2: Biocompatible Material Selection & In-Vivo Degradation Profiles",
            topics: ["Evaluating biocompatible materials (Titanium alloys Ti-6Al-4V, PEEK polymers, Cobalt-Chrome)", "Analyzing fatigue limits, wear properties, and physiological fluid corrosion indices", "Investigating surface oxides and degradation profiles over decades of exposure"]
          },
          {
            _key: "br-im-3",
            title: "Week 3: Bone Remodeling Laws & Porous Structural Stress-Shielding Mitigations",
            topics: ["Wolff's Law of bone remodeling and mechanical loading principles", "Analyzing how overly rigid implants trigger localized bone density loss (stress shielding)", "Designing porous lattice topologies using gyroid cells to match bone elastic modulus"]
          },
          {
            _key: "br-im-4",
            title: "Week 4: Hermetic Enclosure Engineering & Laser Welding Precision Metrology",
            topics: ["Sizing titanium enclosures for active electronic implants (pacemakers, stimulators)", "Calculating moisture diffusion limits to prevent fluid entry", "Designing precise laser welding patterns and auditing seals via leak test standards"]
          },
          {
            _key: "br-im-5",
            title: "Week 5: Cyclic Fatigue Life Estimations via Multi-Axial FEA Simulations",
            topics: ["Setting up multi-axial finite element analysis (FEA) boundary conditions", "Applying cyclical load profiles simulating walking and physical impact", "Plotting Gerber/Goodman fatigue limits and estimating structural lifespan over 100 million cycles"]
          },
          {
            _key: "br-im-6",
            title: "Week 6: Surface Modification Chemistry & Plasma-Sprayed Osseointegration",
            topics: ["Biochemical surface treatments to accelerate bone bonding", "Osseointegration kinetics of plasma-sprayed hydroxyapatite", "Testing surface roughness, porosity, and bond adhesion strength"]
          },
          {
            _key: "br-im-7",
            title: "Week 7: Regulatory Verification Protocols & ISO 13485 Compliance Standards",
            topics: ["Medical device classification criteria and regulatory pathways (FDA 510k, PMA)", "ISO 13485 quality management systems design controls", "Drafting verification plans covering biosafety testing and cleanroom production controls"]
          },
          {
            _key: "br-im-8",
            title: "Week 8: Total-Hip Prosthesis Design & Optimization Capstone Project",
            topics: ["Designing a patient-specific total hip replacement prosthesis based on anatomical scans", "Optimizing porous interfaces, verifying assembly limits, and validating structural factor-of-safety under max walk load", "Compiling verification reports matching ISO 13485 validation templates"],
            projects: ["Custom Hip Prosthesis Design and FEA Lifecycle Validation Dossier"]
          }
        ],
        careerOutcome: "Equipped to design Class III load-bearing implants complying with ISO 13485 workflows."
      }
    }
  },
  "autonomous-surgical-robotics-intelligent-computer-vision-infrastructure": {
    title: "Autonomous Surgical Robotics & Intelligent Computer Vision Infrastructure",
    branch: "BIOMED_ROBOTIC",
    domain: "Surgical Systems",
    trendingKeywords: ["RTOS Controller", "HD Vision Segment", "Haptic Constraints", "Teleoperation Loop", "Fail-safe Audit"],
    targetJobRoles: ["Surgical Robotics Developer", "Controls Architect", "Robotic Vision Specialist"],
    industryRelevance: "Surgical robots perform life-critical operations requiring sub-millimeter precision. This master track trains developers to write real-time RTOS joint loops, train HD vision tracking models, establish virtual constraint boundaries, and build fail-safe redundancy systems.",
    tracks: {
      twentyFourWeeks: {
        title: "Master Career Track",
        objective: "Program multi-threaded RTOS motor controllers, deploy deep learning tool trackers, enforce haptic virtual constraints, implement latency-compensated teleoperation, conduct hardware fail-safe audits, and compile FDA compliance folders.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "br-sr-1",
            title: "Month 1: Real-Time Motor Controllers & Multi-Threaded RTOS Hardware Architectures",
            topics: ["Programming low-latency joint controllers inside Real-Time Operating Systems (FreeRTOS)", "Thread scheduling, task priorities, and mutex locks in control loops", "ADC and PWM synchronization for high-frequency current loops"],
            projects: ["Multi-threaded joint controller platform with sub-millisecond loop times"]
          },
          {
            _key: "br-sr-2",
            title: "Month 2: Computer Vision Segmentation Models & Surgical Tool Tracking",
            topics: ["Training deep learning segmentation models (U-Net, Mask R-CNN) on surgical video", "Tracking instruments and tooltips in real time under changing light conditions", "Isolating target tissue boundaries and dynamic markers"],
            projects: ["Real-time surgical tool tip tracking and tissue boundary segmenter"]
          },
          {
            _key: "br-sr-3",
            title: "Month 3: Haptic Feedback Controls & Active Virtual Constraint Frameworks",
            topics: ["Active force feedback math and haptic device interface controls", "Designing active virtual constraints (software walls) around critical anatomy", "Configuring force rendering algorithms for steady-state tissue contacts"],
            projects: ["Active software wall virtual lockout boundary for anatomical shielding"]
          },
          {
            _key: "br-sr-4",
            title: "Month 4: Teleoperation Control Loops & Network Latency Compensation",
            topics: ["Designing master-slave control architectures for remote operation", "Deriving wave variables and scattering parameters to stabilize loops", "Writing predictive algorithms to handle network delay and jitter"],
            projects: ["Master-slave teleoperation link compensating for variable network latency"]
          },
          {
            _key: "br-sr-5",
            title: "Month 5: Fail-Safe Controls & Medical Redundancy Systems",
            topics: ["Designing dual-channel backup processors and watchdogs", "Implementing automated hardware emergency stops (E-stop state machines)", "Resolving runtime exceptions, sensor failures, and power drops safely"],
            projects: ["Physical system audit validating immediate safe-state lockouts"]
          },
          {
            _key: "br-sr-6",
            title: "Month 6: Autonomous Surgical Platform Verification & Compliance Handover",
            topics: ["Executing realistic automated procedures on anatomical tissue phantoms", "Verifying tooltip positioning accuracies down to sub-millimeter scales", "Compiling system performance logs, hazards analysis (ISO 14971), and regulatory filing data"],
            projects: ["Master Surgical Robotics Dossier: Sub-millimeter trajectory logs and ISO 14971 files"]
          }
        ],
        careerOutcome: "Platform Developer ready for technical lead positions in surgical and medical robotics companies."
      }
    }
  },
  "power-system-transient-stability-grid-physics-optimization": {
    title: "Power System Transient Stability & Grid Physics Optimization",
    branch: "EEE",
    domain: "Power Systems",
    trendingKeywords: ["Swing Equation", "Equal Area Criterion", "Runge-Kutta Solver", "Relay Breakers", "PSS Excitation"],
    targetJobRoles: ["Power Systems Analyst", "Grid Protection Specialist", "Substation Controls Engineer"],
    industryRelevance: "Maintaining grid stability during transient faults is critical to preventing regional blackouts. This course covers synchronous generator dynamics, fault clearing formulations, and power system stabilizer tuning.",
    tracks: {
      fourWeeks: {
        title: "Foundation Standalone Track",
        objective: "Derive synchronous generator swing equations, evaluate Equal Area Stability parameters, write numerical transient solvers in code, and design stabilizer parameters.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "eee-gr-1",
            title: "Week 1: Synchronous Generator Physics & Swing Equation Matrix Derivations",
            topics: ["Internal mechanics of synchronous machines and rotor angle dynamics", "Deriving the fundamental swing equation to track rotor movements", "Building power-angle models to evaluate load balances across multi-generator setups"],
            projects: ["Mathematical swing equation multi-generator simulator"]
          },
          {
            _key: "eee-gr-2",
            title: "Week 2: Equal Area Criterion & Critical Fault Clearing Time Formulations",
            topics: ["Analyzing transient fault scenarios using the Equal Area Criterion", "Calculating critical clearing times (Tcc) for short-circuit faults", "Determining safety breaker trip thresholds to preserve grid synchronization"]
          },
          {
            _key: "eee-gr-3",
            title: "Week 3: Numerical Integration Solvers & Multi-Machine System Code Simulations",
            topics: ["Writing custom mathematical solvers using Runge-Kutta methods (RK4)", "Solving multi-variable differential grid equations in Python", "Simulating transient responses and tracking power swing corridors"],
            projects: ["Custom RK4 power swing numerical solver tool"]
          },
          {
            _key: "eee-gr-4",
            title: "Week 4: Power System Stabilizers (PSS) & Excitation Loop Controller Tuning",
            topics: ["Damping low-frequency oscillations causing grid instabilities", "Designing PSS filters within automatic voltage regulators", "Tuning phase lead-lag parameters to keep voltage and frequency stable during shifts"]
          }
        ],
        careerOutcome: "Equipped to run grid stability simulations and configure power system controls."
      }
    }
  },
  "high-efficiency-industrial-power-converters-thermal-design": {
    title: "High-Efficiency Industrial Power Converters & Thermal Design",
    branch: "EEE",
    domain: "Power Electronics",
    trendingKeywords: ["SiC GaN Switches", "LLC Resonant Tank", "Gate Drivers", "SVPWM Code", "CFD Thermal Sink"],
    targetJobRoles: ["Power Electronics Engineer", "Converter Design Specialist", "Thermal Engineer"],
    industryRelevance: "Industrial systems rely on high-efficiency power converters. Harnessing modern wide-bandgap (SiC/GaN) semiconductors requires precise isolated gate driver designs, Space Vector PWM code, and computational fluid dynamics (CFD) thermal sizing.",
    tracks: {
      sixWeeks: {
        title: "Applied Standalone Track",
        objective: "Compare SiC/GaN switches, size LLC resonant tanks, design isolated gate-drivers, write space-vector PWM code, and run CHT cooling CFD.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "eee-pc-1",
            title: "Week 1: Wide-Bandgap Semiconductor Materials & Switching Loss Mechanics",
            topics: ["Material physics of Silicon IGBTs vs Silicon Carbide (SiC) and Gallium Nitride (GaN)", "Analyzing switching characteristics under high frequencies (kHz - MHz)", "Calculating conduction, switching, and reverse recovery loss profiles"]
          },
          {
            _key: "eee-pc-2",
            title: "Week 2: High-Power Circuit Topologies & Resonant Tank Sizing Formulations",
            topics: ["Designing phase-shifted full-bridge (PSFB) and LLC resonant converters", "Sizing resonant tanks to achieve zero-voltage switching (ZVS)", "Managing passive component selections and magnetic core designs"]
          },
          {
            _key: "eee-pc-3",
            title: "Week 3: Isolated Gate Drivers, Parasitic Loops & Active Miller Clamping",
            topics: ["Designing isolated gate-drive circuits with high common-mode transient immunity (CMTI)", "PCB layout techniques to minimize parasitic loop inductances", "Implementing active Miller clamps to prevent unintended dv/dt turn-on"]
          },
          {
            _key: "eee-pc-4",
            title: "Week 4: Space Vector Pulse Width Modulation (SVPWM) Code Architecture",
            topics: ["Formulating SVPWM algorithms for three-phase converters", "Calculating duty cycles and transistor switching times within sectors", "Writing bare-metal microcontroller code to generate low-harmonic outputs"]
          },
          {
            _key: "eee-pc-5",
            title: "Week 5: Fluid Thermal Management, Extrusion Sizing & CFD Cooling Analysis",
            topics: ["Estimating localized thermal losses from power modules", "Sizing extruded aluminum heat sinks based on thermal resistance", "Running conjugate heat transfer (CHT) CFD simulations under forced air cooling"],
            projects: ["CFD conjugate heat transfer validation of SiC power module sink"]
          },
          {
            _key: "eee-pc-6",
            title: "Week 6: 20 kW Silicon Carbide (SiC) Solar Inverter Simulation Validation",
            topics: ["Designing a complete 20 kW grid-tied solar inverter circuit", "Verifying switching behaviors, filtering, and efficiency metrics (>98%) in simulation", "Compiling thermal validation and efficiency report files"],
            projects: ["20 kW SiC Solar Inverter Schematic and Thermal Optimization Dossier"]
          }
        ],
        careerOutcome: "Certified Power Electronics Engineer ready for industrial converter design roles."
      }
    }
  },
  "closed-loop-electric-drive-tuning-field-oriented-vector-control": {
    title: "Closed-Loop Electric Drive Tuning & Field Oriented Vector Control",
    branch: "EEE",
    domain: "Electric Drives",
    trendingKeywords: ["Clarke Park PMSM", "FOC Current Decouple", "PI Controller Tuning", "microcontroller SVPWM", "HIL Motor Drive"],
    targetJobRoles: ["Electric Vehicle Drive Engineer", "Motor Controls Specialist", "HIL Test Engineer"],
    industryRelevance: "High-performance electric vehicles demand precise motor controls. Implementing Field Oriented Vector Control (FOC) requires coordinate transformation mathematics, cascade PI loop tuning, sensorless sliding-mode observers, and hardware-in-the-loop (HIL) validation.",
    tracks: {
      eightWeeks: {
        title: "Intermediate Standalone Track",
        objective: "Write Clarke/Park transformations, decouple FOC current loops, cascade speed/current controllers, deploy SVPWM registers, configure sliding-mode speed observers, and validate drive controllers on HIL systems.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "eee-ed-1",
            title: "Week 1: PMSM Dynamic State-Space Modeling & Coordinate Transformation Math",
            topics: ["Stator and rotor flux dynamics of Permanent Magnet Synchronous Motors (PMSM)", "Deriving Clarke and Park transformation equations", "Translating three-phase AC currents into rotating two-axis coordinate systems (d-q frame)"]
          },
          {
            _key: "eee-ed-2",
            title: "Week 2: Field Oriented Control (FOC) & Current Link Decoupling Formulations",
            topics: ["Separating stator current paths into decoupled flux and torque channels", "Writing feed-forward control terms to cancel cross-coupling effects at high speeds", "Modeling voltage limit boundaries and field weakening limits"]
          },
          {
            _key: "eee-ed-3",
            title: "Week 3: Proportional-Integral (PI) Tuning & Active Anti-Windup Saturation Loops",
            topics: ["Tuning PI controllers for d-q axis current loops using bandwidth matching", "Implementing anti-windup algorithms to prevent saturation windup during transients", "Analyzing current loop stability limits using Bode plots"]
          },
          {
            _key: "eee-ed-4",
            title: "Week 4: Multi-Loop Cascade Architectures & Dynamic Speed Profile Regulators",
            topics: ["Designing cascade control structures with outer speed and position loops", "Tuning speed regulators based on mechanical inertia loads", "Adding filter structures to handle rapid acceleration demands without overshooting"]
          },
          {
            _key: "eee-ed-5",
            title: "Week 5: SVPWM Code Microcontroller Deployment & Timer Register Mapping",
            topics: ["Mapping FOC and SVPWM algorithms to specialized microcontrollers (TI C2000)", "Configuring timer registers, PWM generators, and ADC interrupts", "Optimizing execution times to achieve 20 kHz update frequencies"],
            projects: ["Bare-metal FOC current loop control code compiled for TI C2000"]
          },
          {
            _key: "eee-ed-6",
            title: "Week 6: Sensorless Speed Estimation & Sliding-Mode Observer Formulations",
            topics: ["Rotor position tracking without expensive physical encoders", "Implementing sliding-mode observer software algorithms", "Filtering estimated back-EMF to extract accurate angular positions in real time"]
          },
          {
            _key: "eee-ed-7",
            title: "Week 7: Regenerative Braking Power Management & High-Voltage Bus Protection",
            topics: ["Programming bidirectional power flows to return energy during deceleration", "Configuring current limits to protect high-voltage battery packs", "Sizing voltage clamps to prevent damaging spikes on the DC bus link"]
          },
          {
            _key: "eee-ed-8",
            title: "Week 8: Hardware-in-the-Loop (HIL) Electric Drive Validation Capstone Project",
            topics: ["Deploying motor control algorithms onto physical hardware linked to a HIL system", "Validating controller tracking performance across standard drive cycles (WLTP)", "Auditing system responses under dynamic torque load changes and fault conditions"],
            projects: ["Motor Control HIL Validation Report under dynamic WLTP cycle loads"]
          }
        ],
        careerOutcome: "Advanced Electric Drive Controls Specialist ready for automotive EV drivetrain teams."
      }
    }
  },
  "substation-automation-protective-relaying-smart-microgrid-systems": {
    title: "Substation Automation, Protective Relaying & Smart Microgrid Systems",
    branch: "EEE",
    domain: "Smart Grid Systems",
    trendingKeywords: ["GOOSE Protocol", "Fault Protection", "Microgrid Battery", "PMU Synchrophasor", "Utility Grid Code"],
    targetJobRoles: ["Smart Grid Engineer", "Substation Automation Developer", "Power Quality Specialist"],
    industryRelevance: "Decentralized energy networks require intelligent digital control systems. This master track teaches students to build short-circuit fault protection schemes, configure IEC 61850 GOOSE communications, design microgrid battery controllers, and audit grid-code compliance.",
    tracks: {
      twentyFourWeeks: {
        title: "Master Career Track",
        objective: "Perform symmetrical component calculations, configure IEC 61850 GOOSE relay networks, size microgrid battery storage, deploy PMU synchrophasors, design active harmonic filters, and certify grid code compliance.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "eee-sg-1",
            title: "Month 1: Symmetrical Component Analysis & Network Fault Coordination Models",
            topics: ["Calculating short-circuit fault paths using mathematical symmetrical components", "Configuring overcurrent and distance protection relays to isolate faults", "Defining protection settings and coordinating trip curves across breakers"],
            projects: ["Substation protective relay coordination map and breaker schedule"]
          },
          {
            _key: "eee-sg-2",
            title: "Month 2: Digital Substation Communications & IEC 61850 GOOSE Protocol Configurations",
            topics: ["Designing digital automated substations and parsing logical nodes", "Configuring IEC 61850 station bus layouts and network topologies", "Mapping high-speed GOOSE messages to coordinate grid protection relays"],
            projects: ["IEC 61850 station bus communication schema and GOOSE delay test audit"]
          },
          {
            _key: "eee-sg-3",
            title: "Month 3: Microgrid Management Systems & Renewable Battery Storage Controls",
            topics: ["Balancing decentralized power networks incorporating wind and solar inputs", "Sizing and modeling industrial utility-scale battery energy storage systems (BESS)", "Deploying power management algorithms to balance local supply and demand profiles"],
            projects: ["10 MW solar-BESS hybrid microgrid power manager and battery controller"]
          },
          {
            _key: "eee-sg-4",
            title: "Month 4: Wide-Area Synchrophasor Networks & Phasor Measurement Units (PMU)",
            topics: ["Wide-area monitoring architectures and PMU deployment dynamics", "Tracking real-time voltage and current phase angles across wide grid areas", "Analyzing phase imbalances and voltage instability indices to prevent cascading failures"],
            projects: ["Synchrophasor real-time grid phase monitoring and stability dashboard"]
          },
          {
            _key: "eee-sg-5",
            title: "Month 5: Anti-Islanding Protection & Harmonic Filter Engineering",
            topics: ["Designing anti-islanding algorithms to safely isolate local generation during grid blackouts", "Analyzing harmonic distortions (THD) caused by power electronics interfaces", "Sizing and tuning active harmonic filters to comply with utility standards"],
            projects: ["Active harmonic filter design and anti-islanding validation report"]
          },
          {
            _key: "eee-sg-6",
            title: "Month 6: High-Voltage Microgrid Integration & Grid Code Compliance Certification",
            topics: ["Integrating microgrids with high-voltage utility connection points", "Testing system behaviors under severe faults, frequency shifts, and voltage sags", "Compiling compliance audit reports matching grid codes (IEEE 1547 / regional codes)"],
            projects: ["Smart Microgrid Master Blueprint: Full grid-code compliance certification portfolio"]
          }
        ],
        careerOutcome: "Smart Grid Systems Architect or Power Automation Director ready for utility operations."
      }
    }
  },
  "finite-element-formulations-computational-matrix-structural-analysis": {
    title: "Finite Element Formulations & Computational Matrix Structural Analysis",
    branch: "CIVIL_COMP",
    domain: "Computational Structural Engineering",
    trendingKeywords: ["Direct Stiffness", "Coordinate Transform", "Boundary Partition", "Python FEA Solver"],
    targetJobRoles: ["Structural Solver Developer", "Computational Structural Engineer", "CAE Software Analyst"],
    industryRelevance: "Commercial CAD software relies on matrix numerical engines. Translating structural mechanics into Python solvers teaches the algorithms that compute node transformations, load vectors, and element stiffness matrices.",
    tracks: {
      fourWeeks: {
        title: "Foundation Standalone Track",
        objective: "Formulate element stiffness equations, compile global matrices, partition boundary conditions, and code a custom Python FEA solver.",
        deliveryMetrics: {
          learningHours: "20",
          liveSessions: "4",
          practicalLabs: "5",
          miniAssignments: "4",
          projects: "1"
        },
        syllabus: [
          {
            _key: "cc-fs-1",
            title: "Week 1: Direct Stiffness Formulations & Local Coordinate Matrix Assemblies",
            topics: ["Translating structural mechanics principles into matrix structures", "Using virtual work and potential energy to define 1D/2D elements", "Assembling local element stiffness matrices for truss and beam systems"],
            projects: ["Mathematical formulation log for local element stiffness"]
          },
          {
            _key: "cc-fs-2",
            title: "Week 2: Coordinate Transformations & Global Matrix Compilation Controls",
            topics: ["Formulating coordinate transformation matrices for skewed structural members", "Mapping local element behaviors into a unified global coordinate system", "Assembling structural global stiffness matrices using direct stiffness mapping"]
          },
          {
            _key: "cc-fs-3",
            title: "Week 3: Boundary Constraint Partitions & Nodal Multi-Variable Load Solvers",
            topics: ["Applying support boundaries (fixed, pinned, rollers) via matrix partitioning", "Formulating nodal load vectors for point loads, distributed forces, and thermal strains", "Enforcing constraint equations and solving partitioned matrix systems"],
            projects: ["Nodal load vector compile and matrix partitioning tool"]
          },
          {
            _key: "cc-fs-4",
            title: "Week 4: Custom Finite Element Solver Development in Native Python Environments",
            topics: ["Writing a standalone Python solver utilizing Numpy and Scipy", "Importing node geometries, solving displacements, and calculating member stresses", "Verifying the custom solver's accuracy against standard analytical problems"],
            projects: ["Custom Python 2D Truss FEA Solver (Numpy/Scipy validated)"]
          }
        ],
        careerOutcome: "Capable of writing custom numerical analysis software for structural applications."
      }
    }
  },
  "applied-geotechnical-modeling-soil-structure-interaction": {
    title: "Applied Geotechnical Modeling & Soil-Structure Interaction",
    branch: "CIVIL_COMP",
    domain: "Geotechnical Engineering",
    trendingKeywords: ["Soil Models", "Deep Foundations", "Retaining Walls", "Seepage Models", "Underground Excavate"],
    targetJobRoles: ["Geotechnical Simulation Engineer", "Soil-Structure Analyst", "Underground Works Specialist"],
    industryRelevance: "Geotechnical designs must account for soil non-linearity and soil-structure interactions. This course teaches how to build deep foundation simulations, analyze sheet walls, track groundwater seepage, and model tunnels using numerical soil software.",
    tracks: {
      sixWeeks: {
        title: "Applied Standalone Track",
        objective: "Configure constitutive soil parameters, model pile foundation settlements, design excavation retainers, analyze groundwater seepage flows, calculate slope safety margins, and simulate tunnel linings.",
        deliveryMetrics: {
          learningHours: "36",
          liveSessions: "8",
          practicalLabs: "10",
          miniAssignments: "8",
          projects: "2"
        },
        syllabus: [
          {
            _key: "cc-gt-1",
            title: "Week 1: Constitutive Elastoplastic Soil Models & Material Parameter Testing",
            topics: ["Comparing Mohr-Coulomb models vs advanced hardening soil models", "Extracting soil properties from triaxial and consolidation test reports", "Defining elastic-plastic soil bounds and verification constraints in software"]
          },
          {
            _key: "cc-gt-2",
            title: "Week 2: Deep Foundation Engineering, Pile Groups & Soil Interaction Profiles",
            topics: ["Modeling 3D pile group foundations and combined raft systems", "Simulating load-settlement curves and load transfer mechanisms along pile shafts", "Determining dynamic pile-soil-pile interactions and settlement ratios"]
          },
          {
            _key: "cc-gt-3",
            title: "Week 3: Earth Retaining Structures, Anchored Sheets & Hydrostatic Models",
            topics: ["Designing deep excavations, diaphragm walls, and sheet pile retainers", "Calculating earth pressures, hydrostatic profiles, and tieback anchor tensions", "Evaluating base heave safety indices and structural wall bending moments"]
          },
          {
            _key: "cc-gt-4",
            title: "Week 4: Groundwater Seepage Calculation Models & Under-Dam Piping Analysis",
            topics: ["Modeling steady-state and transient groundwater flow through porous soils", "Calculating exit gradients, pore water pressure configurations, and flow nets", "Auditing piping and boiling safety factors under dams and excavation floors"],
            projects: ["2D Seepage flow net model for an earth dam with exit gradient checks"]
          },
          {
            _key: "cc-gt-5",
            title: "Week 5: Slope Stability Optimizations & Transient Rainfall Saturation Profiling",
            topics: ["Calculating slope stability safety factors using limit equilibrium and shear strength reduction (SSR)", "Modeling transient rainfall infiltration and its impact on pore pressure", "Designing slope stabilization methods (soil nails, geogrids, retaining benches)"]
          },
          {
            _key: "cc-gt-6",
            title: "Week 6: Multi-Stage Underground Tunnel Excavation & Structural Lining Validation",
            topics: ["Simulating tunnel excavation cycles (NATM / TBM methods)", "Evaluating ground movements and building settlement basins", "Calculating bending, axial, and shear forces on concrete structural linings"],
            projects: ["3D Geotechnical Tunnel Excavation & Concrete Lining Stress Dossier"]
          }
        ],
        careerOutcome: "Geotechnical Engineer capable of structural soil-pile-tunnel numerical validations."
      }
    }
  },
  "geometric-corridor-optimization-automated-pavement-sizing": {
    title: "Geometric Corridor Optimization & Automated Pavement Sizing",
    branch: "CIVIL_COMP",
    domain: "Transportation Engineering",
    trendingKeywords: ["LiDAR DTM", "Horizontal CAD Curves", "Vertical Parabolic Profiles", "Multilayer Pavement", "Drainage Hydraulic"],
    targetJobRoles: ["Highway Design Engineer", "Pavement Design Specialist", "Infrastructure Surveyor"],
    industryRelevance: "Linear infrastructure design relies on LiDAR terrain modeling, horizontal spiral physics, parabolic vertical sight paths, multilayer mechanical-empirical pavement layouts, and hydraulic drainage calculations.",
    tracks: {
      eightWeeks: {
        title: "Intermediate Standalone Track",
        objective: "Process LiDAR terrain data, design horizontal spirals, calculate vertical sight distances, size flexible/rigid pavements, model catchment runoff hydraulics, and optimize corridor cut-and-fill balances.",
        deliveryMetrics: {
          learningHours: "60",
          liveSessions: "12",
          practicalLabs: "18",
          miniAssignments: "12",
          projects: "3"
        },
        syllabus: [
          {
            _key: "cc-ro-1",
            title: "Week 1: LiDAR Point Cloud Processing & Digital Terrain Model Generation",
            topics: ["Importing and filtering 3D LiDAR point clouds", "Classifying ground vs non-ground points to remove vegetation", "Generating digital terrain models (DTM) and contour surfaces"]
          },
          {
            _key: "cc-ro-2",
            title: "Week 2: Horizontal Alignment CAD Configurations & Transition Spiral Physics",
            topics: ["Designing horizontal alignments with circular curves and transition spirals", "Calculating centrifugal forces and programming super-elevation runoff rates", "Ensuring alignments match international highway speed codes (AASHTO)"]
          },
          {
            _key: "cc-ro-3",
            title: "Week 3: Parabolic Vertical Profiles & Sight-Distance Tracking Analytics",
            topics: ["Designing vertical profile tangents connected by parabolic curves", "Calculating crest and sag curve parameters for sight distance constraints", "Auditing SSD (Stopping Sight Distance) and OSD (Passing Sight Distance) limits"]
          },
          {
            _key: "cc-ro-4",
            title: "Week 4: Flexible Multilayer Structural Pavements & ESAL Load Sizing",
            topics: ["Calculating design traffic loads (Equivalent Single Axle Loads - ESALs)", "Sizing structural asphalt, subbase, and stabilized soil layers", "Determining layer coefficients and structural numbers based on soil subgrade values"]
          },
          {
            _key: "cc-ro-5",
            title: "Week 5: Rigid Concrete Pavement Modeling & Thermal Joint Warping Calculations",
            topics: ["Designing jointed plain concrete pavements (JPCP)", "Calculating slab stresses caused by wheel loads and temperature gradients", "Sizing steel dowel bars for load transfers and tie bars for joint holding"]
          },
          {
            _key: "cc-ro-6",
            title: "Week 6: Corridor Hydraulic Sizing, Catchment Modeling & Stormwater Drainage",
            topics: ["Delineating drainage catchments and calculating peak runoff rates", "Sizing roadside open channels, culverts, and dynamic inlet spacing", "Designing retention basins and modeling under-drainage systems"],
            projects: ["Corridor Stormwater Drainage Hydraulic Sizing and Catchment Map"]
          },
          {
            _key: "cc-ro-7",
            title: "Week 7: Mechanistic-Empirical Pavement Lifespan Profiling & Rutting Predictions",
            topics: ["Evaluating mechanical fatigue damage and subgrade rutting profiles", "Using design software to predict pavement lifecycle distresses over 30 years", "Scheduling structural overlays and cost-efficient maintenance strategies"]
          },
          {
            _key: "cc-ro-8",
            title: "Week 8: 3D Highway Corridor Design Optimization & Mass Balance Balancing",
            topics: ["Assembling the 3D highway corridor model with assembly templates", "Generating mass-haul diagrams to optimize earthwork cut-and-fill volumes", "Refining vertical profiles dynamically to minimize land acquisitions and haul costs"],
            projects: ["10 km Highway 3D Alignment Model and Optimized Earthwork Mass-Haul Blueprint"]
          }
        ],
        careerOutcome: "Highway Design Associate ready for design consultancy and road construction projects."
      }
    }
  },
  "5d-bim-automation-virtual-coordinator-urban-digital-twins": {
    title: "5D BIM Automation, Virtual Coordination & Urban Digital Twins",
    branch: "CIVIL_COMP",
    domain: "Smart Infrastructure",
    trendingKeywords: ["Federated ISO 19650", "4D 5D Cost Schedule", "IoT Sensor Cloud", "GIS Urban Twin", "Seismic Safety Audit"],
    targetJobRoles: ["Smart Infrastructure Analyst", "5D BIM Coordinator", "Digital Twin Solutions Architect"],
    industryRelevance: "Smart cities require the integration of spatial, temporal, financial, and physical operational datasets. This master track teaches federated ISO 19650 clash models, 4D/5D cost-sequence tracking, IoT sensor cloud inputs, and urban wind/heat microclimate CFD twins.",
    tracks: {
      twentyFourWeeks: {
        title: "Master Career Track",
        objective: "Manage federated ISO 19650 clash models, integrate 4D schedule and 5D cost databases with 3D elements, connect IoT sensor streams to cloud twins, scale models to GIS city layouts, run microclimate CFD simulations, perform dynamic seismic structural collapse tests, and deploy urban twin operations dashboard portals.",
        deliveryMetrics: {
          learningHours: "200+",
          liveSessions: "30+",
          practicalLabs: "60+",
          miniAssignments: "40",
          projects: "8-10"
        },
        syllabus: [
          {
            _key: "cc-twin-1",
            title: "Month 1: Federated BIM Coordination Protocols & Algorithmic Clash Detection",
            topics: ["ISO 19650 CDE (Common Data Environment) configuration and role management", "Federating structural, architectural, and MEP models under unified coordinates", "Writing automated clash detection matrices and sorting design interferences"],
            projects: ["Coordinated, error-free federated high-rise model ready for site construction"]
          },
          {
            _key: "cc-twin-2",
            title: "Month 2: 4D Schedule Integration & 5D Programmatic Cost Calculation Engines",
            topics: ["Linking MS Project/Primavera schedules directly to 3D model elements (4D)", "Connecting cost items, itemized rates, and quantities programmatically to model shapes (5D)", "Generating automated cash flow graphs and simulated construction playbacks"],
            projects: ["Interactive 5D project execution model and dynamic cash-flow tracker"]
          },
          {
            _key: "cc-twin-3",
            title: "Month 3: IoT Structural Sensor Networks & Cloud Digital Twin Dashboards",
            topics: ["Configuring sensor nodes (strain gauges, tilt sensors, ambient indicators) in structures", "Setting up MQTT brokers and web APIs to feed data streams to cloud databases", "Connecting dynamic database streams to 3D model elements using WebGL engines"],
            projects: ["WebGL real-time building health digital twin dashboard with live sensor APIs"]
          },
          {
            _key: "cc-twin-4",
            title: "Month 4: Urban-Scale GIS Integration & Microclimate Fluid Dynamic Analysis",
            topics: ["Importing city building databases (CityGML) into geographic maps layouts (GIS)", "Running microclimate CFD simulations to evaluate wind speeds and heat island metrics", "Assessing how new tower developments alter wind corridors and local thermal comfort"],
            projects: ["Urban microclimate airflow CFD map and solar thermal impact audit"]
          },
          {
            _key: "cc-twin-5",
            title: "Month 5: Seismic Dynamic Analysis & Structural Collapse Risk Modeling",
            topics: ["Importing structural models into non-linear analysis engines", "Applying historic seismic acceleration histories and measuring transient drift responses", "Identifying collapse hotspots and structural reinforcement requirements"],
            projects: ["Seismic dynamic structural deflection audit and reinforcement plan"]
          },
          {
            _key: "cc-twin-6",
            title: "Month 6: Smart City Digital Twin Deployment & Infrastructure Lifecycle Handover",
            topics: ["Deploying the unified digital twin portal combining GIS, BIM, and live sensor feeds", "Configuring operations maintenance alerts and automated work order flows", "Preparing the final lifecycle handover package for municipal operators"],
            projects: ["Master Urban Twin Asset Management Portal: Integrated GIS, BIM, and live IoT feeds"]
          }
        ],
        careerOutcome: "Equipped for direct placement as a Smart City Project Lead, 5D BIM Manager, or Digital Twin Architect."
      }
    }
  }
};
