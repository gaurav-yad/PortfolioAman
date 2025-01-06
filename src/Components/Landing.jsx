import React, { useContext, useState } from "react";
import fyp from "../assets/fyp.jpg";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../context/ThemeContext";

const Landing = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className="flex h-[85vh] relative">
      <div className="absolute top-4 right-8 w-8 rounded-full p-1 cursor-pointer" onClick={toggleTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={`${theme === "light" ? "#000000" : "#ffffff"}`}
        >
          <path d="M680-520v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM440-200q54 0 100.5-21.5T620-281q-126-8-213-99.5T320-600q0-13 1-25.5t3-24.5q-56 31-90 86.5T200-440q0 100 70 170t170 70Zm0 80q-134 0-227-93t-93-227q0-134 93-227t227-93q5 0 10 .5t10 .5q-29 32-44.5 72.5T400-600q0 100 70 170t170 70q32 0 61-8t55-22q-18 115-106.5 192.5T440-120Zm-33-261Z" />
        </svg>
      </div>
      <div className="w-1/3 flex items-center justify-end mr-16">
        <img src={fyp} alt="My Image" className="w-[70%] rounded-[5rem]" />
      </div>
      <div className="w-2/3 items-center flex">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-bold text-[#eb3535] text-xl">
              Hello I am Aman
            </h3>
            <h1 className="text-7xl font-bold">
              Team Leader
            </h1>
          </div>
          <p className="w-[70%] text-lg my-2">
            A hardworking, mature, and responsible leader with forward thinking
            and excellent interpersonal and organizational skills.
          </p>
          <a
            className="bg-primary w-64 text-white py-2 text-lg rounded-sm hover:scale-105 transition-transform flex gap-2 justify-center items-center"
            download
            href="https://gaurav-yad.github.io/PortfolioAman//resumeAman.pdf"
          >
            <span>My Resume</span> <i class="fa-solid fa-briefcase"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
