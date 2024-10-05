import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    width: "70%",
    height: 40,
  },
};
const NavInput = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <label
      htmlFor=""
      className="relative items-center mx-6 flex-1 hidden md:flex"
    >
      {isSearching && (
        <motion.input
          type="text"
          id="search-input"
          placeholder="Unleash your thoughts"
          className=" px-8 border-b-2 border-primary-hover  h-10 outline-none bg-transparent placeholder:text-gray-500"
          variants={variants}
          initial="initial"
          animate="visible"
          exit={"initial"}
          transition={{ duration: 0.5 }}
        />
      )}

      <label
        htmlFor="search-input"
        className="absolute left-0 mx-2 cursor-pointer"
        onClick={() => setIsSearching(!isSearching)}
      >
        <CiSearch />
      </label>
    </label>
  );
};

export default NavInput;
