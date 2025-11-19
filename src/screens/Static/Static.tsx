import { useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../partials/Header";
import AboutUs from "../../partials/AboutUs";
import { motion } from "framer-motion";
import { SlideBounceFromUp, SlideDown } from "../../lib/animation";
import Carousel from "./Carousel";

gsap.registerPlugin(ScrollTrigger);

export const Static = (): JSX.Element => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;

    if (!el) return;

    // GSAP bounce in
    gsap.fromTo(
      el,
      { x: 100, opacity: 0 }, // start offscreen right
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        keyframes: [
          { x: 100 }, // start
          { x: -20, duration: 0.4 }, // overshoot left
          { x: 0, duration: 0.4 }, // settle back
        ],
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reset",
          // plays every scroll enter, resets when leaving
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#f0f0f3]">
      <section
        className="relative bg-[#f0f0f3] overflow-hidden bg-stainless lg:h-[min(100dvh,1400px)]"
        style={{
          backgroundImage: "url(../../bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={SlideDown(0)}>
          <Header />
        </motion.div>
        <div className="container flex flex-col lg:flex-row pt-[130px] pb-0 lg:pb-[170px] gap-8">
          <section className="lg:w-1/2">
            <motion.div
              className="mt mt-9"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={SlideBounceFromUp(0.2)}
            >
              <p className="text-[clamp(2.8rem,6vw,9rem)] leading-[clamp(3.2rem,7vw,10rem)]">
                Discover the Latest Issue of{" "}
                <span className="bg-gradient-to-b from-[#D38D1A] from-40% to-[#343ADA] bg-clip-text text-transparent">
                  Upwealth
                </span>{" "}
                <span className="bg-gradient-to-b from-[#D38D1A] from-[0.1%] to-[#343ADA] to-95% bg-clip-text text-transparent">
                  Magazine
                </span>
              </p>
              <p className="[font-family:'Montserrat',Helvetica] text-[20px] mb-6">
                Stay informed with our insightful articles and expert advice.
              </p>
              <Button className="inline-flex w-[312px] h-auto hover:inner-color-hover hover:!text-[#df9420] items-start gap-2.5 px-10 py-4 bg-[#f0f0f3] rounded-lg overflow-hidden shadow-neomorphic focus:shadow-neomorphic-hover hover:bg-[#f0f0f3]">
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl whitespace-nowrap">
                  Subscribe Now!
                </span>
              </Button>
              <br />
              <br />
              <br />
              <Button className="inline-flex rounded-full aspect-square h-auto hover:inner-color-hover hover:!text-[#df9420] items-center gap-2.5 px-6 py-4 bg-[#f0f0f3] overflow-hidden shadow-neomorphic focus:shadow-neomorphic-hover hover:bg-[#f0f0f3]">
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl whitespace-nowrap">
                  <img src="../../../Vector (7).svg" alt="" />
                </span>
              </Button>
            </motion.div>
          </section>

          <section className="lg:w-1/2 pt-10">
            <Carousel />
          </section>
        </div>
      </section>
      <AboutUs />
    </div>
  );
};
