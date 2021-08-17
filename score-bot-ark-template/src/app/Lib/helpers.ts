export const isScoreValue = (value: string): boolean => {
  return value && /score\d/.test(value);
};

export const hasKey = (key: string, object: any) =>
  key && Object.keys(object).some((k) => k === key);
