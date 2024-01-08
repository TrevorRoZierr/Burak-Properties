"use client";

import { useState } from "react";
import LinkNav from "./Links/LinkNav";
import { CgMenuLeftAlt } from "react-icons/cg";
import Mail from "./Links/Mail";
import LargeScreen from "./Links/LargeScreen";
import SmallScreen from "./Links/SmallScreen";

type Props = {};

const Navbar = (props: Props) => {
  const [menu, setMenu] = useState(<CgMenuLeftAlt />);

  const handleClick = () => {
    setMenu(<SmallScreen />);
  };

  return (
    <div className="w-full h-32 bg-white flex items-center">
      <div className="flex w-full justify-between">
        <h1 className="text-lg sm:text-3xl sm:ml-5 ml-4 mt-3">
          Burak Properties
        </h1>
        <div className="mr-2 sm:mr-10 flex flex-row p-2" onClick={handleClick}>
          <LinkNav actualLink={"/"} linkName={menu} />
          <LargeScreen />
          <div className="border-2 border-black ml-4 px-2 py-1 sm:px-3 sm:py-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-indigo-500 text-white">
            <Mail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
