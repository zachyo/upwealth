"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

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
              whileHover={{
                backgroundColor: "#c5daff",
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 1 },
                // backgroundColor: "rgba(197, 218, 255, 0.15)",
              }}
              key={`col` + j}
              className="w-20 h-20 border-r border-t border-slate-700/10 relative"
            ></motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
