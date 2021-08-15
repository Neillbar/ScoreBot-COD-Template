export const isScoreValue = (value: string): boolean => {
  return value && /score\d/.test(value);
};
