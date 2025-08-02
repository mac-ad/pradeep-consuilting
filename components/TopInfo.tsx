import { IoCallOutline, IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";

import React from "react";
import Link from "next/link";

const TopInfo = () => {
  return (
    <div className="sticky top-0 z-[999] w-full h-8 bg-[#2287FD] overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto h-full px-4 md:px-6 lg:px-10 flex justify-between items-center  text-white text-sm">
        <div className="hidden md:flex gap-x-2">
          <span>Sunday - Friday</span>
          <span>9:30 AM - 6:30 PM</span>
        </div>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-1 hover:underline">
            <IoCallOutline className="text-xs md:text-lg" />

            <Link href="tel:977-1-5354445">+977-1-5354445</Link>
          </div>
          <div className="flex items-center gap-x-1 hover:underline">
            <IoMailOutline className="text-xs md:text-lg" />

            <Link href="mailto:nepal@ampleedu.com">nepal@ampleedu.com</Link>
          </div>
          <div className="hidden md:flex items-center gap-x-1 hover:underline">
            <IoLogoWhatsapp className="text-lg" />
            <span>
              <a href="https://wa.me/+447403444728" target="_blank">
                +447403444728
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
