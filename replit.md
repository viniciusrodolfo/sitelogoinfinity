# Logo Infinity - Portuguese Landing Page System

## Overview

This is a full-stack web application built for "Logo Infinity," a Portuguese language landing page system focused on logo design education. The application features a React-based frontend with modern UI components and an Express.js backend with PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Animation**: Framer Motion for smooth transitions and animations

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **API Style**: RESTful API design with `/api` prefix
- **Development**: Hot reloading with tsx for TypeScript execution

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend application
- `shared/` - Shared TypeScript types and database schemas
- `attached_assets/` - Static assets and images

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Database migrations managed in `migrations/` directory
- **Connection**: Neon Database serverless connection via `@neondatabase/serverless`

### Authentication System
- Basic user schema with username/password fields
- Zod validation schemas for type safety
- Session-based authentication (infrastructure ready)

### UI Component System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Theme**: Dark theme with custom color palette (primary green: `hsl(160, 84%, 39%)`)
- **Typography**: Inter and Space Grotesk fonts
- **Icons**: Lucide React icon library

### Storage Interface
- Abstracted storage interface (`IStorage`) for database operations
- In-memory storage implementation for development (`MemStorage`)
- Prepared for PostgreSQL implementation via Drizzle ORM

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js routes handle requests at `/api/*` endpoints
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL database with Drizzle ORM for type-safe queries
5. **Response**: JSON responses sent back through Express middleware

## External Dependencies

### Database & ORM
- PostgreSQL database (configured for Neon Database)
- Drizzle ORM for database operations
- Drizzle Kit for migrations and schema management

### Frontend Libraries
- TanStack Query for server state management
- Wouter for lightweight routing
- Framer Motion for animations
- date-fns for date manipulation
- Various Radix UI primitives for accessible components

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- Tailwind CSS for styling
- ESBuild for backend bundling

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20
- **Database**: PostgreSQL 16
- **Package Manager**: npm
- **Dev Server**: Runs on port 5000 with hot reloading

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment**: Configured for Replit's autoscale deployment target
- **Port Mapping**: Internal port 5000 mapped to external port 80

### Build Process
1. `npm run build` - Builds both frontend and backend
2. Frontend assets compiled and optimized
3. Backend TypeScript compiled to ESM format
4. `npm run start` - Runs production server

## Changelog

- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.