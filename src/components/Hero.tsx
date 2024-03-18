import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import { useState } from "react";
import ModalForm from "./ModalForm";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const Hero = () => {
  let [isOpen, setIsOpen] = useState<any>(false);

  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full h-auto flex md:h-[35rem] flex-col-reverse md:flex-row">
      <div className="md:w-1/2 w-full bg-neutral-500 items-center justify-center md:py-0 py-10 px-4 md:px-20 flex flex-col gap-2 md:gap-4">
        <p className="text-sm text-white font-thin">
          24/7 & 365 TRUSTED SUPPORT
        </p>
        <h1
          className={`md:text-5xl text-2xl text-center md:leading-[3.5rem] text-white ${raleway.className}`}
        >
          EMERGENCY LOCKSMITHS IN LONDON
        </h1>
        <hr className="w-[10%] mt-2 mb-4" />
        <p className="text-center font-thin tracking-wide text-sm md:leading-6 text-white">
          Locked out and need an emergency plumber in London? Call us at 078
          2323 3291 for immediate assistance. Or book a plumber instantly using
          the button below. We&apos;re here 24/7 to solve all your plumbing
          issues swiftly.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <motion.button
            onClick={handleCall}
            className="text-xs font-light px-4 md:px-10 py-3 rounded shadow-lg text-white bg-[#20272d]"
            whileHover={{ backgroundColor: "rgb(0, 0, 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            EMERGENCY CALL
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(true)}
            className="text-xs border border-white font-light shadow-lg px-4 md:px-10 py-3 rounded text-white bg-transparent"
            whileHover={{ backgroundColor: "#20272d" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            BOOK A LOCKSMITH
          </motion.button>
        </div>
      </div>
      <div
        className="md:w-1/2 bg-cover w-full md:h-auto h-[11rem] bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>
      <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Hero;
