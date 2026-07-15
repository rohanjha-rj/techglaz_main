"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle, 
  Cpu, 
  Globe, 
  Layers, 
  Compass, 
  BrainCircuit, 
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  Briefcase
} from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: {
      CSE_IT: number;
      ECE: number;
      EE: number;
      ME: number;
    };
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What area of engineering and technology excites you the most?",
    options: [
      {
        text: "Building software, web apps, SaaS tools, and artificial intelligence models.",
        scores: { CSE_IT: 3, ECE: 1, EE: 0, ME: 0 }
      },
      {
        text: "Designing smart automation hardware, sensors, robotics, and internet-connected devices.",
        scores: { CSE_IT: 1, ECE: 3, EE: 1, ME: 0 }
      },
      {
        text: "Designing hardware microchips, processors, and logic gates that power electronics.",
        scores: { CSE_IT: 0, ECE: 1, EE: 3, ME: 0 }
      },
      {
        text: "Drafting 3D CAD physical models, mechanics, machinery, or automotive body structures.",
        scores: { CSE_IT: 0, ECE: 0, EE: 0, ME: 3 }
      }
    ]
  },
  {
    id: 2,
    text: "If you were to build a major capstone project today, what would you choose?",
    options: [
      {
        text: "A cloud-hosted full-stack platform with secure authentication and database controls.",
        scores: { CSE_IT: 3, ECE: 0, EE: 0, ME: 0 }
      },
      {
        text: "An autonomous IoT home monitoring device using microcontrollers and smart sensors.",
        scores: { CSE_IT: 1, ECE: 3, EE: 1, ME: 0 }
      },
      {
        text: "Coding and simulating a custom RTL-level processor model in Verilog.",
        scores: { CSE_IT: 0, ECE: 1, EE: 3, ME: 0 }
      },
      {
        text: "Creating a surface design assembly of a sports drone or automotive engine chassis.",
        scores: { CSE_IT: 0, ECE: 0, EE: 0, ME: 3 }
      }
    ]
  },
  {
    id: 3,
    text: "Which technical skill set do you most look forward to mastering?",
    options: [
      {
        text: "Programming languages (JavaScript, Python), RESTful APIs, and cloud deployments.",
        scores: { CSE_IT: 3, ECE: 0, EE: 0, ME: 0 }
      },
      {
        text: "Embedded C coding, real-time operating systems (RTOS), and hardware communication protocols.",
        scores: { CSE_IT: 1, ECE: 3, EE: 1, ME: 0 }
      },
      {
        text: "Hardware verification principles, writing testbenches in SystemVerilog, and UVM models.",
        scores: { CSE_IT: 0, ECE: 1, EE: 3, ME: 0 }
      },
      {
        text: "Surface modeling tools (CATIA V5), solid design mechanics, and shape configurations.",
        scores: { CSE_IT: 0, ECE: 0, EE: 0, ME: 3 }
      }
    ]
  },
  {
    id: 4,
    text: "What is your long-term career ambition or dream job title?",
    options: [
      {
        text: "Software Developer, Cloud Engineer, or Machine Learning Scientist at a tech giant.",
        scores: { CSE_IT: 3, ECE: 0, EE: 0, ME: 0 }
      },
      {
        text: "Embedded Systems Specialist, IoT Solutions Engineer, or Robotics Integration Lead.",
        scores: { CSE_IT: 0, ECE: 3, EE: 1, ME: 0 }
      },
      {
        text: "VLSI Verification Engineer, ASIC Design Expert, or Silicon Chip Architect at AMD/Intel.",
        scores: { CSE_IT: 0, ECE: 0, EE: 3, ME: 0 }
      },
      {
        text: "CAD/Product Development Designer, Mechanical Design Consultant, or Aerospace Modeler.",
        scores: { CSE_IT: 0, ECE: 0, EE: 0, ME: 3 }
      }
    ]
  }
];

