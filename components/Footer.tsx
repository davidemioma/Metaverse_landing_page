import React from "react";
import { motion } from "framer-motion";
import { footerVariants } from "../util/motion";
import { socials } from "../util/constants";

const Footer = () => {
  return (
    <motion.footer
      className="relative px-6 py-8 sm:px-16"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="footer-gradient" />

      <div className="w-full flex flex-col gap-8 mx-auto 2xl:max-w-7xl">
        <div className="flex items-center justify-between gap-5 flex-wrap pb-10 border-b border-gray-700">
          <h4 className="font-bold text-4xl md:text-6xl text-white">
            Enter the Metaverse
          </h4>

          <button className="bg-[#25618B] flex items-center gap-3 px-6 py-3 rounded-3xl">
            <img
              className="w-6 h-6 object-contain"
              src="/headset.svg"
              alt="headset"
            />
            <span className="font-normal text-white text-base">
              Enter Metaverse
            </span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h4 className="font-extrabold text-xl text-white">METAVERUS</h4>

          <p className="font-normal text-sm text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <img
                className="w-6 h-6 object-contain cursor-pointer"
                key={social.name}
                src={social.url}
                alt={social.name}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
