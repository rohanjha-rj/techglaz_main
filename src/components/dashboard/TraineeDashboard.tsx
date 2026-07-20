"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  Flame, 
  Award, 
  BookOpen, 
  CheckSquare, 
  Compass, 
  Volume2, 
  Plus, 
  Search, 
  MessageSquare, 
  Send, 
  X, 
  Bookmark, 
  Sparkles,
  CheckCircle,
  TrendingUp,
  Activity,
  Calendar,
  ChevronRight,
  User,
  GraduationCap,
  Timer,
  RotateCcw,
  BookMarked,
  Briefcase,
  Check,
  Trash2
} from "lucide-react";
import Link from "next/link";

const MOTIVATIONAL_QUOTES = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Today a reader, tomorrow a leader.", author: "Margaret Fuller" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
];

// Techglaz course catalog mapped from shared constants
const COURSE_CATALOG = [
  {
    id: "fsd",
    code: "CSE-FSD",
    subject: "Full-Stack Web Development",
    teacher: "Prof. Rohan",
    department: "CSE & IT",
    credits: 4,
    description: "Build robust web apps using Next.js, Node.js, Express, and MongoDB. Covers auth, APIs, and responsive UI.",
    schedule: { day: "Monday", time: 10, room: "Lab 1" }
  },
  {
    id: "app",
    code: "CSE-APP",
    subject: "App Development",
    teacher: "Dr. Evelyn",
    department: "CSE & IT",
    credits: 3,
    description: "Mobile application development with React Native. Covers state, native modules, navigation, and store deployment.",
    schedule: { day: "Tuesday", time: 9, room: "Lab 3" }
  },
  {
    id: "aiml",
    code: "CSE-AIML",
    subject: "AI/ML Masterclass",
    teacher: "Prof. Marcus",
    department: "CSE & IT",
    credits: 4,
    description: "Neural networks, deep learning models, regression models, classification models, NLP, and computer vision foundations.",
    schedule: { day: "Wednesday", time: 14, room: "R&D Room A" }
  },
  {
    id: "cyber",
    code: "CSE-CYB",
    subject: "Cybersecurity Essentials",
    teacher: "Dr. Sarah",
    department: "CSE & IT",
    credits: 3,
    description: "Fundamentals of network defense, threat modeling, cryptography, penetration testing, and ethical hacking protocols.",
    schedule: { day: "Thursday", time: 11, room: "Hall C" }
  },
  {
    id: "vlsi",
    code: "EE-VLSI",
    subject: "VLSI Design & Architecture",
    teacher: "Prof. Amit",
    department: "Electrical Engineering",
    credits: 4,
    description: "MOS transistor theory, CMOS process technology, VHDL/Verilog simulations, and physical layout designs.",
    schedule: { day: "Monday", time: 13, room: "EE Lab A" }
  },
  {
    id: "iot",
    code: "ECE-IOT",
    subject: "IoT & Embedded Systems",
    teacher: "Dr. Clara",
    department: "Electronics & Communication",
    credits: 3,
    description: "Microcontrollers (ESP32/Arduino), sensors, wireless communication protocols, and cloud IoT dashboard integrations.",
    schedule: { day: "Wednesday", time: 11, room: "ECE Lab B" }
  },
  {
    id: "catia",
    code: "ME-CATIA",
    subject: "Catia V5 Mechanics",
    teacher: "Prof. Robert",
    department: "Mechanical Engineering",
    credits: 3,
    description: "Parametric 3D CAD modeling, parts assembly, sheet metal, and structural Finite Element Analysis (FEA) simulations.",
    schedule: { day: "Friday", time: 10, room: "CAD Lab 1" }
  },
  {
    id: "autocad",
    code: "CIV-CAD",
    subject: "AutoCAD & Interior Design",
    teacher: "Dr. Lisa",
    department: "Civil Engineering",
    credits: 2,
    description: "2D drafting, blueprint creation, 3D renderings, architecture designs, and landscape layout drawings.",
    schedule: { day: "Thursday", time: 15, room: "CAD Lab 2" }
  }
];

interface TraineeDashboardProps {
  session: any;
  initialApplications: any[];
}

interface TaskItem {
  id: string;
  text: string;
  completed: boolean;
}

