import React, { useState } from "react";
import Cards from "./Cards";

const About = () => {
  const cardsContent = [
    {
      icon: "fa-solid fa-people-group",
      title: "Team Leader",
      content:
        "Led a team of 10 members to achieve project goals successfully.",
      more: <p>As a team leader at <span className="font-bold">NETAMBIT VALUE</span> I was responsible for setting project milestones, delegating tasks, and ensuring timely completion. My leadership helped the team to consistently meet deadlines and exceed expectations.</p>
    },
    {
      icon: "fa-brands fa-google-scholar",
      title: "Academic Counsellor",
      content:
        "Assisted several students in course selection and career planning.",
      more: <p>In my role as an academic counsellor at <span className="font-bold">TALENTEDGE, UPGRAD</span> I helped students navigate their academic journeys by offering personalized advice on course selection and career planning.</p>,
    },
    {
      icon: "fa-solid fa-people-roof",
      title: "Teacher and Manager",
      content:
        "Taught various subjects to students preparing for competitive exams.",
      more: "As a teacher and manager at ANTIM PAG DEFENCE ACADEMY I was responsible for delivering lectures to students preparing for defence examinations. I developed curriculum plans and assessed students to help them improve.",
    },
  ];
  return (
    <div id="about">
      <div className="flex gap-10 justify-center">
        {cardsContent.map((card, index) => (
          <Cards
            key={index}
            icon={card.icon}
            title={card.title}
            content={card.content}
            more={card.more}
            index={index}
          />
        ))}
      </div>
      <div className="flex gap-10 justify-center my-8">
        <div className="px-5 py-4 flex flex-col w-1/4 h-64 items-center justify-center gap-3">
          <h1 className="text-8xl font-bold text-primary">4+</h1>
          <p className="font-bold text-lg text-secondary">Years of experience</p>
        </div>

        <div className="py-4 flex flex-col w-1/4 h-72 gap-4">
          <div className="light-bg h-[50%] flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold text-primary">100+</h1>
            <p className="text-secondary text-md capitalize">Clients</p>
          </div>
          <div className="light-bg h-[50%] flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold text-primary">1</h1>
            <p className="text-secondary text-md capitalize">Research Paper</p>
          </div>
        </div>

        <div className="py-4 flex flex-col w-1/4 h-72 gap-4">
          <div className="light-bg h-[50%] flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold text-primary">75+</h1>
            <p className="text-secondary text-md capitalize">Client approvals</p>
          </div>
          <div className="light-bg h-[50%] flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold text-primary">20+</h1>
            <p className="text-secondary text-md capitalize">Achievements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
