import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../util/motion";

interface props {
  insight: {
    imgUrl: string;
    title: string;
    subtitle: string;
  };
  index: number;
}

const Insightcard = ({ index, insight }: props) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4"
      variants={fadeIn("up", "sprind", 0.5 * index, 1)}
      initial="hidden"
      whileInView="show"
    >
      <img
        className="w-full h-[250px] md:w-[270px] rounded-3xl object-cover"
        src={insight.imgUrl}
        alt={insight.title}
      />

      <div className="w-full flex items-center justify-between">
        <div className="flex-1 flex flex-col max-w-xl md:ml-14">
          <h1 className="text-white font-normal text-xl lg:text-4xl mb-4">
            {insight.title}
          </h1>

          <p className="font-normal text-sm text-secondary-white lg:text-lg">
            {insight.subtitle}
          </p>
        </div>

        <div className="hidden bg-transparent w-[100px] h-[100px] lg:flex items-center justify-center rounded-full border border-white">
          <img className="" src="/arrow.svg" alt="arrow" />
        </div>
      </div>
    </motion.div>
  );
};

export default Insightcard;
