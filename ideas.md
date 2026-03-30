# PT Portfolio Design Brainstorm

## Design Approach Selected: **Cyberpunk Minimalism**

### Design Philosophy
A sophisticated blend of dark, futuristic aesthetics with clean minimalism. The design emphasizes **data-driven elegance** through strategic use of cyan/teal glows, sharp typography, and asymmetric layouts. This approach reflects Phyo's expertise in data engineering while maintaining a premium, professional feel.

### Core Principles
1. **Neon Minimalism**: Leverage cyan/teal glows sparingly for maximum impact—not as decoration, but as functional highlights for CTAs, accents, and interactive elements.
2. **Dark-First Hierarchy**: Deep charcoal/navy backgrounds create contrast for glowing elements and white text, ensuring readability and visual drama.
3. **Asymmetric Layouts**: Break away from centered grids; use staggered sections, side-by-side content, and diagonal transitions to create visual interest.
4. **Data Visualization**: Incorporate subtle data-inspired graphics (grids, nodes, lines) as background textures to reinforce the data engineering narrative.

### Color Philosophy
- **Primary Background**: Deep charcoal (`#0f1419`) — professional, non-distracting, allows glows to pop
- **Accent Glow**: Cyan (`#00d4ff`) — represents innovation, energy, and forward-thinking
- **Secondary Accent**: Teal (`#00a8cc`) — adds depth and sophistication
- **Text**: Off-white (`#e8e8e8`) for body, pure white (`#ffffff`) for headings
- **Subtle Overlays**: Semi-transparent glows and shadows create depth without clutter

### Layout Paradigm
- **Hero Section**: Asymmetric split—text on left (70%), profile image with cyan glow frame on right (30%), offset vertically
- **About Section**: Two-column layout with text on left, tech stack grid on right with subtle animations
- **Projects Section**: Staggered card layout with alternating left/right alignment
- **Certifications**: Horizontal scrollable or grid with hover glow effects
- **Contact**: Centered but with asymmetric accent bars

### Signature Elements
1. **Cyan Glow Frames**: Hexagonal or rounded frames around images and CTAs with glowing borders
2. **Data Grid Background**: Subtle animated grid lines in the background of key sections (opacity ~5%)
3. **Accent Bars**: Vertical or horizontal cyan lines that separate sections and add visual rhythm

### Interaction Philosophy
- **Hover Effects**: Elements glow brighter on hover, creating a sense of activation
- **Smooth Transitions**: All interactions use easing functions (ease-out for entrance, ease-in for exit)
- **Micro-interactions**: Buttons pulse slightly, cards lift on hover, text highlights with cyan underlines
- **Scroll Animations**: Sections fade in and scale up as they enter the viewport

### Animation Guidelines
- **Entrance Animations**: Elements fade in + scale up (0.8 → 1) over 600ms with staggered delays
- **Hover States**: Glow intensity increases, shadows deepen, elements translate slightly (2-4px)
- **Transitions**: All properties use `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Pulse Effects**: CTAs and accent elements have a subtle pulse animation (opacity 0.8 → 1 over 2s, infinite)

### Typography System
- **Display Font**: Space Mono (Google Fonts) — bold, monospace, futuristic feel for headings
- **Body Font**: Inter (Google Fonts) — clean, readable, professional for body text
- **Hierarchy**:
  - H1: Space Mono, 48px, bold, all-caps for section titles
  - H2: Space Mono, 32px, bold for subsections
  - H3: Space Mono, 24px, regular for cards/items
  - Body: Inter, 16px, regular for descriptions
  - Small: Inter, 14px, regular for metadata (dates, tags)

---

## Implementation Notes
- Use Tailwind CSS for all styling with custom theme variables for cyan/teal
- Leverage framer-motion for scroll animations and hover effects
- Create reusable components for glowing frames, accent bars, and animated cards
- Ensure all text maintains sufficient contrast against dark backgrounds
- Test animations on lower-end devices to ensure smooth performance
