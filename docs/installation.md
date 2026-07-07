# Installation

## MVP local setup

```bash
npm install
npm run build
npm run dev
```

## Use the core utilities

```bash
npm install @ph-devkit/core
```

```ts
import { formatPeso, validatePHMobile } from '@ph-devkit/core';

formatPeso(1500);
validatePHMobile('09171234567');
```

## Use the React components

```bash
npm install @ph-devkit/react @ph-devkit/core
```

```tsx
import { PHAddressSelector } from '@ph-devkit/react';
```

## Production note

The sample address data is only for demos. Use a complete, verified PSGC dataset before production use.
