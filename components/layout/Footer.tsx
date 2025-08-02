import React from "react";
import CTA from "../CTA";
import Image from "next/image";
import { IoCallOutline, IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const AboutUs = [
  { label: "Our Story", link: "/" },
  { label: "Book an Appointment", link: "/" },
  { label: "Achievements", link: "/#achievements" },
  { label: "Testimonials", link: "/#testimonials" },
  { label: "Contact Us", link: "/contact" },
];
const OurTeams = [
  { label: "Meet the Experts", link: "/about/#team" },
  { label: "Advisory Board", link: "/" },
  { label: "Career Opportunities", link: "/" },
  { label: "Join Our Team", link: "/resources/openings" },
];
const UsefulLinks = [
  { label: "Admission Process", link: "/" },
  { label: "Scholarship Guidance", link: "/" },
  { label: "Documents", link: "/documents" },
  { label: "Blogs & Resources", link: "/blogs" },
  { label: "FAQs", link: "/resources/faq" },
];

const Footer: React.FC = () => {
  return (
    <div className="mt-40 w-full py-10 relative mx-auto">
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url(/footer.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-10 flex flex-col justify-center items-center">
        <CTA />

        <div className="z-40 mt-24 md:mt-52 w-full flex flex-col space-y-10 md:space-y-14 mx-auto">
          {/* About Ample Section */}
          {/* <div className="md:hidden w-full max-w-xl mx-auto mt-24 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/ample-logo.svg"
                alt="Ample Logo"
                height={36}
                width={36}
                className="h-9 w-9 md:h-12 md:w-12"
              />
              <span className="font-bold text-lg md:text-xl text-white">
                Ample International Education
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white font-light mt-4 px-4 md:px-14">
              Ample Education empowers students with expert guidance for
              university admissions, scholarships, and test prep, ensuring a
              smooth academic journey and brighter future through personalized
              education consulting.
            </p>
          </div> */}

          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 text-white mx-auto w-full max-w-2xl">
            <div className="flex flex-col space-y-4">
              <h1 className="text-white font-bold text-lg">About Us</h1>
              <ul className="space-y-3">
                {AboutUs.map((about, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm font-light hover:text-gray-200"
                  >
                    <a href={about.link}>{about.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h1 className="text-white font-bold text-lg">Our Teams</h1>
              <ul className="space-y-3">
                {OurTeams.map((team, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm font-light hover:text-gray-200"
                  >
                    <a href={team.link}>{team.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h1 className="text-white font-bold text-lg">Useful Links</h1>
              <ul className="space-y-3">
                {UsefulLinks.map((useful, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm font-light hover:text-gray-200"
                  >
                    <a href={useful.link}>{useful.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About Ample Section */}
          <div className="hidden md:block w-full max-w-xl mx-auto mt-5 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/ample-logo.svg"
                alt="Ample Logo"
                height={36}
                width={36}
                className="h-9 w-9 md:h-12 md:w-12"
              />
              <span className="font-bold text-lg md:text-xl text-white">
                Ample International Education
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white font-light mt-4 px-4 md:px-14">
              Ample Education empowers students with expert guidance for
              university admissions, scholarships, and test prep, ensuring a
              smooth academic journey and brighter future through personalized
              education consulting.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-start md:items-center space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row justify-center items-start md:items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-10 text-white text-xs sm:text-sm font-light">
              <span className="flex space-x-2 items-center hover:underline">
                <IoCallOutline className="h-5 w-5" />
                <span>
                  <a href="https://wa.me/+97715354445" target="_blank">
                    +977 15354445
                  </a>
                </span>
              </span>
              <span className="flex space-x-2 items-center hover:underline">
                <IoMailOutline className="h-5 w-5" />
                <span>
                  <a href="mailto:nepal@ampleedu.com" target="_blank">
                    nepal@ampleedu.com
                  </a>
                </span>
              </span>
              <span className="flex space-x-2 items-center hover:underline">
                <IoLogoWhatsapp className="h-5 w-5" />
                <a href="https://wa.me/+9779851184081" target="_blank">
                  +9779851184081
                </a>
              </span>
              {/* <span>+447403444728</span>
              <span>+977 9802314772</span>
              <span>+977 15354445</span> */}

              <a
                href="https://wa.me/+447403444728"
                target="_blank"
                className="hover:underline"
              >
                +447403444728
              </a>
              <a
                href="https://wa.me/+977 =9802314772"
                target="_blank"
                className="hover:underline"
              >
                +9779802314772
              </a>
            </div>

            {/* alternative of whatsapp  */}
            {/* <div className="flex flex-col sm:flex-row justify-center items-start md:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white text-xs sm:text-sm font-light">
              <span className="flex space-x-2 items-center">
                <IoLogoWhatsapp className="h-5 w-5" />
                <span>+977 9851184081</span>
              </span>
              <span>+447403444728</span>
              <span>+977 9802314772</span>
              <span>+977 15354445</span>
            </div> */}

            <div className="flex justify-center items-center space-x-6 md:space-x-10 my-8 md:my-10 text-white">
              <a target="_blank" href="https://www.facebook.com/ampleedu">
                <FaFacebookF className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ample_international_education/"
              >
                <FaInstagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCyLK5WdmcYnAlPi8bUClQUg"
              >
                <FaYoutube className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ample-international-education/"
              >
                <FaLinkedinIn className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
            {/* Rights */}
            <div className="text-white text-center text-xs sm:text-sm font-light">
              © 2024 -{" "}
              <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
              <span className="font-bold">Ample International Education</span> |
              Designed & Developed by{" "}
              <a
                target="_blank"
                href="https://squarelabs.com.np"
                className="underline hover:text-green-600"
              >
                SquareLabs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
