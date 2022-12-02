import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "../util/motion";

const Feedback = () => {
  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-6 mx-auto 2xl:max-w-7xl"
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          className="relative flex flex-[0.5] justify-end flex-col lg:max-w-[370px] gradient-05 p-4 sm:p-6 border border-[#6A6A6A] rounded-3xl"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
        >
          <div className="feedback-gradient" />

          <div>
            <h4 className="font-bold text-xl sm:text-3xl leading-9 sm:leading-10 text-white">
              Samantha
            </h4>

            <p className="mt-1 mb-6 font-normal text-white text-sm leading-4 sm:text-lg sm:leading-6">
              Founder Metaverus
            </p>

            <p className="font-normal text-white text-lg sm:text-2xl leading-8 sm:leading-10">
              “With the development of today's technology, metaverse is very
              useful for today's work, or can be called web 3.0. by using
              metaverse you can use it as anything”
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
        >
          <img
            className="w-full lg:h-[610px] min-h-[210px] object-cover rounded-[40px]"
            src="/planet-09.png"
            alt="planet-09"
          />

          <motion.div
            className="hidden lg:block absolute top-[3%] -left-[10%]"
            variants={zoomIn(0.4, 1)}
            initial="hidden"
            whileInView="show"
          >
            <img
              className="w-[155px] h-[155px] object-contain"
              src="/stamp.png"
              alt="stamp"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
