import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import Image from "next/image";
import MidSectionImage from "../../../public/aboutimage.jpg";
import ModalForm from "../ModalForm";
import { useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const AboutMid = () => {
  let [isOpen, setIsOpen] = useState<any>(false);

  return (
    <div className="w-full flex py-20 px-4 md:px-10 lg:px-20 lg:gap-0 gap-20 flex-col flex-wrap lg:flex-row">
      <div className="flex flex-col justify-center lg:w-1/2">
        {" "}
        <h1
          className={`md:text-2xl text-xl font-light uppercase ${raleway.className}`}
        >
          WHO ARE WE?
        </h1>
        <hr className="w-[10%] mt-2 border-gray-300" />
        <p className="mt-2 font-thin lg:pr-20 text-gray-800">
          London Locks was born in 2004. Manager Lloyd Morgan trained and learnt
          his skills with the British Locksmiths Association. He spent many
          weeks in their training facility learning as much as he could about
          the working mechanics of locks, keys as well as many other high
          security products. His mission was simple, He wanted to be able to
          open anything without the key or the original tool made to open it.
          Starting with the simplest locks and over time moving on to much more
          complex locking systems. Lloyd swears that you never stop learning and
          even though he passed on his knowledge to his current employees he
          makes time every month to get them up to speed on the newest of locks
          brought to market.
        </p>
        {/* <div className="mt-3 lg:pr-10">
          <ul className="list-disc text-sm ml-[0.9rem] pr-20 font-thin">
            <li>Fully mobile locksmith service</li>
            <li>Genuine 24/7 emergency locksmith services</li>
            <li>New locks fitted</li>
            <li>
              Locks for your front door, including mortice, cylinder, windows,
              padlocks, sash, and rim locks
            </li>
            <li>
              uPVC door locks and locking mechanism repairs. If you have a
              jamming lock or door not closing properly call us now rather than
              wait until it becomes a potentially expensive emergency.
            </li>
            <li>Replacement door and window handles</li>
            <li>Door realignment services</li>
            <li>
              Additional property security for your garage, outbuildings, doors,
              and windows
            </li>
            <li>Locks for access to lofts and other shared areas</li>
            <li>99% of jobs completed on the first visit</li>
            <li>All parts and labor guaranteed</li>
          </ul>
        </div> */}
        <div className="flex flex-row gap-4 mt-4">
          <motion.button
            onClick={() => setIsOpen(true)}
            className="text-xs border border-black font-light shadow px-4 md:px-10 py-3 rounded text-black bg-transparent"
            whileHover={{ backgroundColor: "#20272d", color: "white" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            BOOK A LOCKSMITH
          </motion.button>
        </div>
      </div>

      <div className="md:flex w-full lg:w-1/2 hidden justify-center items-center">
        <div className="relative w-[90%] flex justify-end border-black">
          <div className="absolute h-[30rem] w-full rounded-sm md:block hidden left-10 top-10 bg-[#efece9]" />
          <Image
            src={MidSectionImage}
            className="object-cover h-[30rem] relative shadow-lg rounded-sm z-10"
            alt=""
          />
        </div>
      </div>
      <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AboutMid;
