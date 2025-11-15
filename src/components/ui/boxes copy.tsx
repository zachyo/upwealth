"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { isUPBox } from "../../lib/animation";

export const BoxesCore = ({ className, ...rest }: any) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  return (
    <div
      style={{
        transform: ``,
      }}
      className={cn(
        "absolute left-[41%] p-4 -top-1/2 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-20 h-20 border-l border-slate-700/10 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              className={cn(
                "w-10 lg:w-20 h-10 lg:h-20 border-r border-t border-slate-700/10 transition-all ease-in-out duration-75"
              )}
              animate={{
                backgroundColor: isUPBox(i, j)
                  ? ["#c5daff", "#c5daff", "transparent"]
                  : "transparent",
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                times: [0, 0.4, 1],
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
