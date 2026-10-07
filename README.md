# PT Portfolio

Personal portfolio website for Phyo Thant Kyaw — a Computer Engineering student and
software, data and AI project builder. Dark-themed, cyan/teal accent design showcasing projects,
skills, certifications, and experience.

**[Live Site →](https://pt22-mfu.github.io/pt_portfolio/)**

![Status](https://img.shields.io/badge/status-live-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_19-000000?logo=react&logoColor=white)

## Tech Stack

| Layer      | Tools                                   |
| ---------- | --------------------------------------- |
| Framework  | React 19 (TypeScript)                   |
| Styling    | Tailwind CSS 4                          |
| Routing    | Wouter                                  |
| Build tool | Vite 7                                  |
| Icons      | Lucide React                            |
| Hosting    | GitHub Pages (via GitHub Actions CI/CD) |

## About this project

This site was built with AI-assisted development (Manus) — directing the design
system, content structure, and feature requests, then iterating on the result.
Deployment, dependency debugging, and asset migration to GitHub Pages were done
hands-on, including resolving Vite base-path configuration and CI/CD setup via
GitHub Actions.

## Structure

```
pt_portfolio/
├── client/
│   ├── public/          # Static assets (resumes, images)
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/        # Page views (Home.tsx)
│   │   └── App.tsx
│   └── index.html
├── .github/workflows/    # CI/CD deployment config
└── DELEGATION.md         # Architecture & deployment notes
```

## Run locally

```bash
pnpm install
pnpm run dev
```

## Author

**Phyo Thant Kyaw (PT)** — Computer Engineering, Mae Fah Luang University
[GitHub](https://github.com/pt22-mfu) · [LinkedIn](https://www.linkedin.com/in/phyo-thant-kyaw-2816332a4/)

## Featured work (October 2026)

- **MFU PM2.5 GeoAI Warning** — historical data preparation, controlled fire-feature evaluation, campus dashboard and multilingual advisory.
- **RiskDesk** — Java/Spring Boot APIs, React/TypeScript interface, PostgreSQL, rule evidence, optional AI explanations and human review. Uses synthetic data.

Project cards link directly to live applications and source repositories; RiskDesk also links to its technical PDF. The site supports mobile section navigation and keyboard-accessible project details.


## Portfolio update - 07 October 2026

Main project stories follow problem, contribution, workflow and evidence. Additional prototypes use compact cards with explicit status labels. RiskDesk and nursing screenshots can be enlarged with keyboard-accessible dialogs. The downloadable CVs include RiskDesk and distinguish model estimates, historical validation and unfinished prototype work. Visa/work-permit eligibility is not asserted.
