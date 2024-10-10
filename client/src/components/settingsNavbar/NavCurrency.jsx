import React, { useEffect, useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CurrencyFlag from "react-currency-flags";
import { motion } from "framer-motion";
import { useCountries } from "use-react-countries";
import { useUserContext } from "../../context/UserContext";
import countryToCurrency from "country-to-currency";
import { getCode } from "country-list";
import useUpdateCurrency from "../../hooks/useUpdateCurrency";

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
  const [wantedCountries, setWantedCountries] = useState([]);
  const [selected, setSelected] = useState(null);
  const { countries } = useCountries();
  const { user } = useUserContext();
  // console.log(countryToCurrency[getCode(tempName)]);
  const temp = {};
  useEffect(() => {
    const filterCountries = () => {
      let tempName = "";
      const validCountry = countries.map((country) =>
        country.name === user?.country ? true : false
      );
      if (user?.country !== "" && validCountry) {
        tempName = user?.country;
      }
      setWantedCountries(
        countries.filter(
          (country) =>
            (country.name === tempName && tempName !== "") ||
            country.name === "United States" ||
            country.name === "United Kingdom" ||
            (country.name === "Canada" && country)
        )
      );
      console.log(wantedCountries);
    };
    filterCountries();
  }, [user]);

  const getCurrencyData = (currency) => {
    let data = [];
    if (currency === "USD") {
      data = wantedCountries.filter(
        (country) => country.name === "United States" && country
      );
    } else if (currency === "GBP") {
      data = wantedCountries.filter(
        (country) => country.name === "United Kingdom" && country
      );
    } else if (currency === "CAD") {
      data = wantedCountries.filter(
        (country) => country.name === "Canada" && country
      );
    } else {
      data = wantedCountries.filter(
        (country) => country.name === user?.country && country
      );
    }
    return data;
  };

  return (
    <div className="relative w-[250px] md:w-[300px] mt-5">
      <p className="my-2">Choose a Currency</p>
      <div
        className="border border-black cursor-pointer p-2 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-[30px] flex items-center ">
          <div className="flex items-center gap-2">
            {
              <Item
                name={getCurrencyData(user?.currency)[0]?.name}
                flag={getCurrencyData(user?.currency)[0]?.flags.png}
              />
            }
          </div>
        </div>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      <div
        className={`absolute mt-2 p-2 flex flex-col rounded-lg  bg-base-200 w-full shadow-lg  z-20 ${
          isOpen ? "block" : "hidden"
        } h-[320px] overflow-y-scroll`}
      >
        {wantedCountries.map(({ name, flags }) => (
          <Item
            key={name}
            name={name}
            flag={flags.png}
            onClick={() => setIsOpen((pv) => !pv)}
            dropdown
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

const Item = (props) => {
  const { name, flag, dropdown, setSelected, onClick } = props;
  let tempName =
    name === "United States"
      ? "United States of America"
      : name === "United Kingdom"
      ? "United Kingdom of Great Britain and Northern Ireland"
      : name;

  let validCurrency =
    countryToCurrency[getCode(tempName === undefined ? "" : tempName)];
  const { updateCurrency } = useUpdateCurrency({ currency: validCurrency });
  const currencySign = {
    "United States": "$",
    "United Kingdom": "£",
    Canada: "$",
  };
  const handleUpdate = () => {
    setSelected({ name, flag });
    onClick();
    updateCurrency();
  };
  return (
    <motion.div
      className="flex items-center gap-2 m-2 rounded-lg cursor-pointer p-2"
      whileHover={dropdown && { scale: 1.1, background: "lightgray" }}
      whileTap={dropdown && { scale: 0.9 }}
      onClick={dropdown && handleUpdate}
    >
      <img
        src={flag}
        alt="United States flag"
        className="size-8 rounded-full"
      />
      <div className="flex justify-between w-full gap-10 items-center">
        <p>{name}</p>
        <small>
          {validCurrency} {}
        </small>
      </div>
    </motion.div>
  );
};
export default NavCurrency;
