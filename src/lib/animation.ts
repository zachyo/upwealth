export const SlideUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
};

export const SlideDown = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
};

export const SlideRight = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
};
export const SlideLeft = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
};
export const SlideBounceFromDown = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: [100, -20, 0], // overshoot (-20) then settle (0)
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

export const SlideBounceFromUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: -100, // starts above
    },
    visible: {
      opacity: 1,
      y: [-100, 20, 0], // overshoot down (20), then settle back to 0
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

const upBoxes = [
  // U shape
  [9, 14],
  [9, 15],
  [9, 16],
  [9, 17],
  [9, 18],
  [9, 19],
  [10, 19],
  [11, 19], 
  [12, 19],
   [12, 18], 
  [12, 17],
  [12, 16],
  [12, 15],
  [12, 14], 
  

  // P shape
[14, 14],
  [14, 15],
  [14, 16],
  [14, 17],
  [14, 18],
  [14, 19],
  [15, 14],
  [16, 14], 
  [17, 14],
   [17, 15], 
  [17, 16],
  [16, 16],
  [15, 16],
];

export const isUPBox = (row: number, col: number) =>
  upBoxes.some(([r, c]) => r === row && c === col);
