import React from "react";

import "./NavigationOption.css";
import { NavLink } from "react-router-dom";

type NavigationOptionProps = {
  title: string;
  link: string;
};

const NavigationOption: React.FC<NavigationOptionProps> = ({
  title = "",
  link = "",
}) => {
  return (
    <NavLink
      id="nav-link"
      className="text-white text-2xl mx-4 p-3 hvr-underline-reveal"
      to={link}
      key={title}
    >
      {title}
    </NavLink>
  );
};

export default NavigationOption;
