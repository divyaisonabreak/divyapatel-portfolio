# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio leaders - Linear's typography and minimalism, Awwwards' visual boldness, and Dribbble's project showcases. This portfolio emphasizes visual storytelling with generous whitespace and impactful project presentations.

## Typography System
- **Primary Font**: Inter (Google Fonts) - Headings and UI elements
- **Secondary Font**: Source Serif 4 (Google Fonts) - Body text and descriptions
- **Scale**:
  - Hero headlines: text-6xl to text-8xl (font-bold)
  - Page titles: text-5xl (font-bold)
  - Section headings: text-3xl (font-semibold)
  - Subheadings: text-xl (font-medium)
  - Body text: text-lg (font-normal, leading-relaxed)
  - Captions: text-sm (font-light)

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections
- Grid gaps: gap-8 for cards, gap-12 for larger sections

## Page-Specific Layouts

### Home Page
**Hero Section** (90vh):
- Full-width hero with large background image
- Centered content overlay with blurred button backgrounds
- Large display name (text-7xl md:text-8xl)
- One-line tagline (text-xl md:text-2xl)
- Single primary CTA with backdrop-blur-md background
- Subtle scroll indicator at bottom

**Featured Work Preview**:
- 2-column asymmetric grid (1 large + 2 stacked smaller)
- Hover-lift effect on project cards
- Project titles, brief descriptions, and "View All" CTA

**Brief About Section**:
- Single column, centered text (max-w-3xl)
- Professional headshot (circular, w-32 h-32)
- 3-4 sentences introduction
- Skills badges in horizontal flex layout

### About Page
**Narrative Introduction**:
- Two-column layout (md:grid-cols-2)
- Left: Professional photo (portrait orientation, rounded-lg)
- Right: Story-driven bio (3-4 paragraphs)

**Skills & Experience Grid**:
- 3-column grid (grid-cols-1 md:grid-cols-3)
- Category cards with icon headers
- Skill tags with pill-style badges

**Timeline Component**:
- Vertical timeline with connecting line
- Alternating left-right content blocks
- Experience/education entries with dates, titles, descriptions

### Projects Page
**Project Showcase**:
- Masonry-style grid using 2-3 columns (varies by viewport)
- Each project card includes:
  - Full-width project screenshot/mockup
  - Overlay gradient on hover revealing details
  - Project title (text-2xl)
  - Tech stack tags
  - Brief description (2-3 sentences)
  - Live demo + GitHub links
- Filter buttons at top (All, Web, Mobile, Design)

### Contact Page
**Split Layout** (md:grid-cols-2):
- Left column: Contact form with floating labels
  - Fields: Name, Email, Subject, Message (textarea)
  - Submit button with loading state
  - Response time indicator
- Right column: Contact information card
  - Email, phone (if applicable)
  - Social media links (icons from Heroicons)
  - Availability status
  - Optional location/timezone

## Navigation
**Header**:
- Fixed top navigation with backdrop-blur on scroll
- Logo/name on left
- Menu items on right (horizontal on desktop, hamburger on mobile)
- Active page indicator (underline or pill background)
- Smooth scroll behavior

**Footer**:
- Centered single-column layout
- Social media icon links (gap-6)
- Copyright text (text-sm)
- "Back to top" button

## Component Library
- **Cards**: rounded-xl shadow-lg hover:shadow-2xl transition
- **Buttons**: px-8 py-3 rounded-full font-medium with backdrop-blur-md when on images
- **Form Inputs**: border-2 rounded-lg px-4 py-3 with focus states
- **Icons**: Heroicons (outline style, w-6 h-6)
- **Badges/Tags**: px-3 py-1 rounded-full text-sm

## Images
**Home Hero**: Professional workspace or abstract geometric pattern (1920x1080, covers full viewport width)
**About Page**: Professional headshot/portrait (800x1000, vertical orientation)
**Projects**: 3-5 high-quality project mockups/screenshots per project (1200x800 landscape)
**Contact Page**: Optional subtle background pattern or office environment

## Animations
- Page transitions: Fade-in on route change (300ms)
- Scroll-triggered fade-ups for sections (use intersection observer)
- Card hover lifts: translate-y-2 with shadow expansion
- No autoplay animations - all user-triggered