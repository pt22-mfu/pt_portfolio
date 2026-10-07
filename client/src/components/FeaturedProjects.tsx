import { ArrowUpRight, BookOpen, Github, Layers3 } from "lucide-react";

const linkStyle =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors border border-primary/35 hover:bg-primary/10 hover:border-primary";

export default function FeaturedProjects({
  onShowPm25,
}: {
  onShowPm25: () => void;
}) {
  return (
    <div className="space-y-8">
      <article id="project-pm25" className="featured-case">
        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          <div className="p-6 sm:p-8 space-y-5">
            <p className="case-eyebrow">01 / Senior project · Technical lead</p>
            <h3 className="text-2xl sm:text-3xl font-bold">
              MFU PM2.5 GeoAI Warning
            </h3>
            <p className="text-secondary-text">
              Making air-quality estimates easier to understand through
              environmental data, machine learning, maps and multilingual AI
              guidance.
            </p>
            <div className="space-y-3">
              <p>
                <strong className="text-primary">My contribution:</strong> Data
                preparation, feature engineering, model evaluation, dashboard
                development and AI advisory integration.
              </p>
              <p className="text-secondary-text">
                <strong className="text-foreground">Workflow:</strong> PM2.5 +
                weather + fire data → model estimates → map and AI advisory.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "LightGBM / XGBoost",
                "Streamlit",
                "NASA FIRMS",
                "Gemini",
              ].map(label => (
                <span className="case-tag" key={label}>
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className={`${linkStyle} bg-primary text-primary-foreground hover:bg-primary/90`}
                href="https://mfu-pm25-geoai-warning-system.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live dashboard <ArrowUpRight size={17} />
              </a>
              <a
                className={linkStyle}
                href="https://github.com/pt22-mfu/mfu-pm25-geoai-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> Source
              </a>
              <button className={linkStyle} onClick={onShowPm25}>
                <Layers3 size={17} /> Method & results
              </button>
            </div>
          </div>
          <div className="case-evidence p-6 sm:p-8 flex flex-col justify-center gap-5">
            <p className="case-eyebrow">Measured improvement</p>
            <h4 className="text-xl font-semibold text-foreground">
              Adding fire features reduced prediction error
            </h4>
            <div
              className="space-y-4"
              role="img"
              aria-label="LightGBM burning-season RMSE decreased from 7.3237 without fire features to 6.9878 with fire features; lower is better."
            >
              <div>
                <div className="flex justify-between gap-3 text-sm mb-2">
                  <span>Without fire features</span>
                  <strong>7.3237</strong>
                </div>
                <div className="h-3 rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-slate-400"
                    style={{ width: "91.55%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-3 text-sm mb-2">
                  <span>With fire features</span>
                  <strong className="text-primary">6.9878</strong>
                </div>
                <div className="h-3 rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: "87.35%" }}
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-secondary-text">
              LightGBM · RMSE in µg/m³ · January–April 2022 · 120 held-out days.
              Lower is better. Both bars use a zero baseline and the same scale.
            </p>
            <div className="border-t border-primary/20 pt-4 text-sm text-secondary-text">
              Historical model evaluation supports this comparison. Future daily
              outputs are scenario projections; the current value is a model
              estimate.
            </div>
          </div>
        </div>
      </article>

      <article id="project-riskdesk" className="featured-case">
        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          <div className="p-6 sm:p-8 space-y-5">
            <p className="case-eyebrow">
              02 / Independent project · Deployed demo
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold">
              RiskDesk — Transaction Review
            </h3>
            <p className="text-secondary-text">
              A Java-backed review workspace that connects transaction rules,
              supporting evidence, AI explanations and a human review decision.
            </p>
            <div className="space-y-3">
              <p>
                <strong className="text-primary">My contribution:</strong>{" "}
                Spring Boot APIs, PostgreSQL integration, rule logic, React
                interface, Gemini explanations, deployment and technical
                documentation.
              </p>
              <p className="text-secondary-text">
                <strong className="text-foreground">Workflow:</strong> Fictional
                transactions → rule findings → evidence-grounded explanation →
                reviewer notes.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Java / Spring Boot",
                "React / TypeScript",
                "PostgreSQL / Supabase",
                "Gemini",
                "Docker / Render",
              ].map(label => (
                <span className="case-tag" key={label}>
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className={`${linkStyle} bg-primary text-primary-foreground hover:bg-primary/90`}
                href="https://transaction-risk-review.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo <ArrowUpRight size={17} />
              </a>
              <a
                className={linkStyle}
                href="https://github.com/pt22-mfu/transaction-risk-review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> Source
              </a>
              <a
                className={linkStyle}
                href="https://github.com/pt22-mfu/transaction-risk-review/blob/main/docs/RiskDesk_Technical_Documentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen size={17} /> Documentation
              </a>
            </div>
          </div>
          <div className="case-evidence p-6 sm:p-8 flex flex-col justify-center gap-5">
            <p className="case-eyebrow">Evidence before explanation</p>
            <a
              href="https://transaction-risk-review.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-primary/25 overflow-hidden"
              aria-label="Open RiskDesk live demo"
            >
              <img
                src={`${import.meta.env.BASE_URL}riskdesk-desktop.png`}
                alt="RiskDesk transaction review dashboard with an account queue, rule findings and reviewer controls"
                className="w-full h-auto"
                loading="lazy"
                width={1440}
                height={1000}
              />
            </a>
            <p className="text-sm text-secondary-text">
              Synthetic data only. The heuristic score prioritizes review; it is
              not a fraud probability. AI explanations support a human decision.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
