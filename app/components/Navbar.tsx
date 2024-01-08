"use client";

import { useState } from "react";
import LinkNav from "./Links/LinkNav";
import { IoIosMenu } from "react-icons/io";
import Mail from "./Links/Mail";
import LargeScreen from "./Links/LargeScreen";
import SmallScreen from "./Links/SmallScreen";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [menu, setMenu] = useState(<IoIosMenu />);

  const handleClick = () => {
    setMenu(<SmallScreen />);
  };

  return (
    <div className="w-full h-32 bg-white flex items-center">
      <div className="flex w-full justify-between">
        <Link
          href="/"
          className="text-md upper sm:text-3xl sm:ml-5 ml-2 mt-3 font-semibold"
        >
          <span className="text-2xl sm:text-5xl sm:mr-0.5">B</span>urak{" "}
          <span className="text-2xl sm:text-5xl sm:mr-0.5">S</span>olutions
        </Link>
        <div
          className=""
          onClick={handleClick}
        >
          <LinkNav actualLink={"/"} linkName={menu} />
        </div>
        <div className="ml-1">
          <LargeScreen />
        </div>
        <div className="border-2 border-black mr-3 sm:mr-5 text-md px-2 py-1 sm:px-5 sm:py-3 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-indigo-500 text-white cursor-pointer">
          <Mail />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
