import React from "react";
import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber,
} from "creditcard.js";

export const Payment = () => {
  // console.log(isValid("34343434343f"));
  // console.log(getCreditCardNameByNumber("5189540814443434")); // returns 'Visa'
  // console.log(isSecurityCodeValid("", "250")); // returns true
  console.log(isExpirationDateValid("10", "24"));
  return (
    <div>
      <CardForm />
    </div>
  );
};

const CardLayout = () => {
  return (
    <div className="card w-96 h-48 bg-base-100 shadow-xl relative -top-16">
      <img
        src="/visa.svg"
        alt="card company"
        className="size-12 m-2 absolute right-0"
      />
      <div className=" mx-5 absolute top-1/2 -translate-y-1/2 flex flex-col gap-2 justify-between w-full">
        <p>card number</p>
        <div className="flex ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6].map((n, index) => (
            <span key={index} className="bg-base-200  text-center  mx-1">
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className="m-3 p-2 absolute bottom-0 w-full flex justify-between">
        <div>
          <p>holder name</p>
          <p>John Doe</p>
        </div>
        <div className="mr-3">
          <p>expiration date</p>
          <p>10/24</p>
        </div>
      </div>
    </div>
  );
};

const CardForm = () => {
  return (
    <form className="relative w-[500px] h-[400px] bg-base-200 mt-10 flex flex-col  items-center rounded-lg">
      <div>
        <CardLayout />
      </div>
      <div className="absolute top-1/2 left-2">
        <input type="text" className="w-full h-10 border-2" />
      </div>
    </form>
  );
};
