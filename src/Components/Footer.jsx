import React from "react";

const Footer = () => {
  return (
    <div className="w-full light-bg flex justify-center">
      <div className="w-[80%] flex justify-between py-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8"
            fill={true ? "gray" : "black"}
          >
            <path d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z" />
          </svg>
        </div>
        <div className="flex gap-12 justify-center items-center">
          <i className="fa-brands fa-facebook cursor-pointer text-3xl" />
          <i className="fa-brands fa-instagram cursor-pointer text-3xl" />
          <i className="fa-brands fa-twitter cursor-pointer text-3xl" />
          <i className="fa-brands fa-linkedin cursor-pointer text-3xl" />
        </div>
        <div className="flex items-center gap-1">
          <span>&copy; Created by </span>
          <a href="https://www.linkedin.com/in/codemasterr/" className="text-bold text-primary" target="_blank">
            {" "}
            Gaurav
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
