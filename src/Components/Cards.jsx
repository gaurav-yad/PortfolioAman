import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Cards = ({ icon, title, content, index, more }) => {
  const [flip, setFlip] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-1/4 h-80 p-5 ${
        index % 2 == 1 ? "bg-primary" : "light-bg"
      } hover:scale-105 transition-transform rounded-sm`}
    >
      <motion.div
        style={{ width: "20rem", height: "10rem" }}
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
      >
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className="Card"
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="front"
            style={{ display: !flip ? "none" : "block" }}
          >
            <div className="flex flex-col h-full p-4 gap-3">
              <i
                className={`${icon} text-5xl ${
                  index % 2 == 0 ? "text-primary" : "text-white"
                } drop-shadow-xl`}
              ></i>
              <h2 className={`font-bold text-2xl ${index % 2 != 0 && 'text-white'}`}>{title}</h2>
              <p className={`text-lg ${index % 2 == 0 ? 'text-secondary' : 'text-white'}`}>{content}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: flip ? 180 : 0 }}
            style={{ display: flip ? "none" : "block" }}
            transition={{ duration: 0.7 }}
            className="back p-4"
          >
            <p className={`text-lg ${index % 2 == 0 ? 'text-secondary' : 'text-white'}`}>{more}</p>
          </motion.div>
          <button
            onClick={() => setFlip((prev) => !prev)}
            className={`font-bold ml-4 text-sm ${index % 2 == 0 ? "text-primary" : 'text-white'} flex gap-2 items-center`}
          >
            <span>{flip ? 'SHOW MORE' : 'SHOW LESS'}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cards;
