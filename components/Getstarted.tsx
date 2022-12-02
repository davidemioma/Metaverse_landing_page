import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../util/motion";
import { TitleText, TypingText } from "./CustomText";
import { startingFeatures } from "../util/constants";
import StartSteps from "./StartSteps";

const Getstarted = () => {
  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-8 mx-auto 2xl:max-w-7xl"
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          className="flex-1 flex items-center justify-center"
          variants={planetVariants("left")}
          initial="hidden"
          whileInView="show"
        >
          <img
            className="w-[90%] h-[90%] object-contain"
            src="/get-started.png"
            alt="get-started"
          />
        </motion.div>

        <motion.div
          className="flex-[0.75] flex justify-center flex-col"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
        >
          <TypingText title="| How Metaversus Works" />

          <TitleText title={<>Get started with just a few clicks</>} />

          <div className="flex flex-col gap-6 mt-8 max-w-[370px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Getstarted;
