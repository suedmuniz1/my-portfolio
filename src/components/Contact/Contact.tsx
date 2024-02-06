import { Tooltip } from "flowbite-react";
import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="text-white w-full mt-20 mb-28">
      <div className="text-center">
        <div className="mb-16 text-orange-400 text-4xl">Contact</div>
      </div>

      <div className="text-2xl info-card rounded-3xl text-center p-5">
        <div className="my-10">
          If you want to see more about my projects, please check out my{" "}
          <strong className="text-orange-400">Github</strong>:
          <div className="flex justify-center items-center my-5">
            <button className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-400 duration-300">
              <Tooltip content="Go to Github" placement="right">
                <a
                  href="https://github.com/suedmuniz1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrGithub size={60} />
                </a>
              </Tooltip>
            </button>
          </div>
        </div>

        <div className="my-10">
          For professional information and working experiences, please check out
          my <strong className="text-orange-400">LinkedIn</strong>:
          <div className="flex justify-center items-center my-5">
            <button className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-400 duration-300">
              <Tooltip content="Go to LinkedIn" placement="right">
                <a
                  href="https://linkedin.com/in/suedmuniz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin size={60} />
                </a>
              </Tooltip>
            </button>
          </div>
        </div>

        <div className="my-10">
          To follow my daily routine and personal activities, follow me on{" "}
          <strong className="text-orange-400">Instagram</strong>:
          <div className="flex justify-center items-center my-5">
            <button className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-400 duration-300">
              <Tooltip content="Go to Instagram" placement="right">
                <a
                  href="https://instagram.com/suedm1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram size={60} />
                </a>
              </Tooltip>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
