import { motion } from "framer-motion";
import { navVariants } from "../util/motion";

const NavBar = () => {
  return (
    <motion.nav
      className="px-6 py-8 sm:px-16 relative"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="absolute inset-0 w-1/2 gradient-01" />

      <div className="w-full flex items-center justify-between mx-auto 2xl:max-w-7xl">
        <img
          className="w-6 h-6 object-contain"
          src="/search.svg"
          alt="search"
        />

        <h1 className="uppercase text-white text-xl leading-7 font-extrabold">
          metaversus
        </h1>

        <img className="w-6 h-6 object-contain" src="/menu.svg" alt="menu" />
      </div>
    </motion.nav>
  );
};

export default NavBar;
