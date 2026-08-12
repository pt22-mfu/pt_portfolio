# Enterprise Portfolio Architecture & Deployment Guide

## Executive Summary
This document provides a comprehensive technical blueprint of the **pt_portfolio** web application designed for Phyo Thant Kyaw, Enterprise Data & AI Engineer. The architecture adheres to professional enterprise standards, featuring a high-performance React 19 and Tailwind CSS 4 frontend, strict WCAG-aligned accessibility, responsive multi-device typography, and secure media integration via Manus cloud storage.

---

## Technical Stack & Dependencies

The application is built using a modern, lightweight static frontend stack optimized for ultra-fast load times and robust maintainability without unnecessary server-side bottlenecks.

| Layer | Technology / Framework | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 19 (TypeScript) | Component-driven UI development and state management |
| **Styling & Design System** | Tailwind CSS 4 | Utility-first responsive styling with custom dark navy (`#050B14`) and cyan (`#22D3EE`) tokens |
| **Icons & Visuals** | Lucide React | Professional, scalable SVG icons replacing legacy emojis |
| **Routing** | Wouter | Lightweight client-side routing |
| **Build Tooling** | Vite 7.1.9 | High-performance bundling and lightning-fast HMR |
| **Hosting & Assets** | Manus Cloud / S3 & GitHub | Secure asset hosting and automated version control sync |

---

## Project Structure & Architecture

```
pt_portfolio/
├── client/
│   ├── public/              # Static favicon and robot configuration
│   ├── src/
│   │   ├── components/      # Modular UI components (Modals, cards, navigation)
│   │   ├── pages/           # Page-level views (Home.tsx)
│   │   ├── App.tsx          # Root router and layout wrapper
│   │   ├── main.tsx         # React DOM entry point
│   │   └── index.css        # Design tokens, custom variables, and animations
│   ├── index.html           # HTML root with Google Fonts integration
│   └── vite.config.ts       # Vite configuration
├── shared/                  # Type compatibility stubs
├── package.json             # Project dependencies and scripts
└── DELEGATION.md            # Architecture & Deployment Documentation
```

---

## Local Development & Build Commands

To run or build the project locally in any Node.js environment:

```bash
# Install dependencies
pnpm install

# Start development server with live reload
pnpm run dev

# Build production bundle
pnpm run build
```

---

## GitHub Deployment & Synchronization

The repository is fully synchronized with the user's GitHub repository (`pt22-mfu/pt_portfolio`). To push updates manually via GitHub CLI or git:

```bash
# Verify remote status
git remote -v

# Push latest commits to GitHub
git push user_github main
```
