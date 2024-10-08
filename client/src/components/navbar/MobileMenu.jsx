import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { CiSettings, CiUser, CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const menuVariants = {
  initial: {
    height: 0,
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  visible: {
    height: "100vh",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.6 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const items = [
  {
    text: "Profile",
    to: "/profile",
    icon: <CiUser />,
  },
  {
    text: "Settings",
    to: "/settings",
    icon: <CiSettings />,
  },
  {
    text: "Logout",
    to: "/logout",
    icon: <CiLogout />,
  },
];
const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="block md:hidden">
      <button
        className={`p-4 z-20 ml-4 cursor-pointer block md:hidden transition duration-200 ease-in-out rounded-full  hover:bg-slate-300`}
        onClick={() => setActive(!active)}
      >
        {active ? (
          <IoCloseOutline className="text-black" />
        ) : (
          <CiMenuBurger className="text-black" />
        )}
      </button>

      <AnimatePresence>
        <motion.nav
          className="absolute top-0 bottom-0 right-0 origin-top   -z-20  bg-indigo-300  "
          style={{ width: 300 }}
          variants={menuVariants}
          initial={false}
          animate={`${!active ? "initial" : "visible"}`}
          exit={"initial"}
        >
          <motion.ul
            variants={variants}
            initial={false}
            animate={!active ? "closed" : "open"}
            exit={"exit"}
          >
            {items.map((_, idx) => (
              <MenuItem key={idx} idx={idx} />
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
};

const MenuItem = ({ idx }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={items[idx].to} className=" flex gap-2 text-lg mx-4">
        {" "}
        {items[idx].icon} {items[idx].text}
      </Link>
    </motion.li>
  );
};
export default MobileMenu;
