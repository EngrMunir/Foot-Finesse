export function convertToSubCurrency(amount: number, factor = 100): number {
  const subCurrency = Math.round(amount * factor);
  return subCurrency;
}
