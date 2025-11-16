import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/*WORK PART*/}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-green-200">Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="Frontend Developer at XYZ Company"
              date="Jan 2020 - Present"
              description="this project was talaala"
            />
            <ResumeCard
              Icon={FaReact}
              role="UI/UX Designer at ABC Studio"
              date="Jun 2018 - Dec 2019"
              description="this project was talaala"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Intern at Web Solutions"
              date="Jan 2018 - May 2018"
              description="this project was talaala"
            />
          </div>
        </div>
        {/*EDUCATION PART*/}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-green-200">Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="Frontend Developer at XYZ Company"
              description="this project was talaala"
            />
            <ResumeCard
              Icon={FaReact}
              role="UI/UX Designer at ABC Studio"
              description="this project was talaala"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Intern at Web Solutions"
              description="this project was talaala"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
