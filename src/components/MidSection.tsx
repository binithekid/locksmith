import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import Image from "next/image";
import MidSectionImage from "../../public/midesction.jpg";
import { useState } from "react";
import ModalForm from "./ModalForm";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const MidSection = () => {
  let [isOpen, setIsOpen] = useState<any>(false);

  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full flex py-14 md:py-20 px-4 md:px-10 lg:px-20 lg:gap-0 gap-20 flex-col flex-wrap lg:flex-row">
      <div className="flex flex-col full lg:w-1/2">
        {" "}
        <h1 className={`md:text-2xl text-xl font-light ${raleway.className}`}>
          EMERGENCY LONDON LOCKSMITHS
        </h1>
        <p className={`md:text-lg font-light ${raleway.className}`}>
          TRUSTED & PROFESSIONAL SERVICE
        </p>
        <hr className="w-[10%] mt-2 border-gray-300" />
        <p className="mt-2 text-sm font-thin lg:pr-20 text-gray-800">
          We pride ourselves on providing professional and reliable locksmith
          services at a great price. With years of experience in the industry,
          our skilled technicians are equipped to handle any locksmithing need
          efficiently and effectively. Whether you&apos;re locked out of your
          home, need to replace locks, or require assistance with security
          systems, we&apos;re here to help. Our commitment to quality service
          and customer satisfaction ensures that you can trust us to deliver
          prompt solutions tailored to your needs. Experience peace of mind
          knowing that you&apos;re in good hands with our dedicated team.
        </p>
        <div className="mt-8 lg:pr-10">
          <p className={`md:text-lg font-light ${raleway.className}`}>
            BENEFITS OF USING US
          </p>
          <ul className="list-disc mt-1 text-sm ml-[0.9rem] pr-20 font-thin">
            <li>
              Emergency lockout assistance for homes, businesses, and vehicles
            </li>
            <li>Lock installation, repair, and replacement</li>
            <li>Key cutting and duplication services</li>
            <li>Rekeying locks for added security</li>
            <li>Master key system installation and maintenance</li>
            <li>
              Security system installation, including CCTV and alarm systems
            </li>
            <li>Safe opening, repair, and installation</li>
            <li>
              Access control system setup for businesses and commercial
              properties
            </li>
            <li>
              Automotive locksmith services, including key fob programming and
              ignition repair
            </li>
            <li>24/7 availability for emergency locksmith services</li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 mt-8 md:mt-4">
          <motion.button
            onClick={handleCall}
            className="text-xs border border-black font-light shadow px-4 md:px-10 py-3 rounded text-black bg-transparent"
            whileHover={{ backgroundColor: "#000000", color: "white" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            EMERGENCY CALL
          </motion.button>
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

export default MidSection;
