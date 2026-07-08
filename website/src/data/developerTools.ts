export type DeveloperToolStatus = 'ready' | 'example' | 'planned';

export type DeveloperToolKind =
  | 'TypeScript Utility'
  | 'React Component'
  | 'Backend Example'
  | 'Database Pattern';

export type DeveloperToolAction = {
  label: string;
  href: `#${string}`;
  ariaLabel: string;
};

export type DeveloperTool = {
  id: string;
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
    title: 'Peso Formatter',
    description:
      'Format Philippine peso amounts consistently for invoices, checkouts, dashboards, admin screens, and reporting views.',
    kind: 'TypeScript Utility',
    status: 'ready',
    statusLabel: 'Ready',
    stack: ['TypeScript', 'Core package'],
    highlights: ['PHP code format', 'Peso symbol format', 'Decimal control'],
    primaryAction: {
      label: 'Try formatter',
      href: '#playground',
      ariaLabel: 'Open Peso Formatter tool'
    },
    secondaryAction: {
      label: 'Copy snippet',
      href: '#install',
      ariaLabel: 'View Peso Formatter install snippet'
    }
  },
  {
    id: 'ph-mobile-validator',
    title: 'PH Mobile Validator',
    description:
      'Validate and normalize Philippine mobile numbers for signups, CRM records, support flows, and notification systems.',
    kind: 'TypeScript Utility',
    status: 'ready',
    statusLabel: 'Ready',
    stack: ['TypeScript', 'Core package'],
    highlights: ['09xx support', '+63 support', 'Normalized output'],
    primaryAction: {
      label: 'Try validator',
      href: '#playground',
      ariaLabel: 'Open PH Mobile Validator tool'
    },
    secondaryAction: {
      label: 'Copy snippet',
      href: '#install',
      ariaLabel: 'View PH Mobile Validator install snippet'
    }
  },
  {
    id: 'ph-address-selector',
    title: 'PH Address Selector',
    description:
      'Drop a cascading Region, Province, City or Municipality, and Barangay selector into local-ready React forms.',
    kind: 'React Component',
    status: 'ready',
    statusLabel: 'Ready',
    stack: ['React', 'TypeScript'],
    highlights: ['Controlled value', 'Cascading selects', 'Sample PSGC-style data'],
    primaryAction: {
      label: 'Try selector',
      href: '#playground',
      ariaLabel: 'Open PH Address Selector tool'
    },
    secondaryAction: {
      label: 'View usage',
      href: '#install',
      ariaLabel: 'View PH Address Selector usage snippet'
    }
  },
  {
    id: 'laravel-validation-examples',
    title: 'Laravel Validation Examples',
    description:
      'Copy backend validation patterns for Philippine mobile numbers and local app request payloads in Laravel APIs.',
    kind: 'Backend Example',
    status: 'example',
    statusLabel: 'Example',
    stack: ['Laravel', 'PHP'],
    highlights: ['Request validation', 'Reusable rule class', 'API controller sample'],
    primaryAction: {
      label: 'View example',
      href: '#install',
      ariaLabel: 'Open Laravel Validation Examples'
    },
    secondaryAction: {
      label: 'See roadmap',
      href: '#components',
      ariaLabel: 'View Laravel examples roadmap context'
    }
  },
  {
    id: 'dotnet-web-api-examples',
    title: '.NET Web API Examples',
    description:
      'Use ASP.NET Core validation examples for local customer registration, mobile number validation, and API contracts.',
    kind: 'Backend Example',
    status: 'example',
    statusLabel: 'Example',
    stack: ['.NET', 'C#'],
    highlights: ['Validation attribute', 'Request model', 'Controller sample'],
    primaryAction: {
      label: 'View example',
      href: '#install',
      ariaLabel: 'Open .NET Web API Examples'
    },
    secondaryAction: {
      label: 'See roadmap',
      href: '#components',
      ariaLabel: 'View .NET examples roadmap context'
    }
  },
  {
    id: 'sql-schema-starters',
    title: 'SQL Schema Starters',
    description:
      'Start faster with database patterns for users, customer profiles, addresses, and audit-ready local business systems.',
    kind: 'Database Pattern',
    status: 'example',
    statusLabel: 'Example',
    stack: ['SQL', 'Database design'],
    highlights: ['Address tables', 'User profile fields', 'Audit-friendly patterns'],
    primaryAction: {
      label: 'View schema',
      href: '#install',
      ariaLabel: 'Open SQL Schema Starters'
    },
    secondaryAction: {
      label: 'See roadmap',
      href: '#components',
      ariaLabel: 'View SQL schema roadmap context'
    }
  }
] as const satisfies readonly DeveloperTool[];