interface Recommendation {
  title: string;
  branch: string;
  branchKey: "CSE_IT" | "ECE" | "EE" | "ME";
  domainPath: string;
  courseSlug: string;
  description: string;
  careers: string[];
  tools: string[];
  startingSalary: string;
  demandRate: string;
}

const RECOMMENDATIONS: Record<string, Recommendation> = {
  CSE_IT: {
    title: "Full-Stack Web Development & AI/ML",
    branch: "Computer Science & IT",
    branchKey: "CSE_IT",
    domainPath: "cse-it",
    courseSlug: "full-stack-web-development",
    description: "You have a natural affinity for logical systems, software architectures, and software engineering. Mastering full-stack technologies (React, Next.js, Node.js, MongoDB) and cloud deployment will enable you to build enterprise SaaS applications and artificial intelligence integrations.",
    careers: ["Full-Stack Software Engineer", "Frontend/Backend Developer", "Cloud Architect", "AI Integration Developer"],
    tools: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    startingSalary: "₹6.5L - ₹12L PA",
    demandRate: "95% (High Growth)"
  },
  ECE: {
    title: "IoT & Embedded Systems Engineering",
    branch: "Electronics & Communication",
    branchKey: "ECE",
    domainPath: "ece",
    courseSlug: "iot",
    description: "You enjoy bridging the gap between digital software logic and physical hardware devices. By specializing in Internet of Things (IoT) architectures, sensor interfaces, and microcontrollers, you can build smart physical systems and robotics.",
    careers: ["Embedded Systems Developer", "IoT Solutions Engineer", "Robotics firmware Designer", "Hardware Prototyper"],
    tools: ["ESP32", "RTOS", "MQTT", "Embedded C++", "Raspberry Pi", "Firmware Drivers"],
    startingSalary: "₹5.5L - ₹10L PA",
    demandRate: "89% (Rapid Growth)"
  },
  EE: {
    title: "VLSI Design & Hardware Verification",
    branch: "Electrical & Electronics",
    branchKey: "EE",
    domainPath: "ee",
    courseSlug: "vlsi",
    description: "You are fascinated by the complex circuits and microchip processors that drive the modern tech world. A specialization in VLSI design, SystemVerilog, and UVM standards will position you to verify and construct the next generation of semiconductor silicon chips.",
    careers: ["ASIC Design Engineer", "VLSI Verification Engineer", "SystemVerilog Modeler", "Silicon Validation Analyst"],
    tools: ["Verilog HDL", "SystemVerilog", "UVM Methodology", "ModelSim", "Synopsys Tools"],
    startingSalary: "₹7.5L - ₹15L PA",
    demandRate: "92% (Very High Demand)"
  },
  ME: {
    title: "Mechanical CAD Engineering Design",
    branch: "Mechanical Engineering",
    branchKey: "ME",
    domainPath: "me",
    courseSlug: "catia-v5",
    description: "You love physical shapes, mechanics, and product engineering. Specializing in advanced 3D surfacing, generative shapes, and mechanical stress models in CATIA V5 will equip you for roles in aerospace, automotive design, and industrial drafting.",
    careers: ["3D CAD Model Designer", "Automotive Surfacing Engineer", "Product R&D Drafter", "Aerospace Structural Designer"],
    tools: ["CATIA V5", "Generative Shape Design", "Part & Assembly Drafting", "Simulation Models"],
    startingSalary: "₹4.5L - ₹8.5L PA",
    demandRate: "84% (Steady Growth)"
  }
};

