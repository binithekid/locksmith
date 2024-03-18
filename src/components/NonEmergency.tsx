import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import Image from "next/image";
import MidSectionImage from "../../public/getintouch.jpeg";
import { useState } from "react";
import ModalForm from "./ModalForm";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const NonEmergency = () => {
  let [isOpen, setIsOpen] = useState<any>(false);

  return (
    <div className="w-full flex py-20 px-4 md:px-10 lg:px-20 lg:gap-0 gap-20 flex-col flex-wrap lg:flex-row">
      <div className="flex flex-col full lg:w-1/2">
        {" "}
        <h1 className={`md:text-2xl text-xl font-light ${raleway.className}`}>
          NON EMERGENCY LOCKSMITH SERVICES
        </h1>
        {/* <p className={`text-lg font-light ${raleway.className}`}>
          TRUSTED & PROFESSIONAL SERVICE
        </p> */}
        <hr className="w-[10%] mt-2 border-gray-300" />
        <p className="mt-2 text-sm font-thin lg:pr-20 text-gray-800">
          We pride ourselves on providing comprehensive services to meet all of
          our customers' needs. While we specialise in emergency locksmith
          services, such as lockouts and urgent lock repairs, we also offer
          non-emergency services to enhance your security and peace of mind.
          Among these services is professional lock changing, whether you're
          looking to upgrade your security or simply need to replace old or
          damaged locks. Our team of skilled locksmiths is equipped with the
          expertise and tools necessary to efficiently and effectively handle
          any lock changing needs you may have. With our commitment to
          excellence and customer satisfaction, you can trust us to deliver
          top-notch service, whether it's an emergency situation or a planned
          lock upgrade.
        </p>
        <div className="mt-8 lg:pr-10">
          <p className={`text-lg font-light ${raleway.className}`}>
            BENEFITS OF USING US
          </p>
          <ul className="list-disc text-sm ml-[0.9rem] pr-20 font-thin">
            <li>Lock changing</li>
            <li>Lock installation</li>
            <li>Key duplication</li>
            <li>Master key system setup</li>
            <li>Security system consultation and installation</li>
            <li>Lock maintenance and repair</li>
            <li>Safe installation and maintenance</li>
            <li>Keyless entry system installation and repair</li>
          </ul>
        </div>
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

export default NonEmergency;
