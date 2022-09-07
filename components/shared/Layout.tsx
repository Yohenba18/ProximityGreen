import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="">
        <div className="flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
