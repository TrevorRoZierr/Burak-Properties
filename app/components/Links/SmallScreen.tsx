import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
type Props = {};

const SmallScreen = (props: Props) => {

  const refreshSite = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center flex-col sm:hidden absolute top-[100px] right-2 w-[130px] h-[200px] text-xs ease-in duration-500">
      <ul className="px-2 py-5 font-semibold border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-pink-500 text-white">
        <li>
          <Link href="/">Training</Link>
        </li>
        <br></br>
        <li>
          <Link href="/">Opportunities</Link>
        </li>
        <br></br>
        <li>
          <Link href="/">Services</Link>
        </li>
        <br></br>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
      <div className="flex justify-center items-center text-center mt-2 text-2xl bg-black rounded-full font-bold">
        <button className="text-white p-1" onClick={refreshSite}>
          <IoCloseOutline />
        </button>
      </div>
    </div>
  );
};

export default SmallScreen;
