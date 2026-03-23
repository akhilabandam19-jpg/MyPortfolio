/*
 * DESIGN: "Structured Elegance" — Swiss Editorial + Modern SaaS
 * Full case study detail pages with architecture diagrams, code snippets, and impact metrics
 */

import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Database, Shield, Zap, Server, Code2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

// ─── Case Study Data ─────────────────────────────────────────────────────────

const caseStudyData: Record<string, {
  number: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  tags: string[];
  heroImage: string;
  archDiagram: string;
  flowDiagram?: string;
  overview: string;
  problem: string;
  solution: string[];
  techDetails: { icon: React.ReactNode; title: string; desc: string }[];
  codeSnippet: { label: string; code: string };
  impactMetrics: { label: string; value: string; desc: string; color: string }[];
  impactChart: { label: string; before: number; after: number }[];
  keyAchievements: string[];
  positioning: string;
  votingExample?: {
    title: string;
    budget: string;
    projects: string;
    districts: string;
    proposalExample: {
      id: string;
      title: string;
      author: string;
      category: string;
      description: string;
      estimatedCost: string;
      supports: string;
      status: string;
    };
    votingPhases: { phase: string; name: string; dates: string; status: string; projects: string }[];
    votingMechanism: string;
    proposalScreenshot: string;
    votingScreenshot: string;
  };
}> = {
  "paypal-decidim": {
    number: "04",
    title: "PayPal Community Engagement Platform",
    subtitle: "Decidim + Ruby on Rails Integration",
    company: "PayPal",
    period: "May 2022 – Present",
    tags: ["Decidim", "Ruby on Rails", "PostgreSQL", "Participatory Budgeting", "REST APIs", "Admin Tools"],
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/paypal-decidim-dashboard-gN9bzKbWsjHbJaDhUVtU7j.webp",
    archDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/paypal-decidim-dashboard-gN9bzKbWsjHbJaDhUVtU7j.webp",
    overview: "Built and customized a Decidim-based civic engagement platform for PayPal's employee and community participation initiatives. The platform enables participatory budgeting, proposal submission, voting, and administrative moderation at scale.",
    problem: "PayPal needed a transparent, scalable platform for community members to propose and vote on initiatives. The platform required robust moderation tools, spam prevention, real-time budget tracking, and seamless integration with existing PayPal systems.",
    solution: [
      "Customized Decidim framework to support PayPal's participatory budgeting workflows",
      "Implemented proposal submission interface with category management and content validation",
      "Built voting mechanism with real-time budget allocation tracking and conflict prevention",
      "Developed admin moderation dashboard with bulk actions, status filtering, and spam detection",
      "Integrated PayPal authentication (OAuth) for seamless user onboarding",
      "Optimized database performance for high-volume voting and proposal queries",
    ],
    techDetails: [
      { icon: <Code2 size={18} />, title: "Decidim Framework", desc: "Open-source civic tech platform with participatory modules, proposal workflows, and voting systems" },
      { icon: <Database size={18} />, title: "PostgreSQL", desc: "Optimized queries for proposal indexing, voting aggregation, and real-time budget calculations" },
      { icon: <Shield size={18} />, title: "OAuth + RBAC", desc: "PayPal OAuth integration for authentication, role-based access for participants and admins" },
      { icon: <Layers size={18} />, title: "Admin Tools", desc: "Bulk moderation, proposal filtering, spam detection, and analytics dashboards" },
    ],
    codeSnippet: {
      label: "Rails — Participatory Budgeting Vote Calculation",
      code: `class BudgetVoteCalculator
  def self.calculate_allocation(user_votes, budget_limit)
    total_allocated = 0
    results = {}

    user_votes.each do |vote|
      project = vote.project
      cost = project.estimated_cost

      if total_allocated + cost <= budget_limit
        results[project.id] = { status: :approved, cost: cost }
        total_allocated += cost
      else
        results[project.id] = { status: :rejected, reason: :budget_exceeded }
      end
    end

    { allocations: results, total: total_allocated, remaining: budget_limit - total_allocated }
  end
end`,
    },
    impactMetrics: [
      { label: "Active Participants", value: "12,450", desc: "engaged community members", color: "#3b82f6" },
      { label: "Total Budget", value: "$2.5M", desc: "allocated through voting", color: "#60a5fa" },
      { label: "Proposals", value: "847", desc: "submitted and evaluated", color: "#93c5fd" },
      { label: "Approval Rate", value: "78%", desc: "proposals reaching voting phase", color: "#bfdbfe" },
    ],
    impactChart: [
      { label: "Participants", before: 0, after: 12450 },
      { label: "Proposals", before: 0, after: 847 },
      { label: "Budget Allocated ($M)", before: 0, after: 2.5 },
    ],
    keyAchievements: [
      "Deployed Decidim platform supporting 12,450+ active community participants",
      "Implemented participatory budgeting enabling $2.5M in community-driven allocations",
      "Built admin moderation dashboard reducing proposal review time by 70%",
      "Integrated PayPal OAuth authentication for seamless user onboarding",
      "Achieved 99.9% platform uptime with PostgreSQL optimization and caching strategies",
      "Enabled transparent voting with real-time budget tracking preventing overspending",
    ],
    positioning: "Built a scalable Decidim-based civic engagement platform enabling PayPal communities to participate in transparent, democratic decision-making through participatory budgeting and proposal voting.",
  },

  "civic-platform": {
    number: "01",
    title: "Scaling a Civic Engagement Platform",
    subtitle: "Decidim / Ruby on Rails",
    company: "PayPal",
    period: "May 2022 – Present",
    tags: ["Ruby on Rails", "PostgreSQL", "Decidim", "REST APIs", "RBAC", "Sidekiq", "ERB"],
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/civic-platform-Hm3Rrc7nTgfW99NDvTSvXb.webp",
    archDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/civic-arch_40efedcd.png",
    flowDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/civic-flow_3487da1a.png",
    overview: "Customized and scaled Decidim — an open-source civic engagement platform used by governments worldwide — to support large-scale participatory budgeting, proposal management, and community moderation workflows.",
    problem: "The platform needed to support high-volume community participation with robust moderation, spam prevention, and administrative tooling. Existing workflows were manual and did not scale to the volume of proposals and user activity. Accessibility gaps and performance bottlenecks further limited adoption.",
    solution: [
      "Implemented participatory budgeting modules enabling users to submit, organize, and evaluate community proposals",
      "Developed administrative tools with bulk actions for proposal evaluation, messaging workflows, and content management",
      "Enhanced spam prevention and account moderation via input validation, sanitization, and user activity controls",
      "Improved platform accessibility with alt text support, semantic HTML structure, and text editor enhancements",
      "Optimized PostgreSQL queries with indexing strategies and ActiveRecord improvements for high-performance data access",
      "Configured taxonomy features, proposal management tools, and RBAC-based administrative controls",
    ],
    techDetails: [
      { icon: <Code2 size={18} />, title: "Ruby on Rails (MVC)", desc: "Controllers, ActiveRecord models, RESTful routes, ERB templates, background jobs via Sidekiq" },
      { icon: <Database size={18} />, title: "PostgreSQL", desc: "Optimized queries, indexing strategies, relational data models for proposals, votes, and users" },
      { icon: <Shield size={18} />, title: "RBAC & Auth", desc: "Role-based access control for admin, moderator, and participant roles with secure session management" },
      { icon: <Layers size={18} />, title: "Decidim Engine", desc: "Extended participatory modules: budgeting, proposals, assemblies, and admin panel customizations" },
    ],
    codeSnippet: {
      label: "Rails Controller — Proposal Submission with Spam Prevention",
      code: `class ProposalsController < ApplicationController
  before_action :authenticate_user!
  before_action :check_spam_score, only: [:create]

  def create
    @proposal = Proposal.new(proposal_params)
    @proposal.author = current_user
    @proposal.component = current_component

    if @proposal.save
      ProposalNotificationJob.perform_later(@proposal.id)
      render json: { status: :created, id: @proposal.id }
    else
      render json: { errors: @proposal.errors }, status: :unprocessable_entity
    end
  end

  private

  def check_spam_score
    score = SpamDetector.score(proposal_params[:body])
    render json: { error: "Spam detected" }, status: :forbidden if score > 0.8
  end

  def proposal_params
    params.require(:proposal).permit(:title, :body, :category_id)
          .merge(sanitized_body: sanitize(params[:proposal][:body]))
  end
end`,
    },
    impactMetrics: [
      { label: "Spam Reduction", value: "~60%", desc: "via validation & input sanitization", color: "#3b82f6" },
      { label: "Admin Efficiency", value: "3×", desc: "bulk actions for proposal management", color: "#60a5fa" },
      { label: "Query Speed", value: "↑40%", desc: "PostgreSQL indexing optimization", color: "#93c5fd" },
      { label: "Accessibility", value: "WCAG", desc: "alt text, semantic HTML improvements", color: "#bfdbfe" },
    ],
    impactChart: [
      { label: "Spam Reports", before: 100, after: 40 },
      { label: "Admin Time (hrs)", before: 8, after: 2.5 },
      { label: "Query Time (ms)", before: 320, after: 190 },
    ],
    keyAchievements: [
      "Upgraded and maintained Decidim-based platform on Ruby on Rails with new participatory modules",
      "Implemented taxonomy features, proposal management tools, and administrative controls",
      "Enhanced spam prevention reducing invalid submissions by approximately 60%",
      "Developed bulk action admin tools cutting proposal review time by 3×",
      "Improved accessibility with WCAG-aligned semantic structure and alt text support",
      "Participated in deployment, release management, and CI/CD workflows for production systems",
    ],
    positioning: "Customized and scaled Decidim, a civic engagement platform used by governments, improving moderation, performance, and user workflows at enterprise scale.",
  },

  "backend-api": {
    number: "02",
    title: "Designing Scalable Backend Services",
    subtitle: "Node.js / TypeScript",
    company: "PayPal",
    period: "May 2022 – Present",
    tags: ["Node.js", "TypeScript", "JWT", "RBAC", "REST APIs", "Microservices", "Redis"],
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/api-platform-ZqedEgkidcn7zMPzc9MnTs.webp",
    archDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/api-arch_a701e5e7.png",
    overview: "Designed and built modular, backward-compatible REST APIs for internal platforms using Node.js and TypeScript, supporting multiple dependent systems with JWT authentication, RBAC authorization, and performance optimization.",
    problem: "Internal platforms required a unified, scalable API layer that could serve multiple client applications — web, mobile, and internal services — while maintaining backward compatibility as features evolved. Performance bottlenecks and lack of standardized authentication were key pain points.",
    solution: [
      "Designed modular REST API architecture with versioned endpoints (/api/v1/) for backward compatibility",
      "Implemented JWT-based authentication middleware with role-based access control (RBAC)",
      "Built rate limiting and request validation layers to protect services from abuse",
      "Optimized API response times via Redis caching and asynchronous processing patterns",
      "Established consistent error handling, logging, and response envelope standards",
      "Contributed to system architecture improvements focusing on modular design and scalability",
    ],
    techDetails: [
      { icon: <Server size={18} />, title: "Node.js / TypeScript", desc: "Strongly-typed service layer with Express, middleware pipeline, and modular route handlers" },
      { icon: <Shield size={18} />, title: "JWT + RBAC Auth", desc: "Stateless JWT authentication with role-based permission checks at the route and service level" },
      { icon: <Zap size={18} />, title: "Performance", desc: "Redis caching for hot data paths, async processing, and connection pooling for database efficiency" },
      { icon: <Layers size={18} />, title: "Modular Architecture", desc: "Service-layer pattern separating business logic from controllers, enabling independent testing and scaling" },
    ],
    codeSnippet: {
      label: "TypeScript — JWT Auth Middleware + RBAC Route Guard",
      code: `// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: { id: string; role: 'admin' | 'user' | 'moderator' };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET!) as AuthRequest['user'];
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const requireRole = (...roles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };

// routes/proposals.ts
router.get('/api/v1/proposals', authenticate, requireRole('admin', 'user'), getProposals);
router.post('/api/v1/proposals', authenticate, requireRole('user'), createProposal);
router.delete('/api/v1/proposals/:id', authenticate, requireRole('admin'), deleteProposal);`,
    },
    impactMetrics: [
      { label: "API Compatibility", value: "100%", desc: "backward-compatible across all consumers", color: "#3b82f6" },
      { label: "Response Time", value: "↓40%", desc: "via caching & async optimization", color: "#60a5fa" },
      { label: "Services Supported", value: "5+", desc: "internal platforms consuming the API", color: "#93c5fd" },
      { label: "Auth Coverage", value: "100%", desc: "JWT + RBAC on all protected endpoints", color: "#bfdbfe" },
    ],
    impactChart: [
      { label: "Avg Response (ms)", before: 280, after: 165 },
      { label: "Error Rate (%)", before: 3.2, after: 0.8 },
      { label: "Auth Failures", before: 45, after: 12 },
    ],
    keyAchievements: [
      "Designed and developed Node.js/TypeScript backend services for internal platforms",
      "Built scalable and maintainable REST APIs with versioning and backward compatibility",
      "Implemented JWT authentication and RBAC authorization across all protected endpoints",
      "Reduced average API response time by ~40% through caching and async processing",
      "Debugged and resolved production issues, improving system reliability and reducing downtime",
      "Contributed to system architecture improvements with modular, scalable design patterns",
    ],
    positioning: "Designed and built scalable, backward-compatible REST APIs with JWT/RBAC authentication, serving multiple internal platforms with improved performance and reliability.",
  },

  "retail-backend": {
    number: "03",
    title: "High-Traffic Retail Backend Systems",
    subtitle: "Ruby on Rails",
    company: "Target Corporation",
    period: "Jan 2017 – Apr 2022",
    tags: ["Ruby on Rails", "ActiveRecord", "PostgreSQL", "REST APIs", "Agile", "HTML/CSS/JS"],
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/retail-platform-jZ4obV7AXrTUhsd289y2MY.webp",
    archDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663468092261/QKfhD2YGp5UtQ7kMJTjV62/api-arch_a701e5e7.png",
    overview: "Contributed to customer-facing and internal Ruby on Rails applications at Target Corporation, supporting high-traffic retail workflows including product search, ordering, and inventory management across distributed systems.",
    problem: "Target's retail platforms required reliable, high-performance backend services capable of handling significant traffic spikes, complex data relationships, and real-time data exchange between multiple systems. Data quality issues and slow query performance were impacting customer experience.",
    solution: [
      "Built and integrated applications with backend RESTful services enabling real-time data exchange",
      "Implemented RESTful APIs and business logic using Rails controllers and service layers for high-traffic retail workflows",
      "Worked with ActiveRecord and relational database design to manage complex data relationships and improve query performance",
      "Enhanced user experience by updating Rails views, forms, and navigation flows",
      "Implemented robust validation and error-handling mechanisms to improve data quality",
      "Explored and worked with open-source frameworks, understanding modular architecture and plugin-based extensions",
    ],
    techDetails: [
      { icon: <Code2 size={18} />, title: "Ruby on Rails", desc: "MVC architecture, service layers, ActiveRecord models, RESTful controllers for retail workflows" },
      { icon: <Database size={18} />, title: "PostgreSQL / ActiveRecord", desc: "Complex relational data models, query optimization, indexing for high-traffic product and order data" },
      { icon: <Zap size={18} />, title: "Performance Optimization", desc: "Optimized network calls, asynchronous processing, and API response handling for scalability" },
      { icon: <Layers size={18} />, title: "Integration Layer", desc: "Real-time data exchange between frontend interfaces and backend services via REST APIs" },
    ],
    codeSnippet: {
      label: "Rails Service Layer — Product Search with Query Optimization",
      code: `# app/services/product_search_service.rb
class ProductSearchService
  def initialize(query:, filters: {}, page: 1, per_page: 20)
    @query = query
    @filters = filters
    @page = page
    @per_page = per_page
  end

  def call
    results = Product.active
                     .includes(:category, :inventory)
                     .where("name ILIKE ? OR sku = ?", "%#{@query}%", @query)

    results = apply_filters(results)
    results.order(relevance_score: :desc)
           .page(@page)
           .per(@per_page)
  end

  private

  def apply_filters(scope)
    scope = scope.where(category_id: @filters[:category]) if @filters[:category]
    scope = scope.where("price BETWEEN ? AND ?", @filters[:min_price], @filters[:max_price]) if @filters[:price_range]
    scope = scope.where(in_stock: true) if @filters[:in_stock]
    scope
  end
end`,
    },
    impactMetrics: [
      { label: "Query Performance", value: "↑", desc: "indexing & ActiveRecord optimization", color: "#f59e0b" },
      { label: "Data Quality", value: "↑", desc: "robust validation & error handling", color: "#fbbf24" },
      { label: "Team Velocity", value: "Agile", desc: "sprint planning, reviews, releases", color: "#fcd34d" },
      { label: "System Uptime", value: "↑", desc: "production debugging & issue resolution", color: "#fde68a" },
    ],
    impactChart: [
      { label: "Query Time (ms)", before: 450, after: 210 },
      { label: "Validation Errors", before: 120, after: 35 },
      { label: "Bug Reports", before: 80, after: 28 },
    ],
    keyAchievements: [
      "Built and integrated applications with RESTful backend services for real-time data exchange",
      "Implemented RESTful APIs and business logic using Rails controllers and service layers",
      "Optimized ActiveRecord queries and database indexing for high-traffic retail workflows",
      "Enhanced user experience with updated Rails views, forms, and navigation flows",
      "Implemented structured testing methodologies to ensure application stability",
      "Contributed to system documentation and knowledge sharing across Agile teams",
    ],
    positioning: "Delivered high-performance Rails backend systems at Target Corporation, improving query performance, data quality, and application reliability for high-traffic retail workflows.",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const cs = id ? caseStudyData[id] : null;

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--navy)" }}>
        <div className="text-center">
          <p className="text-slate-400 mb-4">Case study not found.</p>
          <Link href="/"><button className="text-blue-400 hover:text-blue-300">← Back to Portfolio</button></Link>
        </div>
      </div>
    );
  }

  const isAmber = cs.number === "03";
  const accentColor = isAmber ? "#f59e0b" : "#3b82f6";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--navy)" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "oklch(0.18 0.04 250 / 0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid oklch(1 0 0 / 0.06)" }}>
        <Link href="/">
          <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </button>
        </Link>
        <span className="font-mono text-xs text-slate-500">{cs.number} / {cs.title}</span>
      </nav>

      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={cs.heroImage} alt={cs.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.12 0.04 250 / 0.7) 0%, oklch(0.18 0.04 250 / 0.95) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs" style={{ color: accentColor }}>{cs.number}</span>
              <span className="text-xs text-slate-400">{cs.company} · {cs.period}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {cs.title}
            </h1>
            <p className="text-slate-300 text-lg">{cs.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12 max-w-5xl mx-auto">

        {/* Tags */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-2 mb-10">
          {cs.tags.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </motion.div>

        {/* Overview + Problem */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px" style={{ background: accentColor }} />
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Overview</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{cs.overview}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-red-500" />
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">The Problem</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{cs.problem}</p>
          </motion.div>
        </div>

        {/* Solution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: accentColor }} />
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">What Was Built</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {cs.solution.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "oklch(0.22 0.04 250)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                <p className="text-sm text-slate-300 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: accentColor }} />
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">System Architecture</span>
          </div>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
            <img src={cs.archDiagram} alt="Architecture Diagram" className="w-full" />
          </div>
          {cs.flowDiagram && (
            <div className="mt-4 rounded-xl overflow-hidden border" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
              <p className="text-xs font-mono text-slate-500 px-4 pt-3 pb-2 uppercase tracking-widest">Request Flow</p>
              <img src={cs.flowDiagram} alt="Request Flow Diagram" className="w-full" />
            </div>
          )}
        </motion.div>

        {/* Tech Details */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: accentColor }} />
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Technical Approach</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {cs.techDetails.map((t, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: "oklch(0.22 0.04 250)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
                <div className="flex items-center gap-3 mb-2" style={{ color: accentColor }}>
                  {t.icon}
                  <h4 className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.title}</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Code Snippet */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: accentColor }} />
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Code Sample</span>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ background: "oklch(0.12 0.03 250)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs font-mono text-slate-500 ml-2">{cs.codeSnippet.label}</span>
            </div>
            <pre className="p-5 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
              <code>{cs.codeSnippet.code}</code>
            </pre>
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: accentColor }} />
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Impact & Results</span>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {cs.impactMetrics.map((m, i) => (
              <div key={i} className="p-5 rounded-xl text-center" style={{ background: "oklch(0.22 0.04 250)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", color: m.color }}>{m.value}</div>
                <div className="text-xs font-semibold text-white mb-1">{m.label}</div>
                <div className="text-xs text-slate-500">{m.desc}</div>
              </div>
            ))}
          </div>

          {/* Before/After chart */}
          <div className="p-6 rounded-xl" style={{ background: "oklch(0.22 0.04 250)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Before vs. After Improvements</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={cs.impactChart} barGap={4} barCategoryGap="30%">
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#e2e8f0", fontSize: "12px" }} />
                <Bar dataKey="before" name="Before" fill="rgba(255,255,255,0.15)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="after" name="After" fill={accentColor} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.15)" }} /><span className="text-xs text-slate-500">Before</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm" style={{ background: accentColor }} /><span className="text-xs text-slate-500">After</span></div>
            </div>
          </div>
        </motion.div>



        {/* Key Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: accentColor }} />
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Key Achievements</span>
          </div>
          <div className="space-y-3">
            {cs.keyAchievements.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: accentColor }} />
                <p className="text-sm text-slate-300 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Positioning */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="p-6 rounded-xl mb-12"
          style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}>
          <p className="text-xs font-mono tracking-widest mb-2 uppercase" style={{ color: accentColor }}>How to Position This Work</p>
          <p className="text-slate-200 leading-relaxed italic">"{cs.positioning}"</p>
        </motion.div>

        {/* Back link */}
        <Link href="/">
          <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to All Case Studies
          </button>
        </Link>
      </div>
    </div>
  );
}
