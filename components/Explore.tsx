import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../util/motion";
import { TitleText, TypingText } from "./CustomText";
import { exploreWorlds } from "../util/constants";
import ExploreCards from "./ExploreCards";

const Explore = () => {
  const [active, setActive] = useState<string>("world-2");

  return (
    <section id="explore" className="px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        className="w-full flex flex-col mx-auto 2xl:max-w-7xl"
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| The World" textStyles="text-center" />

        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />

        <div className="flex flex-col lg:flex-row gap-5 mt-12 min-h-[70vh]">
          {exploreWorlds.map((world, i) => (
            <ExploreCards
              key={world.id}
              world={world}
              index={i}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
