import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="mx-10 flex justify-between py-6 font-semibold items-center">
        <div className="font-bold text-2xl font-serif">PROXIMITY</div>
        <div className="flex gap-4">
          <div>Investment oppurtunity</div>
          <div>How it works</div>
          <div>About Us</div>
        </div>
        <div className="flex gap-4 font-normal">
          <button className="text-white bg-green-700 hover:bg-green-800 p-2 w-28">
            LOGIN
          </button>
          <button className=" border-red-800 hover:bg-red-800 hover:text-white text-red-700 border-2 p-2 w-28">
            REGISTER
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
