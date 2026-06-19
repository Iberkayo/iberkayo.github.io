import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Box,
  BrainCircuit,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Search,
  Target,
  TrendingUp
} from "lucide-react";
import { projects } from "@/data/projects";

const flagshipSlugs = [
  "edutarget",
  "decisioncore-ai",
  "spare-parts-recommendation",
  "customer-service-copilot"
];

const flagshipProjects = flagshipSlugs.map((slug) => projects.find((project) => project.slug === slug)!);

const metrics = [
  ["10+", "AI & Data Projects", BarChart3],
  [null, "End-to-End Product Builder", Layers3],
  [null, "Decision Support Systems", Target],
  [null, "Production Deployments", Box]
] as const;

const process = [
  ["01", "Understand the Problem", "I study the domain, users, constraints, and the decision that needs to improve.", Search],
  ["02", "Model the Decision", "I connect data, assumptions, uncertainty, and evaluation criteria to the decision.", Database],
  ["03", "Build the System", "I create the pipeline, intelligence layer, API, and interface as one working product.", Box],
  ["04", "Measure Outcomes", "I evaluate reliability and whether the system creates a useful change in practice.", TrendingUp]
] as const;

const stack = ["Python", "SQL", "FastAPI", "PostgreSQL", "React", "Pandas", "scikit-learn", "XGBoost", "LightGBM", "LangGraph", "Qdrant", "OpenAI", "Docker"];

export default function HomePage() {
  return (
    <>
      <section id="home" className="section-shell pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="editorial-grid items-center">
          <div>
            <p className="eyebrow">Data Scientist · AI Product Builder</p>
            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3.3rem,7vw,6.7rem)] font-medium leading-[0.96] tracking-[-0.055em] text-ink">
              Turning complex data into <span className="text-accent">better decisions.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              I build machine learning systems, retrieval applications, recommendation engines and decision-support products that help people make better decisions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button-primary" href="#projects">View Projects <ArrowRight size={16} /></a>
              <a className="button-secondary" href="#approach">My Approach</a>
            </div>
          </div>

          <DecisionMap />
        </div>

        <div className="mt-16 grid border-y border-rule sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label, Icon], index) => (
            <div key={label} className={`flex items-center gap-4 py-5 ${index > 0 ? "sm:border-l sm:border-rule sm:pl-6" : ""}`}>
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-rule bg-white text-accent"><Icon size={18} strokeWidth={1.6} /></span>
              <div>{value && <p className="font-mono text-xs font-semibold text-accent">{value}</p>}<p className={`${value ? "mt-1" : ""} text-sm font-medium text-ink`}>{label}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-rule bg-white">
        <div className="section-shell py-20 sm:py-24">
          <div className="section-heading-row">
            <div><p className="eyebrow">Selected work</p><h2 className="section-title">Projects with real impact</h2></div>
            <Link className="text-link" href="/projects/">View all projects <ArrowRight size={15} /></Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {flagshipProjects.map((project, index) => (
              <article key={project.slug} className="case-card">
                <div className="flex items-center justify-between">
                  <span className="case-icon">{index === 0 ? <Target /> : index === 1 ? <BrainCircuit /> : index === 2 ? <Box /> : <BarChart3 />}</span>
                  <span className="font-mono text-[10px] text-faint">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold leading-tight text-ink">{project.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">{project.eyebrow}</p>

                <dl className="mt-7 space-y-5 text-sm leading-6">
                  <div><dt className="case-label">Problem</dt><dd className="mt-1 text-muted">{project.problem}</dd></div>
                  <div><dt className="case-label">Approach</dt><dd className="mt-1 text-muted">{project.approach}</dd></div>
                  <div><dt className="case-label">Outcome</dt><dd className="mt-1 text-muted">{project.impact}</dd></div>
                </dl>

                <p className="mt-auto border-t border-rule pt-5 text-xs text-faint">{project.technologies.slice(0, 4).join(" · ")}</p>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline" href={`/projects/#${project.slug}`}>Read Case Study <ArrowRight size={14} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section-shell py-20 sm:py-24">
        <p className="eyebrow">How I work</p>
        <h2 className="section-title">From problem to measurable outcome</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-4 lg:gap-0">
          {process.map(([number, title, copy, Icon], index) => (
            <div key={title} className="process-step">
              <div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-accent">{number}</span>{index < process.length - 1 && <ArrowRight className="hidden text-faint lg:block" size={22} strokeWidth={1.2} />}</div>
              <span className="mt-5 grid h-11 w-11 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-accent"><Icon size={19} strokeWidth={1.6} /></span>
              <h3 className="mt-6 font-serif text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-rule bg-[#F6F5F1]">
        <div className="section-shell grid gap-12 py-16 md:grid-cols-[1fr_1.25fr_0.8fr] md:divide-x md:divide-rule">
          <div className="md:pr-10">
            <p className="eyebrow">About</p>
            <p className="mt-5 leading-7 text-muted">I&apos;m a Data Scientist who builds practical AI products across machine learning, RAG systems, analytics, and decision support. I care about clear problem framing, reliable evaluation, and systems that people can actually use.</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-ink"><MapPin size={15} className="text-accent" /> Izmir, Turkey</div>
          </div>
          <div className="md:px-10">
            <p className="eyebrow">Tools & technologies</p>
            <div className="mt-5 flex flex-wrap gap-2">{stack.map((item) => <span className="stack-chip" key={item}>{item}</span>)}</div>
          </div>
          <div id="contact" className="md:pl-10">
            <p className="eyebrow">Connect</p>
            <p className="mt-5 text-sm leading-6 text-muted">Open to thoughtful conversations about AI products, data, and decision-support systems.</p>
            <div className="mt-6 space-y-3 text-sm">
              <a className="contact-link" href="https://github.com/Iberkayo" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a className="contact-link" href="https://linkedin.com/in/ibrahim-berkay-oz" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a className="contact-link" href="mailto:ibrahimberkayoz@gmail.com"><Mail size={16} /> Email</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DecisionMap() {
  return (
    <div className="decision-map" aria-label="Core expertise centered on better decisions">
      <div className="map-node map-top"><strong>Machine Learning</strong><span>Forecasting · Classification<br />Recommendation</span></div>
      <div className="map-node map-left"><strong>Data</strong><span>Operational Data<br />Documents · Analytics</span></div>
      <div className="map-center"><span>Better</span><strong>Decisions</strong></div>
      <div className="map-node map-right"><strong>AI Systems</strong><span>RAG · Agents<br />LLM Applications</span></div>
      <div className="map-node map-bottom"><strong>Products</strong><span>Dashboards · Decision Support<br />SaaS Platforms</span></div>
      <span className="map-line line-top" /><span className="map-line line-left" /><span className="map-line line-right" /><span className="map-line line-bottom" />
    </div>
  );
}
