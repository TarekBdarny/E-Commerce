import React, { useEffect, useState } from "react";
import { useCountries } from "use-react-countries";
import { useUserContext } from "../../context/UserContext";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp, IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import { motion } from "framer-motion";
import countryToCurrency from "country-to-currency";
import NavCurrency from "./NavCurrency";
import { getCode, getCodes } from "country-list";
import useUpdateCountry from "../../hooks/useUpdateCountry";
import Modal from "../../daisy/Modal";
export const Location = () => {
  return (
    <div className="flex flex-col  gap-16">
      <ImageDropdown />
      <NavCurrency />
    </div>
  );
};
const ImageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const { countries } = useCountries();
  const { updateCountry } = useUpdateCountry({
    country: selected?.name,
    flag: selected?.flag,
  });

  const { user } = useUserContext();

  useEffect(() => {
    setInputValue("");
  }, [selected]);
  return (
    <div className="relative w-[250px] md:w-[300px] mt-5">
      <p className="my-2">Choose a Country</p>
      <div
        className="border border-black cursor-pointer p-2 flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="h-[30px] flex items-center w-full">
          {user?.country !== "" ? (
            <Item name={user?.country} flag={user?.flag} />
          ) : (
            <p>Select a Country</p>
          )}
        </div>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {open && <SearchInput setInputValue={setInputValue} />}
      <div
        className={`absolute mt-2 p-2 rounded-lg  bg-base-200 w-full shadow-lg  z-20 ${
          open ? "block" : "hidden"
        } h-[320px] overflow-y-scroll`}
      >
        {inputValue === ""
          ? countries.map(({ name, flags }) => (
              <Item
                key={name}
                name={name}
                flag={flags.png}
                dropdown
                onClick={() => setOpen((pv) => !pv)}
                setSelected={setSelected}
              />
            ))
          : countries
              .filter((country) =>
                country.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map(({ name, flags }) => (
                <Item
                  key={name}
                  name={name}
                  flag={flags.png}
                  dropdown
                  onClick={() => setOpen((pv) => !pv)}
                  setSelected={setSelected}
                />
              ))}
      </div>
      <Modal country func={updateCountry} />
    </div>
  );
};

const Item = (props) => {
  const { name, flag, dropdown, onClick, setSelected } = props;
  const { user } = useUserContext();
  // const handleSelect = () => {
  //   updateCountry();
  // };
  const handleClick = () => {
    onClick();
    document.getElementById("my_modal_3").showModal();
    setSelected({ name, flag });
  };
  return (
    <>
      <div className="flex p-2">
        <motion.div
          className={`flex items-center ${
            dropdown && "p-2"
          } rounded-md gap-2 w-full cursor-pointer relative`}
          onClick={() => dropdown && handleClick()}
          whileHover={dropdown && { scale: 1.1, background: "lightgray" }}
          whileTap={dropdown && { scale: 0.9 }}
          transition={dropdown && { duration: 0.2 }}
        >
          <img src={flag} alt="" className="size-7 rounded-full " />
          <p>{name}</p>
          {dropdown && user?.country === name && (
            <IoIosCheckmark className="text-2xl absolute right-0" />
          )}
        </motion.div>
      </div>
    </>
  );
};

const SearchInput = ({ setInputValue }) => {
  return (
    <label className="relative">
      <input
        type="text"
        className="border w-full mt-2 rounded-lg p-2 px-8 outline-none"
        id="search-country-input"
        placeholder="Enter Country Name"
        autoComplete="off"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label
        htmlFor="search-country-input"
        className=" absolute top-1 left-0 mx-2 text-lg "
      >
        <CiSearch />
      </label>
    </label>
  );
};

export default ImageDropdown;
