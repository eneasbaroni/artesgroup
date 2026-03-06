export const AGE_RANGES = ["13-17", "18-24", "25-34", "35-44", "44+"] as const;

export const AGE_RANGE_LABELS: Record<(typeof AGE_RANGES)[number], string> = {
  "13-17": "de 13 a 17 años",
  "18-24": "de 18 a 24 años",
  "25-34": "de 25 a 34 años",
  "35-44": "de 35 a 44 años",
  "44+": "más de 44 años",
};
