export const SlideUp = (delay : number) => {
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

export const SlideDown = (delay : number) => {
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
export const SlideLeft = (delay : number) => {
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
      y: [100, -20, 0],  // overshoot (-20) then settle (0)
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

