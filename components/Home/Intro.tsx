import Image from "next/image";
import React from "react";
import visualizationsvg from "../../assets/svg/visualization.svg";

const Intro = () => {
  return (
    <div className=" flex p-10 h-screen justify-evenly items-center bg-black text-white">
      <div className=" flex flex-col gap-7 font-bold">
        <h1 className="text-7xl">Invest Sustainably</h1>
        <p className="text-2xl">
          One-stop platform for all Green Investment opportunities.
        </p>
        <button className="text-white text-xl bg-green-700 hover:bg-green-800 p-5 w-52">
          Get Started
        </button>
      </div>
      <div>
        <Image
          src={visualizationsvg}
          height={500}
          width={500}
          alt="visualization"
        />
      </div>
    </div>
  );
};

export default Intro;
