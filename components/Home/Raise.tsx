import Image from "next/image";
import React from "react";
import greensvg from "../../assets/svg/green_lady.svg";

const Raise = () => {
  return (
    <>
      <div className="flex justify-evenly items-center p-10 py-24">
        <div className="flex flex-col justify-start gap-5 w-1/3">
          <div className="font-bold text-4xl">
            Looking to raise capital for green initiatives?
          </div>
          <div className="font-normal text-xl text-gray-400">
            Whether expanding or opening a brand-new concept, we make it easy to
            raise money from thousands of local sustainability driven investors.
          </div>
          <button className="text-white bg-green-700 hover:bg-green-800 p-5 w-52">
            Apply Online
          </button>
        </div>
        <Image src={greensvg} height={500} width={500} alt="Invest" />
      </div>
    </>
  );
};

export default Raise;