export default function CareerPathFinder() {
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1 = Welcome screen
  const [scores, setScores] = useState({
    CSE_IT: 0,
    ECE: 0,
    EE: 0,
    ME: 0
  });
  const [history, setHistory] = useState<typeof scores[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = () => {
    setScores({ CSE_IT: 0, ECE: 0, EE: 0, ME: 0 });
    setHistory([]);
    setCurrentStep(0);
    setShowResults(false);
    setIsAnalyzing(false);
  };

  const selectOption = (selectedScores: typeof scores) => {
    // Save current scores to history (for back navigation)
    setHistory([...history, scores]);

    // Add selected option scores
    const nextScores = {
      CSE_IT: scores.CSE_IT + selectedScores.CSE_IT,
      ECE: scores.ECE + selectedScores.ECE,
      EE: scores.EE + selectedScores.EE,
      ME: scores.ME + selectedScores.ME
    };
    setScores(nextScores);

    // Navigate to next question
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Analyze results
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const goBack = () => {
    if (currentStep > 0 && history.length > 0) {
      const prevScores = history[history.length - 1];
      setScores(prevScores);
      setHistory(history.slice(0, -1));
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 0) {
      setCurrentStep(-1);
    }
  };

  // Recommendations logic
  const getRecommendationKey = () => {
    const keys = Object.keys(scores) as (keyof typeof scores)[];
    let maxKey = keys[0];
    keys.forEach((key) => {
      if (scores[key] > scores[maxKey]) {
        maxKey = key;
      }
    });
    return maxKey;
  };

  const recKey = getRecommendationKey();
  const recommendation = RECOMMENDATIONS[recKey];

  // Calculate percentages
  const totalScore = scores.CSE_IT + scores.ECE + scores.EE + scores.ME || 1;
  const percentages = {
    CSE_IT: Math.round((scores.CSE_IT / totalScore) * 100),
    ECE: Math.round((scores.ECE / totalScore) * 100),
    EE: Math.round((scores.EE / totalScore) * 100),
    ME: Math.round((scores.ME / totalScore) * 100)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <AnimatePresence mode="wait">
        
        {/* Step -1: Welcome Screen */}
        {currentStep === -1 && !showResults && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-light/20 dark:bg-slate-800/20 rounded-full blur-3xl -z-10" />
            
            <div className="w-20 h-20 bg-brand-blue-light dark:bg-slate-850 rounded-2xl flex items-center justify-center mx-auto text-brand-blue-deep dark:text-brand-blue-steel shadow-md">
              <Compass className="w-10 h-10" />
            </div>

            <div className="space-y-4">
              <span className="text-xs font-extrabold text-brand-blue-steel dark:text-brand-accent uppercase tracking-widest bg-brand-blue-light/50 dark:bg-slate-800/50 px-4 py-1.5 rounded-full">
                Interactive Career Guidance
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-850 dark:text-white leading-tight">
                Find Your Perfect Specialized Engineering Path
              </h1>
              <p className="text-slate-650 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Feeling overwhelmed by the diverse tracks in VLSI, CSE, Embedded Systems, and Mechanical design? Take our 2-minute skill assessment to find the program that aligns with your passions and career goals.
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="btn-accent inline-flex items-center gap-2 px-8 py-3.5 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/35 font-extrabold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Skill Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Step Questions */}
        {currentStep >= 0 && !isAnalyzing && !showResults && (
          <motion.div
            key={`question-${currentStep}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8"
          >
            {/* Progress Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/40 pb-5">
              <button
                onClick={goBack}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              
              <div className="text-right">
                <span className="text-xs font-bold text-slate-400">
                  Question {currentStep + 1} of {QUESTIONS.length}
                </span>
                {/* Progress Bar */}
                <div className="w-32 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div 
                    className="h-full bg-brand-blue-deep transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Question Text */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {QUESTIONS[currentStep].text}
            </h2>

            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-4">
              {QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => selectOption(option.scores)}
                  className="flex items-center justify-between w-full p-5 text-left border border-slate-200/80 dark:border-slate-800 rounded-2xl hover:border-brand-blue-deep hover:bg-slate-50/50 dark:hover:bg-slate-850/20 hover:shadow-sm transition-all duration-300 focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base text-slate-650 dark:text-slate-350 font-bold group-hover:text-slate-900 dark:group-hover:text-white leading-relaxed">
                    {option.text}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-450 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step: Analyzing loader */}
        {isAnalyzing && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-12 shadow-xl text-center space-y-6"
          >
            <div className="w-16 h-16 border-4 border-slate-200 border-t-brand-blue-deep rounded-full animate-spin mx-auto" />
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Analyzing Your Responses...
            </h3>
            <p className="text-sm text-slate-450 dark:text-slate-500">
              Matching your skills and interests against our specialized branches...
            </p>
          </motion.div>
        )}

        {/* Step: Results Dashboard */}
        {showResults && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Top recommendation card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue-light/10 dark:bg-slate-800/5 rounded-full blur-3xl -z-10" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/40 pb-5">
                <div>
                  <span className="text-xs font-bold text-brand-blue-steel dark:text-brand-accent uppercase tracking-widest bg-brand-blue-light dark:bg-slate-850 px-3 py-1 rounded-md">
                    Top Recommended Specialization
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                    {recommendation.title}
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-7 h-7" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-650 dark:text-slate-400 leading-relaxed font-semibold">
                {recommendation.description}
              </p>

              {/* Statistics/Stats grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-850/20 p-5 sm:p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-light dark:bg-slate-850 text-brand-blue-deep flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-brand-blue-steel" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Salary Range (Starting)</p>
                    <p className="font-extrabold text-slate-800 dark:text-white">{recommendation.startingSalary}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Market Demand Rate</p>
                    <p className="font-extrabold text-slate-800 dark:text-white">{recommendation.demandRate}</p>
                  </div>
                </div>
              </div>

              {/* Detailed tools and roles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tools to Master */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    Core Tech Stack to Master
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-extrabold text-brand-blue-deep dark:text-brand-blue-steel bg-brand-blue-light dark:bg-slate-850 px-3 py-1.5 rounded-lg border border-brand-blue-deep/10 dark:border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Job Roles */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Potential Career Roles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.careers.map((career) => (
                      <span
                        key={career}
                        className="text-xs font-bold text-slate-650 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-750"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-5 border-t border-slate-100 dark:border-slate-800/40">
                <Link
                  href={`/trainings/${recommendation.domainPath}/${recommendation.courseSlug}`}
                  className="btn-primary w-full sm:w-auto text-center py-3 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Course Roadmap
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href={`/apply?branch=${recommendation.branchKey}&course=${encodeURIComponent(recommendation.title.split(" & ")[0])}`}
                  className="btn-accent w-full sm:w-auto text-center py-3 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Apply Now
                </Link>

                <button
                  onClick={startQuiz}
                  className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer w-full sm:w-auto py-2.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Assessment
                </button>
              </div>
            </div>

            {/* Multi-branch score matching panel */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Your Complete Engineering Alignment Profile
              </h3>

              <div className="space-y-4">
                {/* CSE/IT */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-slate-700 dark:text-slate-350">Computer Science & IT (Full-Stack / AI)</span>
                    <span className="text-slate-900 dark:text-white font-extrabold">{percentages.CSE_IT}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue-deep rounded-full transition-all duration-500" style={{ width: `${percentages.CSE_IT}%` }} />
                  </div>
                </div>

                {/* VLSI */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-slate-700 dark:text-slate-350">ASIC & VLSI Chip Verification (Hardware Logic)</span>
                    <span className="text-slate-900 dark:text-white font-extrabold">{percentages.EE}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue-steel rounded-full transition-all duration-500" style={{ width: `${percentages.EE}%` }} />
                  </div>
                </div>

                {/* Embedded */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-slate-700 dark:text-slate-350">IoT & Embedded Systems (Hardware Firmware)</span>
                    <span className="text-slate-900 dark:text-white font-extrabold">{percentages.ECE}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full transition-all duration-500" style={{ width: `${percentages.ECE}%` }} />
                  </div>
                </div>

                {/* Mechanical */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-slate-700 dark:text-slate-350">Mechanical Design & CATIA V5 (3D Surfacing)</span>
                    <span className="text-slate-900 dark:text-white font-extrabold">{percentages.ME}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full transition-all duration-500" style={{ width: `${percentages.ME}%` }} />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
