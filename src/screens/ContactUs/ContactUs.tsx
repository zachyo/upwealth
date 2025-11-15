import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Boxes } from "../../components/ui/boxes";
import { Button } from "../../components/ui/button";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import { SlideDown, SlideUp } from "../../lib/animation";

const ContactUs = () => {
  const contactSectionRef = useRef(null);
  const isContactInView = useInView(contactSectionRef, {
    once: true,
    margin: "-100px",
  });

  const iconRefs = [useRef(null), useRef(null), useRef(null)];
  const iconInViews = iconRefs.map((ref) => useInView(ref, { amount: 0.5 }));

  return (
    <div className="bg-[#F0F0F3]">
      {/* Header with slide down animation */}
      <motion.div initial="hidden" animate="visible" variants={SlideDown(0)}>
        <Header />
      </motion.div>

      <div className="h-screen relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg mb-16">
        <div className="absolute inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />

        {/* Contact form with slide up animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={SlideUp(0.9)}
          className="relative z-[9] text-center shadow-neomorphic rounded-2xl bg-[#F0F0F3] mt-12 p-20 pb-16"
        >
          <p className="text-8xl">Contact our friendly team</p>
          <p className="[font-family:'Montserrat',Helvetica] mt-5 text-[20px]">
            Let us know how we can help
          </p>

          <div className="form grid grid-cols-2 gap-8 [font-family:'Montserrat',Helvetica] text-[20px] mt-16">
            <input
              type="text"
              placeholder="First Name"
              className="shadow-neomorphic-hover rounded-[16px] bg-[#F0F0F3] px-6 py-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="shadow-neomorphic-hover rounded-[16px] bg-[#F0F0F3] px-6 py-5"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="shadow-neomorphic-hover rounded-[16px] bg-[#F0F0F3] px-6 py-5"
            />
            <input
              type="text"
              placeholder="Email ID"
              className="shadow-neomorphic-hover rounded-[16px] bg-[#F0F0F3] px-6 py-5"
            />
            <textarea
              name=""
              id=""
              className="col-span-2 shadow-neomorphic-hover rounded-[16px] bg-[#F0F0F3] px-6 py-5 min-h-24"
              placeholder="Message"
            />
          </div>

          <Button className="inline-flex w-[156px] rounded-lg mt-14 h-auto hover:inner-color-hover hover:!text-[#df9420] items-start gap-2.5 px-6 py-4 bg-[#f0f0f3] overflow-hidden shadow-neomorphic focus:shadow-neomorphic-hover hover:bg-[#f0f0f3]">
            <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl whitespace-nowrap">
              Submit
            </span>
          </Button>
        </motion.div>

        <Button className="inline-flex absolute bottom-28 right-20 rounded-full mt-14 h-auto hover:inner-color-hover hover:!text-[#df9420] items-start gap-2.5 px-6 py-4 bg-[#f0f0f3] overflow-hidden shadow-neomorphic focus:shadow-neomorphic-hover hover:bg-[#f0f0f3]">
          <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl whitespace-nowrap">
            <img src="../../../Vector (7).svg" alt="" />
          </span>
        </Button>
      </div>

      {/* Contact section with scroll animations */}
      <div
        ref={contactSectionRef}
        className="grid grid-cols-5 gap-8 px-24 2xl:p-48 py-52 [font-family:'Montserrat',Helvetica]"
      >
        {/* Title with fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isContactInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-2 space-y-6"
        >
          <p className="text-5xl font-bold">
            Get in touch with Upwealth magazine
          </p>
          <p className="text-[20px]">
            If you have any questions regarding subscriptions, or how to feature
            or advertise in our magazine, don't hesitate to get in touch
          </p>
        </motion.div>

        {/* Cards with staggered slide up */}
        {[
          { icon: "../../../mingcute_chat-1-line.svg", text: "Chat with us" },
          { icon: "../../../ph_phone-call-fill.svg", text: "Call us" },
          { icon: "../../../mail.svg", text: "Send an email" },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            variants={SlideUp(index * 0.2)}
            className="p-12 rounded-[32px] shadow-neomorphic flex items-center justify-center flex-col gap-5"
          >
            <motion.img
              ref={iconRefs[index]}
              animate={{
                opacity: iconInViews[index] ? [0, 1, 0, 1] : 1,
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.3, 0.6, 1],
              }}
              src={card.icon}
              alt=""
            />
            <p className="text-[24px] font-bold whitespace-nowrap">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