export default function TraineeDashboard({ session, initialApplications }: TraineeDashboardProps) {
  const [greeting, setGreeting] = useState("Namaste");
  const [quote, setQuote] = useState<{ text: string; author: string }>({ text: "", author: "" });
  const [streak, setStreak] = useState(5);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  // Interactive Node state
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // 'active' | 'completed' | 'pending' | 'explore' | 'timetable' | 'tasks' | null
  const [selectedCourse, setSelectedCourse] = useState<any>(null); // Selected Course Object or null (shows Hub overview)
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Course registry combined from server database and local state
  const [registeredCourses, setRegisteredCourses] = useState<any[]>([]);

  // Task Planner State
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskInput, setNewTaskInput] = useState("");

  // Stopwatch & Pomodoro State
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const [isPomodoroMode, setIsPomodoroMode] = useState(false);
  const [pomodoroSecondsLeft, setPomodoroSecondsLeft] = useState(25 * 60);
  const [pomodoroSession, setPomodoroSession] = useState<"study" | "break">("study");

  // Weekly hours progress state
  const [weeklyHoursCompleted, setWeeklyHoursCompleted] = useState(4.5);
  const weeklyHoursGoal = 10;

  // Mock Placement readiness interview booking
  const [isMockInterviewBooked, setIsMockInterviewBooked] = useState(false);

  // Streak check-in control
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  // Mock AI Chat Assistant state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{ id: string; sender: string; text: string }[]>([
    { id: "1", sender: "ai", text: "Namaste! I am Techglaz Trainee Assistant. Ask me anything about your course applications, weekly lectures, or study stats!" }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Ambient Sound Generator state
  const [activeSound, setActiveSound] = useState<string | null>(null); // 'rain' | 'waves' | 'focus' | null
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundNodesRef = useRef<Record<string, any>>({});

  // Web Audio Ambient Generators
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      // @ts-ignore
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const createBrownNoiseBuffer = (ctx: AudioContext) => {
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5;
    }
    return noiseBuffer;
  };

  const stopAllSounds = () => {
    Object.keys(soundNodesRef.current).forEach(key => {
      try {
        const nodes = soundNodesRef.current[key];
        if (nodes.source) nodes.source.stop();
        if (nodes.lfo) nodes.lfo.stop();
        if (nodes.osc1) nodes.osc1.stop();
        if (nodes.osc2) nodes.osc2.stop();
      } catch (e) {
        // ignore
      }
    });
    soundNodesRef.current = {};
    setActiveSound(null);
  };

  const playRain = () => {
    stopAllSounds();
    const ctx = getAudioContext();
    const noiseBuffer = createBrownNoiseBuffer(ctx);
    
    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;
    
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 350;
    
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.35;
    
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    source.start(0);
    
    soundNodesRef.current["rain"] = { source, gainNode };
    setActiveSound("rain");
  };

  const playWaves = () => {
    stopAllSounds();
    const ctx = getAudioContext();
    const noiseBuffer = createBrownNoiseBuffer(ctx);
    
    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;
    
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 450;
    
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.05;
    
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.08;
    
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.15;
    
    lfo.connect(lfoGain);
    lfoGain.connect(gainNode.gain);
    
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    source.start(0);
    lfo.start(0);
    
    soundNodesRef.current["waves"] = { source, lfo, gainNode };
    setActiveSound("waves");
  };

  const playFocusSynth = () => {
    stopAllSounds();
    const ctx = getAudioContext();
    
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 110;
    
    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 165;
    
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 200;
    
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.1;
    
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc1.start(0);
    osc2.start(0);
    
    soundNodesRef.current["focus"] = { osc1, osc2, gainNode };
    setActiveSound("focus");
  };

  // Stopwatch vs Pomodoro timer interval effect
  useEffect(() => {
    let intervalId: any = null;
    if (isStopwatchRunning) {
      intervalId = setInterval(() => {
        // Increment weekly study hours in real-time
        if (!isPomodoroMode || pomodoroSession === "study") {
          setWeeklyHoursCompleted(prev => prev + 1 / 3600);
        }

        if (isPomodoroMode) {
          setPomodoroSecondsLeft(prev => {
            if (prev <= 1) {
              // Timer Finished: toggle session
              if (pomodoroSession === "study") {
                setPomodoroSession("break");
                stopAllSounds();
                // Play a brief high beep
                try {
                  const ctx = getAudioContext();
                  const osc = ctx.createOscillator();
                  const g = ctx.createGain();
                  osc.connect(g);
                  g.connect(ctx.destination);
                  osc.frequency.value = 880;
                  g.gain.setValueAtTime(0.2, ctx.currentTime);
                  g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                  osc.start();
                  osc.stop(ctx.currentTime + 0.5);
                } catch(e) {}
                return 5 * 60; // 5 minute break
              } else {
                setPomodoroSession("study");
                // Play low beep
                try {
                  const ctx = getAudioContext();
                  const osc = ctx.createOscillator();
                  const g = ctx.createGain();
                  osc.connect(g);
                  g.connect(ctx.destination);
                  osc.frequency.value = 440;
                  g.gain.setValueAtTime(0.2, ctx.currentTime);
                  g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                  osc.start();
                  osc.stop(ctx.currentTime + 0.5);
                } catch(e) {}
                // Trigger auto lofi Focus soundscape
                playFocusSynth();
                return 25 * 60; // 25 minute study
              }
            }
            return prev - 1;
          });
        } else {
          setStopwatchSeconds(prev => prev + 1);
        }
      }, 1000);
    } else {
      if (intervalId) clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isStopwatchRunning, isPomodoroMode, pomodoroSession]);

  // Trigger soundscape automatically when Pomodoro study block begins
  useEffect(() => {
    if (isPomodoroMode && isStopwatchRunning && pomodoroSession === "study") {
      if (!activeSound) {
        playFocusSynth();
      }
    }
  }, [isPomodoroMode, isStopwatchRunning, pomodoroSession]);

  // Initialize data and triggers
  useEffect(() => {
    setIsMounted(true);
    // Determine Greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // Select Quote of the Day
    const day = new Date().getDate();
    setQuote(MOTIVATIONAL_QUOTES[day % MOTIVATIONAL_QUOTES.length]);

    // Retrieve Streak from localStorage
    const savedStreak = localStorage.getItem("tg_study_streak");
    if (savedStreak) {
      setStreak(parseInt(savedStreak, 10));
    } else {
      localStorage.setItem("tg_study_streak", "5");
    }

    // Check if check-in has already happened today
    const lastCheckin = localStorage.getItem("tg_last_checkin_date");
    const todayStr = new Date().toDateString();
    if (lastCheckin === todayStr) {
      setHasCheckedInToday(true);
    }

    // Retrieve Task checklist from localStorage or populate default
    const savedTasks = localStorage.getItem("tg_student_tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      const defaultTasks: TaskItem[] = [
        { id: "t1", text: "Complete Next.js Auth module setup", completed: true },
        { id: "t2", text: "Practice 3D blueprint drafting in AutoCAD", completed: false },
        { id: "t3", text: "Watch AI/ML lecture on neural networks", completed: false }
      ];
      setTasks(defaultTasks);
      localStorage.setItem("tg_student_tasks", JSON.stringify(defaultTasks));
    }

    // Set registered courses based on Next.js initial server applications
    const initialMapped = (initialApplications || []).map((app: any) => {
      const catalogMatch = COURSE_CATALOG.find(c => c.subject.toLowerCase() === app.course.toLowerCase());
      const statusMap = app.status === "accepted" ? "active" : 
                        app.status === "rejected" ? "pending" : "pending";
      
      return {
        id: catalogMatch?.id || app._id,
        status: statusMap,
        progress: statusMap === "active" ? 60 : 0,
        customApp: true,
        referenceNumber: app.referenceNumber,
        courseName: app.course,
        department: app.branch,
        credits: catalogMatch?.credits || 3,
        teacher: catalogMatch?.teacher || "TBD",
        schedule: catalogMatch?.schedule || { day: "Monday", time: 10, room: "Virtual" }
      };
    });

    const savedCourses = localStorage.getItem("tg_registered_courses");
    if (savedCourses) {
      setRegisteredCourses(JSON.parse(savedCourses));
    } else {
      if (initialMapped.length > 0) {
        setRegisteredCourses(initialMapped);
        localStorage.setItem("tg_registered_courses", JSON.stringify(initialMapped));
      } else {
        const defaultList = [
          { id: "fsd", status: "active", progress: 75 },
          { id: "aiml", status: "active", progress: 45 },
          { id: "autocad", status: "completed", progress: 100 },
          { id: "vlsi", status: "pending", progress: 0 }
        ];
        const resolved = defaultList.map(item => {
          const match = COURSE_CATALOG.find(c => c.id === item.id);
          return {
            ...item,
            courseName: match?.subject,
            department: match?.department,
            credits: match?.credits,
            teacher: match?.teacher,
            schedule: match?.schedule,
            referenceNumber: `TG-2026-00${Math.floor(Math.random() * 90) + 10}`
          };
        });
        setRegisteredCourses(resolved);
        localStorage.setItem("tg_registered_courses", JSON.stringify(resolved));
      }
    }

    const clockTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(clockTimer);
      stopAllSounds();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, [initialApplications]);

  // Scroll chatbot to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatOpen]);

  // Formatter for study stopwatch / Pomodoro
  const formatStopwatch = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return [
      hrs.toString().padStart(2, "0"),
      mins.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0")
    ].join(":");
  };

  // Course Registration local mock handler
  const handleRegisterCourse = (courseCatalogItem: any) => {
    let updated;
    const isAlreadyRegistered = registeredCourses.some(rc => rc.id === courseCatalogItem.id);
    
    if (isAlreadyRegistered) {
      updated = registeredCourses.filter(rc => rc.id !== courseCatalogItem.id);
    } else {
      updated = [
        ...registeredCourses, 
        { 
          id: courseCatalogItem.id, 
          status: "pending", 
          progress: 0,
          courseName: courseCatalogItem.subject,
          department: courseCatalogItem.department,
          credits: courseCatalogItem.credits,
          teacher: courseCatalogItem.teacher,
          schedule: courseCatalogItem.schedule,
          referenceNumber: `TG-2026-0${Math.floor(Math.random() * 900) + 100}`
        }
      ];
    }

    setRegisteredCourses(updated);
    localStorage.setItem("tg_registered_courses", JSON.stringify(updated));

    if (selectedCourse && selectedCourse.id === courseCatalogItem.id) {
      if (isAlreadyRegistered) {
        setSelectedCourse(null);
      } else {
        setSelectedCourse(courseCatalogItem);
      }
    }
  };

  const handleUpdateStatus = (courseId: string, newStatus: string) => {
    const updated = registeredCourses.map(rc => {
      if (rc.id === courseId) {
        return { 
          ...rc, 
          status: newStatus, 
          progress: newStatus === "completed" ? 100 : rc.progress === 100 ? 0 : rc.progress 
        };
      }
      return rc;
    });

    setRegisteredCourses(updated);
    localStorage.setItem("tg_registered_courses", JSON.stringify(updated));

    if (selectedCourse && selectedCourse.id === courseId) {
      const match = COURSE_CATALOG.find(c => c.id === courseId) || selectedCourse;
      setSelectedCourse(match);
    }
  };

  const handleUpdateProgress = (courseId: string, newProgress: number) => {
    const updated = registeredCourses.map(rc => {
      if (rc.id === courseId) {
        const isCompleted = newProgress === 100;
        return { 
          ...rc, 
          progress: newProgress,
          status: isCompleted ? "completed" : rc.status === "completed" ? "active" : rc.status
        };
      }
      return rc;
    });

    setRegisteredCourses(updated);
    localStorage.setItem("tg_registered_courses", JSON.stringify(updated));
  };

  const handleSoundToggle = (soundType: string) => {
    if (activeSound === soundType) {
      stopAllSounds();
    } else {
      if (soundType === "rain") playRain();
      if (soundType === "waves") playWaves();
      if (soundType === "focus") playFocusSynth();
    }
  };

  const incrementStreak = () => {
    const todayStr = new Date().toDateString();
    const lastCheckin = localStorage.getItem("tg_last_checkin_date");
    if (lastCheckin === todayStr) {
      return;
    }
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("tg_study_streak", newStreak.toString());
    localStorage.setItem("tg_last_checkin_date", todayStr);
    setHasCheckedInToday(true);
  };

  // Add Task to list
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;

    const newTaskItem: TaskItem = {
      id: Date.now().toString(),
      text: newTaskInput.trim(),
      completed: false
    };

    const updated = [...tasks, newTaskItem];
    setTasks(updated);
    localStorage.setItem("tg_student_tasks", JSON.stringify(updated));
    setNewTaskInput("");
  };

  // Toggle Task Completion
  const handleToggleTask = (taskId: string) => {
    const updated = tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t);
    setTasks(updated);
    localStorage.setItem("tg_student_tasks", JSON.stringify(updated));
  };

  // Delete Task
  const handleDeleteTask = (taskId: string) => {
    const updated = tasks.filter(t => t.id !== taskId);
    setTasks(updated);
    localStorage.setItem("tg_student_tasks", JSON.stringify(updated));
  };

  // Trigger Mock Placement Interview booking
  const handleBookMockInterview = () => {
    setIsMockInterviewBooked(true);
    // Inject custom class into registered courses list represent timetable slot
    const updated = [
      ...registeredCourses,
      {
        id: "mock_placement_interview_id",
        status: "active",
        progress: 0,
        courseName: "💼 Corporate Placement Mock Interview Prep",
        department: "Ludhiana Training Center",
        credits: 0,
        teacher: "HR Panel",
        schedule: { day: "Friday", time: 15, room: "Meeting Room B" },
        referenceNumber: "TG-PLACEMENT-MOCK"
      }
    ];
    setRegisteredCourses(updated);
    localStorage.setItem("tg_registered_courses", JSON.stringify(updated));
  };

  // Calculations for dynamic Placement Readiness Index
  const calculatePlacementReadiness = () => {
    let index = 50; // baseline
    index += Math.min(registeredCourses.filter(rc => rc.status === "completed").length * 10, 30); // up to 30% for completed certs
    index += Math.min(registeredCourses.filter(rc => rc.status === "active").length * 5, 15); // up to 15% for active courses
    index += Math.min(streak * 1, 10); // up to 10% for consistency streak
    if (isMockInterviewBooked) index += 5; // +5% for taking mock interview
    return Math.min(index, 100);
  };

  const placementReadiness = calculatePlacementReadiness();

  // Gamified achievements list
  const getAchievements = () => {
    return [
      { id: "streak", title: "Code Warrior", desc: "Keep a 5+ day streak active", unlocked: streak >= 5 },
      { id: "certified", title: "Certified Master", desc: "Finish at least one training track", unlocked: registeredCourses.some(rc => rc.status === "completed") },
      { id: "busy", title: "Persistence Pro", desc: "Engage in 3+ active tracks", unlocked: registeredCourses.filter(rc => rc.status === "active").length >= 3 },
      { id: "mock", title: "Placement Ready", desc: "Schedule a corporate mock interview panel", unlocked: isMockInterviewBooked }
    ];
  };

  const achievementsList = getAchievements();

  // Bot Ask handler
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const userMsg = { id: Date.now().toString(), sender: "user", text: userText };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput("");

    // Generate response
    setTimeout(() => {
      let botResponse = "";
      const lowercase = userText.toLowerCase();

      if (lowercase.includes("gpa") || lowercase.includes("grade") || lowercase.includes("score")) {
        botResponse = `Your current synced local CGPA is 3.80. Check out the placements section to view target CGPAs needed by top tech recruiters!`;
      } else if (lowercase.includes("class") || lowercase.includes("today") || lowercase.includes("lecture") || lowercase.includes("timetable")) {
        const todayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
        const todayClasses = registeredCourses.filter(c => c.status === "active" && c.schedule?.day === todayName);

        if (todayClasses.length > 0) {
          const list = todayClasses.map(c => `• ${c.courseName} at ${c.schedule.time}:00 AM (${c.schedule.room})`).join("\n");
          botResponse = `Today is ${todayName}. You have ${todayClasses.length} registered classes:\n${list}`;
        } else {
          botResponse = `No active classes scheduled today (${todayName}). Good day to explore and register for new courses!`;
        }
      } else if (lowercase.includes("applications") || lowercase.includes("enroll") || lowercase.includes("apply")) {
        const pendingApps = registeredCourses.filter(rc => rc.status === "pending");
        if (pendingApps.length > 0) {
          const list = pendingApps.map(rc => `• Ref: ${rc.referenceNumber} for ${rc.courseName}`).join("\n");
          botResponse = `You have ${pendingApps.length} pending course applications currently under review:\n${list}`;
        } else {
          botResponse = `You have no active pending enrollment applications. Select the 'Explore Catalog' node to apply for new certification paths.`;
        }
      } else if (lowercase.includes("streak") || lowercase.includes("days")) {
        botResponse = `You have a study streak of ${streak} days 🔥. Log in daily and practice code in the R&D projects section to boost your placement score.`;
      } else if (lowercase.includes("pomodoro") || lowercase.includes("study") || lowercase.includes("timer")) {
        botResponse = `Try the Pomodoro Focus Mode in the top Stopwatch card! It runs a 25-minute study timer accompanied by binaural beats to help you stay focused.`;
      } else {
        botResponse = `I am your Techglaz Trainee Assistant. You can ask me about "my classes today", "my application statuses", "my study streak", or "Pomodoro mode".`;
      }

      setChatMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: "ai", text: botResponse }]);
    }, 800);
  };

  // Node filter lists (6 nodes)
  const getSubitemsForCategory = () => {
    switch (activeCategory) {
      case "active":
        return registeredCourses.filter(rc => rc.status === "active");
      case "completed":
        return registeredCourses.filter(rc => rc.status === "completed");
      case "pending":
        return registeredCourses.filter(rc => rc.status === "pending");
      case "explore":
        return COURSE_CATALOG.filter(c => 
          c.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.code.toLowerCase().includes(searchQuery.toLowerCase())
        );
      case "timetable":
        return registeredCourses
          .filter(rc => rc.status === "active")
          .sort((a, b) => {
            const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const dayDiff = daysOrder.indexOf(a.schedule.day) - daysOrder.indexOf(b.schedule.day);
            if (dayDiff !== 0) return dayDiff;
            return a.schedule.time - b.schedule.time;
          });
      case "tasks":
        return tasks;
      default:
        return [];
    }
  };

  const currentSubitems = getSubitemsForCategory();

  // Selected details resolver
  const getActiveRegistryInfo = () => {
    if (!selectedCourse) return null;
    return registeredCourses.find(rc => rc.id === selectedCourse.id) || null;
  };

  const registryInfo = getActiveRegistryInfo();

  // Counts
  const pendingCount = registeredCourses.filter(rc => rc.status === "pending").length;
  const activeCount = registeredCourses.filter(rc => rc.status === "active").length;
  const completedCount = registeredCourses.filter(rc => rc.status === "completed").length;

  // Render SVG connections (Updated for 6 nodes)
  const renderSVGPaths = () => {
    const catYs = [50, 134, 218, 302, 386, 470]; // 6 nodes spaced by 84 pixels
    const categoryKeys = ["active", "completed", "pending", "explore", "timetable", "tasks"];
    const activeCatIndex = activeCategory ? categoryKeys.indexOf(activeCategory) : -1;

    return (
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 560">
        <defs>
          <linearGradient id="glow-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        {/* Lines from Center Orb to Category Cards */}
        {catYs.map((cy, idx) => {
          const isPathActive = activeCategory === categoryKeys[idx];
          const pathDescriptions = [
            `View your ${activeCount} approved active courses`,
            `Check your ${completedCount} completed certifications`,
            `Check your ${pendingCount} pending application updates`,
            "Explore our full course catalog for registration",
            "Monitor your weekly lecture class timetable",
            `Plan your tasks. Completed: ${tasks.filter(t => t.completed).length}/${tasks.length}`
          ];

          return (
            <g key={`tg-branch-${idx}`}>
              {isPathActive && (
                <path 
                  className="fill-none stroke-emerald-500/20 stroke-[4px] blur-[3px]"
                  d={`M 105,280 C 170,280 170,${cy} 240,${cy}`}
                />
              )}
              <path 
                className={`fill-none stroke-[2px] transition-all duration-300 cursor-pointer pointer-events-auto ${
                  isPathActive 
                    ? "stroke-[url(#glow-path-gradient)] [stroke-dasharray:5] [animation:flow_paths_dash_612_4s_linear_infinite]" 
                    : "stroke-slate-200/5 dark:stroke-slate-800/80 hover:stroke-emerald-500/30"
                }`}
                d={`M 105,280 C 170,280 170,${cy} 240,${cy}`}
                onMouseEnter={() => setHoveredPath(pathDescriptions[idx])}
                onMouseLeave={() => setHoveredPath(null)}
              />
            </g>
          );
        })}

        {/* Lines from Selected Category Card to Subitem Cards */}
        {activeCatIndex !== -1 && currentSubitems.slice(0, 5).map((_, idx) => {
          const startY = catYs[activeCatIndex];
          const endY = catYs[idx] || 280;
          
          return (
            <g key={`tg-sub-branch-${idx}`}>
              <path 
                className="fill-none stroke-emerald-500/10 stroke-[4px] blur-[3px]"
                d={`M 420,${startY} C 490,${startY} 490,${endY} 560,${endY}`}
              />
              <path 
                className="fill-none stroke-[url(#glow-path-gradient)] stroke-[2px] [stroke-dasharray:5] [animation:flow_paths_dash_612_4s_linear_infinite]"
                d={`M 420,${startY} C 490,${startY} 490,${endY} 560,${endY}`}
              />
            </g>
          );
        })}
      </svg>
    );
  };

  const isPomodoroFocusRunning = isPomodoroMode && isStopwatchRunning && pomodoroSession === "study";

  return (
    <div className="flex flex-col gap-8 pb-16 animate-fade-in text-slate-100 relative">
      
      {/* Dim Overlay Backdrop for Pomodoro focus block */}
      {isPomodoroFocusRunning && (
        <div className="absolute inset-x-0 -top-8 -bottom-16 bg-slate-950/85 backdrop-blur-[2px] z-[99] rounded-3xl pointer-events-none transition-all duration-700 select-none animate-fade-in" />
      )}

      {/* Top Banner Dashboard Metrics & Interactive Task Planner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative z-[100]">
        
        {/* Left Side: 2x2 Grid of Key Study Metrics */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Clock Card */}
          <div className={`bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 flex flex-col justify-center items-center text-center shadow-md backdrop-blur-md transition-opacity duration-500 ${isPomodoroFocusRunning ? "opacity-20 hover:opacity-100 pointer-events-auto" : ""}`}>
            <span className="text-[10px] text-emerald-450 uppercase tracking-widest font-extrabold mb-1.5">Live Local Time</span>
            <div className="text-2xl font-black text-white tracking-tight leading-none">
              {isMounted ? currentTime.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--"}
            </div>
            <div className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">
              {isMounted ? currentTime.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" }) : "Loading..."}
            </div>
          </div>

          {/* Streak Check-In Card */}
          <div 
            className={`bg-slate-900/60 border rounded-3xl p-5 flex items-center justify-center gap-4 transition-all duration-300 shadow-md backdrop-blur-md ${
              hasCheckedInToday 
                ? "border-emerald-500/30 bg-emerald-500/5 cursor-default" 
                : "border-slate-800/80 cursor-pointer hover:bg-emerald-500/5 hover:border-emerald-500/30"
            } ${isPomodoroFocusRunning ? "opacity-20 hover:opacity-100 pointer-events-auto" : ""}`}
            onClick={incrementStreak}
          >
            <div className={`w-11 h-11 rounded-full flex items-center justify-center border ${
              hasCheckedInToday ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "bg-emerald-500/10 border-emerald-500/25 text-emerald-450"
            }`}>
              <Flame className={`w-5 h-5 fill-emerald-500/10 ${hasCheckedInToday ? "text-emerald-300" : "text-emerald-455 animate-pulse"}`} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-black text-white">{streak} Days Streak</span>
              <span className={`text-[10px] uppercase tracking-wider font-bold mt-0.5 ${hasCheckedInToday ? "text-emerald-400" : "text-emerald-300"}`}>
                {hasCheckedInToday ? "Check-in complete! ✨" : "Click to check-in 🔥"}
              </span>
            </div>
          </div>

          {/* Weekly Progress Tracker Card */}
          <div className={`bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 flex flex-col justify-center shadow-md backdrop-blur-md transition-opacity duration-500 ${isPomodoroFocusRunning ? "opacity-20 hover:opacity-100 pointer-events-auto" : ""}`}>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-emerald-450 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Weekly Study Target</span>
              </span>
              <span className="text-[9px] text-emerald-300 font-extrabold uppercase bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                Target: {weeklyHoursGoal}h
              </span>
            </div>
            <div className="text-2xl font-black text-white tracking-tight leading-none mt-2 text-left">
              {weeklyHoursCompleted.toFixed(1)}h / {weeklyHoursGoal}h
            </div>
            {/* Horizontal progress bar */}
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mt-3 relative">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${Math.min((weeklyHoursCompleted / weeklyHoursGoal) * 100, 100)}%` }} 
              />
            </div>
            <span className="text-[9px] text-slate-450 mt-1.5 font-bold block text-right">
              {Math.min((weeklyHoursCompleted / weeklyHoursGoal) * 100, 100).toFixed(0)}% weekly milestone completed
            </span>
          </div>

          {/* Study Session Stopwatch & Pomodoro Mode Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 flex flex-col justify-center items-center text-center shadow-lg shadow-emerald-500/5 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-2.5 right-3 flex items-center gap-1.5 z-10">
              <span className="text-[8px] text-slate-400 font-bold uppercase">Pomo</span>
              <input 
                type="checkbox" 
                className="w-3 h-3 accent-emerald-500 rounded border-slate-800 cursor-pointer"
                checked={isPomodoroMode}
                onChange={(e) => {
                  setIsStopwatchRunning(false);
                  setIsPomodoroMode(e.target.checked);
                  setPomodoroSecondsLeft(25 * 60);
                  setStopwatchSeconds(0);
                }}
              />
            </div>

            <span className="text-[10px] text-emerald-455 uppercase tracking-widest font-extrabold mb-1.5 flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isPomodoroMode ? `Pomodoro: ${pomodoroSession.toUpperCase()}` : "Study Session Tracker"}</span>
            </span>
            <div className="text-2xl font-black text-white tracking-tight leading-none flex items-center gap-2">
              <span>{isPomodoroMode ? formatStopwatch(pomodoroSecondsLeft) : formatStopwatch(stopwatchSeconds)}</span>
              <span className={`w-2 h-2 rounded-full transition-all duration-300 ${isStopwatchRunning ? "bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" : "bg-slate-700"}`}></span>
            </div>
            <div className="flex gap-4 mt-2">
              <button 
                className={`w-7.5 h-7.5 rounded-full border flex items-center justify-center transition cursor-pointer ${
                  isStopwatchRunning 
                    ? "bg-amber-500/10 border-amber-500/35 text-amber-450 hover:bg-amber-500/20" 
                    : "bg-emerald-500/10 border-emerald-500/35 text-emerald-400 hover:bg-emerald-500/20"
                }`}
                onClick={() => setIsStopwatchRunning(!isStopwatchRunning)}
              >
                {isStopwatchRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-emerald-400/20" />}
              </button>
              <button 
                className="w-7.5 h-7.5 rounded-full bg-slate-800 border border-slate-700 text-slate-355 hover:bg-slate-750 flex items-center justify-center transition cursor-pointer"
                onClick={() => {
                  setIsStopwatchRunning(false);
                  setStopwatchSeconds(0);
                  setPomodoroSecondsLeft(25 * 60);
                  setPomodoroSession("study");
                }}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Task Planner Todo Card */}
        <div className={`bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 flex flex-col justify-between shadow-md backdrop-blur-md relative z-[100] transition-opacity duration-500 ${isPomodoroFocusRunning ? "opacity-20 hover:opacity-100 pointer-events-auto" : ""}`}>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-emerald-455 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Task Planner Checklist</span>
              </span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase">
                Pending: {tasks.filter(t => !t.completed).length}
              </span>
            </div>

            {/* Scrollable list inside top Card */}
            <div className="flex-grow space-y-1.5 max-h-[105px] overflow-y-auto pr-1 scrollbar-thin">
              {tasks.length === 0 ? (
                <div className="text-slate-505 text-[10px] py-6 text-center">No active tasks. Add one below!</div>
              ) : (
                tasks.map(task => (
                  <div key={task.id} className="flex items-center gap-2.5 text-xs py-1 border-b border-slate-850/40 last:border-b-0">
                    <button 
                      className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition ${
                        task.completed ? "bg-emerald-500 border-emerald-400 text-slate-950" : "border-slate-700 hover:border-emerald-500"
                      }`}
                      onClick={() => handleToggleTask(task.id)}
                    >
                      {task.completed && <Check className="w-2.5 h-2.5 stroke-[3px]" />}
                    </button>
                    <span className={`flex-grow truncate text-left text-[11px] ${task.completed ? "text-slate-500 line-through" : "text-white"}`}>
                      {task.text}
                    </span>
                    <button 
                      className="text-slate-500 hover:text-red-500 shrink-0 p-0.5 transition"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <form onSubmit={handleAddTask} className="flex gap-2 mt-2 pt-2 border-t border-slate-850">
            <input 
              type="text" 
              className="flex-grow bg-slate-950 border border-slate-850 rounded-xl text-[11px] py-1.5 px-3 text-slate-100 outline-none focus:border-emerald-500/50"
              placeholder="Quick add new task..."
              value={newTaskInput}
              onChange={(e) => setNewTaskInput(e.target.value)}
            />
            <button type="submit" className="w-7 h-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shrink-0 transition cursor-pointer">
              <Plus className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Node Network grid */}
      <div className={`grid grid-cols-1 xl:grid-cols-3 gap-6 items-start relative z-10 transition-opacity duration-500 ${isPomodoroFocusRunning ? "opacity-15 pointer-events-none hover:opacity-100 pointer-events-auto" : ""}`}>
        {/* Left Side: SVG Network Visualization and Quote container (Spans 2 columns) */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="relative min-h-[580px] w-full bg-slate-950/40 border border-slate-900 rounded-3xl p-6 overflow-hidden flex justify-between items-center shadow-inner select-none">
            {renderSVGPaths()}

            {/* Hover tooltips box */}
            {hoveredPath && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-emerald-500/25 px-4 py-1.5 rounded-full text-[10px] font-extrabold text-emerald-400 shadow-md animate-fade-in z-50 tracking-wide backdrop-blur-md uppercase">
                {hoveredPath}
              </div>
            )}

            {/* Column 1: Center Hub Node */}
            <div className="flex flex-col justify-center items-start z-20 h-full w-[20%]">
              <div 
                className="w-22 h-22 rounded-full bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center relative cursor-pointer transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] group"
                onClick={() => {
                  setActiveCategory(null);
                  setSelectedCourse(null);
                }}
              >
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md animate-pulse z-[-1]"></div>
                <Sparkles className="w-5 h-5 text-emerald-400 mb-1 group-hover:animate-bounce" />
                <span className="font-extrabold text-[12px] text-white tracking-tight">Trainee</span>
                <span className="text-[8px] text-slate-400 uppercase tracking-widest leading-none mt-0.5">Hub</span>
              </div>
            </div>

          {/* Column 2: Categories (Now 6 items spaced) */}
          <div className="flex flex-col justify-center gap-3 z-20 h-full w-[32%]">
            {/* Active Courses */}
            <div 
              className={`w-full bg-slate-900 border rounded-2xl p-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 shadow-sm hover:translate-x-1 ${
                activeCategory === "active" 
                  ? "border-emerald-500/60 bg-emerald-500/5 shadow-md" 
                  : "border-slate-800/80 hover:border-emerald-500/20"
              }`}
              onClick={() => {
                setActiveCategory("active");
                const sub = registeredCourses.filter(rc => rc.status === "active");
                if (sub.length > 0) setSelectedCourse(sub[0]);
                else setSelectedCourse(null);
              }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs ${
                activeCategory === "active" ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400" : "bg-slate-850 border-slate-800 text-slate-405"
              }`}><Flame className="w-4 h-4" /></div>
              <div className="flex flex-col leading-tight text-left">
                <span className="font-bold text-xs text-white">Active ({activeCount})</span>
                <span className="text-[9px] text-slate-450 mt-0.5">Approved tracks</span>
              </div>
            </div>

            {/* Completed Courses */}
            <div 
              className={`w-full bg-slate-900 border rounded-2xl p-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 shadow-sm hover:translate-x-1 ${
                activeCategory === "completed" 
                  ? "border-teal-500/60 bg-teal-500/5 shadow-md" 
                  : "border-slate-800/80 hover:border-teal-500/20"
              }`}
              onClick={() => {
                setActiveCategory("completed");
                const sub = registeredCourses.filter(rc => rc.status === "completed");
                if (sub.length > 0) setSelectedCourse(sub[0]);
                else setSelectedCourse(null);
              }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs ${
                activeCategory === "completed" ? "bg-teal-500/15 border-teal-500/30 text-teal-400" : "bg-slate-850 border-slate-800 text-slate-405"
              }`}><Award className="w-4 h-4" /></div>
              <div className="flex flex-col leading-tight text-left">
                <span className="font-bold text-xs text-white">Completed ({completedCount})</span>
                <span className="text-[9px] text-slate-450 mt-0.5">Certifications</span>
              </div>
            </div>

            {/* Pending Courses */}
            <div 
              className={`w-full bg-slate-900 border rounded-2xl p-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 shadow-sm hover:translate-x-1 ${
                activeCategory === "pending" 
                  ? "border-cyan-500/50 bg-cyan-500/5 shadow-md" 
                  : "border-slate-800/80 hover:border-cyan-500/20"
              }`}
              onClick={() => {
                setActiveCategory("pending");
                const sub = registeredCourses.filter(rc => rc.status === "pending");
                if (sub.length > 0) setSelectedCourse(sub[0]);
                else setSelectedCourse(null);
              }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs ${
                activeCategory === "pending" ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" : "bg-slate-850 border-slate-800 text-slate-405"
              }`}><Bookmark className="w-4 h-4" /></div>
              <div className="flex flex-col leading-tight text-left">
                <span className="font-bold text-xs text-white">Pending ({pendingCount})</span>
                <span className="text-[9px] text-slate-455 mt-0.5">Under review</span>
              </div>
            </div>

            {/* Explore Catalog */}
            <div 
              className={`w-full bg-slate-900 border rounded-2xl p-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 shadow-sm hover:translate-x-1 ${
                activeCategory === "explore" 
                  ? "border-emerald-500/50 bg-emerald-500/5 shadow-md" 
                  : "border-slate-800/80 hover:border-emerald-500/20"
              }`}
              onClick={() => {
                setActiveCategory("explore");
                setSelectedCourse(null);
              }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs ${
                activeCategory === "explore" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-slate-850 border-slate-800 text-slate-405"
              }`}><Compass className="w-4 h-4" /></div>
              <div className="flex flex-col leading-tight text-left">
                <span className="font-bold text-xs text-white">Explore Catalog</span>
                <span className="text-[9px] text-slate-455 mt-0.5">Apply for tracks</span>
              </div>
            </div>

            {/* Class Timetable */}
            <div 
              className={`w-full bg-slate-900 border rounded-2xl p-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 shadow-sm hover:translate-x-1 ${
                activeCategory === "timetable" 
                  ? "border-teal-500/50 bg-teal-500/5 shadow-md" 
                  : "border-slate-800/80 hover:border-teal-500/20"
              }`}
              onClick={() => {
                setActiveCategory("timetable");
                setSelectedCourse(null);
              }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs ${
                activeCategory === "timetable" ? "bg-teal-500/10 border-teal-500/20 text-teal-400" : "bg-slate-850 border-slate-800 text-slate-405"
              }`}><BookOpen className="w-4 h-4" /></div>
              <div className="flex flex-col leading-tight text-left">
                <span className="font-bold text-xs text-white">Class Schedule</span>
                <span className="text-[9px] text-slate-455 mt-0.5">Weekly lectures</span>
              </div>
            </div>

            {/* Task Planner Node */}
            <div 
              className={`w-full bg-slate-900 border rounded-2xl p-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 shadow-sm hover:translate-x-1 ${
                activeCategory === "tasks" 
                  ? "border-emerald-500/60 bg-emerald-500/5 shadow-md" 
                  : "border-slate-800/80 hover:border-emerald-500/20"
              }`}
              onClick={() => {
                setActiveCategory("tasks");
                setSelectedCourse(null);
              }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs ${
                activeCategory === "tasks" ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400" : "bg-slate-850 border-slate-800 text-slate-405"
              }`}><CheckSquare className="w-4 h-4" /></div>
              <div className="flex flex-col leading-tight text-left">
                <span className="font-bold text-xs text-white">Task Planner ({tasks.filter(t => !t.completed).length})</span>
                <span className="text-[9px] text-slate-455 mt-0.5">Focus checklist</span>
              </div>
            </div>
          </div>

          {/* Column 3: Subitems list */}
          <div className="flex flex-col gap-3 z-20 h-full w-[42%] max-h-[520px] overflow-y-auto px-1 scrollbar-thin">
            {activeCategory === "explore" && (
              <div className="relative mb-2">
                <input 
                  type="text" 
                  className="w-full bg-slate-950/40 border border-slate-800 rounded-xl text-xs py-2 pl-9 pr-4 text-slate-100 outline-none focus:border-emerald-500/50 transition" 
                  placeholder="Search trainings..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-450" />
              </div>
            )}

            {/* Interactive Task Planner Todo View in Column 3 */}
            {activeCategory === "tasks" ? (
              <div className="flex flex-col gap-3">
                <form onSubmit={handleAddTask} className="flex gap-2 mb-1">
                  <input 
                    type="text" 
                    className="flex-grow bg-slate-900 border border-slate-800 rounded-xl text-xs py-2 px-3 text-white outline-none focus:border-emerald-500/50"
                    placeholder="Add new study goal..."
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                  />
                  <button type="submit" className="w-8 h-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shrink-0 transition">
                    <Plus className="w-4 h-4" />
                  </button>
                </form>

                {tasks.length === 0 ? (
                  <div className="py-12 text-center text-xs text-slate-450">No study tasks active. Add one above!</div>
                ) : (
                  tasks.map((task) => (
                    <div 
                      key={task.id}
                      className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-3.5 flex items-center justify-between gap-2 shadow-sm transition hover:border-slate-700"
                    >
                      <button 
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition ${
                          task.completed ? "bg-emerald-500 border-emerald-400 text-slate-950" : "border-slate-700 hover:border-emerald-500"
                        }`}
                        onClick={() => handleToggleTask(task.id)}
                      >
                        {task.completed && <Check className="w-3 h-3 stroke-[3px]" />}
                      </button>
                      <span className={`flex-grow text-xs text-left leading-tight ${task.completed ? "text-slate-500 line-through" : "text-white"}`}>
                        {task.text}
                      </span>
                      <button 
                        className="text-slate-500 hover:text-red-500 shrink-0 p-0.5 transition"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : (
              /* Regular Subitem mappings */
              currentSubitems.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400 font-bold">
                  {activeCategory === null ? "Select a branch node to begin." : "No modules found here."}
                </div>
              ) : (
                currentSubitems.slice(0, 5).map((item, idx) => {
                  // Explore Course Card Layout
                  if (activeCategory === "explore") {
                    const isReg = registeredCourses.find(rc => rc.id === item.id);
                    return (
                      <div 
                        key={`expl-${item.id}`}
                        className={`bg-slate-900/85 border rounded-2xl p-3.5 flex flex-col gap-2 transition-all duration-300 shadow-sm cursor-pointer ${
                          selectedCourse?.id === item.id ? "border-emerald-500 bg-emerald-500/10" : "border-slate-800/80 hover:border-slate-700/55"
                        }`}
                        onClick={() => setSelectedCourse(item)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-emerald-400 tracking-wide">{item.code}</span>
                          <span className="text-[10px] text-slate-400 font-bold">{item.credits} Credits</span>
                        </div>
                        <span className="font-extrabold text-xs text-white text-left line-clamp-1">{item.subject}</span>
                        
                        <div className="flex justify-between items-center border-t border-slate-800/80 pt-2 mt-1">
                          <span className="text-[9px] font-bold text-slate-500">{item.department}</span>
                          <button 
                            className={`text-[9px] font-black px-3.5 py-1.5 rounded-full transition cursor-pointer ${
                              isReg 
                                ? "bg-emerald-500/10 border border-emerald-500/25 text-emerald-455 hover:bg-red-500/15 hover:border-red-500/20 hover:text-red-500" 
                                : "bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRegisterCourse(item);
                            }}
                          >
                            {isReg ? "Applied ✓" : "Apply Now"}
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // Timetable Card Layout
                  if (activeCategory === "timetable") {
                    return (
                      <div 
                        key={`time-${item.id}`}
                        className="bg-slate-900/85 border border-slate-800/80 rounded-2xl p-3 flex flex-col gap-1.5 transition shadow-sm cursor-pointer hover:border-slate-700/60"
                        onClick={() => setSelectedCourse(COURSE_CATALOG.find(c => c.id === item.id) || item)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">{item.schedule.day}</span>
                          <span className="text-[10px] text-teal-400 font-bold">{item.schedule.time}:00 AM</span>
                        </div>
                        <span className="font-extrabold text-xs text-white text-left line-clamp-1">{item.courseName}</span>
                        <span className="text-[10px] text-slate-450 truncate text-left font-medium">Tutor: {item.teacher} ({item.schedule.room})</span>
                      </div>
                    );
                  }

                  // Regular Course States (Active/Completed/Pending)
                  const isSelected = selectedCourse?.id === item.id;
                  return (
                    <div 
                      key={`course-${item.id}`}
                      className={`bg-slate-900/85 border rounded-2xl p-3 flex flex-col gap-1.5 transition duration-300 shadow-sm cursor-pointer ${
                        isSelected ? "border-emerald-500 bg-emerald-500/10" : "border-slate-800/80 hover:border-slate-700/60"
                      }`}
                      onClick={() => setSelectedCourse(COURSE_CATALOG.find(c => c.id === item.id) || item)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-emerald-450 tracking-wide">Ref: {item.referenceNumber}</span>
                        <span 
                          className="text-[9px] font-extrabold uppercase border px-2 py-0.5 rounded-full"
                          style={{
                            background: item.status === "completed" ? "rgba(16, 185, 129, 0.1)" : 
                                        item.status === "active" ? "rgba(16, 185, 129, 0.15)" : "rgba(6, 182, 212, 0.1)",
                            borderColor: item.status === "completed" ? "rgba(16, 185, 129, 0.2)" : 
                                         item.status === "active" ? "rgba(16, 185, 129, 0.25)" : "rgba(6, 182, 212, 0.2)",
                            color: item.status === "completed" ? "#10b981" : 
                                   item.status === "active" ? "#34d399" : "#22d3ee"
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                      <span className="font-extrabold text-xs text-white text-left line-clamp-1">{item.courseName}</span>
                      <span className="text-[10px] text-slate-450 font-medium text-left">Class Progress: {item.progress}%</span>
                    </div>
                  );
                })
              )
            )}

            {currentSubitems.length > 5 && activeCategory !== "tasks" && (
              <span className="text-[10px] text-slate-400 text-center block py-1 font-bold">
                + {currentSubitems.length - 5} more items in list
              </span>
            )}
          </div>
        </div>

        {/* Daily Quote Card below the whole interactive network panel */}
        {quote.text && (
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 flex flex-col justify-center items-center text-center shadow-md backdrop-blur-md">
            <span className="text-[10px] text-emerald-450 uppercase tracking-widest font-extrabold mb-1">Quote of the Day</span>
            <p className="text-sm font-semibold text-white italic leading-relaxed">
              "{quote.text}"
            </p>
            <span className="text-xs text-slate-400 mt-1 font-bold">
              — {quote.author}
            </span>
          </div>
        )}
      </div>

      {/* Right Side: Details Panel matching reference screenshot */}
        <div className="glassmorphism rounded-3xl p-6 flex flex-col gap-6 shadow-sm border border-slate-800/80 text-left min-h-[580px]">
          {selectedCourse ? (
            /* Selected Course detail view */
            <>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedCourse.department}</span>
                </div>
                <h2 className="text-xl font-extrabold text-white leading-snug mt-1">
                  {selectedCourse.code || "COURSE"}: {selectedCourse.subject || selectedCourse.courseName}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2.5 text-xs text-slate-400">
                  <span className="font-medium">Instructor: {selectedCourse.teacher || "Prof. Rohan"}</span>
                  {selectedCourse.schedule && (
                    <span className="text-slate-500">
                      • {selectedCourse.schedule.day} {selectedCourse.schedule.time}:00 AM
                    </span>
                  )}
                </div>
              </div>

              {/* Status Update / Apply Actions */}
              {registryInfo && (
                <div className="flex gap-2 pt-1 border-t border-slate-850">
                  <button 
                    className="flex-grow bg-slate-800/80 border border-slate-700 hover:bg-slate-750 text-emerald-400 !py-2.5 !px-3 text-xs flex items-center justify-center gap-2 rounded-xl transition font-extrabold"
                    onClick={() => {
                      const nextMap = registryInfo.status === "active" ? "completed" : 
                                      registryInfo.status === "completed" ? "pending" : "active";
                      handleUpdateStatus(selectedCourse.id, nextMap);
                    }}
                  >
                    Status: <strong className="uppercase font-black text-white">{registryInfo.status}</strong>
                  </button>
                  <button 
                    className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 py-2.5 px-3.5 text-xs font-extrabold rounded-xl transition"
                    onClick={() => handleRegisterCourse(selectedCourse)}
                  >
                    Revoke
                  </button>
                </div>
              )}

              {/* Progress Sentiment widget */}
              <div className="bg-slate-955 border border-slate-800 rounded-2xl p-4 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide">Progress Rate</span>
                  <span className="text-[9px] font-black bg-emerald-500/10 border border-emerald-500/25 text-emerald-450 px-2 py-0.5 rounded-md">
                    {registryInfo ? (registryInfo.status === "completed" ? "Completed" : "Active") : "Catalog"}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-4xl font-extrabold text-white leading-none">
                      {registryInfo ? `${registryInfo.progress}%` : "0%"}
                    </div>
                    {registryInfo && registryInfo.status !== "completed" && (
                      <div className="text-[10px] text-emerald-400 font-bold mt-1.5 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+4% this week</span>
                      </div>
                    )}
                    {registryInfo?.status === "completed" && (
                      <div className="text-[10px] text-emerald-400 font-bold mt-1.5 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Certified ✓</span>
                      </div>
                    )}
                  </div>

                  {/* Simulated wave visualizer */}
                  <div className="flex items-end gap-0.5 h-[38px] pb-0.5">
                    {Array.from({ length: 15 }).map((_, barIdx) => {
                      const curFrac = registryInfo ? registryInfo.progress / 100 : 0;
                      const isBarActive = barIdx / 15 < curFrac;
                      const waveHeights = [20, 24, 15, 30, 26, 32, 10, 15, 20, 25, 35, 28, 22, 14, 8];
                      const height = waveHeights[barIdx];
                      return (
                        <div 
                          key={`tg-wave-bar-${barIdx}`} 
                          className={`w-0.5 rounded-full transition-all duration-300 ${
                            isBarActive ? "bg-gradient-to-t from-emerald-500 to-cyan-400" : "bg-slate-805"
                          } ${isBarActive && registryInfo?.status === "active" ? "[animation:barGrow_1.8s_ease-in-out_infinite_alternate]" : ""}`}
                          style={{ 
                            height: `${height}px`,
                            animationDelay: `${barIdx * 0.08}s`
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                {registryInfo && registryInfo.status !== "completed" && (
                  <div className="mt-4">
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={registryInfo.progress}
                      onChange={(e) => handleUpdateProgress(selectedCourse.id, parseInt(e.target.value, 10))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                    <div className="flex justify-between text-[9px] text-slate-450 mt-1 font-bold">
                      <span>0%</span>
                      <span>Adjust progress</span>
                      <span>100%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-3.5 flex flex-col gap-0.5">
                  <span className="text-base font-extrabold text-white">
                    {registryInfo?.status === "completed" ? "12" : registryInfo?.status === "active" ? "4" : "0"}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold">Lectures Covered</span>
                </div>

                <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-3.5 flex flex-col gap-0.5">
                  <span className="text-base font-extrabold text-white">{selectedCourse.credits || 3}</span>
                  <span className="text-[10px] text-slate-400 font-bold">Course Credits</span>
                </div>

                <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-3.5 flex flex-col gap-0.5">
                  <span className="text-base font-extrabold text-white">
                    {registryInfo?.status === "completed" ? "24h" : registryInfo?.status === "active" ? "12h" : "0h"}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold">Hours Spent</span>
                </div>

                <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-3.5 flex flex-col gap-0.5">
                  <span className="text-base font-extrabold text-emerald-400">
                    {registryInfo?.status === "active" ? "B+" : registryInfo?.status === "completed" ? "A" : "N/A"}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold">Predicted Grade</span>
                </div>
              </div>

              {/* Bottom Insight block */}
              <div className="bg-emerald-950/10 border border-emerald-500/10 rounded-2xl p-4">
                <div className="text-xs font-extrabold text-emerald-450 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Smart Insights</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {registryInfo?.status === "active" ? (
                    `Your current lecture velocity is steady. Plan your next project milestone under the R&D tab to lock in placement grade triggers.`
                  ) : registryInfo?.status === "completed" ? (
                    `Passed and certified module! This record is synced to your placement resume template.`
                  ) : (
                    `You have not finalized enrollment for this course module. Click 'Apply Now' to register and schedule classes.`
                  )}
                </p>
              </div>

              <Link 
                href="/trainings"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-extrabold py-3 rounded-2xl shadow-lg transition duration-300 text-center text-xs"
              >
                Explore Training Tracks
              </Link>
            </>
          ) : (
            /* Default Hub Overview sidebar - Restructured with Placement Speedometer and Gamified Badges */
            <>
              {/* Placement Readiness Speedometer Widget */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-5 flex flex-col gap-4 text-center items-center shadow-inner relative overflow-hidden">
                <div className="absolute top-2 left-3 text-[9px] text-slate-405 font-bold uppercase tracking-wider">Productivity Index</div>
                
                {/* SVG Progress Arc/Ring */}
                <div className="relative w-28 h-28 flex items-center justify-center mt-2">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="40" 
                      className="stroke-slate-800 stroke-[6px] fill-none"
                    />
                    <circle 
                      cx="50" cy="50" r="40" 
                      className="stroke-gradient stroke-[8px] fill-none transition-all duration-1000"
                      style={{
                        stroke: "#10b981",
                        strokeDasharray: "251.2",
                        strokeDashoffset: (251.2 * (100 - placementReadiness)) / 100,
                        strokeLinecap: "round"
                      }}
                    />
                  </svg>
                  <div className="absolute flex flex-col leading-none">
                    <span className="text-2xl font-black text-white">{placementReadiness}%</span>
                    <span className="text-[8px] text-emerald-400 font-extrabold uppercase mt-1">Readiness</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 w-full">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Corporate Placement Tracker</h4>
                  <p className="text-[10px] text-slate-450 leading-relaxed px-2">
                    {placementReadiness >= 80 
                      ? "Excellent placement eligibility score! You are cleared for live corporate interview calls."
                      : "Earn more certifications and log study hours to unlock the final placement drives."}
                  </p>
                  
                  {isMockInterviewBooked ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/25 py-2 px-3 rounded-xl text-[10px] font-black text-emerald-400 mt-1.5 text-center">
                      Interview Scheduled: Friday at 3:00 PM
                    </div>
                  ) : (
                    <button 
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[10px] py-2 px-4 rounded-xl mt-1.5 transition uppercase tracking-wide cursor-pointer shadow-md"
                      onClick={handleBookMockInterview}
                    >
                      Book Placement Mock Interview
                    </button>
                  )}
                </div>
              </div>

              {/* Gamified Achievements Badges */}
              <div className="flex flex-col gap-2.5">
                <div className="text-[9px] text-emerald-400 font-extrabold uppercase tracking-widest text-left">Trainee Achievements</div>
                <div className="grid grid-cols-2 gap-2.5">
                  {achievementsList.map((badge) => (
                    <div 
                      key={badge.id}
                      className={`border rounded-2xl p-2.5 flex items-center gap-2.5 transition duration-300 ${
                        badge.unlocked 
                          ? "border-emerald-500/35 bg-emerald-500/5 shadow-[0_0_10px_rgba(16,185,129,0.03)]" 
                          : "border-slate-850 bg-slate-900/10 opacity-40"
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                        badge.unlocked ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-slate-800 border-slate-700 text-slate-500"
                      }`}>
                        {badge.id === "streak" && <Flame className="w-3.5 h-3.5" />}
                        {badge.id === "certified" && <Award className="w-3.5 h-3.5" />}
                        {badge.id === "busy" && <BookOpen className="w-3.5 h-3.5" />}
                        {badge.id === "mock" && <Briefcase className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex flex-col leading-none text-left truncate">
                        <span className="font-bold text-[10px] text-white truncate">{badge.title}</span>
                        <span className="text-[8px] text-slate-400 mt-1 uppercase truncate">{badge.unlocked ? "Unlocked" : "Locked"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lofi Soundscape controls inside Hub details */}
              <div className="border-t border-slate-850 pt-4 flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 text-xs text-slate-450 font-bold">
                  <Volume2 className="w-4 h-4 text-emerald-405" />
                  <span className="uppercase tracking-wide text-[9px]">Ambient focus audio</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div 
                    className={`flex items-center justify-between p-2 rounded-xl border cursor-pointer transition text-xs ${
                      activeSound === "rain" ? "border-emerald-500 bg-emerald-500/5 text-emerald-450 font-extrabold" : "border-slate-850 hover:bg-slate-850"
                    }`}
                    onClick={() => handleSoundToggle("rain")}
                  >
                    <span className="font-semibold flex items-center gap-2">🌧️ Rain Filter</span>
                    <button className="text-slate-400 hover:text-slate-350">{activeSound === "rain" ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}</button>
                  </div>

                  <div 
                    className={`flex items-center justify-between p-2 rounded-xl border cursor-pointer transition text-xs ${
                      activeSound === "waves" ? "border-emerald-500 bg-emerald-500/5 text-emerald-450 font-extrabold" : "border-slate-855 hover:bg-slate-850"
                    }`}
                    onClick={() => handleSoundToggle("waves")}
                  >
                    <span className="font-semibold flex items-center gap-2">🌊 Ocean Waves</span>
                    <button className="text-slate-400 hover:text-slate-350">{activeSound === "waves" ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}</button>
                  </div>

                  <div 
                    className={`flex items-center justify-between p-2 rounded-xl border cursor-pointer transition text-xs ${
                      activeSound === "focus" ? "border-emerald-500 bg-emerald-500/5 text-emerald-450 font-extrabold" : "border-slate-855 hover:bg-slate-850"
                    }`}
                    onClick={() => handleSoundToggle("focus")}
                  >
                    <span className="font-semibold flex items-center gap-2">🧘 Binaural Focus</span>
                    <button className="text-slate-400 hover:text-slate-350">{activeSound === "focus" ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Floating ask agent and Chat Widget at the bottom right */}
      <div className="fixed bottom-6 right-6 z-[1050] flex flex-col items-end gap-4 max-w-[calc(100vw-32px)]">
        {isChatOpen && (
          <div className="w-[340px] h-[400px] max-w-full bg-slate-950 border border-slate-850 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up backdrop-blur-md">
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-850 flex items-center justify-between">
              <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Techglaz Assistant</span>
              </div>
              <button 
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
                onClick={() => setIsChatOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin">
              {chatMessages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed text-left ${
                    msg.sender === "ai" 
                      ? "bg-slate-900/60 border border-slate-800 text-slate-355 self-start rounded-tl-sm"
                      : "bg-gradient-to-tr from-emerald-600 to-cyan-600 text-slate-950 font-semibold self-end rounded-tr-sm"
                  }`}
                >
                  {msg.text.split("\n").map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleChatSubmit} className="p-3 border-t border-slate-850 flex gap-2">
              <input 
                type="text" 
                className="flex-grow bg-slate-950 border border-slate-850 rounded-xl text-xs py-2 px-3 text-slate-105 outline-none focus:border-emerald-500/50 transition" 
                placeholder="Ask me a question..." 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button type="submit" className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-450 text-slate-950 flex items-center justify-center shrink-0 transition cursor-pointer font-bold">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* Floating pill ask-a-question trigger bar */}
        <div 
          className="flex items-center bg-slate-900/95 border border-slate-855 rounded-full py-1.5 pl-4 pr-1.5 w-[340px] max-w-full shadow-lg backdrop-blur-md cursor-pointer transition focus-within:border-emerald-500/40"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageSquare className="w-4 h-4 text-emerald-455 mr-2" />
          <input 
            type="text" 
            className="flex-grow bg-transparent border-none text-xs text-slate-105 outline-none placeholder:text-slate-450 py-0.5" 
            placeholder="Ask a question..."
            value={chatInput}
            onChange={(e) => {
              e.stopPropagation();
              setChatInput(e.target.value);
            }}
            onFocus={() => setIsChatOpen(true)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setIsChatOpen(true);
                handleChatSubmit(e);
              }
            }}
          />
          <button 
            className="w-7 h-7 rounded-full bg-emerald-500 hover:bg-emerald-450 text-slate-950 flex items-center justify-center shrink-0 transition cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsChatOpen(true);
              if (chatInput.trim()) {
                handleChatSubmit(e);
              }
            }}
          >
            <Send className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
