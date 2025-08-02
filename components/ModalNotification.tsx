"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const ModalNotification = ({
  title = "Important Notice",
  content = "Welcome to our website!",
  showOnLoad = true,
  delay = 1000,
  hasLogo = true,
  logoSrc = "ample-logo.svg",
  showFooter = true,
  footerContent = null,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showOnLoad) {
      const hasSeenModal = localStorage.getItem("hasSeenModal");

      if (!hasSeenModal) {
        const timer = setTimeout(() => {
          setIsVisible(true);
          localStorage.setItem("hasSeenModal", "true");
        }, delay);

        return () => clearTimeout(timer);
      }
    }
  }, [delay, showOnLoad]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between bg-blue-50 p-4 border-b">
          <div className="flex items-center">
            {hasLogo && (
              <div className="mr-3">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  className="h-8 w-auto"
                  height={50}
                  width={50}
                />
              </div>
            )}
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <div className="bg-white rounded-full p-1 hover:bg-gray-200">
              <IoClose />
            </div>
          </button>
        </div>

        {/* Content area */}
        <div className="p-6">
          {typeof content === "string" ? (
            <div className="text-gray-700">{content}</div>
          ) : (
            content
          )}
        </div>

        {/* Optional footer */}
        {showFooter && (
          <div className="bg-gray-50 p-4 border-t">
            {footerContent || (
              <div className="flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-7 py-3 rounded-md text-sm font-semibold border border-primary/60 text-white cursor-pointer bg-gradient-to-r from-[#3D03FA] to-[#240294]"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalNotification;
