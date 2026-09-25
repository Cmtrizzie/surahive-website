# SuraHive AI Website

Official company website for SuraHive AI LTD - a technology company building intelligent software, AI systems and digital platforms.

## Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Fonts**: Inter (body), JetBrains Mono (code)
- **Build**: Turbopack

## Development

### Prerequisites

- Node.js 18+ 
- npm or bun

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── home/        # Homepage sections
│   ├── layout/      # Header, Footer, shared layout
│   ├── products/    # Product-related components
│   ├── ui/          # shadcn/ui components
│   └── visuals/     # Visual elements and animations
├── hooks/           # Custom React hooks
└── lib/             # Utilities and configuration
```

## Configuration

### Site Configuration

Central site configuration is in `src/lib/site.ts`:
- Brand name and legal entity
- Domain URLs
- Navigation structure
- Contact information
- Brand asset paths

### Content Configuration

Marketing content is in `src/lib/content.ts`:
- Four capability areas
- Responsible technology principles

## Build and Deployment

### Production Build

```bash
npm run build
```

The build outputs to `.next/` directory with standalone output mode.

### Static Generation

All pages are statically generated at build time for optimal performance:
- Homepage
- Products
- Platform
- Developers
- About
- Responsible AI
- Contact
- Privacy Policy
- Terms of Use

### SEO

- XML sitemap: `/sitemap.xml`
- robots.txt: `/robots.txt`
- OpenGraph tags
- Twitter cards
- Structured data (JSON-LD)

## Environment Variables

The website currently uses minimal environment configuration. Most configuration is in `src/lib/site.ts`.

## Browser Support

Modern browsers with support for:
- ES2017+
- CSS Grid
- CSS Custom Properties
- Intersection Observer

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Skip-to-content link
- Focus indicators
- Reduced motion support

## Performance

- Static generation for all pages
- Image optimization
- Font optimization
- CSS-in-JS with Tailwind
- Code splitting
- Tree shaking

## License

Copyright © 2026 SuraHive AI LTD. All rights reserved.
