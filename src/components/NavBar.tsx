import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { Raleway } from "next/font/google";
import Link from "next/link";
import Logo from "../../public/logo.webp";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const NavBar = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+4407863233157"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full flex-col items-center  justify-center">
      <div className="flex flex-row w-full justify-between px-4 md:px-20 my-3 gap-8">
        <div className="flex flex-row items-center hover:opacity-50 cursor-pointer transition-all gap-2">
          <CiMail className="mt-[1px] text-gray-900 md:text-lg" />
          <p className="md:font-thin md:text-base text-sm">
            info@faw4locks.com
          </p>
        </div>
        <div className="flex flex-row hover:opacity-50 cursor-pointer transition-all items-center gap-2">
          <HiOutlinePhone className="md:text-lg text-gray-600" />
          <p
            onClick={handleCall}
            className="uppercase  md:font-thin md:text-base text-sm"
          >
            078 6323 3157
          </p>
        </div>
      </div>
      <div className="flex w-full items-center border border-gray-100 py-2 md:py-4 justify-center">
        <Image
          src={Logo}
          alt="Logo"
          height={120}
          width={120}
          className="w-32 h-32 sm:w-40 sm:h-40"
        />
      </div>
      <div className="flex flex-row w-full justify-center my-3 gap-6 md:gap-20">
        <Link href="/">
          <p
            className={`uppercase font-light text-[13px] transition-all hover:opacity-50 ${raleway.className}`}
          >
            HOME
          </p>
        </Link>
        <Link href="/services">
          <p
            className={`uppercase font-light text-[13px] transition-all hover:opacity-50 ${raleway.className}`}
          >
            SERVICES
          </p>
        </Link>
        <Link href="/about">
          <p
            className={`uppercase font-light text-[13px] transition-all hover:opacity-50 ${raleway.className}`}
          >
            ABOUT
          </p>
        </Link>
        <Link href="/contact">
          <p
            className={`uppercase font-light text-[13px] transition-all hover:opacity-50 ${raleway.className}`}
          >
            CONTACT
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
