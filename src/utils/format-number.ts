export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US', { minimumFractionDigits: 0 });
};
