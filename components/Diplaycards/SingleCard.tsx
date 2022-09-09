import Image from "next/image";
import React from "react";

interface CardValue {
  image: any;
  title: string;
  location: string;
  description: string;
  req_amount: string;
}

const SingleCard = (carddata: CardValue) => {
  return (
    <>
      <div className="flex flex-col bg-white w-72 drop-shadow-lg">
        <div className="">
          <Image
            src={carddata.image}
            alt={carddata.title}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-8 p-4 text-sm font-medium">
          <div className="flex flex-col">
            <h3 className=" text-lg">{carddata.title}</h3>
            <p className=" text-gray-400 ">{carddata.location}</p>
          </div>

          <p className="">{carddata.description}</p>
          <p className="">
            <span className="text-green-900">{carddata.req_amount}</span>/ Tonne
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
