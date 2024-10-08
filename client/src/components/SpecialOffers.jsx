import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";

const SpecialOffers = ({
  heading,
  content,
  isNewUser,
  use = "newUserOffers",
}) => {
  return (
    <div className="w-full bg-primary-hover flex items-center justify-between gap-2 py-4 px-4 md:px-6">
      <h1 className="md:text-xl">Welcome Back, User</h1>
      <p className="md:text-lg ">
        {heading}
        {use === "newUserOffers" && (
          <CiDiscount1 className="inline mx-2 scale-125" />
        )}
      </p>
      <p className="md:text-lg">
        {content}
        {use === "newUserOffers" && (
          <LiaShippingFastSolid className="inline mx-2 " />
        )}
      </p>
      {/* {isNewUser && <p>new user</p>} */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> */}
    </div>
  );
};

export default SpecialOffers;
