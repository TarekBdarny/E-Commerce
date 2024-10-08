import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import { CiIceCream } from "react-icons/ci";
import "./Dropdown.css"; // You can style the dropdown using a CSS file

export const Location = () => {
  const { countries } = useCountries();
  return (
    <div>
      <ImageDropdown />
    </div>
  );
};

const LocationSelect = () => {
  const { countries } = useCountries();

  return (
    <div className="w-[300px]">
      <div className="select w-full relative">
        <div className="w-full absolute">
          <p>hello</p>
          <p>User</p>
        </div>
      </div>
    </div>
  );
};

const Item = ({ name, flag }) => {
  return (
    <div>
      <img src={flag} alt="" className="w-10 h-10 rounded-full " />
      <p>{name}</p>
    </div>
  );
};

function ImageDropdown() {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 1, label: "Option 1", image: "path_to_image1.jpg" },
    { id: 2, label: "Option 2", image: "path_to_image2.jpg" },
    { id: 3, label: "Option 3", image: "path_to_image3.jpg" },
  ];

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header">
        {selected ? (
          <div>
            <img src={selected.image} alt={selected.label} width="30" />{" "}
            {selected.label}
          </div>
        ) : (
          "Select an option"
        )}
      </div>
      <div className="dropdown-body">
        {options.map((option) => (
          <div
            key={option.id}
            className="dropdown-item"
            onClick={() => setSelected(option)}
          >
            <img src={option.image} alt={option.label} width="30" />{" "}
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDropdown;
