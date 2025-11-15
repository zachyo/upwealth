import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SlideBounceFromDown } from "../../lib/animation";
import { positions } from "./utils";

gsap.registerPlugin(ScrollTrigger);

const circularMagazines = [
  {
    src: "/1.png",
    alt: "Magazine cover",
    position: "top-[7%] left-0",
    reflection: "/reflection--1.svg",
  },
  {
    src: "/2.png",
    alt: "Magazine cover",
    position: "top-[4.29%] left-[15.60%]",
    reflection: "/reflection--4.svg",
  },
  {
    src: "/3.png",
    alt: "Magazine cover",
    position: "top-0 left-[30.15%]",
    reflection: "/reflection--3.svg",
  },
  {
    src: "/4.png",
    alt: "Magazine cover",
    position: "top-[4.29%] left-[51.03%]",
    reflection: "/reflection--2.svg",
  },
  {
    src: "/5.png",
    alt: "Magazine cover",
    position: "top-[7%] left-[68.75%]",
    reflection: "/reflection-.svg",
  },
];

const Carousel = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slides = gsap.utils.toArray<HTMLElement>(".magazine-slide");
    const total = slides.length;

    slides.forEach((slide, i) => {
      const pos = positions[i];
      gsap.set(slide, pos);
    });

    let index = 0;

    const animate = () => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.inOut" },
      });

      slides.forEach((slide, i) => {
        // Determine new position after shift
        const offset = (i - index + total) % total;
        const pos = positions[offset];

        tl.to(
          slide,
          {
            left: pos.left,
            top: pos.top,
            width: pos.width,
            height: pos.height,
            zIndex: pos.zIndex,
            scale: pos.scale,
          },
          0 // all animations start together
        );
      });

      index = (index + 1) % total;
    };

    const interval = setInterval(animate, 1200);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={SlideBounceFromDown(0.2)}
      ref={sliderRef}
      className="relative h-[1062px]"
    >
      {circularMagazines.map((magazine, index) => {
        const isLarge = index === 2;
        const isMedium = index === 1 || index === 3;
        const widthClass = isLarge
          ? "w-[41.69%]"
          : isMedium
          ? "w-[35.43%]"
          : "w-[31.25%]";
        const heightClass = isLarge
          ? "h-full"
          : isMedium
          ? "h-[85.00%]"
          : "h-[74.97%]";

        return (
          <div
            key={index}
            className={`magazine-slide absolute ${widthClass} ${heightClass} ${magazine.position}`}
          >
            <img
              className="absolute w-full top-0 left-0 object-cover"
              alt={magazine.alt}
              src={magazine.src}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Carousel;
