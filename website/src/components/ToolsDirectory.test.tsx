import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ToolsDirectory } from './ToolsDirectory';
import { developerTools } from '../data/developerTools';

describe('ToolsDirectory', () => {
  it('renders the developer tools directory heading', () => {
    render(<ToolsDirectory />);

    expect(
      screen.getByRole('heading', {
        name: 'Local-ready building blocks for Philippine apps.',
        level: 2
      })
    ).toBeTruthy();
  });

  it('renders every configured developer tool', () => {
    render(<ToolsDirectory />);

    for (const tool of developerTools) {
      expect(
        screen.getByRole('heading', {
          name: tool.title,
          level: 3
        })
      ).toBeTruthy();
    }
  });

  it('renders accessible primary actions for core MVP tool pages', () => {
    render(<ToolsDirectory />);

    const pesoLink = screen.getByRole('link', {
      name: 'Open Peso Formatter tool page'
    }) as HTMLAnchorElement;

    const mobileLink = screen.getByRole('link', {
      name: 'Open PH Mobile Validator tool page'
    }) as HTMLAnchorElement;

    const addressLink = screen.getByRole('link', {
      name: 'Open PH Address Selector tool page'
    }) as HTMLAnchorElement;

    expect(pesoLink.getAttribute('href')).toBe('/tools/peso-formatter');
    expect(mobileLink.getAttribute('href')).toBe('/tools/ph-mobile-validator');
    expect(addressLink.getAttribute('href')).toBe('/tools/ph-address-selector');
  });

  it('renders playground secondary actions for core MVP tools', () => {
    render(<ToolsDirectory />);

    const pesoDemoLink = screen.getByRole('link', {
      name: 'Try Peso Formatter in the playground'
    }) as HTMLAnchorElement;

    const mobileDemoLink = screen.getByRole('link', {
      name: 'Try PH Mobile Validator in the playground'
    }) as HTMLAnchorElement;

    const addressDemoLink = screen.getByRole('link', {
      name: 'Try PH Address Selector in the playground'
    }) as HTMLAnchorElement;

    expect(pesoDemoLink.getAttribute('href')).toBe('#playground');
    expect(mobileDemoLink.getAttribute('href')).toBe('#playground');
    expect(addressDemoLink.getAttribute('href')).toBe('#playground');
  });

  it('groups stack tags inside each tool card', () => {
    render(<ToolsDirectory />);

    const pesoCard = screen
      .getByRole('heading', {
        name: 'Peso Formatter',
        level: 3
      })
      .closest('article');

    expect(pesoCard).toBeTruthy();

    const card = within(pesoCard as HTMLElement);

    expect(card.getByText('TypeScript')).toBeTruthy();
    expect(card.getByText('Core package')).toBeTruthy();
  });
});
