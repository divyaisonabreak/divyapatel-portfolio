# Portfolio Website

## Overview

This is a modern portfolio website showcasing web development projects, skills, and professional experience. Built with React and Express, it features a clean, minimalist design inspired by Linear's typography and Awwwards' visual boldness. The site includes a home page with hero section, an about page with timeline and skills, a projects showcase with filtering, and a contact form with backend integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18 with TypeScript for type safety and modern component patterns
- Wouter for lightweight client-side routing (alternative to React Router)
- Vite as the build tool for fast development and optimized production builds

**UI Component System**
- Shadcn UI component library (New York style) for consistent, accessible components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants

**State Management**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod resolvers for form validation
- No global client state - relies on server state and local component state

**Design System**
- Typography: Inter for headings/UI, Source Serif 4 for body text
- Custom color system with HSL variables supporting light/dark themes
- Spacing primitives using Tailwind's 4px base scale
- Elevation system using subtle shadows and backdrop blur effects

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for type-safe API development
- Dual-mode server setup: development (with Vite middleware) and production (static file serving)
- Middleware for JSON parsing, URL encoding, and request/response logging

**API Design**
- RESTful endpoints under `/api` namespace
- Contact form submission endpoint (`POST /api/contact`)
- Admin contact messages retrieval (`GET /api/contact/messages`)
- Validation using Zod schemas shared between frontend and backend

**Data Storage Strategy**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- In-memory storage implementation (`MemStorage`) for development/testing
- Database schema defined in shared directory for type consistency
- Tables: users (authentication ready), contact_messages (form submissions)

**Development vs Production**
- Development: Vite dev server integrated via middleware with HMR
- Production: Pre-built static assets served from `dist/public`
- Environment-aware logging and error handling

### Data Layer

**Database Schema**
- `users` table: id (UUID), username (unique), password (for future authentication)
- `contact_messages` table: id (UUID), name, email, subject, message, createdAt timestamp
- Drizzle migrations stored in `/migrations` directory
- Schema definitions use `drizzle-zod` for automatic Zod schema generation

**Type Safety**
- Shared types between client and server via `/shared/schema.ts`
- TypeScript path aliases for clean imports (@/, @shared/, @assets/)
- Zod schemas for runtime validation matching database schema

## External Dependencies

**Third-Party Services**
- Neon Database: Serverless PostgreSQL provider (configured but can be replaced)
- Google Fonts: Inter, Source Serif 4, DM Sans, Fira Code, Geist Mono, Architects Daughter
- Replit-specific plugins (only in development): cartographer, dev-banner, runtime-error-modal

**UI Libraries**
- Radix UI: Complete suite of accessible component primitives (20+ packages)
- Lucide React: Icon library for consistent iconography
- Embla Carousel: Touch-friendly carousel component
- CMDK: Command palette component
- Vaul: Drawer component for mobile interactions

**Development Tools**
- Drizzle Kit: Database migrations and schema management
- ESBuild: Production server bundling
- PostCSS with Autoprefixer: CSS processing
- TSX: TypeScript execution for development server

**Form & Validation**
- React Hook Form: Performant form state management
- Zod: Schema validation for forms and API data
- Hookform Resolvers: Bridges Zod schemas with React Hook Form