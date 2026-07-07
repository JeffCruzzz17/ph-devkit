import type { Region } from '@ph-devkit/react';

// Demo data only. Replace with a complete, verified PSGC dataset before production use.
export const sampleRegions: Region[] = [
  {
    code: 'NCR',
    name: 'National Capital Region',
    provinces: [
      {
        code: 'NCR-METRO-MANILA',
        name: 'Metro Manila',
        cities: [
          {
            code: 'QC',
            name: 'Quezon City',
            barangays: [
              { code: 'QC-001', name: 'Commonwealth' },
              { code: 'QC-002', name: 'Batasan Hills' },
              { code: 'QC-003', name: 'Project 6' }
            ]
          },
          {
            code: 'MNL',
            name: 'Manila',
            barangays: [
              { code: 'MNL-001', name: 'Ermita' },
              { code: 'MNL-002', name: 'Malate' },
              { code: 'MNL-003', name: 'Sampaloc' }
            ]
          }
        ]
      }
    ]
  },
  {
    code: 'VII',
    name: 'Central Visayas',
    provinces: [
      {
        code: 'CEB',
        name: 'Cebu',
        cities: [
          {
            code: 'CEB-CITY',
            name: 'Cebu City',
            barangays: [
              { code: 'CEB-001', name: 'Lahug' },
              { code: 'CEB-002', name: 'Mabolo' },
              { code: 'CEB-003', name: 'Guadalupe' }
            ]
          },
          {
            code: 'MANDAUE',
            name: 'Mandaue City',
            barangays: [
              { code: 'MAN-001', name: 'Subangdaku' },
              { code: 'MAN-002', name: 'Banilad' },
              { code: 'MAN-003', name: 'Tipolo' }
            ]
          }
        ]
      }
    ]
  }
];
