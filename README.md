# � Project Structure

```bash
├── app/                    # Next.js App Router core
│   ├── globals.css        # Global design system & Tailwind layers
│   ├── layout.tsx         # Root layout with Theme & Animation providers
│   └── page.tsx           # Main entry point (Assembles all sections)
├── components/             # Component Architecture
│   ├── providers/         # Context providers (Theme, etc.)
│   ├── sections/          # Page-level sections
│   │   ├── Hero.tsx       # Cinematic split-typography header
│   │   ├── About.tsx      # Personal bio and story
│   │   ├── Experience.tsx # Professional timeline
│   │   ├── Skills.tsx     # Technical stack visualization
│   │   ├── Projects.tsx   # Interactive project showcase
│   │   ├── Education.tsx  # Academic background
│   │   ├── Certifications.tsx # Professional certifications
│   │   ├── Testimonials.tsx # Client and peer feedback
│   │   ├── Contact.tsx    # Lead generation form
│   │   └── Footer.tsx     # Branding & social links
│   └── ui/                # Atom-level reusable UI components
│       ├── Button.tsx     # Premium rounded-pill buttons
│       ├── MobileNavbar.tsx # Floating mobile navigation pill
│       ├── TopBar.tsx     # Desktop fixed navigation
│       └── Card.tsx       # Standardized content containers
├── lib/                    # Logic & Configuration
│   ├── constants.ts       # Central data repository for the portfolio
│   └── utils.ts           # Utility functions (cn, etc.)
├── public/                 # Static Assets
│   └── assets/            # Project images, logos, and certificates
└── types/                 # Global Type Definitions
```# Portfolio
