# PH DevKit - Project Brief

## Working name

**PH DevKit**

## One-line pitch

Reusable components, utilities, and starter modules for building Philippine-ready web applications faster.

## Positioning

PH DevKit is a developer tools product for Filipino makers, freelancers, students, and full-stack developers building apps for the Philippine market. It provides ready-to-use frontend components, validation helpers, formatting utilities, backend examples, SQL patterns, and implementation notes for common local app requirements.

The goal is not to become a huge framework. The goal is to become a practical toolkit that saves developers time when building local business tools, SaaS apps, booking systems, dashboards, directories, school systems, finance tools, and internal admin apps.

## Target users

Primary users:

- Filipino full-stack developers
- Indie makers launching apps on App Builders PH
- Freelancers building business systems for local clients
- Students and junior developers building portfolio apps
- SaaS builders targeting Philippine users

Secondary users:

- Agencies building local business tools
- Backend developers who need reusable validation and schema examples
- React developers who need copy-paste-ready UI components

## Problem

Many Philippine-focused apps repeatedly need the same building blocks:

- Region, province, city, municipality, and barangay address forms
- Philippine peso formatting
- Philippine mobile number validation
- Local-friendly form validation
- Auth, RBAC, and audit-log patterns for admin systems
- Laravel and .NET API examples
- SQL schema examples for common app modules
- Deployment and launch checklists

Developers often rebuild these from scratch, copy old project code, or use inconsistent validation and data models.

## Solution

PH DevKit gives developers a clean starting point:

- TypeScript utility functions
- React components
- Live component playground
- Laravel validation examples
- .NET Web API examples
- SQL schema patterns
- Documentation and copy-paste snippets
- App Builders PH launch-ready product site

## MVP scope

The first launch should include only the pieces needed to be useful and credible.

### MVP features

1. Landing page
2. Live component playground
3. Philippine address selector component
4. Peso formatter utility
5. Philippine mobile number validator
6. React + TypeScript package
7. Core TypeScript utility package
8. Laravel API examples
9. .NET Web API examples
10. SQL schema examples
11. Installation documentation
12. App Builders PH listing copy and launch plan

### MVP non-goals

These are intentionally not part of v1:

- Full official PSGC dataset bundling
- Authentication SaaS dashboard
- Paid plans
- Hosted API service
- Complex address autocomplete
- NPM publishing automation
- Multi-language UI
- Full Laravel package
- Full NuGet package

## Differentiation

PH DevKit should not be another generic component library. It should be local-ready and builder-focused.

Key differentiators:

- Built for Philippine app requirements
- Useful to Filipino makers on App Builders PH
- Includes frontend and backend examples
- Practical copy-paste snippets
- Shows production-minded patterns, not just UI widgets
- Free and open source for the MVP

## Success metrics

### Product metrics

- 1 working demo site
- 1 GitHub repo
- 3 core utilities/components
- 2 backend examples
- 5 documentation pages
- 4+ screenshots for launch

### App Builders PH launch metrics

- 10+ upvotes on launch day
- 25+ upvotes in the first week
- 5+ useful comments
- 3+ real tester feedback messages
- 1-2 reviews after developers test it

### Community metrics

- 5 makers test the toolkit before launch
- 3 suggested components collected from feedback
- 2 improvements shipped after feedback

## Technical direction

### Frontend

- React
- TypeScript
- Vite
- Plain CSS for MVP

### Packages

- `@ph-devkit/core` for utility functions
- `@ph-devkit/react` for React components

### Backend examples

- Laravel validation examples
- ASP.NET Core Web API examples

### Data

- Use a small sample address dataset for MVP demos
- Add instructions for replacing sample data with a full official PSGC dataset later

## MVP user stories

As a developer, I want to:

- format Philippine peso values consistently
- validate and normalize Philippine mobile numbers
- drop a Philippine address selector into a React form
- see how to validate PH-specific fields in Laravel
- see how to validate PH-specific fields in .NET Web API
- copy SQL schema examples for user profiles and addresses
- test components in a live playground before using them

## Launch criteria

PH DevKit is ready to submit to App Builders PH when:

- The website is deployed and responsive
- The playground works without login
- The README has clear setup instructions
- The core utilities have examples
- The React component has a working demo
- Laravel and .NET examples are documented
- Screenshots are prepared
- App Builders PH listing copy is finalized
- A tester post has been shared

## Future roadmap

Possible future features:

- Full PSGC importer
- Address search and autocomplete
- React Hook Form examples
- Laravel package
- NuGet package
- NPM package publishing
- Holiday lookup helper
- Invoice number generator
- TIN/SSS/PhilHealth/Pag-IBIG format validators where appropriate
- Admin starter dashboard
- Role-based access control starter
- Audit log module
- LocalBusiness schema generator
- Deployment templates

## Product principle

Every feature must answer this question:

> Will this help a Filipino developer ship a real local app faster?

If not, it belongs in the backlog, not the MVP.
