import { motion } from "framer-motion";
import { CiLogout, CiSettings, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
const MenuItem = ({ menuItems, userMenu = false, setting = false }) => {
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
  return menuItems.map((item, index) => (
    <motion.li
      variants={userMenu ? itemVariants : variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      key={index}
      className=""
    >
      <Link to={item.to} className=" flex items-center gap-2 text-lg mx-4">
        {item.icon} {item.text}
      </Link>
    </motion.li>
  ));
};

export default MenuItem;
