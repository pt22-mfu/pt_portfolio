import { ArrowUpRight, BookOpen, Github, Layers3 } from "lucide-react";
import ProjectImage from "./ProjectImage";

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
              Turns PM2.5, weather and fire data into campus air-quality
              estimates, maps and guidance that users can understand.
            </p>
            <dl className="space-y-4 leading-relaxed">
              <div>
                <dt className="font-semibold text-primary">The problem</dt>
                <dd className="text-secondary-text">
                  A PM2.5 number alone does not explain local conditions or what
                  a campus user can do.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">What I built</dt>
                <dd className="text-secondary-text">
                  As technical lead, I prepared the data, engineered features,
                  evaluated models, and built the dashboard and multilingual AI
                  advisory.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">How it works</dt>
                <dd className="text-secondary-text">
                  Align PM2.5, weather and fire data → estimate air quality with
                  ML → show maps and explain the supplied results with an LLM.
                </dd>
              </div>
            </dl>
            <details className="rounded-xl border border-primary/20 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-primary">
                Engineering decisions
              </summary>
              <div className="mt-3 space-y-3 text-sm text-secondary-text leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    Consistent inputs:
                  </strong>{" "}
                  Daily weather aggregation, wind-unit conversion and circular
                  wind direction keep live inputs aligned with the historical
                  features.
                </p>
                <p>
                  <strong className="text-foreground">
                    Measured improvement:
                  </strong>{" "}
                  Compared weather-only and weather-plus-fire models using the
                  same chronological split.
                </p>
                <p>
                  <strong className="text-foreground">
                    Separate responsibilities:
                  </strong>{" "}
                  ML estimates PM2.5; the LLM explains the supplied context.
                  Future daily outputs are scenario projections.
                </p>
              </div>
            </details>
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
              Helps a reviewer move from unusual transaction signals to the
              evidence, an AI explanation and a recorded human decision.
            </p>
            <dl className="space-y-4 leading-relaxed">
              <div>
                <dt className="font-semibold text-primary">The problem</dt>
                <dd className="text-secondary-text">
                  A flagged transaction needs a clear reason and supporting
                  evidence before a reviewer can decide what to check next.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">What I built</dt>
                <dd className="text-secondary-text">
                  Built the Java APIs, SQL persistence, rule logic, React
                  interface and Gemini integration, then deployed the demo and
                  documented the system.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">How it works</dt>
                <dd className="text-secondary-text">
                  Load fictional transactions → apply rules in Java → link
                  findings to evidence → generate an explanation → save reviewer
                  notes.
                </dd>
              </div>
            </dl>
            <details className="rounded-xl border border-primary/20 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-primary">
                Engineering decisions
              </summary>
              <div className="mt-3 space-y-3 text-sm text-secondary-text leading-relaxed">
                <p>
                  <strong className="text-foreground">Rules before AI:</strong>{" "}
                  Java computes the findings and score. The LLM explains
                  supplied evidence and possible legitimate reasons; it does not
                  decide whether fraud occurred.
                </p>
                <p>
                  <strong className="text-foreground">Human review:</strong>{" "}
                  Findings link to the relevant transactions, and reviewer notes
                  are stored separately from the automated analysis.
                </p>
                <p>
                  <strong className="text-foreground">
                    Deployed workflow:
                  </strong>{" "}
                  React and Spring Boot run together on Render, with PostgreSQL
                  persistence through Supabase. The public demo uses fictional
                  data.
                </p>
              </div>
            </details>
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
            <ProjectImage
              src={`${import.meta.env.BASE_URL}riskdesk-desktop.png`}
              title="RiskDesk transaction review workspace"
              alt="Teal-blue RiskDesk dashboard showing the account queue, review score and transaction summary"
              width={1440}
              height={1000}
            />
            <div className="text-sm leading-relaxed text-secondary-text">
              <strong className="text-foreground">Try the workflow:</strong>{" "}
              Open a demo account, follow a rule to its evidence transactions,
              then explore AI analysis and reviewer notes.
            </div>
            <p className="text-sm text-secondary-text">
              Synthetic data only. The score prioritizes review, not fraud
              probability. Saving notes requires reviewer access; AI analysis
              depends on API availability.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
