import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { SlideBounceFromDown, SlideUp } from "../lib/animation";
import CircularPoster from "./CircularPosters";

gsap.registerPlugin(ScrollTrigger);

const smallMagazineCovers = [
  {
    src: "/issue-3-e1680535874403-2.png",
    backSrc: "/priya.png",
    alt: "Issue cover",
    containerClass: "left-[10%] bottom-1/4 lg:bottom-0",
    width: 80,
    height: 100,
    skew: "-6deg",
  },
  {
    src: "/ed6-aug-e1692903238233-1-1.png",
    backSrc: "/alice.png",
    alt: "Aug cover",
    containerClass: "left-[22%] top-20",
    width: 88,
    height: 106,
    skew: "4deg",
  },
  {
    src: "/staceyd-scaled-1.png",
    backSrc: "/stacy.png",
    alt: "Stacy cover",
    containerClass: "right-[22%] top-20",
    width: 89,
    height: 109,
    skew: "-3deg",
  },
  {
    src: "/issue4-3-scaled-e1683690321238-2.png",
    backSrc: "/john.png",
    alt: "John cover",
    containerClass: "right-[10%] bottom-1/4 lg:bottom-0",
    width: 102,
    height: 118,
    skew: "5deg",
  },
];

const AboutUs = () => {
  const semicirclesRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!semicirclesRef.current || !textContainerRef.current) return;

    const semicircleTl = gsap.timeline({
      scrollTrigger: {
        trigger: semicirclesRef.current,
        start: "top center",
        end: "center center",
        scrub: false,
      },
    });

    semicircleTl.from(semicirclesRef.current.querySelectorAll("div"), {
      scale: 0.85,
      duration: 0.8,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
        },
      })
      .from(textContainerRef.current.querySelectorAll("div"), {
        y: 120,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
      });
  }, []);

  return (
    <section className=" h-[1080px] relative bg-[#f0f0f3] overflow-hidden">
      {/* Semicircle Background */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={SlideBounceFromDown(0.2)}
        className="absolute inset-0 flex z-0"
      >
        <div className="w-full h-[1780px] relative scale-[80%]">
          <div className="absolute w-[95%] h-full -top-[10%] left-[2%] bg-white/30 rounded-full border-2 border-dashed border-black/30" />
          <div className="absolute w-[69%] h-[73%] top-[4%] left-[16%] bg-white rounded-[508px] shadow-lg opacity-50" />
          <div className="absolute w-[46%] h-[42%] top-[18%] left-[28%] bg-white rounded-[324px] shadow-lg" />
        </div>
      </motion.div>

      <motion.div
        ref={textContainerRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={SlideBounceFromDown(0.4)}
        className="absolute top-[8%] left-[20%] 2xl:left-[28%] flex flex-col space-y-2 z-10"
      >
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              style={{
                WebkitTextStroke: `3px rgba(0, 0, 0,${0.05 + i * 0.15})`,
              }}
              className="text-transparent text-[160px] lg:text-[260px] leading-[220px] lg:leading-[320px] text-center font-normal [font-family:'Bebas_Neue',Helvetica]"
            >
              UPWEALTH
            </div>
          ))}
      </motion.div>
      <div className="flex relative w-full items-center justify-center">
        <img
          src="/slant.png"
          alt="Rectangle"
          className="h-full drop-shadow-md mt-16 scale-75"
        />
        <div className="absolute w-full h-full inset-0 z-[90] hidden sm:block">
          {smallMagazineCovers.map((cover, index) => (
            <CircularPoster key={index} {...cover} />
          ))}
        </div>
      </div>

      <div className="!hidden sm:absolute top-[147px] left-[792px] md:left-[700px] lg:left-[750px] xl:left-[792px] w-[395px] h-[562px] [perspective:1000px] z-20">
        <div className="absolute w-full h-[91%] top-[4%] left-[-60%] 2xl:left-0 bg-[#f0f0f3]" />
        <div className="absolute w-[392%] h-[105%] top-0 left-[-200%] 2xl:left-[-142%] flex scale-[0.85] md:scale-95 lg:scale-100">
          {smallMagazineCovers.map((cover, index) => (
            <CircularPoster key={index} {...cover} />
          ))}
        </div>      
      </div>

     <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={SlideUp(0.4)}
        className="absolute bottom-0 z-50 pl-10 lg:pl-[82px] 2xl:pl-[102px] py-8 mx-8 lg:mx-16 pr-11 lg:pr-[81px] 2xl:pr-[111px] bg-[#F0F0F3] rounded-t-3xl flex flex-col justify-center items-center gap-7 shadow-neomorphic"
        // className=" pl-[82px] 2xl:pl-[102px] py-8 mx-16 pr-[81px] 2xl:pr-[111px] bg-[#F0F0F3] rounded-t-3xl flex flex-col justify-center items-center gap-7 shadow-neomorphic"
      >
        <div className="flex w-full gap-6 flex-col lg:flex-row">
          <div className="flex-1 flex lg:block gap-3">
            <p className="text-3xl mb-2 text-[#df9420] w-1/2">ABOUT US</p>
            <p className="lg:hidden h-[127px] w-2 rounded-sm shadow-neomorphic-hover bg-[#F0F0F3]" />

            <p className="text-4xl font-bold [font-family:'Montserrat',Helvetica] lg:w-11/12">
              Grow your net worth by growing your network.
            </p>
          </div>

          <p className="hidden lg:block h-[227px] w-2 rounded-sm shadow-neomorphic-hover bg-[#F0F0F3]" />

          <div className="lg:w-[58%]">
            <p className="text-[17px] leading-8 [font-family:'Montserrat',Helvetica]">
              UpWealth magazine is a premier magazine for entrepreneurs by
              entrepreneurs. Do you ever wonder how entrepreneurs become
              debt-free and financially free while spending time with their
              loved ones and doing the thing they enjoy? Well, look no further.
              UPWealth has all the answers you need. Read from small to large
              business owners who have mastered the art of creating and
              maintaining business systems, sticking to their visions and
              persisting in their missions! The power of leveraging other
              businesses is unmatched.
            </p>
          </div>
        </div>

        <Button className="inline-flex rounded-full w-fit h-auto hover:inner-color-hover hover:!text-[#df9420] items-start gap-2.5 px-6 py-4 bg-[#f0f0f3] shadow-neomorphic hover:bg-[#f0f0f3]">
          <span className="text-xl font-semibold [font-family:'Montserrat',Helvetica]">
            <img src="../../../Vector (7).svg" alt="" />
          </span>
        </Button>
      </motion.div>

      <div className="absolute top-[1082px] left-[953px] w-3.5 h-44 bg-gradient-to-br from-[#f0f0f3] to-[#aec6ff]" />
    </section>
  );
};

export default AboutUs;
