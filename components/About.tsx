import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../util/motion";
import { TypingText } from "./CustomText";

const About = () => {
  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8 ">
      <div className="absolute top-0 right-0 z-0 w-52 h-[438px] bg-[#7aebfb] blur-[190px]" />

      <motion.div
        className="w-full mx-auto flex flex-col items-center justify-center 2xl:max-w-7xl"
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />

        <motion.p
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>

        <motion.img
          className="w-[18px] h-[28px] object-contain mt-[28px]"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          src="/arrow-down.svg"
          alt="arrow down"
        />
      </motion.div>
    </section>
  );
};

export default About;
