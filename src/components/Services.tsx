import React from "react";
import { Raleway } from "next/font/google";
import { BsExclamationTriangle } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsKey } from "react-icons/bs";
import { BsDoorClosed } from "react-icons/bs";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const Services = () => {
  return (
    <div className="w-full py-20 items-center justify-center px-4 md:px-10 lg:px-20 flex flex-col">
      <h1
        className={`md:text-2xl text-xl uppercase text-center px-4 md:px-20 lg:px-[17rem] font-light ${raleway.className}`}
      >
        We offer comprehensive services for all types of domestic and commercial
        needs
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-3 pt-10">
        <div className="w-full md:w-1/4 border shadow rounded flex flex-col gap-6 py-6 px-8 items-center">
          <BsExclamationTriangle className="text-black text-5xl" />
          <p className="text-center">Emergency Locksmiths</p>
          <p className="text-sm font-thin text-center">
            We offer an established 24/7 Emergency Call Out service for those
            that are in need of an emergency locksmith. From burglaries to
            locking yourself out, our emergency locksmith service can help you
            when you need.
          </p>
        </div>
        <div className="w-full md:w-1/4 transition-all border shadow rounded flex flex-col gap-6 py-6 px-8 items-center">
          <BsPeople className="text-black text-5xl" />
          <p className="text-center">Domestic Locksmith Services</p>
          <p className="text-sm font-thin text-center">
            We also offer general locksmith services for homeowners that want to
            fix/repair a lock in their home. We’re Which? Approved and we’re
            long serving members of the Independent Locksmith Guild.
          </p>
        </div>
        <div className="w-full md:w-1/4 border shadow rounded flex flex-col gap-6 py-6 px-8 items-center">
          <BsKey className="text-black text-5xl" />
          <p className="text-center">Anti Snap Locks</p>
          <p className="text-sm font-thin text-center">
            We offer Anti Snap Lock installation and upgrades for home and
            business owners that are looking to protect their property.
            Anti-snap locks are a great way of protecting your home from
            criminals.
          </p>
        </div>
        <div className="w-full md:w-1/4 border shadow rounded flex flex-col gap-6 py-6 px-8 items-center">
          <BsDoorClosed className="text-black text-5xl" />
          <p className="text-center">UPVC Door / Window Locks</p>
          <p className="text-sm font-thin text-center">
            We work with the best suppliers and manufacturers to ensure that
            we’re able to deliver the best in uPVC and Composite door locks to
            you, our client. Our vans are fully stocked ensuring that we finish
            the job on the day we visit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
