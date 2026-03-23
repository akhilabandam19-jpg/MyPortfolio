/*
 * DESIGN: "Structured Elegance" — Swiss Editorial + Modern SaaS
 * Navy (#0F172A) hero, alternating light/dark sections, Space Grotesk headings, DM Sans body
 * Electric blue (#3B82F6) accent, JetBrains Mono for code/tags
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Github, Linkedin, Mail, ExternalLink,
  Server, Database, Code2, Layers, Shield, Zap,
  ChevronDown, Terminal, GitBranch, Globe
} from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

// ─── Data ────────────────────────────────────────────────────────────────────

const skills = [
  { subject: "Ruby on Rails", A: 95 },
  { subject: "Node.js / TS", A: 88 },
  { subject: "PostgreSQL", A: 85 },
  { subject: "REST APIs", A: 92 },
  { subject: "System Design", A: 87 },
  { subject: "DevOps / CI/CD", A: 78 },
];

const experienceYears = [
  { company: "PayPal", years: 4, color: "#3b82f6" },
  { company: "Target Corp", years: 5, color: "#60a5fa" },
  { company: "Amazon India", years: 3, color: "#93c5fd" },
];

const caseStudies = [
  {
    id: "civic-platform",
    number: "01",
    title: "Scaling a Civic Engagement Platform",
    subtitle: "Decidim / Ruby on Rails · PayPal",
    tags: ["Ruby on Rails", "PostgreSQL", "Decidim", "REST APIs", "RBAC"],
    tagColor: "blue",
    description:
      "Customized and scaled Decidim — a civic engagement platform used by governments worldwide — improving moderation, performance, and participatory budgeting workflows for large-scale user participation. Contributed to PayPal's civic tech initiatives including Fastlane integration and participatory budgeting workflows.",
    impact: [
      { label: "Spam Reduction", value: "~60%", desc: "via validation & input sanitization" },
      { label: "Admin Efficiency", value: "3×", desc: "bulk actions for proposal management" },
      { label: "Platform Stability", value: "↑", desc: "production issue resolution & query optimization" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/civic-platform-Hm3Rrc7nTgfW99NDvTSvXb.webp",
    color: "blue",
    paypalCommunityLink: "https://developer.paypal.com/community/",
  },
  {
    id: "backend-api",
    number: "02",
    title: "Designing Scalable Backend Services",
    subtitle: "Node.js / TypeScript · PayPal",
    tags: ["Node.js", "TypeScript", "JWT", "RBAC", "REST APIs", "Microservices"],
    tagColor: "teal",
    description:
      "Designed and built modular, backward-compatible REST APIs for internal platforms, focusing on JWT authentication, role-based access control, and performance optimization across multiple dependent systems. Implemented Agentic Payments APIs and smart querying patterns to reduce API call volume by 40%.",
    impact: [
      { label: "API Compatibility", value: "100%", desc: "backward-compatible across all consumers" },
      { label: "Response Time", value: "↓40%", desc: "via caching & async optimization" },
      { label: "Services Supported", value: "5+", desc: "internal platforms consuming the API" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/api-platform-ZqedEgkidcn7zMPzc9MnTs.webp",
    color: "teal",
    paypalCommunityLink: "https://developer.paypal.com/community/",
  },
  {
    id: "retail-backend",
    number: "03",
    title: "High-Traffic Retail Backend Systems",
    subtitle: "Ruby on Rails · Target Corporation",
    tags: ["Ruby on Rails", "ActiveRecord", "PostgreSQL", "REST APIs", "Agile"],
    tagColor: "amber",
    description:
      "Contributed to customer-facing and internal Rails applications supporting high-traffic retail workflows at Target Corporation, implementing RESTful APIs, optimizing database queries, and improving application reliability.",
    impact: [
      { label: "Query Performance", value: "↑", desc: "indexing strategies & ActiveRecord optimization" },
      { label: "Data Quality", value: "↑", desc: "robust validation & error-handling mechanisms" },
      { label: "Team Scale", value: "Agile", desc: "sprint planning, code reviews, release cycles" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/retail-platform-jZ4obV7AXrTUhsd289y2MY.webp",
    color: "amber",
  },
  {
    id: "paypal-decidim",
    number: "04",
    title: "PayPal Community Engagement Platform",
    subtitle: "Decidim + Ruby on Rails · PayPal",
    tags: ["Decidim", "Participatory Budgeting", "PostgreSQL", "OAuth", "Admin Tools"],
    tagColor: "blue",
    description:
      "Built and customized a Decidim-based civic engagement platform enabling PayPal communities to participate in transparent decision-making. Implemented participatory budgeting, proposal voting, and admin moderation tools supporting 12,450+ active participants and $2.5M in community-driven allocations.",
    impact: [
      { label: "Active Participants", value: "12,450", desc: "engaged community members" },
      { label: "Total Budget", value: "$2.5M", desc: "allocated through voting" },
      { label: "Proposals", value: "847", desc: "submitted and evaluated" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/paypal-decidim-dashboard-gN9bzKbWsjHbJaDhUVtU7j.webp",
    color: "blue",
    paypalCommunityLink: "https://developer.paypal.com/community/",
  }
];

const techStack = [
  { icon: <Code2 size={20} />, label: "Ruby on Rails", level: "Expert" },
  { icon: <Server size={20} />, label: "Node.js / TypeScript", level: "Advanced" },
  { icon: <Database size={20} />, label: "PostgreSQL", level: "Advanced" },
  { icon: <Layers size={20} />, label: "REST APIs", level: "Expert" },
  { icon: <Shield size={20} />, label: "JWT / RBAC Auth", level: "Advanced" },
  { icon: <Zap size={20} />, label: "Microservices", level: "Advanced" },
  { icon: <GitBranch size={20} />, label: "CI/CD Pipelines", level: "Proficient" },
  { icon: <Globe size={20} />, label: "Decidim Platform", level: "Advanced" },
];

// ─── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-blue-500" />
      <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">{children}</span>
    </motion.div>
  );
}

function CaseStudyCard({ cs, index }: { cs: typeof caseStudies[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const accentColor =
    cs.color === "blue" ? "border-blue-500/30 hover:border-blue-400/60" :
    cs.color === "teal" ? "border-teal-500/30 hover:border-teal-400/60" :
    "border-amber-500/30 hover:border-amber-400/60";

  const tagClass =
    cs.tagColor === "blue" ? "tag-pill" :
    cs.tagColor === "teal" ? "tag-pill tag-pill-green" :
    "tag-pill tag-pill-amber";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`card-navy transition-all duration-300 overflow-hidden group ${accentColor}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={cs.image}
          alt={cs.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-mid)] via-transparent to-transparent" />
        <span className="absolute top-4 left-4 font-mono text-xs text-blue-400 bg-black/40 px-2 py-1 rounded">
          {cs.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs text-slate-400 font-mono mb-2">{cs.subtitle}</p>
        <h3 className="text-xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {cs.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">{cs.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {cs.tags.map((t) => (
            <span key={t} className={tagClass}>{t}</span>
          ))}
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5 pt-4 border-t border-white/5">
          {cs.impact.map((imp) => (
            <div key={imp.label} className="text-center">
              <div className="text-lg font-bold text-blue-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {imp.value}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{imp.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Link href={`/case-study/${cs.id}`}>
            <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium group/btn">
              View Full Case Study
              <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
            </button>
          </Link>
          {cs.paypalCommunityLink && (
            <a href={cs.paypalCommunityLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium">
              <ExternalLink size={14} />
              PayPal Developer Community
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "case-studies", "skills", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--navy)" }}>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "oklch(0.18 0.04 250 / 0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid oklch(1 0 0 / 0.06)" }}>
        <button onClick={() => scrollTo("hero")} className="font-mono text-sm text-blue-400 hover:text-blue-300 transition-colors">
          <Terminal size={16} className="inline mr-2" />
          SE Portfolio
        </button>
        <div className="hidden md:flex items-center gap-6">
          {[["about", "About"], ["case-studies", "Case Studies"], ["skills", "Skills"], ["contact", "Contact"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-sm transition-colors ${activeSection === id ? "text-blue-400" : "text-slate-400 hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <a href="mailto:contact@example.com"
          className="hidden md:flex items-center gap-2 text-xs font-mono px-4 py-2 rounded border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition-colors">
          <Mail size={12} /> Hire Me
        </a>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/hero-bg-ma6WRcbhpXNHVBjNBqKT2w.webp)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.12 0.04 250 / 0.95) 0%, oklch(0.18 0.04 250 / 0.85) 100%)" }} />

        <div className="container relative z-10 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">Available for new projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Senior
              <span className="block" style={{ color: "oklch(0.7 0.18 250)" }}>Software</span>
              Engineer
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              12+ years building scalable backend systems, civic platforms, and REST APIs.
              Specialized in <span className="text-blue-300 font-medium">Ruby on Rails</span>,{" "}
              <span className="text-blue-300 font-medium">Node.js / TypeScript</span>, and{" "}
              <span className="text-blue-300 font-medium">distributed system design</span>.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["PayPal", "Target Corporation", "Amazon"].map((c) => (
                <span key={c} className="text-xs font-mono px-3 py-1.5 rounded"
                  style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.12)", color: "oklch(0.8 0.01 240)" }}>
                  {c}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("case-studies")}
                className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{ background: "oklch(0.55 0.2 250)", fontFamily: "'Space Grotesk', sans-serif" }}>
                View Case Studies <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                style={{ border: "1px solid oklch(1 0 0 / 0.15)" }}>
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.button>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24" style={{ backgroundColor: "var(--slate-white)" }}>
        <div className="container">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel>About</SectionLabel>
                <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--navy)" }}>
                  Engineering at Scale
                </motion.h2>
                <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-4">
                  Senior Software Engineer with 12+ years of experience building scalable, high-performance applications across backend and mobile systems. Strong expertise in designing and integrating RESTful APIs, microservices, and distributed systems supporting high-traffic applications.
                </motion.p>
                <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
                  Hands-on experience with Ruby on Rails, Node.js, TypeScript, and relational data systems. Proven track record at PayPal, Target Corporation, and Amazon, delivering platform enhancements that improve performance, security, and user experience.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {["Agile", "Code Reviews", "CI/CD", "Production Support", "System Architecture", "Mentoring"].map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: "oklch(0.55 0.2 250 / 0.1)", color: "oklch(0.45 0.18 250)", border: "1px solid oklch(0.55 0.2 250 / 0.2)" }}>
                      {s}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Experience chart */}
              <motion.div variants={fadeUp}>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Years of Experience by Company</p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={experienceYears} barCategoryGap="30%">
                    <XAxis dataKey="company" tick={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", fill: "#64748b" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#e2e8f0", fontSize: "12px" }}
                      formatter={(v: number) => [`${v} years`, "Experience"]}
                    />
                    <Bar dataKey="years" radius={[4, 4, 0, 0]}>
                      {experienceYears.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* Timeline */}
                <div className="mt-6 space-y-3">
                  {[
                    { company: "PayPal", role: "Lead Software Engineer", period: "May 2022 – Present", location: "Atlanta, GA" },
                    { company: "Target Corporation", role: "Senior Software Engineer", period: "Jan 2017 – Apr 2022", location: "Minneapolis, MN" },
                    { company: "Amazon India", role: "Software Engineer", period: "Aug 2013 – Nov 2016", location: "Bangalore, India" },
                  ].map((exp, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "oklch(0.97 0.005 240)" }}>
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: experienceYears[i]?.color || "#3b82f6" }} />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--navy)", fontFamily: "'Space Grotesk', sans-serif" }}>{exp.company}</p>
                        <p className="text-xs text-slate-500">{exp.role} · {exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="case-studies" className="py-24" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container">
          <AnimatedSection>
            <SectionLabel>Work</SectionLabel>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Case Studies
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 mb-12 max-w-xl">
              Detailed breakdowns of real engineering challenges — architecture decisions, implementation approach, and measurable outcomes.
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.id} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-24" style={{ backgroundColor: "var(--navy-mid)" }}>
        <div className="container">
          <AnimatedSection>
            <SectionLabel>Expertise</SectionLabel>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Technical Skills
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Radar chart */}
              <motion.div variants={fadeUp}>
                <ResponsiveContainer width="100%" height={320}>
                  <RadarChart data={skills}>
                    <PolarGrid stroke="rgba(255,255,255,0.08)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }} />
                    <Radar name="Proficiency" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Tech stack grid */}
              <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
                {techStack.map((t, i) => (
                  <motion.div
                    key={t.label}
                    variants={fadeUp}
                    className="flex items-center gap-3 p-4 rounded-lg transition-colors"
                    style={{ background: "oklch(0.18 0.04 250)", border: "1px solid oklch(1 0 0 / 0.07)" }}
                  >
                    <div className="text-blue-400 flex-shrink-0">{t.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.label}</p>
                      <p className="text-xs text-slate-500">{t.level}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Languages row */}
            <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Languages & Tools</p>
              <div className="flex flex-wrap gap-2">
                {["Ruby", "JavaScript", "TypeScript", "Dart", "HTML", "CSS", "Flutter", "Git", "Sidekiq", "ERB", "ActiveRecord", "Decidim"].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <SectionLabel>Contact</SectionLabel>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Let's Work Together
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-8">
                Open to senior engineering roles, consulting engagements, and technical leadership opportunities. Particularly interested in civic tech, fintech, and high-scale platform work.
              </motion.p>
              <motion.div variants={stagger} className="flex flex-col sm:flex-row gap-4">
                <motion.a variants={fadeUp} href="mailto:akhila.bandam@example.com"
                  className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: "oklch(0.55 0.2 250)", fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Mail size={16} /> Send Email
                </motion.a>
                <motion.a variants={fadeUp} href="https://linkedin.com/in/akhila-bandam" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  style={{ border: "1px solid oklch(1 0 0 / 0.15)" }}>
                  <Linkedin size={16} /> LinkedIn
                </motion.a>
                <motion.a variants={fadeUp} href="https://github.com/akhilabandam19-jpg" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  style={{ border: "1px solid oklch(1 0 0 / 0.15)" }}>
                  <Github size={16} /> GitHub
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 border-t" style={{ backgroundColor: "var(--navy)", borderColor: "oklch(1 0 0 / 0.06)" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-600">Senior Software Engineer · 12+ Years Experience</span>
          <span className="text-xs text-slate-700">PayPal · Target Corporation · Amazon</span>
        </div>
      </footer>
    </div>
  );
}
