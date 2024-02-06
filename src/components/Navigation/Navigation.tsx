import React from "react";
import { navOptions } from "../../constants";
import NavigationOption from "./NavigationOption/NavigationOption";
import { FaCodeFork, FaStar } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mx-14">
        {navOptions.map(({ title, link }) => (
          <NavigationOption key={title} title={title} link={link} />
        ))}
      </div>
      <button className="w-20 h-10 flex justify-around items-center rounded-2xl text-white px-2 bg-orange-500 transition easy-in-out delay-150 duration-300 hover:bg-orange-800">
        <FaCodeFork size={20} />
        <FaStar size={20} />
      </button>
    </div>
  );
};

export default Navigation;
