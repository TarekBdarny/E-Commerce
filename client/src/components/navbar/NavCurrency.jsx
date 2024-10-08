import React, { useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CurrencyFlag from "react-currency-flags";
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
      staggerChildren: 0.3,
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
const NavCurrency = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className="dropdown hidden lg:block">
      <summary className="btn m-1" onClick={() => setIsOpen(!isOpen)}>
        Currency
        <MdCurrencyExchange />
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </summary>
      {isOpen && (
        <motion.ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          variants={staggerVariants}
          initial="initial"
          animate="visible"
          exit={"initial"}
        >
          <p>change currency</p>
          <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <p>Item 1</p>
          </motion.li>
          <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <a>Item 2</a>
          </motion.li>
          <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
            <span>
              <CurrencyFlag currency="USD" size="lg" />
              USD
            </span>
          </motion.li>
        </motion.ul>
      )}
    </details>
  );
};

export default NavCurrency;
