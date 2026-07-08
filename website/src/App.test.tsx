import { afterEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

function navigateTo(pathname: string) {
  window.history.pushState({}, '', pathname);
}

afterEach(() => {
  navigateTo('/');
});

describe('App routing', () => {
  it('renders the homepage for the root route', () => {
    navigateTo('/');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Local-ready building blocks for Philippine apps.',
        level: 2
      })
    ).toBeTruthy();
  });

  it('renders the Peso Formatter detail page for its tool route', () => {
    navigateTo('/tools/peso-formatter');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Peso Formatter',
        level: 1
      })
    ).toBeTruthy();
  });

  it('renders the Laravel examples detail page for its tool route', () => {
    navigateTo('/tools/laravel-validation-examples');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Laravel Validation Examples',
        level: 1
      })
    ).toBeTruthy();
  });
});
