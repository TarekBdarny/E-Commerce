import React, { useState } from "react";
import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber,
  card,
} from "creditcard.js";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import useCreateCreditCard from "../../hooks/card/useCreateCreditCard";

export const Payment = () => {
  // console.log(isValid("34343434343f"));
  // console.log(getCreditCardNameByNumber("5189540814443434")); // returns 'Visa'
  // console.log(isSecurityCodeValid("", "250")); // returns true
  // console.log(isExpirationDateValid("10", "24"));
  const [card, setCard] = useState({
    number: "",
    name: "",
    month: "",
    year: "",
    cvc: "",
    cardCompany: "",
  });
  const { createCreditCard } = useCreateCreditCard({ card });

  const handleClick = () => {
    setCard({
      ...card,
      cardCompany: getCreditCardNameByNumber(card.number),
    });
    if (!checkCardData()) return;

    createCreditCard();
  };
  const checkCardData = () => {
    if (!card.number || !card.name || !card.month || !card.year || !card.cvc) {
      toast.error("All fields are required");
      return false;
    }
    if (!isValid(card.number)) {
      toast.error("Invalid card number");
      return false;
    }
    if (!isExpirationDateValid(card.month, card.year)) {
      toast.error("Invalid expiration date");
      return false;
    }
    if (!isSecurityCodeValid(card.number, card.cvc)) {
      toast.error("Invalid security code");
      return false;
    }
    return true;
  };
  return (
    <div className=" flex items-center flex-col md:flex-row ">
      <div className="w-full min-h-[30vh] bg-[url('/bg-main-mobile.png')] md:min-h-screen md:w-[35%] md:bg-[url('/bg-main-desktop.png')] bg-cover bg-center relative">
        <div>
          <Link
            to={"/settings/payment"}
            className="absolute top-4 left-4 text-white p-2 tooltip tooltip-bottom"
            data-tip="Back"
          >
            <MdKeyboardDoubleArrowLeft className="size-8 text-primary-hover rounded-full hover:scale-110" />
          </Link>
        </div>
        <div className="absolute flex flex-col-reverse top-[40%]  left-[61%] md:top-[40%] md:left-[70%]  gap-0   md:flex-col md:gap-8  transform -translate-x-1/2 -translate-y-1/2">
          <CardFrontLayout cardData={card} />
          <CardBackLayout cardData={card} />
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center lg:mt-0 mt-6">
        <RightSection
          cardData={card}
          setData={setCard}
          handleClick={handleClick}
        />
      </div>
    </div>
    // <div className="flex items-center justify-center">
    //   <Test />
    // </div>
  );
};

export const CardFrontLayout = ({ cardData, cardLayout = false }) => {
  return (
    <div
      className={`relative  ${!cardLayout && "transform translate-y-10 -translate-x-[50px] lg:translate-x-[70px] md:translate-x-[50px] z-[100]"} lg:w-[300px] w-[280px] `}
    >
      <img
        src="/card-logo.svg"
        alt=""
        className="absolute top-4 left-4 w-[30px] md:w-[50px]"
      />

      <img
        src={`/${cardData.cardCompany === "" ? "Visa" : cardData.cardCompany}.svg`}
        alt=""
        className="absolute top-4 right-4 w-[50px]"
      />
      <div>
        {" "}
        <img
          src="/bg-card-front.png"
          alt="front card"
          className="lg:w-[300px] md:w-[280px]"
        />
        <h1 className="absolute text-white bottom-20 left-4 tracking-[2px] lg:text-lg">
          {cardData.number === ""
            ? "0000 0000 0000 0000"
            : cardData.number !== "" && cardLayout
              ? `************${cardData.lastFourDigits}`.replace(
                  /(.{4})/g,
                  "$1 ",
                )
              : cardData.number.replace(/(.{4})/g, "$1 ")}
        </h1>
        <div className="absolute bottom-8 left-4 right-12 flex text-white justify-between">
          <span>{cardData.name === "" ? "Jane Doe" : cardData.name}</span>
          <span>
            {" "}
            <span>{cardData.month === "" ? "00" : cardData.month}</span> /
            <span>{cardData.year === "" ? "00" : cardData.year}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const CardBackLayout = ({ cardData }) => {
  return (
    <div className="relative w-[280px] translate-y-[70px] md:-translate-x-10 lg:translate-x-10">
      <img
        src="/bg-card-back.png"
        alt="back card"
        className="md:w-[300px] w-[280px]"
      />
      <span className="absolute text-white opacity-75  right-[12%] top-[42%] ">
        {cardData.cvc === "" ? "000" : cardData.cvc}
      </span>
    </div>
  );
};

const RightSection = (props) => {
  const { cardData, setData, handleClick } = props;
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };
  const handleNumberInput = (e) => {
    if (e.target.value.length > 16) {
      setErrMsg("Card number must be 16 digits long");
    } else {
      setData((prev) => ({
        ...prev,
        number: e.target.value,
      }));
    }
  };
  return (
    <div className="w-full md:ml-10 mt-6 md:mt-0 lg:w-3/5 flex items-center justify-center py-8">
      <form className="grid gap-6 w-full max-w-md" onSubmit={handleSubmit}>
        <div className="col-span-2">
          <label
            htmlFor="card_name"
            className="text-very-dark-violet text-sm uppercase mb-1"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="card_name"
            value={cardData.name}
            autoComplete="off"
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="e.g. Jane Appleseed"
            required
            className="w-full p-2 border border-dark-grayish-violet rounded-md text-lg outline-none focus:border-primary focus:border-2"
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="card_number"
            className="text-very-dark-violet text-sm uppercase mb-1"
          >
            Card Number
          </label>
          <input
            type="number"
            id="card_number"
            value={cardData.number}
            onChange={handleNumberInput}
            placeholder="e.g. 1234 5678 9123 0000"
            required
            className="w-full p-2 border border-dark-grayish-violet rounded-md text-lg outline-none focus:border-primary focus:border-2"
          />
          {errMsg !== "" && <span className="p-2 text-red-500">{errMsg}</span>}
        </div>

        <div className="grid grid-cols-2 w-full gap-4">
          <div>
            <label
              htmlFor="exp_month"
              className="text-very-dark-violet text-sm uppercase mb-1"
            >
              Exp. Date (MM/YY)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                id="exp_month"
                value={cardData.month}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, month: e.target.value }))
                }
                placeholder="MM"
                required
                className="w-16 p-2 border border-dark-grayish-violet rounded-md text-lg outline-none focus:border-primary focus:border-2"
              />
              <input
                type="number"
                id="exp_year"
                value={cardData.year}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, year: e.target.value }))
                }
                placeholder="YY"
                required
                className="w-16 p-2 border border-dark-grayish-violet rounded-md text-lg outline-none focus:border-primary focus:border-2"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="card_cvc"
              className="text-very-dark-violet text-sm uppercase mb-1"
            >
              CVC
            </label>
            <input
              type="number"
              id="card_cvc"
              value={cardData.cvc}
              onChange={(e) =>
                setData((prev) => ({ ...prev, cvc: e.target.value }))
              }
              placeholder="e.g. 123"
              required
              className="w-full p-2 border border-dark-grayish-violet rounded-md text-lg outline-none focus:border-primary focus:border-2"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full btn  bg-primary hover:text-primary hover:bg-transparent hover:border-primary hover:border-2 hover:-translate-y-1 transition duration-200  text-white rounded-md text-lg "
              onClick={handleSubmit}
            >
              Add Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
