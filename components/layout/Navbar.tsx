"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const navLinks = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,

    link: "/about",
    label: "About Us",
  },
  {
    id: 3,

    link: "/career-counseling",
    label: "Counseling",
  },
  {
    id: 4,
    link: "/universities",
    label: "Universities",
  },
  {
    id: 5,
    link: "/events",
    label: "Events",
  },
];

const Navbar = () => {
  const [hidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    if (latest > prev && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 30 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 bg-white w-full h-20 z-[998] shadow-xs"
    >
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto h-full flex justify-between items-center">
        <Link href="/" className="h-8 w-8 lg:h-11 lg:w-11">
          <Image
            src="/ample-logo.svg"
            alt="Logo"
            height={200}
            width={200}
            className="object-cover h-full w-full"
          />
        </Link>

        {/* links  */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-x-8 font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={pathname === link.link ? "text-purple-700" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="relative hidden md:block">
              <DropDownMenu />
            </li>

            <li>
              <button className="relative overflow-hidden px-7 py-3 rounded-md text-sm font-semibold text-white border border-primary/60 bg-gradient-to-r from-[#3D03FA] to-[#240294] group cursor-pointer">
                <Link
                  href="/contact"
                  className="relative z-10 transition-colors duration-300 group-hover:text-white"
                >
                  Contact Us
                </Link>
                <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-500 bg-gradient-to-r from-secondary to-primary group-hover:w-full left-0"></span>
              </button>
            </li>
          </ul>
        </div>
        <div
          className="md:hidden h-9 w-9 border border-primary rounded-sm cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <MdClose className="h-full w-full p-1" />
          ) : (
            <MdMenu className="h-full w-full p-1" />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
          className="absolute top-15 left-0 right-0 bg-white shadow-lg h-fit"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.id} className="px-6 py-2 font-medium">
                <Link
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                  className={pathname === link.link ? "text-purple-700" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* <li className="block md:hidden">
              <DropDownMenu isMobile />
            </li> */}

            <li className="px-6 py-2 font-medium">
              <Link
                href="/resources/faq"
                onClick={() => setIsOpen(false)}
                className={
                  pathname === "/resources/faq" ? "text-purple-700" : ""
                }
              >
                FAQs
              </Link>
            </li>
            <li className="px-6 py-2 font-medium">
              <Link
                href="/blogs"
                onClick={() => setIsOpen(false)}
                className={pathname === "/blogs" ? "text-purple-700" : ""}
              >
                Blogs
              </Link>
            </li>
            <li className="px-6 py-2 font-medium">
              <Link
                href="/#testimonials"
                onClick={() => setIsOpen(false)}
                className={
                  pathname === "/#testimonials" ? "text-purple-700" : ""
                }
              >
                Testimonials
              </Link>
            </li>
            {/* <li className="px-6 py-2 font-medium">
              <Link
                href="/resources/openings"
                onClick={() => setIsOpen(false)}
                className={
                  pathname === "/resources/openings" ? "text-purple-700" : ""
                }
              >
                Careers
              </Link>
            </li> */}
            <li className="px-6 py-2 font-medium">
              <Link
                href="/documents"
                onClick={() => setIsOpen(false)}
                className={pathname === "/required-documents" ? "text-purple-700" : ""}
              >
                Documents
              </Link>
            </li>

            <li className="px-6 py-2 w-full">
              <Link onClick={() => setIsOpen(false)} href="/contact">
                <button className="px-7 py-3 rounded-md text-sm font-semibold border border-primary/60 text-white cursor-pointer bg-gradient-to-r from-[#3D03FA] to-[#240294] w-full">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

const DropDownMenu = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [open, setOpen] = useState(false);

  const resourcesLinks = [
    { id: 1, link: "/resources/faq", label: "FAQs" },
    { id: 2, link: "/blogs", label: "Blogs" },
    { id: 3, link: "/#testimonials", label: "Testimonials" },
    // { id: 4, link: "/resources/openings", label: "Careers" },
    { id: 5, link: "/required-documents", label: "Documents" },
  ];

  const toggleMenu = () => setOpen(!open);

  return (
    <div
      className={`relative ${isMobile ? "" : "inline-block"}`}
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
    >
      {/* Trigger */}
      <div
        className="flex gap-x-1 items-center cursor-pointer"
        onClick={isMobile ? toggleMenu : undefined}
      >
        <span className="font-medium md:font-semibold">Resources</span>
        <ChevronDown className="h-5 w-5" />
      </div>

      {/* Dropdown content */}
      {open && (
        <div className="absolute bg-white shadow-lg w-48 z-50">
          <ul className="flex flex-col">
            {resourcesLinks.map((item) => (
              <li key={item.id} onClick={() => setOpen(false)}>
                <Link
                  href={item.link}
                  className="px-4 py-2 hover:bg-gray-100 flex gap-x-2"
                >
                  <ChevronRight /> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;