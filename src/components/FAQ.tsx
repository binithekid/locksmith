import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "Are we acredited?",
      answer:
        "We are an established independent family business who pride themselves on providing an excellent service. We are a Checkatrade, Trading Standards and Which? Trusted Trader accredited company. With all of our locksmiths being DBS (previously CRB) checked and verified. We can provide a comprehensive service that will secure your property both safely and securely; giving you reassurance and total peace of mind for you and your family.",
      isAnswerVisible: false,
    },
    {
      question: "I’ve been locked out of my property, can you help?",
      answer:
        "We all lead busy lives and it is quite easy to find yourself in a situation when the front door has slammed shut with your keys on the inside of your property. Depending on the door, there are different techniques that can be used to help get you back into your property quickly and safely. We will do all that we can to ensure that you do not need to have the lock replaced. We will use Non Destructive Entry (NDE) methods where possible. It ultimately saves you money; our goal is to offer great customer service so that you recommend Millennium Locksmiths to friends and family. However there are some types of locks that will require drilling or replacing. We will always assess the problem and make a recommendation that best suits your predicament and look to have you back into your property immediately.",
      isAnswerVisible: false,
    },
    {
      question: "Why choose us?",
      answer:
        "Some locksmiths offer “cheap” services are often looked upon with great suspicion. Cheap locksmiths are often operating without experience and are winging it most of the time. You know what they say, buy cheap, buy twice! When it comes to the safety of your home, why risk going to a cheap locksmith? This isn’t to say there aren’t affordable locksmiths out there, as we ourselves pride ourselves on offering an affordable service with premium results! It’s just that a lot of locksmiths that claim to be “cheaper than the rest” often operate without a license and without guarantee of their work.",
      isAnswerVisible: false,
    },
    {
      question: "What to do if my home has been broken into?",
      answer:
        "A domestic burglary can be a very traumatic experience for all involved, especially when there are young children, elderly or families involved. Every year, break-ins cost the UK economy and insurance industry millions of pounds each year. Policy holders who have the misfortune of being targeted by burglars need to make claims.  The cost of insurance claims due to domestic break-ins is shared collectively by all policy holders through increased premiums and excess payments. If you would like to avoid excess payments it is important to make your property secure with Insurance approved locks. Ultimately it will save you time and inconvenience, so getting your property properly secure is essential.",
      isAnswerVisible: false,
    },
    {
      question: "How long have we been operating?",
      answer:
        "We have been trading since 2021 and have fixed, replaced and repaired thousands of locks over this period. We have many locksmith case studies, here are just a few examples. If you do not see your particular locksmith requirement here, please don’t worry and contact Tim direct. The chances are that we have probably carried out a repair or replacement lock similar to yours at some point.",
      isAnswerVisible: false,
    },
  ]);

  const toggleAnswer = (index: any) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isAnswerVisible: !item.isAnswerVisible } : item
      )
    );
  };

  return (
    <div className="flex w-full py-20 flex-row bg-[#efece9] flex-wrap items-center justify-center">
      <div className="w-full px-4 md:px-8 flex gap-2 flex-col">
        <h1
          className={`md:text-2xl text-xl text-center uppercase font-light ${raleway.className}`}
        >
          Got Questions? We&apos;ve Got Answers!
        </h1>
        <p className="text-gray-800 font-thin text-center">
          Some frequently asked questions
        </p>
        <div className="flex font-uncut w-full flex-col mt-9 px-0 md:px-[15rem] flex-wrap">
          {faqItems.map((item, index) => (
            <div key={index}>
              <p
                onClick={() => toggleAnswer(index)}
                className="flex m-4 flex-row gap-2 text-base md:text-lg font-light items-center cursor-pointer text-gray-800"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: item.isAnswerVisible ? 90 : 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  {" "}
                  <AiOutlinePlus className="text-gray-800 text-[13px] sm:text-lg" />{" "}
                </motion.span>
                {item.question}
              </p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: item.isAnswerVisible ? "auto" : 0,
                  opacity: item.isAnswerVisible ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="flex text-gray-700 font-thin text-sm sm:text-md flex-wrap mb-3 mx-8 md:mx-10">
                  {item.answer}
                </p>
              </motion.div>
              <hr className="my-2" />
            </div>
          ))}
          <p className="text-sm px-4 md:px-0 font-light text-gray-500 mt-4 mb-4">
            Other questions or requests? Send us an email to: info@faw4locks.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
