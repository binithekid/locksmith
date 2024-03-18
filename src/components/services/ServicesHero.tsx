import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import { useState } from "react";
import ModalForm from "../ModalForm";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const ServicesHero = () => {
  let [isOpen, setIsOpen] = useState<any>(false);

  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full h-auto flex md:h-[35rem] flex-col-reverse md:flex-row">
      <div className="md:w-1/2 w-full bg-neutral-300 items-center justify-center md:py-0 py-10 px-4 md:px-20 flex flex-col gap-2 md:gap-4">
        <p className="text-sm text-gray-900 font-thin">WHAT WE OFFER</p>
        <h1
          className={`md:text-5xl text-2xl text-center md:leading-[3.5rem] text-black ${raleway.className}`}
        >
          LOCKMITH SERVICES
        </h1>
        <hr className="border-t-1 border-gray-400 w-[10%] mt-2 mb-4" />

        <p className="text-center font-thin tracking-wide text-sm md:leading-6 text-black">
          From lock installation and repair to key cutting, emergency lockout
          assistance, and advanced security system installation, we&apos;re here
          to safeguard your property with expertise and reliability. Our
          experienced team ensures the security of homes, offices, and
          businesses alike, providing tailored solutions and prompt,
          professional service.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <motion.button
            onClick={handleCall}
            className="text-xs font-light px-4 md:px-10 py-3 rounded shadow-lg text-white bg-[#20272d]"
            whileHover={{ backgroundColor: "#000000" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            EMERGENCY CALL
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(true)}
            className="text-xs border border-gray-900 font-light shadow-lg px-4 md:px-10 py-3 rounded text-gray-900 bg-transparent"
            whileHover={{ backgroundColor: "#20272d", color: "#FFFFFF" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            BOOK A LOCKSMITH
          </motion.button>
        </div>
      </div>
      <div
        className="md:w-1/2 w-full bg-cover md:h-auto h-[11rem] bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services.jpeg')" }}
      ></div>
      <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ServicesHero;
