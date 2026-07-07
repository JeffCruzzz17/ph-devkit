import { describe, expect, it } from 'vitest';
import { formatPeso } from './formatPeso';

describe('formatPeso', () => {
  it('formats Philippine peso values using the PHP currency code by default', () => {
    expect(formatPeso(1500)).toBe('PHP\u00A01,500.00');
  });

  it('formats Philippine peso values using the peso symbol when requested', () => {
    expect(formatPeso(1500, { symbol: true })).toBe('₱1,500.00');
  });

  it('supports custom fraction digit options', () => {
    expect(
      formatPeso(1500.5, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
    ).toBe('PHP\u00A01,501');
  });

  it('throws for non-finite numbers', () => {
    expect(() => formatPeso(Number.NaN)).toThrow('formatPeso expected a finite number.');
    expect(() => formatPeso(Number.POSITIVE_INFINITY)).toThrow(
      'formatPeso expected a finite number.'
    );
  });
});
