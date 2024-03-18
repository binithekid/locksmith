import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function ModalForm({ isOpen, setIsOpen }: any) {
  function closeModal() {
    setIsOpen(false);
  }

  const [state, handleSubmit] = useForm("mbjnagbe");

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <p
                    className={`font-light tracking-wide uppercase text-sm text-center ${raleway.className}`}
                  >
                    Application to
                  </p>
                  <h1
                    className={`text-2xl tracking-wide font-light text-center ${raleway.className}`}
                  >
                    BOOK A LOCKSMITH
                  </h1>
                  <form method="POST" onSubmit={handleSubmit} className="mt-4">
                    <select
                      id="Enquiry Type"
                      name="Enquiry Type"
                      required
                      className="w-full appearance-none shadow-sm bg-transparent font-thin border text-sm px-2 py-1 rounded custom-select mt-1 border-gray-400"
                    >
                      <option value="">Choose an Enquiry Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Business">Business</option>
                    </select>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full appearance-none shadow-sm bg-transparent font-thin border text-sm px-2 py-1 rounded mt-3 border-gray-400"
                      placeholder="Name"
                    />
                    <input
                      id="tel"
                      name="phone number"
                      type="tel"
                      required
                      className="w-full appearance-none shadow-sm bg-transparent font-thin border text-sm px-2 py-1 rounded mt-3 border-gray-400"
                      placeholder="Contact Number"
                    />
                    <input
                      required
                      id="email"
                      type="email"
                      name="email"
                      className="w-full appearance-none shadow-sm bg-transparent font-thin border text-sm px-2 py-1 rounded mt-3 border-gray-400"
                      placeholder="Email"
                    />
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full appearance-none shadow-sm bg-transparent font-thin border text-sm px-2 py-1 rounded mt-3 border-gray-400"
                      placeholder="How can we help?"
                    />
                    <motion.button
                      type="submit"
                      className="w-full appearance-none font-light shadow-sm bg-transparent border text-sm px-2 py-2 rounded mt-3 border-gray-400"
                      whileHover={{
                        backgroundColor: "#20272d",
                        color: "white",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {state.succeeded ? "MESSAGE SENT" : "SEND MESSAGE"}
                    </motion.button>
                    {state.succeeded ? (
                      <p className="mt-4 text-xs text-gray-700 font-light w-full text-center">
                        Thank you, Our team will call you shortly
                      </p>
                    ) : (
                      <p className="mt-4 text-sm text-gray-700 font-light w-full text-center">
                        🔒 Your information is 100% secure
                      </p>
                    )}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
