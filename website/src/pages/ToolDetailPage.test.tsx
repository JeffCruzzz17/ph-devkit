import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ToolDetailPage, getToolSlugFromPath } from './ToolDetailPage';

describe('getToolSlugFromPath', () => {
  it('returns the tool slug for supported tool routes', () => {
    expect(getToolSlugFromPath('/tools/peso-formatter')).toBe('peso-formatter');
    expect(getToolSlugFromPath('/tools/ph-mobile-validator/')).toBe('ph-mobile-validator');
  });

  it('returns null for non-tool routes', () => {
    expect(getToolSlugFromPath('/')).toBeNull();
    expect(getToolSlugFromPath('/playground')).toBeNull();
  });
});

describe('ToolDetailPage', () => {
  it('renders the Peso Formatter detail page', () => {
    render(<ToolDetailPage slug="peso-formatter" />);

    expect(screen.getByRole('heading', { name: 'Peso Formatter', level: 1 })).toBeTruthy();
    expect(screen.getByText('Format Philippine peso values consistently.')).toBeTruthy();
    expect(screen.getByText('TypeScript usage')).toBeTruthy();
  });

  it('renders a not found state for unknown tools', () => {
    render(<ToolDetailPage slug="missing-tool" />);

    expect(
      screen.getByRole('heading', {
        name: 'This PH DevKit tool does not exist yet.',
        level: 1
      })
    ).toBeTruthy();
  });
});
