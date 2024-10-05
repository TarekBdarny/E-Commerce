import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSettings, CiUser, CiLogout } from "react-icons/ci";
import { motion } from "framer-motion";
const staggerVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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
const NavUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className="flex-none gap-2 px-4">
    //   <div className="dropdown dropdown-end" onClick={() => setIsOpen(!isOpen)}>
    //     <div
    //       tabIndex={0}
    //       role="button"
    //       className="btn btn-ghost btn-circle avatar"
    //     >
    //       <div className="w-10 rounded-full">
    //         <img
    //           alt="profile picture"
    //           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    //         />
    //       </div>
    //     </div>
    //     {isOpen && (
    //       <motion.ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //         variants={staggerVariants}
    //         initial="initial"
    //         animate="visible"
    //         exit={"initial"}
    //       >
    //         <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
    //           <Link>
    //             {" "}
    //             hello <span className="text-primary">User </span>
    //           </Link>
    //         </motion.li>
    //         <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
    //           <Link className="">
    //             <CiUser />
    //             Profile
    //           </Link>
    //         </motion.li>
    //         <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
    //           <Link>
    //             <CiSettings />
    //             Settings
    //           </Link>
    //         </motion.li>
    //         <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
    //           <Link>
    //             <CiLogout />
    //             Logout
    //           </Link>
    //         </motion.li>
    //       </motion.ul>
    //     )}
    //   </div>
    // </div>
    <details
      className="dropdown dropdown-end"
      onClick={() => setIsOpen(!isOpen)}
    >
      <summary className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </summary>
      {isOpen && (
        <motion.ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          variants={staggerVariants}
          initial="initial"
          animate="visible"
          exit={"initial"}
        >
          <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <Link>
              {" "}
              hello <span className="text-primary">User </span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <Link className="">
              <CiUser />
              Profile
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <Link>
              <CiSettings />
              Settings
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <Link>
              <CiLogout />
              Logout
            </Link>
          </motion.li>
        </motion.ul>
      )}
    </details>
  );
};

export default NavUser;
