import React from "react";
import SkillIcon from "./SkillIcon/SkillIcon";
import { skillsIconsNames } from "../../constants";

const About = () => {
  return (
    <>
      <div className="text-white flex justify-center items-end mt-20">
        <div>
          <div className="text-4xl mb-10 ml-10 text-center">
            <span className="text-orange-400">Who</span> I am?
          </div>

          <div className="text-2xl leading-10 p-12 rounded-3xl info-card">
            <p>
              Hi, my name is{" "}
              <span className="text-orange-400">Sued Nepomuceno Muniz</span>.
              I'm from Ceará, Brazil. I'm graduated in{" "}
              <span className="text-orange-400">Information Systems</span>, and
              I'm currently employed as{" "}
              <span className="text-orange-400">
                Fullstack Software Developer
              </span>{" "}
              at <span className="text-orange400">Avenue Code</span>.
            </p>

            <p>
              I started my carrer at Avenue Code as an intern, where I could
              learn too much during this period. I was able to improve my skills
              specially in Java with Spring, and React. After the internship
              period I got hired as a Junior Software Developer and started my
              career effectivelly.
            </p>

            <p>
              For now, I keep trying to improve my skills. I'm always looking
              for new challenges, building new personal projects, using new
              technologies, getting familiar with the new trends, and working
              hard on my current job.
            </p>
          </div>
        </div>
        <img
          src="./src/assets/sued-nepomuceno.jpg"
          alt="Sued Nepomuceno"
          className=" w-80 ml-20 rounded-3xl border-4 border-gray-400"
        />
      </div>
      <div className="text-white text-center mt-20">
        <span className="text-4xl">
          Professional <span className="text-orange-400">Skill set</span> and{" "}
          <span className="text-orange-400">Tools</span>
        </span>
        <div className="flex justify-center rounded-3xl info-card my-14 py-10 flex-wrap">
          {skillsIconsNames.map((skill) => (
            <SkillIcon key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
