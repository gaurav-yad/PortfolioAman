import React from "react";
import expr from "../assets/expr.jfif";
import manager from "../assets/manager.jfif";
import teamLeader from "../assets/teamLeader.jfif";
import research from "../assets/research.jfif";
import "../styles.css";

const ExprCard = ({ img, title, more }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex items-center justify-center light-bg py-12">
        <img src={img} alt={title} className="w-96 exprImg object-cover h-56" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-xl">{title}</h2>
        <a href={more} target="_blank" className="text-primary uppercase text-sm font-bold">
          KNOW MORE <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-[80%] mx-auto my-10 flex flex-col gap-4" id="expr">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Work Experience</h1>
          <p className="text-lg">These are my featured work experiences</p>
        </div>

        <div className="self-center">
          <a className="bg-primary py-3 text-lg rounded-sm px-8 uppercase text-white" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <ExprCard img={expr} title="Academic Counsellor" more="https://www.upgrad.com/data-science-pgd-iiitb/?ref=ZJZEAU&utm_source=Priyanshu_Goel_EPGPDS&utm_medium=Affiliates_Ambassador&utm_campaign=IND_ACQ_Web_Affiliates_Ambassador_Priyanshu_Goel_EPGPDS&gad_source=1&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7oK4-CaPITn6yfVxzarDOmKDiSsk0wk-Jns1KVaWaF_PsapxOrr5JcaAm_2EALw_wcB" />
          <ExprCard img={manager} title="Manager and Teacher" more="https://www.justdial.com/Agra/Antim-Pag-Defence-Academy-Opposite-to-Water-TankNear-Defence-State-Madhu-Nagar/0562PX562-X562-221230212836-D9D5_BZDET" />
          <ExprCard img={teamLeader} title="Team Leader" more="https://netambit.com/" />
          <ExprCard img={research} title="Research" more="https://ijisrt.com/scrutinize-of-physicochemical-parameters-and-heavy-metals-in-industrial-waste-water-of-agra-district-and-alleviation-measures-of-their-venomous-effect" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
