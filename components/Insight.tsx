import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../util/motion";
import { TitleText, TypingText } from "./CustomText";
import { insights } from "../util/constants";
import Insightcard from "./Insightcard";

const Insight = () => {
  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        className="w-full flex flex-col mx-auto 2xl:max-w-7xl"
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| Insight" textStyles="text-center" />

        <TitleText
          title={<>Insight about metaverse</>}
          textStyles="text-center"
        />

        <div className="flex flex-col gap-7 mt-12">
          {insights.map((insight, i) => (
            <Insightcard key={`insight-${i}`} index={i + 1} insight={insight} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insight;
