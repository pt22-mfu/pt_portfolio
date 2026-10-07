import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import ProjectImage from "./ProjectImage";

const action =
  "inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors";
const projects = [
  {
    title: "AI Vision QC Inspector",
    label: "Computer vision · Deployed demo",
    summary:
      "Classifies part images as defective or OK, then turns the model output into a readable AI-generated quality report.",
    result:
      "Recorded training run: 89.4% validation accuracy after 5 epochs, using 6,633 training images. This is a validation result, not a factory accuracy guarantee.",
    tech: ["Python", "TensorFlow / MobileNetV2", "Gemini", "Streamlit"],
    source: "https://github.com/pt22-mfu/ai-vision-qc-inspector",
    live: "https://ai-vision-qc-inspector-by-pt.streamlit.app/",
  },
  {
    title: "Chiang Mai Tri-Node PM2.5",
    label: "Hackathon prototype · Geospatial analysis",
    summary:
      "Explores air-quality risk across Chiang Mai City, Doi Suthep and Mae Rim using fire hotspots, weather, maps and AI guidance.",
    result:
      "A separate exploratory prototype from my MFU senior project, with zone-based views and a what-if advisory workflow.",
    tech: ["Python", "XGBoost", "NASA FIRMS", "Streamlit / Gemini"],
    source: "https://github.com/pt22-mfu/chiangmai-trinode-pm25",
    live: "https://chiangmai-trinode-zone-pm25-prediction.streamlit.app/",
  },
  {
    title: "Clinical Scenario & AI Feedback",
    label: "MLii work · UI prototype and system design",
    summary:
      "A nursing-learning prototype designed around 12 patient scenarios across 6 body systems, with a planned hybrid rule-based and LLM feedback approach.",
    result:
      "Completed the requirements, UI prototype and system architecture. Full backend integration remains pending.",
    tech: [
      "Next.js / TypeScript",
      "Tailwind CSS",
      "PostgreSQL / Supabase",
      "Gemini",
    ],
    source: "https://github.com/pt22-mfu/nursing-clinical-scenario-ai-feedback",
    live: null,
  },
];

export default function SupportingProjects({
  onShowTriNode,
}: {
  onShowTriNode: () => void;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="flex flex-col rounded-xl border border-border-subtle bg-card p-5 sm:p-6"
        >
          <p className="case-eyebrow mb-3">{project.label}</p>
          <h4 className="text-xl font-bold leading-snug mb-3">
            {project.title}
          </h4>
          <p className="text-secondary-text leading-relaxed">
            {project.summary}
          </p>
          <p className="mt-4 text-sm text-secondary-text leading-relaxed border-l-2 border-primary/40 pl-3">
            {project.result}
          </p>
          <div className="flex flex-wrap gap-2 my-5">
            {project.tech.map(tech => (
              <span className="case-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          {index === 2 && (
            <details className="mb-5 rounded-lg border border-border-subtle p-3">
              <summary className="cursor-pointer text-sm font-semibold text-primary">
                View prototype screens
              </summary>
              <div className="space-y-3 mt-3">
                {[
                  "Clinical scenario interface",
                  "Patient assessment",
                  "AI feedback interface",
                ].map((title, i) => (
                  <ProjectImage
                    key={title}
                    title={title}
                    src={`${import.meta.env.BASE_URL}screenshot${i + 1}.png`}
                    alt={`${title} in the nursing UI prototype`}
                  />
                ))}
              </div>
            </details>
          )}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.live && (
              <a
                className={action}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo <ArrowUpRight size={15} />
              </a>
            )}
            <a
              className={action}
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} /> GitHub
            </a>
            {index === 1 && (
              <button className={action} onClick={onShowTriNode}>
                <Layers3 size={15} /> Details
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
