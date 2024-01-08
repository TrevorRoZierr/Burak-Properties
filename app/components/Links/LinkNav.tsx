"use client";

import Link from "next/link";
import { ReactComponentElement, useState } from "react";

const LinkNav = (props: {
  actualLink: string;
  linkName: string | ReactComponentElement<any>;
}) => {
  const [isActive, setIsActive] = useState(false);

  const changeStyle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={changeStyle}
      className={`mt-2 ml-12 sm:mr-10 flex flex-row bg-[#CCFF00] sm:border-0 border-2 border-black rounded px-1 sm:p-0 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] ${
        isActive ? "border-0 shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" : ""
      }`}
    >
      <Link className="font-bold text-3xl sm:hidden" href={props.actualLink}>
        {props.linkName}
      </Link>
    </div>
  );
};

export default LinkNav;
