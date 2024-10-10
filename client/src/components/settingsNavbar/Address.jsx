import React, { useEffect, useState } from "react";

import { getCode } from "country-list";
import { cities } from "country-cities";
import toast from "react-hot-toast";

import { useUserContext } from "../../context/UserContext";
import useUpdateAddress from "../../hooks/useUpdateAddress";

import { CiSearch } from "react-icons/ci";
import LoadingSpinner from "../../daisy/LoadingSpinner";

export const Address = () => {
  const { user } = useUserContext();
  const [data, setData] = useState({
    street: user?.street || "",
    city: user?.city || "",
    building: user?.building || "",
    apartmentNumber: user?.apartmentNumber || "",
  });
  const { updateAddress, loading } = useUpdateAddress({ data });
  const [countryCities, setCountryCities] = useState(
    cities.getByCountry(getCode(user?.country)) || ""
  );

  const handleClick = (e) => {
    if (!data.street || !data.city || !data.building || !data.apartmentNumber) {
      toast.error("Please fill all the fields");
      return;
    }
    updateAddress();
    e.preventDefault();
  };
  useEffect(() => {
    setCountryCities(cities.getByCountry(getCode(user?.country)) || "");
  }, [user]);
  return (
    <div className="flex flex-col gap-8 mt-10 flex-wrap">
      <form className="grid grid-cols-1 gap-5" onSubmit={handleClick}>
        {/* TODO: cities dropdown */}
        <CitiesDropDown
          data={countryCities}
          handleChange={(e) => setData({ ...data, city: e.target.value })}
        />
        <Inputs
          data={data}
          setData={setData}
          loading={false}
          handleSubmit={() => {}}
        />
        {/* TODO: Button */}
        <Button handleClick={handleClick} loading={loading} />
      </form>
    </div>
  );
};

const Inputs = (props) => {
  const { data, setData, loading, handleSubmit } = props;

  return (
    <>
      <label className="relative">
        <input
          type="text"
          className="group border outline-none p-2 text-md input2"
          autoComplete="off"
          id="street-change-input"
          value={data.street}
          onChange={(e) => setData({ ...data, street: e.target.value })}
        />
        <label
          htmlFor="street-change-input"
          className={`input-label2 ${data.street !== "" && "test-class2"}`}
        >
          Street
        </label>
      </label>
      <label className="relative">
        <input
          type="text"
          className="group border outline-none p-2 text-md input2"
          autoComplete="off"
          id="building-change-input"
          value={data.building}
          onChange={(e) => setData({ ...data, building: e.target.value })}
        />
        <label
          htmlFor="building-change-input"
          className={`input-label2 ${data.building !== "" && "test-class2"}`}
        >
          Building
        </label>
      </label>
      <label className="relative">
        <input
          type="text"
          className="group border outline-none p-2 text-md input2"
          autoComplete="off"
          id="apartmentNumber-change-input"
          value={data.apartmentNumber}
          onChange={(e) =>
            setData({ ...data, apartmentNumber: e.target.value })
          }
        />
        <label
          htmlFor="apartmentNumber-change-input"
          className={`input-label2 ${
            data.apartmentNumber !== "" && "test-class2"
          }`}
        >
          Apartment Number
        </label>
      </label>
    </>
  );
};
const CitiesDropDown = ({ data, handleChange }) => {
  const { user } = useUserContext();
  return (
    <>
      <select
        className="select select-bordered text-xl w-full h-16 border-black border-2 border-opacity-50 outline-none max-w-xs"
        onChange={handleChange}
        defaultValue={user?.city ? user?.city : "Select Your City"}
      >
        {data?.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </>
  );
};

const SearchInput = ({ setInputValue }) => {
  return (
    <label className="relative z-30">
      <input
        type="text"
        className="border w-full mt-2 rounded-lg p-2 px-8 outline-none"
        id="search-city-input"
        placeholder="Enter Country Name"
        autoComplete="off"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label
        htmlFor="search-city-input"
        className=" absolute top-1 left-0 mx-2 text-lg "
      >
        <CiSearch />
      </label>
    </label>
  );
};

const Button = ({ handleClick, loading }) => {
  return (
    <button
      className="btn bg-primary hover:bg-primary-hover transition duration-200 text-white"
      type="submit"
      onClick={handleClick}
    >
      {loading ? <LoadingSpinner /> : "Save"}
    </button>
  );
};
