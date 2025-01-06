import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aman0902work@gmail.com").then(() => {
      setCopied(true);
      toast.success("Email Address Copied!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: theme,
      });
      setTimeout(() => setCopied(false), 1000);
    });
  };

  const particles = Array.from({ length: 12 });

  return (
    <div
      className="w-full flex justify-center items-center h-[45vh] md:mb-20 my-4"
      id="contact"
    >
      <div className="light-bg w-[80vw] h-[40vh] flex">
        <div className="w-[60%] flex justify-center items-center flex-col pl-16 gap-4">
          <h1 className="text-5xl font-bold">
            Let's connect and work together.
          </h1>
          <p>
            Feel free to reach out! Whether you have a question, an opportunity,
            or just want to say hi, I'd love to connect. Let's create something
            amazing together!
          </p>
        </div>
        <div className="w-[40%] flex justify-center items-center relative">
          <button
            onClick={handleCopyEmail}
            className="bg-primary py-3 px-8 rounded-sm shadow-xl text-lg relative z-10 text-white hover:scale-105 transition-all duration-300"
          >
            Copy my Email
          </button>
          {copied && (
            <div className="absolute inset-0 flex justify-center items-center">
              {particles.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-red-500 rounded-full"
                  style={{ width: "10px", height: "10px" }}
                  initial={{ opacity: 1, scale: 2, x: 0, y: 0 }}
                  animate={{
                    opacity: 0,
                    scale: [1, 2, 0],
                    x: [0, (Math.random() - 0.5) * 200],
                    y: [0, (Math.random() - 0.5) * 200],
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
