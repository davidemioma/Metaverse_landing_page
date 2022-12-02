import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../util/motion";

interface Props {
  title: string;
  textStyles?: string;
}

interface TitleProps {
  title: React.ReactNode;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: Props) => {
  return (
    <motion.p
      className={`${textStyles} font-normal text-secondary-white text-sm`}
      variants={textContainer}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyles }: TitleProps) => {
  return (
    <motion.h2
      className={`mt-2 ${textStyles} font-bold text-white text-4xl md:text-5xl leading-[60px]`}
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
    >
      {title}
    </motion.h2>
  );
};
