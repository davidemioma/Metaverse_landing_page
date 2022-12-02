import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../util/motion";

interface Props {
  world: {
    id: string;
    imgUrl: string;
    title: string;
  };
  index: number;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const ExploreCards = ({ world, index, active, setActive }: Props) => {
  return (
    <motion.div
      className={`relative ${
        active === world.id
          ? "flex-[10] lg:flex-[3.5]"
          : "flex-[2] lg:flex-[0.5]"
      } flex items-center justify-center h-[700px] min-w-[170px] transition-[flex] duration-[0.75s] ease-out-flex cursor-pointer`}
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      onClick={() => setActive(world.id)}
    >
      <img
        className="absolute w-full h-full object-cover rounded-3xl"
        src={world.imgUrl}
        alt={world.title}
      />

      {active !== world.id ? (
        <h3 className="absolute lg:bottom-24 text-white font-semibold text-lg sm:text-2xl lg:-rotate-90">
          {world.title}
        </h3>
      ) : (
        <div className="absolute w-full bottom-0 p-8 flex flex-col bg-black/30 rounded-b-3xl">
          <div className="glassmorphism w-[60px] h-[60px] flex items-center justify-center rounded-3xl">
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/headset.svg"
              alt="headset"
            />
          </div>

          <p className="my-4 text-white font-normal uppercase text-base leading-5">
            Enter the metaverse
          </p>

          <h3 className="text-white font-semibold text-lg sm:text-2xl">
            {world.title}
          </h3>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCards;
