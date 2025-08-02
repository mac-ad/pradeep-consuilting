"use client";
import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed z-[999] bottom-5 right-6 lg:right-20 border-2 border-primary rounded-md l bg-white h-10 w-10 flex justify-center items-center cursor-pointer"
          onClick={scrollToTop}
        >
          <FaChevronUp className="text-primary font-bold h-4 w-auto" />
        </div>
      )}
    </>
  );
};

export default BackToTopButton;
