import NavBar from "@/components/NavBar";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Head from "next/head";
import { Raleway } from "next/font/google";
import GetInTouch from "@/components/GetInTouch";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const Contact = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447546096173"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="London's trusted locksmith service, providing reliable and efficient solutions for all your security needs. From emergency lockouts to advanced security system installations, we're here to safeguard your home or business. Contact us for expert locksmith services tailored to your needs"
        />
        <title>Contact | Faw 4 Locks</title>
      </Head>
      <main className="flex w-full flex-col">
        <NavBar />

        <div className="w-full bg-[#efece9] px-4 md:px-20 flex h-auto py-20 items-center justify-center flex-col md:flex-row">
          <div className="md:w-1/2 w-full flex flex-col md:h-[25rem] justify-center flex-grow">
            <div>
              <div className="md:w-3/4">
                <div className="flex gap-3 flex-col">
                  <h1
                    className={`text-left text-black uppercase font-light text-3xl ${raleway.className}`}
                  >
                    Contact
                  </h1>
                  <p className="font-thin">
                    If you have an enquiry about any of the services we offer
                    please fill out the contact form and we will get back to you
                    promptly
                  </p>
                  <div>
                    <a
                      href="mailto:info@onecloudmedia.uk"
                      className="font-thin transition-all hover:opacity-70"
                    >
                      <span className="mr-2">✉️ </span>
                      info@faw4locks.com
                    </a>
                  </div>
                  <p
                    onClick={handleCall}
                    className="font-thin cursor-pointer transition-all hover:opacity-70"
                  >
                    <span className="mr-2">📞 </span>07546 0956 173
                  </p>
                  <div className="flex flex-col">
                    <p className=""> Our Office Hours </p>
                    <p className="font-thin">Monday - Friday 9am - 6pm </p>
                    <p className="font-thin">Saturday - Closed</p>
                    <p className="font-thin">Sunday- Closed</p>
                    <p className="mt-3">Our Service Hours</p>
                    <p className="font-thin">Emergancy Call Out Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 md:mt-0 mt-10 flex-col gap-3">
            <form className="flex gap-6 flex-col">
              <select className="w-full appearance-none shadow bg-transparent font-thin border md:p-3 text-sm md:text-base p-2 rounded custom-select border-black">
                <option value="">Select a topic</option>
                <option value="Support">Support</option>
                <option value="Enquiry">Enquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
              <input
                className="w-full bg-transparent shadow font-thin border border-black md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="Name"
              />
              <input
                className="w-full bg-transparent shadow font-thin border border-black md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="Email"
              />
              <textarea
                rows={6}
                className="w-full bg-transparent shadow font-thin border border-black md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="How can we help?"
              />
              <motion.button
                className="text-xs border w-max border-black font-light shadow px-10 py-3 rounded text-black bg-transparent"
                whileHover={{ backgroundColor: "#20272d", color: "white" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </div>
        </div>
        <Map />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
