import React from "react";

const Funds = () => {
  return (
    <div className="flex flex-col py-20 p-10 gap-10">
      <div className="flex flex-col text-center">
        <h1 className="font-bold text-4xl">Green Funds</h1>
        <p className="font-normal text-lg text-gray-400 w-1/2">
          Earn potential cash payments &amp; tax benifits through unique
          revenue-share and debt financing investments.
        </p>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col gap-5 w-1/3">
          <h3 className="font-bold text-4xl">Green Bonds</h3>
          <p className="font-normal text-xl text-gray-400">
            These bonds provide access to capital for project developers to fund
            their green initiatives that help companies realize their
            sustainable goals. Historically green bonds have shown better yield
            than traditional bonds and Proximity has opened this door of
            opportunity for everyone.
          </p>
        </div>
        <div>Cards</div>
      </div>
    </div>
  );
};

export default Funds;
