import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import { useState } from "react";
import ModalForm from "./ModalForm";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const GetInTouch = () => {
  let [isOpen, setIsOpen] = useState<any>(false);

  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="md:mx-20 mx-4 md:my-20 my-10 rounded-sm shadow bg-[#efece9]">
      <div className="py-20 flex flex-col gap-2 items-center justify-center">
        <p className="text-[13px] text-black font-light uppercase md:font-thin">
          Get in touch
        </p>
        <h1
          className={`md:text-3xl text-xl px-4 text-center font-light text-black ${raleway.className}`}
        >
          EMERGENCY LOCKSMITH SERVICES IN LONDON
        </h1>
        <hr className="border-t-1 border-gray-400 w-[10%] mt-2 mb-4" />
        <p className="md:w-1/2 w-5/6 text-center text-sm font-thin">
          Whether you are locked out, locked in, moving house or office or
          simply need to update your security for peace of mind – Call our
          qualified locksmiths for a free security survey and no obligation
          quote.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <motion.button
            onClick={handleCall}
            className="text-xs font-light px-4 md:px-10 py-3 rounded shadow-lg text-white bg-[#20272d]"
            whileHover={{ backgroundColor: "#686868" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            EMERGENCY CALL
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(true)}
            className="text-xs border border-black font-light shadow-lg px-4 md:px-10 py-3 rounded text-black bg-transparent"
            whileHover={{ backgroundColor: "#20272d", color: "#FFFFFF" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            BOOK A LOCKSMITH
          </motion.button>
        </div>
      </div>
      <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default GetInTouch;
