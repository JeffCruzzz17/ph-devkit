import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PHAddressSelector, type PHAddressValue, type Region } from './PHAddressSelector';

const regions: Region[] = [
  {
    code: '130000000',
    name: 'National Capital Region',
    provinces: [
      {
        code: '137400000',
        name: 'Metro Manila',
        cities: [
          {
            code: '137401000',
            name: 'City of Manila',
            barangays: [
              {
                code: '137401001',
                name: 'Barangay 1'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    code: '030000000',
    name: 'Central Luzon',
    provinces: [
      {
        code: '031400000',
        name: 'Bulacan',
        cities: [
          {
            code: '031401000',
            name: 'Malolos City',
            barangays: [
              {
                code: '031401001',
                name: 'Barangay San Vicente'
              }
            ]
          }
        ]
      }
    ]
  }
];

function ControlledAddressSelector() {
  const [value, setValue] = useState<PHAddressValue>({});

  return <PHAddressSelector regions={regions} value={value} onChange={setValue} />;
}

describe('PHAddressSelector', () => {
  it('renders the address fields with accessible labels', () => {
    render(<ControlledAddressSelector />);

    expect(screen.getByLabelText('Region')).toBeInTheDocument();
    expect(screen.getByLabelText('Province')).toBeInTheDocument();
    expect(screen.getByLabelText('City / Municipality')).toBeInTheDocument();
    expect(screen.getByLabelText('Barangay')).toBeInTheDocument();
  });

  it('disables dependent fields until their parent value is selected', () => {
    render(<ControlledAddressSelector />);

    expect(screen.getByLabelText('Province')).toBeDisabled();
    expect(screen.getByLabelText('City / Municipality')).toBeDisabled();
    expect(screen.getByLabelText('Barangay')).toBeDisabled();
  });

  it('allows users to select a complete Philippine address', async () => {
    const user = userEvent.setup();

    render(<ControlledAddressSelector />);

    await user.selectOptions(screen.getByLabelText('Region'), '130000000');
    await user.selectOptions(screen.getByLabelText('Province'), '137400000');
    await user.selectOptions(screen.getByLabelText('City / Municipality'), '137401000');
    await user.selectOptions(screen.getByLabelText('Barangay'), '137401001');

    expect(screen.getByLabelText('Region')).toHaveValue('130000000');
    expect(screen.getByLabelText('Province')).toHaveValue('137400000');
    expect(screen.getByLabelText('City / Municipality')).toHaveValue('137401000');
    expect(screen.getByLabelText('Barangay')).toHaveValue('137401001');
  });

  it('resets lower-level fields when region changes', async () => {
    const user = userEvent.setup();

    render(<ControlledAddressSelector />);

    await user.selectOptions(screen.getByLabelText('Region'), '130000000');
    await user.selectOptions(screen.getByLabelText('Province'), '137400000');
    await user.selectOptions(screen.getByLabelText('City / Municipality'), '137401000');
    await user.selectOptions(screen.getByLabelText('Barangay'), '137401001');

    await user.selectOptions(screen.getByLabelText('Region'), '030000000');

    expect(screen.getByLabelText('Region')).toHaveValue('030000000');
    expect(screen.getByLabelText('Province')).toHaveValue('');
    expect(screen.getByLabelText('City / Municipality')).toHaveValue('');
    expect(screen.getByLabelText('Barangay')).toHaveValue('');
  });
});
