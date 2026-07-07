export type FormatPesoOptions = {
  /**
   * Use the currency symbol instead of the PHP currency code.
   * Example: PHP 1,500.00 vs ₱1,500.00 depending on runtime locale support.
   */
  symbol?: boolean;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export function formatPeso(value: number, options: FormatPesoOptions = {}): string {
  if (!Number.isFinite(value)) {
    throw new Error('formatPeso expected a finite number.');
  }

  const {
    symbol = false,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2
  } = options;

  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    currencyDisplay: symbol ? 'symbol' : 'code',
    minimumFractionDigits,
    maximumFractionDigits
  }).format(value);
}
