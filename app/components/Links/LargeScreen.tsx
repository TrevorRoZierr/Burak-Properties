import Link from "next/link";
import React from "react";

type Props = {};

const LargeScreen = (props: Props) => {
  return (
    <div className="hidden sm:flex sm:text-xl sm:mt-5 sm:ml-[400px]">
      <Link
        href="/"
        className="sm:mr-8 sm:hover:text-2xl duration-500 hover:text-indigo-700"
      >
        Training
      </Link>
      <Link
        href="/"
        className="sm:mr-8 sm:hover:text-2xl duration-500 hover:text-green-700"
      >
        Opportunites
      </Link>
      <Link
        href="/"
        className="sm:mr-8 sm:hover:text-2xl duration-500 hover:text-pink-600"
      >
        Services
      </Link>
      <Link
        href="/"
        className="sm:mr-8 sm:hover:text-2xl duration-500 hover:text-blue-600"
      >
        About
      </Link>
    </div>
  );
};

export default LargeScreen;
