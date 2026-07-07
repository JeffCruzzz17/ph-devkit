import { describe, expect, it } from 'vitest';
import { isValidPHMobile, normalizePHMobile, validatePHMobile } from './validatePHMobile';

describe('normalizePHMobile', () => {
  it('normalizes local Philippine mobile numbers to international format', () => {
    expect(normalizePHMobile('09171234567')).toBe('+639171234567');
  });

  it('normalizes international numbers without plus sign', () => {
    expect(normalizePHMobile('639171234567')).toBe('+639171234567');
  });

  it('keeps valid international numbers with plus sign', () => {
    expect(normalizePHMobile('+639171234567')).toBe('+639171234567');
  });

  it('removes common separators before validation', () => {
    expect(normalizePHMobile('0917-123-4567')).toBe('+639171234567');
    expect(normalizePHMobile('0917 123 4567')).toBe('+639171234567');
  });

  it('returns null for invalid Philippine mobile numbers', () => {
    expect(normalizePHMobile('08171234567')).toBeNull();
    expect(normalizePHMobile('0917123456')).toBeNull();
    expect(normalizePHMobile('hello')).toBeNull();
  });
});

describe('validatePHMobile', () => {
  it('returns a complete validation result for valid numbers', () => {
    expect(validatePHMobile('09171234567')).toEqual({
      isValid: true,
      input: '09171234567',
      normalized: '+639171234567',
      localFormat: '09171234567',
      internationalFormat: '+639171234567'
    });
  });

  it('returns a useful error for empty input', () => {
    expect(validatePHMobile('')).toMatchObject({
      isValid: false,
      normalized: null,
      localFormat: null,
      internationalFormat: null,
      reason: 'Mobile number is required.'
    });
  });

  it('returns a useful error for invalid input', () => {
    expect(validatePHMobile('123')).toMatchObject({
      isValid: false,
      normalized: null,
      localFormat: null,
      internationalFormat: null
    });
  });
});

describe('isValidPHMobile', () => {
  it('returns true only for valid Philippine mobile numbers', () => {
    expect(isValidPHMobile('09171234567')).toBe(true);
    expect(isValidPHMobile('+639171234567')).toBe(true);
    expect(isValidPHMobile('123')).toBe(false);
  });
});
