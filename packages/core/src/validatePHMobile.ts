export type PHMobileValidationResult = {
  isValid: boolean;
  input: string;
  normalized: string | null;
  localFormat: string | null;
  internationalFormat: string | null;
  reason?: string;
};

const LOCAL_MOBILE_REGEX = /^09\d{9}$/;
const INTERNATIONAL_MOBILE_REGEX = /^\+639\d{9}$/;
const INTERNATIONAL_NO_PLUS_REGEX = /^639\d{9}$/;

export function normalizePHMobile(input: string): string | null {
  const cleaned = input.trim().replace(/[\s().-]/g, '');

  if (LOCAL_MOBILE_REGEX.test(cleaned)) {
    return `+63${cleaned.slice(1)}`;
  }

  if (INTERNATIONAL_MOBILE_REGEX.test(cleaned)) {
    return cleaned;
  }

  if (INTERNATIONAL_NO_PLUS_REGEX.test(cleaned)) {
    return `+${cleaned}`;
  }

  return null;
}

export function validatePHMobile(input: string): PHMobileValidationResult {
  if (!input || input.trim().length === 0) {
    return {
      isValid: false,
      input,
      normalized: null,
      localFormat: null,
      internationalFormat: null,
      reason: 'Mobile number is required.'
    };
  }

  const normalized = normalizePHMobile(input);

  if (!normalized) {
    return {
      isValid: false,
      input,
      normalized: null,
      localFormat: null,
      internationalFormat: null,
      reason: 'Use a valid Philippine mobile number, such as 09171234567 or +639171234567.'
    };
  }

  return {
    isValid: true,
    input,
    normalized,
    localFormat: `0${normalized.slice(3)}`,
    internationalFormat: normalized
  };
}

export function isValidPHMobile(input: string): boolean {
  return validatePHMobile(input).isValid;
}
