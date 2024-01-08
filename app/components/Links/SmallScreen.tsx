import React from "react";

type Props = {};

const SmallScreen = (props: Props) => {
  return (
    <div className="flex items-center flex-col sm:hidden absolute top-[100px] right-1 w-[130px] h-[200px] text-xs ease-in duration-500">
      <ul className="px-4 py-5" style={{ border: "1px solid black" }}>
        <li>One Way</li>
        <li>RBS</li>
      </ul>
    </div>
  );
};

export default SmallScreen;
