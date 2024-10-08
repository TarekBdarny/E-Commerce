import React from "react";
import MenuItem from "../components/navbar/MenuItem";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CiUser,
  CiHeart,
  CiLocationOn,
  CiTimer,
  CiGlobe,
  CiCreditCard1,
  CiShop,
} from "react-icons/ci";

const Settings = () => {
  const menuItems = [
    {
      text: "Profile",
      to: "/settings/profile",
      icon: <CiUser />,
    },
    {
      text: "Wishlist",
      to: "/settings/wishlist",
      icon: <CiHeart />,
    },
    {
      text: "Address",
      to: "/settings/address",
      icon: <CiLocationOn />,
    },
    {
      text: "Location",
      to: "/settings/location",
      icon: <CiGlobe />,
    },
    {
      text: "Browsing History",
      to: "/settings/history",
      icon: <CiTimer />,
    },
    {
      text: "Payment",
      to: "/settings/payment",
      icon: <CiCreditCard1 />,
    },
    {
      text: "Business Account",
      to: "/settings/business",
      icon: <CiShop />,
    },
  ];
  return (
    <>
      <nav className="absolute top-16 bottom-0 left-0  flex flex-col items-center bg-base-200 py-4  ">
        <motion.ul className="w-full flex flex-col gap-2 menu mt-12">
          <MenuItem menuItems={menuItems} setting={true} />
        </motion.ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Settings;
