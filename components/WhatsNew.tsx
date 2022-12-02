import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../util/motion";
import { TitleText, TypingText } from "./CustomText";
import { newFeatures } from "../util/constants";
import NewFeature from "./NewFeature";

const WhatsNew = () => {
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
          className="flex-[0.95] flex justify-center flex-col"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
        >
          <TypingText title="| Whats new?" />

          <TitleText title={<>What's new about Metaversus?</>} />

          <div className="flex flex-wrap items-center mt-12 gap-6">
            {newFeatures.map((feature) => (
              <NewFeature key={feature.title} feature={feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex items-center justify-center"
          variants={planetVariants("right")}
          initial="hidden"
          whileInView="show"
        >
          <img
            className="w-[90%] h-[90%] object-contain"
            src="/whats-new.png"
            alt="whats-new"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
