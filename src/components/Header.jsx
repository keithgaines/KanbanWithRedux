import React, { useState } from "react";
import logo from "../assets/logo-mobile.svg";
import iconDown from "../assets/icon-chevron-down.svg";
import iconUp from "../assets/icon-chevron-up.svg";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import HeaderDropdown from "./HeaderDropdown";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown((prevState) => !prevState);
  };

  return (
    <header className="p-4 fixed left-0 z-50 right-0 bg-gray-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={logo} alt="logo" className="h-6 w-6" />
          <h3 className="hidden md:inline-block font-bold font-sans md:text-4xl text-white">
            Kanban
          </h3>
          <h3 className="truncate maxw-[200px] md:text-2xl text-zl font-bold md:ml-20 font-sans text-gray-300">
            board Name
          </h3>
          <img
            src={openDropdown ? iconUp : iconDown}
            alt="dropdown icon"
            className="w-3 ml-2 cursor-pointer"
            onClick={toggleDropdown}
          />
        </div>
        <div className="flex space-x-4 items-center md:space-x-6">
          <button className="hidden md:block button text-white bg-[#635fc7] hover:bg-[#4d49a3]">
            + Add New Task
          </button>
          <div className="w-4"></div>{" "}
          <button className="button py-1 px-3 md:hidden hover:bg-gray-200 bg-[#635fc7] hover:bg-[#4d49a3]">
            +
          </button>
          <img src={ellipsis} alt="ellipsis" className="cursor-pointer h-6" />
        </div>
      </div>
      {openDropdown && <HeaderDropdown setOpenDropdown={toggleDropdown} />}
    </header>
  );
}

export default Header;
