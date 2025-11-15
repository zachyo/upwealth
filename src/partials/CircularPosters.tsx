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

const CircularPoster = ({
  src,
  backSrc,
  alt,
  width,
  height,
  containerClass = "",
  skew,
}: CircularPosterProps) => {
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!posterRef.current) return;

    const flipIn = gsap.to(posterRef.current, {
      rotationY: 180,
      duration: 0.45,
      ease: "power2.out",
      paused: true,
    });
    const flipOut = gsap.to(posterRef.current, {
      rotationY: 0,
      duration: 0.45,
      ease: "power2.out",
      paused: true,
    });

    const handleEnter = () => flipIn.restart();
    const handleLeave = () => flipOut.restart();

    posterRef.current.addEventListener("mouseenter", handleEnter);
    posterRef.current.addEventListener("mouseleave", handleLeave);

    return () => {
      posterRef.current?.removeEventListener("mouseenter", handleEnter);
      posterRef.current?.removeEventListener("mouseleave", handleLeave);
    };
  }, [skew]);

  return (
    <div
      ref={posterRef}
      className={`circular-poster relative ${containerClass} [transform-style:preserve-3d] will-change-transform`}
      style={{
        width: `clamp(${width * 0.8}px, ${width * 0.12}vw, ${width}px)`,
        height: `clamp(${height * 0.8}px, ${height * 0.12}vw, ${height}px)`,
        transform: `skew(${skew})`,
        transition: "transform 0.45s ease, width 0.3s ease, height 0.3s ease",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute w-full h-full top-0 left-0 object-cover [backface-visibility:hidden]"
      />
      <img
        src={backSrc}
        alt={`${alt} back`}
        className="absolute w-full h-full top-0 left-0 object-cover [backface-visibility:hidden] [transform:rotateY(180deg)]"
      />
    </div>
  );
};

export default CircularPoster