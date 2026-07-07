# PH DevKit

Reusable components, utilities, and starter modules for building Philippine-ready web applications faster.

## What is included in the MVP?

- `@ph-devkit/core` - TypeScript utilities
  - Philippine peso formatter
  - Philippine mobile number validator and normalizer
- `@ph-devkit/react` - React components
  - Philippine address selector
- `website` - Vite + React product site and playground
- `examples` - Laravel and .NET Web API examples
- `docs` - Installation and usage guides

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

```bash
npm install
npm run build
npm run dev
```

The default dev command starts the website playground.

```bash
npm run dev --workspace website
```

## Packages

### Core utilities

```ts
import { formatPeso, validatePHMobile } from '@ph-devkit/core';

formatPeso(1500); // "PHP 1,500.00"
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
