import Link from "next/link";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col items-center gap-1 py-5 bg-neutral-600 justify-center">
        <p className="md:w-1/3 text-sm font-thin text-center text-white">
          Copyright © 2024 | Faw4Locks Locksmiths
        </p>
        <p className="md:w-1/3 text-sm font-thin text-center text-white">
          All rights reserved | VAT Number 862 1957 06
        </p>

        <p className="text-center font-thin text-sm flex flex-row items-center gap-1 text-white">
          Site built with <IoIosHeart className="text-blue-300" /> by
          <Link
            href="https://www.onecloudmedia.uk/"
            className="transition-all text-blue-200 hover:opacity-70"
          >
            One Cloud Media
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
