import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-evenly gap-5 py-12 bg-black text-white">
      <div className="flex flex-col">
        <div className="font-semibold text-xl">PROXIMITY GREEN</div>
        <p>Copyright © 2022. All rights reserved.</p>
      </div>
      <div className="flex gap-16">
        <div className="flex flex-col gap-2 font-light">
          <h3 className="font-semibold text-xl mb-3">Services</h3>
          <p>Reporting</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <h3 className="font-semibold text-xl mb-3">About</h3>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-semibold text-xl">Follow Us</h3>
        <h4 className="text-base">Exciting Content For Sustainability Enthusiasts.</h4>
        <div className="text-white flex gap-4 mt-5">
          <FaTwitter className="h-8 w-8" />
          <FaInstagram className="h-8 w-8" />
          <FaLinkedinIn className="h-8 w-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
