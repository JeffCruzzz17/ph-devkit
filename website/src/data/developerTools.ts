export type DeveloperToolStatus = 'ready' | 'example' | 'planned';

export type DeveloperToolKind =
  | 'TypeScript Utility'
  | 'React Component'
  | 'Backend Example'
  | 'Database Pattern';

export type ToolHref = `/${string}` | `#${string}`;

export type DeveloperToolAction = {
  label: string;
  href: ToolHref;
  ariaLabel: string;
};

export type DeveloperTool = {
  id: string;
  slug: string;
  title: string;
  description: string;
  kind: DeveloperToolKind;
  status: DeveloperToolStatus;
  statusLabel: string;
  stack: readonly string[];
  highlights: readonly string[];
  primaryAction: DeveloperToolAction;
  secondaryAction: DeveloperToolAction;
};

export const developerTools = [
  {
    id: 'peso-formatter',
    slug: 'peso-formatter',
    title: 'Peso Formatter',
    description:
      'Format Philippine peso amounts consistently for invoices, checkouts, dashboards, admin screens, and reporting views.',
    kind: 'TypeScript Utility',
    status: 'ready',
    statusLabel: 'Ready',
    stack: ['TypeScript', 'Core package'],
    highlights: ['PHP code format', 'Peso symbol format', 'Decimal control'],
    primaryAction: {
      label: 'Open tool',
      href: '/tools/peso-formatter',
      ariaLabel: 'Open Peso Formatter tool page'
    },
    secondaryAction: {
      label: 'Try demo',
      href: '#playground',
      ariaLabel: 'Try Peso Formatter in the playground'
    }
  },
  {
    id: 'ph-mobile-validator',
    slug: 'ph-mobile-validator',
    title: 'PH Mobile Validator',
    description:
      'Validate and normalize Philippine mobile numbers for signups, CRM records, support flows, and notification systems.',
    kind: 'TypeScript Utility',
    status: 'ready',
    statusLabel: 'Ready',
    stack: ['TypeScript', 'Core package'],
    highlights: ['09xx support', '+63 support', 'Normalized output'],
    primaryAction: {
      label: 'Open tool',
      href: '/tools/ph-mobile-validator',
      ariaLabel: 'Open PH Mobile Validator tool page'
    },
    secondaryAction: {
      label: 'Try demo',
      href: '#playground',
      ariaLabel: 'Try PH Mobile Validator in the playground'
    }
  },
  {
    id: 'ph-address-selector',
    slug: 'ph-address-selector',
    title: 'PH Address Selector',
    description:
      'Drop a cascading Region, Province, City or Municipality, and Barangay selector into local-ready React forms.',
    kind: 'React Component',
    status: 'ready',
    statusLabel: 'Ready',
    stack: ['React', 'TypeScript'],
    highlights: ['Controlled value', 'Cascading selects', 'Sample PSGC-style data'],
    primaryAction: {
      label: 'Open tool',
      href: '/tools/ph-address-selector',
      ariaLabel: 'Open PH Address Selector tool page'
    },
    secondaryAction: {
      label: 'Try demo',
      href: '#playground',
      ariaLabel: 'Try PH Address Selector in the playground'
    }
  },
  {
    id: 'laravel-validation-examples',
    slug: 'laravel-validation-examples',
    title: 'Laravel Validation Examples',
    description:
      'Copy backend validation patterns for Philippine mobile numbers and local app request payloads in Laravel APIs.',
    kind: 'Backend Example',
    status: 'example',
    statusLabel: 'Example',
    stack: ['Laravel', 'PHP'],
    highlights: ['Request validation', 'Reusable rule class', 'API controller sample'],
    primaryAction: {
      label: 'Open example',
      href: '/tools/laravel-validation-examples',
      ariaLabel: 'Open Laravel Validation Examples tool page'
    },
    secondaryAction: {
      label: 'View install',
      href: '#install',
      ariaLabel: 'View Laravel examples install section'
    }
  },
  {
    id: 'dotnet-web-api-examples',
    slug: 'dotnet-web-api-examples',
    title: '.NET Web API Examples',
    description:
      'Use ASP.NET Core validation examples for local customer registration, mobile number validation, and API contracts.',
    kind: 'Backend Example',
    status: 'example',
    statusLabel: 'Example',
    stack: ['.NET', 'C#'],
    highlights: ['Validation attribute', 'Request model', 'Controller sample'],
    primaryAction: {
      label: 'Open example',
      href: '/tools/dotnet-web-api-examples',
      ariaLabel: 'Open .NET Web API Examples tool page'
    },
    secondaryAction: {
      label: 'View install',
      href: '#install',
      ariaLabel: 'View .NET examples install section'
    }
  },
  {
    id: 'sql-schema-starters',
    slug: 'sql-schema-starters',
    title: 'SQL Schema Starters',
    description:
      'Start faster with database patterns for users, customer profiles, addresses, and audit-ready local business systems.',
    kind: 'Database Pattern',
    status: 'example',
    statusLabel: 'Example',
    stack: ['SQL', 'Database design'],
    highlights: ['Address tables', 'User profile fields', 'Audit-friendly patterns'],
    primaryAction: {
      label: 'Open schema',
      href: '/tools/sql-schema-starters',
      ariaLabel: 'Open SQL Schema Starters tool page'
    },
    secondaryAction: {
      label: 'View install',
      href: '#install',
      ariaLabel: 'View SQL schema install section'
    }
  }
] as const satisfies readonly DeveloperTool[];
