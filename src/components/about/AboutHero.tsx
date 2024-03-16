import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const AboutHero = () => {
  return (
    <div className="w-full h-auto flex md:h-[35rem] flex-col md:flex-row">
      <div className="md:w-1/2 w-full bg-gray-200 items-center justify-center md:py-0 py-10 px-4 md:px-20 flex flex-col gap-4">
        <p className="text-sm text-gray-900 font-thin">ABOUT</p>
        <h1
          className={`md:text-5xl text-3xl text-center md:leading-[3.5rem] text-black ${raleway.className}`}
        >
          FAW 4 LOCKS
        </h1>
        <hr className="border-t-1 border-gray-400 w-[10%] mt-2 mb-4" />

        <p className="text-center font-thin tracking-wide text-sm leading-6 text-black">
          Faw 4 Locks is an independent, family-run business based in London. We
          provide 24 hr Emergency and Non-Emergency Locksmith Services with no
          call-out charge and at competitive rates. We carry a comprehensive
          range of stock enabling our work to be completed efficiently and
          professionally.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <motion.button
            className="text-xs font-light px-4 md:px-10 py-3 rounded shadow-lg text-white bg-[#20272d]"
            whileHover={{ backgroundColor: "#000000" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            EMERGENCY CALL
          </motion.button>
          <motion.button
            className="text-xs border border-gray-900 font-light shadow-lg px-4 md:px-10 py-3 rounded text-gray-900 bg-transparent"
            whileHover={{ backgroundColor: "#20272d", color: "#FFFFFF" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            BOOK A LOCKSMITH
          </motion.button>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/abouthero.jpg')" }}
      ></div>
    </div>
  );
};

export default AboutHero;
