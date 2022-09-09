import React from "react";
import Card from "../Diplaycards/Card";

const Marketplace = () => {
  return (
    <div className="flex flex-col py-20 p-10 items-center gap-14">
      <div className="flex flex-col gap-5 text-center items-center">
        <div className="font-bold text-4xl">Marketplace</div>
        <div className="font-normal text-lg text-gray-400 w-1/2">
          Buy Offsets in Voluntary Carbon Market that will support pre-vetted
          green projects. We’ll launch a Carbon Exchange soon that facilitates
          trade of large-scale, high-quality carbon credits (both old & new) to
          every investor.
        </div>
        <button className=" border-red-800 hover:bg-red-800 hover:text-white text-red-700 border-2 p-4 ">
          VIEW ALL PROJECTS
        </button>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  );
};
4;
export default Marketplace;
