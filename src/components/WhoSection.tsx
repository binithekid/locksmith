import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";
import Lock from "../../public/lock.jpg";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const WhoSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-20 py-[3rem] lg:py-20 gap-[3.5rem] bg-[#efece9]">
      <div className="lg:block hidden">
        <Image
          src={Lock}
          className="rounded-sm h-[20rem] w-auto object-cover"
          alt="lock"
        />
      </div>
      <div className="flex flex-col w-full lg:w-2/3">
        <h1
          className={`md:text-2xl text-xl uppercase font-light ${raleway.className}`}
        >
          Who are we?
        </h1>
        <p className="mt-2 font-thin text-gray-800">
          Faw 4 Locks is an independent, business based in London. We provide
          “24 hr Emergency” and “Non-Emergency” Locksmith Services with no
          call-out charge and at competitive rates. We carry a comprehensive
          range of stock enabling most of our work to be completed the same day.
        </p>
        <Link href="/about">
          <motion.button
            className="text-xs mt-4 w-max border border-black font-light shadow px-4 md:px-10 py-3 rounded text-black bg-transparent"
            whileHover={{ backgroundColor: "#20272d", color: "white" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            FIND OUT MORE
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default WhoSection;
