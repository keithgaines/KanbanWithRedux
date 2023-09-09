import React, { useState } from "react";
import logo from "../assets/logo-mobile.svg";
import iconDown from "../assets/icon-chevron-down.svg";
import iconUp from "../assets/icon-chevron-up.svg";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";

function Header() {
  const [openDropdown, setOpenDropown] = useState(false);

  return (
    <div className="p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0">
      <header className="flex justify-between dark:text-white items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={logo} alt="logo" className="h-6 w-6" />
          <h3 className="hidden md:inline-block font-bold font-sans md:text-4xl">
            Kanban
          </h3>

          <h3 className="truncate maxw-[200px] md:text-2xl text-zl font-bold md:ml-20 font-sans">
            board Name
          </h3>
          <img
            src={openDropdown ? iconUp : iconDown}
            alt="dropdown icon"
            className="w-3 ml-2 cursor-pointer md:hidden"
            onClick={() => setOpenDropown((state) => !state)}
          />
        </div>

        <div className="flex space-x4 items-center md:space-x-6">
          <button className="button ">+ Add New Task</button>

          <button className="button py-1 px-3 md:hidden">+</button>

          <img src={ellipsis} alt="ellipsis" className="cursor-pointer h-6" />
        </div>
      </header>
    </div>
  );
}

export default Header;
