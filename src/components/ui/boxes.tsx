"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const Boxes = ({ className }: { className?: string }) => {
  // Whether to show the blue flash
  const [flash, setFlash] = useState(true);
  const [hoverBox, setHoverBox] = useState<{ x: number; y: number } | null>(
    null
  );
  const cell = 80; // grid cell size (px)

  useEffect(() => {
    const timer = setTimeout(() => setFlash(false), 1500); // play once
    return () => clearTimeout(timer);
  }, []);

  // Coordinates of UP boxes (absolute-positioned)
  // These should match your original isUPBox() positions
  const highlightBoxes = [
    // U shape (example values, adjust as needed)
    { x: 640, y: 160 },
    { x: 640, y: 240 },
    { x: 640, y: 320 },
    { x: 640, y: 400 },
    { x: 640, y: 480 },
    { x: 640, y: 560 },
    { x: 880, y: 160 },
    { x: 880, y: 240 },
    { x: 880, y: 320 },
    { x: 880, y: 400 },
    { x: 880, y: 480 },
    { x: 880, y: 560 },
    { x: 800, y: 560 },
    { x: 720, y: 560 },

    // P shape (example values)
    { x: 1040, y: 160 },    
    { x: 1040, y: 240 },
    { x: 1040, y: 320 },
    { x: 1040, y: 400 },
    { x: 1040, y: 480 },
    { x: 1040, y: 560 },
    { x: 1120, y: 160 },
    { x: 1200, y: 160 },
    { x: 1280, y: 160 },
    { x: 1280, y: 240 },
    { x: 1280, y: 320 },
    { x: 1120, y: 320 },
    { x: 1200, y: 320 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = Math.floor((e.clientX - rect.left) / cell) * cell;
    const y = Math.floor((e.clientY - rect.top) / cell) * cell;

    setHoverBox({ x, y });
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverBox(null)}
    >
      {/* GRID */}
      <div className="absolute inset-0 grid-background" />

      {/* HIGHLIGHT BOXES */}
      {highlightBoxes.map((b, i) => (
        <div
          key={i}
          className={cn(
            "absolute w-20 h-20",
            flash ? "up-flash" : "bg-transparent"
          )}
          style={{
            left: `${b.x}px`,
            top: `${b.y}px`
          }}
        />
      ))}

      {/* HOVER BOX */}
      {hoverBox && (
        <div
          className="absolute w-20 h-20 bg-blue-200/50 transition-none"
          style={{
            left: hoverBox.x,
            top: hoverBox.y,
          }}
        />
      )}
    </div>
  );
};
