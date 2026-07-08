import { developerTools, type DeveloperTool } from './developerTools';

export type ToolDetailCodeExample = {
  title: string;
  language: string;
  code: string;
};

export type ToolDetail = {
  slug: string;
  headline: string;
  summary: string;
  bestFor: readonly string[];
  implementationNotes: readonly string[];
  codeExamples: readonly ToolDetailCodeExample[];
};

export type ResolvedToolDetail = {
  tool: DeveloperTool;
  detail: ToolDetail;
};

export const toolDetails = [
  {
    slug: 'peso-formatter',
    headline: 'Format Philippine peso values consistently.',
    summary:
      'Use the Peso Formatter when your app needs stable Philippine currency display across pricing pages, invoices, dashboards, receipts, and admin reports.',
    bestFor: ['Checkout totals', 'SaaS pricing', 'Invoices', 'Admin dashboards'],
    implementationNotes: [
      'Defaults to PHP code format for clarity in business systems.',
      'Supports peso symbol output for customer-facing UI.',
      'Throws on non-finite numbers so invalid calculations fail early.'
    ],
    codeExamples: [
      {
        title: 'TypeScript usage',
        language: 'ts',
        code: [
          "import { formatPeso } from '@ph-devkit/core';",
          '',
          "formatPeso(1500);",
          '// "PHP 1,500.00"',
          '',
          'formatPeso(1500, { symbol: true });',
          '// "₱1,500.00"',
          '',
          'formatPeso(1500.5, {',
          '  minimumFractionDigits: 0,',
          '  maximumFractionDigits: 0',
          '});',
          '// "PHP 1,501"'
        ].join('\n')
      }
    ]
  },
  {
    slug: 'ph-mobile-validator',
    headline: 'Validate and normalize Philippine mobile numbers.',
    summary:
      'Use the PH Mobile Validator to accept common local input formats and store normalized +63 values in your application.',
    bestFor: ['Signup forms', 'CRM records', 'SMS workflows', 'Support systems'],
    implementationNotes: [
      'Accepts local 09xx format.',
      'Accepts +63 international format.',
      'Returns normalized values that are safer to store and compare.'
    ],
    codeExamples: [
      {
        title: 'TypeScript usage',
        language: 'ts',
        code: [
          "import { isValidPHMobile, normalizePHMobile, validatePHMobile } from '@ph-devkit/core';",
          '',
          "isValidPHMobile('09171234567');",
          '// true',
          '',
          "normalizePHMobile('0917-123-4567');",
          '// "+639171234567"',
          '',
          "validatePHMobile('+639171234567');",
          '// { isValid: true, normalized: "+639171234567", ... }'
        ].join('\n')
      }
    ]
  },
  {
    slug: 'ph-address-selector',
    headline: 'Add a cascading Philippine address selector to React forms.',
    summary:
      'Use the PH Address Selector to collect local-ready address data with Region, Province, City or Municipality, and Barangay fields.',
    bestFor: ['Customer profiles', 'Delivery forms', 'Booking systems', 'Business directories'],
    implementationNotes: [
      'Uses a controlled value API so parent forms own the selected address.',
      'Resets lower-level fields when a parent field changes.',
      'Ships with sample PSGC-style data for demos; replace with a verified dataset for production.'
    ],
    codeExamples: [
      {
        title: 'React usage',
        language: 'tsx',
        code: [
          "import { useState } from 'react';",
          "import { PHAddressSelector, type PHAddressValue } from '@ph-devkit/react';",
          "import { sampleRegions } from './sampleAddressData';",
          '',
          'export function AddressForm() {',
          '  const [address, setAddress] = useState<PHAddressValue>({});',
          '',
          '  return (',
          '    <PHAddressSelector',
          '      regions={sampleRegions}',
          '      value={address}',
          '      onChange={setAddress}',
          '    />',
          '  );',
          '}'
        ].join('\n')
      }
    ]
  },
  {
    slug: 'laravel-validation-examples',
    headline: 'Copy Laravel validation patterns for Philippine app fields.',
    summary:
      'Use these examples as a starting point for Laravel APIs that need local mobile number validation and clean request handling.',
    bestFor: ['Laravel APIs', 'Registration endpoints', 'Customer modules', 'Admin tools'],
    implementationNotes: [
      'Keep validation logic reusable instead of repeating regex checks.',
      'Normalize mobile numbers before persistence when possible.',
      'Return clear validation errors for client forms.'
    ],
    codeExamples: [
      {
        title: 'Laravel validation rule sketch',
        language: 'php',
        code: [
          '<?php',
          '',
          'use Illuminate\\Support\\Str;',
          '',
          'function isValidPHMobile(string $value): bool',
          '{',
          "    $number = preg_replace('/[^0-9+]/', '', $value);",
          '',
          "    return preg_match('/^(09\\d{9}|\\+639\\d{9}|639\\d{9})$/', $number) === 1;",
          '}'
        ].join('\n')
      }
    ]
  },
  {
    slug: 'dotnet-web-api-examples',
    headline: 'Use .NET Web API validation examples for Philippine forms.',
    summary:
      'Use these examples for ASP.NET Core request models that need Philippine mobile validation and local-ready API contracts.',
    bestFor: ['ASP.NET Core APIs', 'Customer registration', 'CRM systems', 'Internal admin apps'],
    implementationNotes: [
      'Use validation attributes for request model validation.',
      'Keep API contracts explicit and predictable.',
      'Normalize values in application services before persistence.'
    ],
    codeExamples: [
      {
        title: '.NET validation attribute sketch',
        language: 'csharp',
        code: [
          'using System.ComponentModel.DataAnnotations;',
          'using System.Text.RegularExpressions;',
          '',
          'public sealed class PHMobileNumberAttribute : ValidationAttribute',
          '{',
          '    public override bool IsValid(object? value)',
          '    {',
          '        if (value is not string input) return false;',
          '',
          '        var normalized = Regex.Replace(input, @"[^0-9+]", "");',
          '        return Regex.IsMatch(normalized, @"^(09\\d{9}|\\+639\\d{9}|639\\d{9})$");',
          '    }',
          '}'
        ].join('\n')
      }
    ]
  },
  {
    slug: 'sql-schema-starters',
    headline: 'Start with SQL patterns for Philippine business apps.',
    summary:
      'Use these schema starters for users, profiles, addresses, and audit-friendly local business systems.',
    bestFor: ['Customer databases', 'Address records', 'Admin dashboards', 'Audit-ready systems'],
    implementationNotes: [
      'Store address fields separately enough for filtering and reporting.',
      'Keep display labels and stable codes when using verified datasets.',
      'Add audit timestamps from the start.'
    ],
    codeExamples: [
      {
        title: 'Address table starter',
        language: 'sql',
        code: [
          'CREATE TABLE customer_addresses (',
          '  id BIGINT PRIMARY KEY,',
          '  customer_id BIGINT NOT NULL,',
          '  region_code VARCHAR(20) NOT NULL,',
          '  province_code VARCHAR(20),',
          '  city_code VARCHAR(20) NOT NULL,',
          '  barangay_code VARCHAR(20) NOT NULL,',
          '  street_address VARCHAR(255),',
          '  postal_code VARCHAR(10),',
          '  created_at TIMESTAMP NOT NULL,',
          '  updated_at TIMESTAMP NOT NULL',
          ');'
        ].join('\n')
      }
    ]
  }
] as const satisfies readonly ToolDetail[];

export function getToolDetailBySlug(slug: string): ResolvedToolDetail | null {
  const tool = developerTools.find((item) => item.slug === slug);
  const detail = toolDetails.find((item) => item.slug === slug);

  if (!tool || !detail) {
    return null;
  }

  return { tool, detail };
}

export function getRelatedTools(slug: string): readonly DeveloperTool[] {
  return developerTools.filter((tool) => tool.slug !== slug).slice(0, 3);
}
