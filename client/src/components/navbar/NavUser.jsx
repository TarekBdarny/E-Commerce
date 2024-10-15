import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSettings, CiUser, CiLogout } from "react-icons/ci";
import { AnimatePresence, delay, motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { useUserContext } from "../../context/UserContext";
const staggerVariants = {
  initial: {
    opacity: 0,
    y: -100,
    transition: {
      delay: 1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: -1,
      delay: 0.5,
    },
  },
};
const itemVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const items = [
  {
    text: "Profile",
    to: "/settings/profile",
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
const NavUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

  return (
    <details
      className="dropdown dropdown-end"
      onClick={() => setIsOpen(!isOpen)}
    >
      <summary className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full flex justify-center items-center">
          <img
            alt="user profile"
            src={user?.profilePic || "https://i.pravatar.cc/300"}
          />
        </div>
      </summary>

      {/* {isOpen && ( */}
      <AnimatePresence>
        <motion.ul
          // tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          variants={staggerVariants}
          initial={false}
          animate={isOpen ? "visible" : "initial"}
          exit={"exit"}
        >
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/profile">
              Hello <span className="text-primary-hover">Tarek</span>
            </Link>
          </motion.li>

          <MenuItem menuItems={items} userMenu={true} />
        </motion.ul>
      </AnimatePresence>
      {/* )} */}
    </details>
  );
};

export default NavUser;
