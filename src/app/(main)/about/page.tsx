import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { User, Award, Shield, Target, Compass, Milestone } from "lucide-react";
import { client } from "../../../../sanity/lib/client";
import { founderMessageQuery } from "../../../../sanity/lib/queries";
import { FounderMessage } from "@/types";

// Mock data fallback if Sanity is empty
const MOCK_FOUNDER_MESSAGE: FounderMessage = {
  _id: "founder-mock",
  founderName: "Dr. J. P. Haran",
  designation: "Founder & Managing Director",
  messageBody: "Welcome to Techglaz Labs Private Limited. Our mission is to bridge the widening gap between traditional academic curricula and the rapid evolutions in the global engineering industry. By offering structured, high-end professional development, we empower both student engineers and teaching faculty to acquire state-of-the-art industry competence. Collaborations with prestigious research organizations, IIT hubs, Cyber Cells, and CDAC mentors ensure our curriculum matches real-world standards. We invite you to explore our advanced engineering training tracks and join us in shaping the future of industrial engineering.",
};

const VALUES = [
  {
    icon: <Target className="w-8 h-8 text-brand-blue-steel" />,
    title: "Mission-Oriented",
    description: "Equipping learners with professional expertise to bridge the academic-industry gap.",
  },
  {
    icon: <Compass className="w-8 h-8 text-brand-blue-steel" />,
    title: "Continuous Innovation",
    description: "Aligning our courses with cutting-edge developments in VLSI, IoT, AI, and cybersecurity.",
  },
  {
    icon: <Shield className="w-8 h-8 text-brand-blue-steel" />,
    title: "Trust & Collaboration",
    description: "Working closely with government bodies, state cyber cells, and premium institutes like CDAC and IITs.",
  },
];

const TIMELINE = [
  {
    year: "2023",
    title: "Techglaz Labs Founded",
    description: "Established with a vision to provide specialized corporate engineering training.",
  },
  {
    year: "2024",
    title: "IIT & CDAC Collaborations",
    description: "Launched advanced curriculum tracks in VLSI and Digital Forensics with premier mentors.",
  },
  {
    year: "2025",
    title: "State-Wide Faculty Dev Programs",
    description: "Trained over 500+ engineering faculty members across top universities.",
  },
  {
    year: "2026",
    title: "National Internship Initiatives",
    description: "Signed MoUs with university partners (MU) to offer placement-guaranteed internships.",
  },
];

export const revalidate = 300; // 5-minute ISR

export default async function AboutPage() {
  let founderMsg = MOCK_FOUNDER_MESSAGE;

  try {
    const fetched = await client.fetch<FounderMessage | null>(founderMessageQuery);
    if (fetched && fetched.founderName) {
      founderMsg = fetched;
    }
  } catch (error) {
    console.warn("Failed to fetch founder message, using mock data:", error);
  }

  const breadcrumbs = [{ label: "About Us" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="About Techglaz Labs"
        breadcrumbs={breadcrumbs}
        subtitle="Bridging academic knowledge with high-end corporate engineering competence."
      />

      {/* Main Intro Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-steel">
                Our Genesis
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Pioneering Next-Generation Engineering Competence
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Techglaz Labs Private Limited is a specialized training and research organization. We deliver professional development courses, project modules, and internship tracks to university students, corporate staff, and teaching faculties.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our core domains include Computer Science, IT, VLSI, Embedded Systems, Internet of Things (IoT), and Mechanical Engineering. Through our specialized networks, we provide a launchpad for engineers aiming for top-tier careers.
              </p>
            </div>
            
            {/* Mission/Vision Cards */}
            <div className="bg-slate-50 dark:bg-slate-850/30 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/40 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-blue-light dark:bg-slate-850 rounded-xl text-brand-blue-deep shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Our Mission</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    To deliver highly specialized, practical training modules that supplement university degrees, allowing candidates to build verified industry expertise.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start border-t border-slate-200/50 dark:border-slate-800/30 pt-6">
                <div className="p-3 bg-brand-blue-light dark:bg-slate-850 rounded-xl text-brand-blue-deep shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Our Vision</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    To become India's leading training hub for advanced hardware description languages, digital forensics, agentic AI, and smart automated manufacturing design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Message Section */}
      <section id="founders" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Founder's Message"
            subtitle="Leadership Vision"
            centered={true}
          />

          <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-xl relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              
              {/* Photo */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-brand-blue-deep to-brand-blue-steel flex items-center justify-center shadow-md">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mt-4 text-center">
                  {founderMsg.founderName}
                </h4>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 text-center mt-1">
                  {founderMsg.designation}
                </p>
              </div>

              {/* Message */}
              <div className="md:col-span-3 space-y-4 text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed">
                <p className="italic">
                  "{founderMsg.messageBody}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="Why Choose Us"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {VALUES.map((value, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-850/30 border border-slate-100 dark:border-slate-800/50 rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col items-start space-y-4"
              >
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-750">
                  {value.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Milestone Timeline"
            subtitle="History"
            centered={true}
          />

          <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-3xl mx-auto mt-12 pl-6 sm:pl-8 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 h-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-brand-blue-deep border-4 border-white dark:border-slate-900 shadow-sm" />
                
                <div className="space-y-1.5">
                  <span className="text-sm font-bold text-brand-blue-steel">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
