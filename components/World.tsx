import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../util/motion";
import { TitleText, TypingText } from "./CustomText";

const World = () => {
  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        className="w-full flex flex-col mx-auto 2xl:max-w-7xl"
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| People on the World" textStyles="text-center" />

        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          className="relative w-full h-[550px] mt-16"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
        >
          <img
            className="w-full h-full object-cover"
            src="/map.png"
            alt="map"
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img className="w-full h-full" src="people-01.png" alt="people" />
          </div>

          <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img className="w-full h-full" src="/people-02.png" alt="people" />
          </div>

          <div className="absolute top-1/2 left-1/2 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img className="w-full h-full" src="people-03.png" alt="people" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
