import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

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
    <label htmlFor="" className={`relative items-center mx-6 flex-1 flex  `}>
      <AnimatePresence>
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
      </AnimatePresence>

      <label
        htmlFor="search-input"
        className={`absolute left-0 mx-2 cursor-pointer transition duration-300 ${
          !isSearching && "hover:bg-slate-200 p-2 rounded-full"
        }`}
        onClick={() => setIsSearching(!isSearching)}
      >
        <CiSearch />
      </label>
      {isSearching && (
        <motion.div
          className="dropdown dropdown-content  bg-base-100  z-[1] w-[70%] min-h-[100px] p-2 shadow absolute top-10 search-input"
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}

      {/* <div className="w-full h-24 bg-indigo-400 z-10 "></div> */}
    </label>
  );
};

export default NavInput;
