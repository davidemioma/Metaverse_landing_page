import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../util/motion";

const Hero = () => {
  return (
    <section className="py-8 pl-6 sm:pl-16 sm:py-16">
      <motion.div
        className="w-full flex flex-col mx-auto 2xl:max-w-7xl"
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="relative flex flex-col items-center justify-center">
          <motion.h1 className="heroHeading" variants={textVariant(1.1)}>
            Metaverse
          </motion.h1>

          <motion.div className="flex items-center" variants={textVariant(1.2)}>
            <h1 className="heroHeading">ma</h1>

            <div className="heroDtext" />

            <h1 className="heroHeading">ness</h1>
          </motion.div>

          <motion.div
            className="relative w-full -mt-3 md:-mt-5"
            variants={slideIn("right", "tween", 0.2, 1)}
          >
            <div className="absolute hero-gradient w-full h-80 rounded-tl-[140px] z-0 -top-1 md:-top-8" />

            <img
              className="w-full h-80 md:h-[500px] rounded-tl-[140px] z-10 object-cover relative"
              src="/cover.png"
              alt="hero_cover"
            />

            <a href="#explore">
              <div className="w-full relative z-10 -mt-12 sm:-mt-[70px] pr-10 flex justify-end">
                <img
                  className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                  src="/stamp.png"
                  alt="stamp"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
