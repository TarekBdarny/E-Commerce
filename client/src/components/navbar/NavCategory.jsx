import React from "react";

const NavCategory = () => {
  return (
    <div className="dropdown hidden lg:block">
      <div tabIndex={0} role="button" className="btn m-1">
        Categories
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default NavCategory;
