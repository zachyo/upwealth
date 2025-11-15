export const generateUpPattern = () => {
  const pattern = new Set<string>();
  
  // Letter "U" - columns 30-40, rows 30-50
  for (let i = 30; i <= 50; i++) {
    pattern.add(`30-${i}`); // Left vertical
    pattern.add(`40-${i}`); // Right vertical
    if (i >= 45) {
      for (let j = 31; j <= 39; j++) {
        pattern.add(`${j}-50`); // Bottom horizontal
      }
    }
  }

  // Letter "P" - columns 45-55, rows 30-50
  for (let i = 30; i <= 50; i++) {
    pattern.add(`45-${i}`); // Left vertical
    if (i <= 40) {
      pattern.add(`55-${i}`); // Right vertical (top half)
    }
  }
  // Top and middle horizontal for P
  for (let j = 46; j <= 54; j++) {
    pattern.add(`${j}-30`); // Top
    pattern.add(`${j}-40`); // Middle
  }

  return pattern;
};

