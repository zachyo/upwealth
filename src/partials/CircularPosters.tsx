import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

interface CircularPosterProps {
  src: string;
  backSrc: string;
  alt: string;
  width: number;
  height: number;
  containerClass?: string;
  skew: string;
}

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

export default function CircularPoster({
  src,
  backSrc,
  alt,
  width,
  height,
  containerClass = "",
  skew,
}: CircularPosterProps) {
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = posterRef.current;
    if (!el) return;

    const rotator = el.querySelector(".poster-rotate");

    // timeline to flip
    const tl = gsap.timeline({ paused: true })
      .to(rotator, {
        rotationY: 180,
        duration: 0.6,
        ease: "power3.inOut",
      });

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={posterRef}
      className={`poster-wrapper absolute ${containerClass}`}
      style={{
        width,
        height,
        transform: `skew(${skew})`,
        perspective: "1000px",
      }}
    >
      <div className="poster-rotate w-full h-full relative [transform-style:preserve-3d]">

        <img
          src={src}
          alt={alt}
          className="front absolute inset-0 object-cover [backface-visibility:hidden]"
        />

        <img
          src={backSrc}
          alt={`${alt} back`}
          className="back absolute inset-0 object-cover [backface-visibility:hidden] [transform:rotateY(180deg)]"
        />
      </div>
    </div>
  );
}
