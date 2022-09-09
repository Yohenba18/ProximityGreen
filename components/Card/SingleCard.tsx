import Image from "next/image";
import React from "react";

interface CardValue {
  type: string;
  image: any;
  title: string;
  location: string;
  description: string;
  req_amount: string;
  col_amount: string;
}

const SingleCard = (carddata: CardValue) => {
  return (
    <>
      <div className="flex flex-col bg-white w-72 drop-shadow-lg">
        <div className="relative">
          <Image
            src={carddata.image}
            alt={carddata.title}
            className="h-full w-full"
          />
          <p className="absolute z-10 top-2 left-2 text-xs p-2 py-1 bg-slate-100 ">
            {carddata.type}
          </p>
        </div>
        <div className="flex flex-col gap-8 p-4 text-sm font-medium">
          <div className="flex flex-col">
            <h3 className=" text-lg">{carddata.title}</h3>
            <p className=" text-gray-400 ">{carddata.location}</p>
          </div>

          <p className="">{carddata.description}</p>
          <p className="">
            <span className="text-green-900">{carddata.col_amount}</span> rasied
            of {carddata.req_amount}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
