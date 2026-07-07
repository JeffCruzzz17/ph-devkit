# PH DevKit

Reusable components, utilities, and starter modules for building Philippine-ready web applications faster.

PH DevKit helps Filipino developers ship local-ready apps faster with reusable React components, TypeScript utilities, backend examples, SQL schema patterns, and practical documentation for Philippine web applications.

## What is included in the MVP?

- `@ph-devkit/core` - TypeScript utilities
  - Philippine peso formatter
  - Philippine mobile number validator and normalizer
- `@ph-devkit/react` - React components
  - Philippine address selector
- `website` - Vite + React product site and live playground
- `examples` - Laravel and .NET Web API examples
- `docs` - Installation and usage guides
- `data` - Small sample PSGC-style address dataset for demos

## Monorepo structure

```text
ph-devkit/
├─ PROJECT_BRIEF.md
├─ README.md
├─ ROADMAP.md
├─ LAUNCH_PLAN.md
├─ appbuildersph-listing.md
├─ website/
├─ packages/
│  ├─ core/
│  └─ react/
├─ examples/
│  ├─ react-vite-demo/
│  ├─ laravel-api/
│  └─ dotnet-api/
├─ data/
└─ docs/
```

## Getting started

Install dependencies from the lockfile:

```bash
npm ci
```

Run the full local quality gate:

```bash
npm run test
npm run typecheck
npm run build
npm audit
```

Start the website playground:

```bash
npm run dev
```

The default dev command starts the Vite website playground.

```bash
npm run dev --workspace website
```

## Quality checks

PH DevKit currently uses:

- Vitest for package tests
- React Testing Library for component tests
- TypeScript strict mode
- Vite production build validation
- npm audit for dependency security checks

Run everything before submitting changes:

```bash
npm run test
npm run typecheck
npm run build
npm audit
```

## Packages

### Core utilities

```ts
import { formatPeso, validatePHMobile } from '@ph-devkit/core';

formatPeso(1500); // "PHP 1,500.00"
formatPeso(1500, { symbol: true }); // "₱1,500.00"

validatePHMobile('09171234567');
```

### React components

```tsx
import { PHAddressSelector } from '@ph-devkit/react';
```

## MVP note

The address dataset in this repo is a small sample for demos only. Replace it with a complete, verified PSGC dataset before using the address selector in production.

## Launch goal

Submit PH DevKit to App Builders PH under **Developer Tools** as a free toolkit for Filipino developers and makers.
