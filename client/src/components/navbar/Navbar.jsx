import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import NavUser from "./NavUser";
import NavCategory from "./NavCategory";
import NavInput from "./NavInput";
import MobileMenu from "./MobileMenu";

export const TestNav = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 px-5 md:px-6 sticky top-0 z-20 ">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl hidden md:flex">
          Tarek Express
        </Link>
        <Link to={"/"} className="btn btn-ghost text-xl flex md:hidden">
          TE
        </Link>
        <NavCategory />
        <NavInput />
      </div>
      <div className=" hidden md:flex justify-start items-center gap-6 ">
        {/* shopping cart */}

        <div className="indicator mx-5">
          <Link to={"/checkout/cart"}>
            <span className="indicator-item badge badge-primary">1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
        </div>

        {/* profile picture and drop down */}
        <NavUser />
      </div>

      {/* shopping cart */}

      <div className="indicator block md:hidden">
        <Link to={`/checkout/cart`}>
          <span className="indicator-item badge badge-primary">1</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
};
