import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { featuredProjects } from "@/data/projects";

const interests = [
  "Decision Support",
  "Machine Learning",
  "RAG",
  "AI Agents",
  "Recommendation Systems",
  "Data Products",
  "LLM Evaluation",
  "SaaS"
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <section className="border-b border-white/10 pb-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-2xl font-medium text-white">
            BÖ
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">İbrahim Berkay Öz</h1>
            <p className="mt-3 text-lg text-muted">Data Scientist · AI Product Builder</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/45"><MapPin size={14} /> Turkey</p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm">
              <a className="simple-link" href="https://github.com/Iberkayo" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a className="simple-link" href="https://linkedin.com/in/ibrahim-berkay-oz" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a className="simple-link" href="mailto:ibrahimberkayoz@gmail.com"><Mail size={16} /> Email</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <h2 className="simple-heading">Biography</h2>
        <div className="mt-5 space-y-4 text-[17px] leading-8 text-muted">
          <p>
            I am a Data Scientist focused on building practical AI systems. My work spans
            machine learning, retrieval-augmented generation, AI agents, analytics, and
            product development.
          </p>
          <p>
            I enjoy taking a problem from raw data and an unclear business need to a
            working system with an API, interface, evaluation process, and a clear role in
            the user&apos;s workflow.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="simple-heading">Interests</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {interests.map((interest) => <span className="simple-tag" key={interest}>{interest}</span>)}
        </div>
      </section>

      <section id="work" className="content-section">
        <div className="flex items-end justify-between gap-5">
          <h2 className="simple-heading">Selected Projects</h2>
          <Link className="text-sm text-muted hover:text-white" href="/projects/">View all</Link>
        </div>
        <div className="mt-3 divide-y divide-white/10">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="py-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-xl font-medium text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-lime/80">{project.eyebrow}</p>
                </div>
                {project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="text-white/35 hover:text-white"><ArrowUpRight size={18} /></a>}
              </div>
              <p className="mt-4 leading-7 text-muted">{project.approach}</p>
              <p className="mt-3 text-sm text-white/40">{project.technologies.slice(0, 5).join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2 className="simple-heading">How I Work</h2>
        <ul className="mt-5 space-y-3 text-[17px] leading-7 text-muted">
          <li>Start with the decision or workflow that needs to improve.</li>
          <li>Build the smallest useful system around reliable data and measurable outputs.</li>
          <li>Keep humans in control when context, risk, or judgment matters.</li>
          <li>Evaluate the complete product, not only the model.</li>
        </ul>
      </section>

      <section id="contact" className="content-section border-b-0">
        <h2 className="simple-heading">Contact</h2>
        <p className="mt-5 leading-7 text-muted">Feel free to reach out about AI products, data science, or an interesting problem.</p>
        <a className="mt-4 inline-block text-white underline decoration-white/25 underline-offset-4 hover:decoration-lime" href="mailto:ibrahimberkayoz@gmail.com">ibrahimberkayoz@gmail.com</a>
      </section>
    </div>
  );
}
