import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt, FaJava, FaLinux, FaReact } from "react-icons/fa6";
import {
  SiMacos,
  SiMongodb,
  SiPostman,
  SiSpring,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { Tooltip } from "flowbite-react";

type SkillIconProps = {
  skill: string;
};

const icons: Record<string, JSX.Element> = {
  javascript: <IoLogoJavascript size={60} />,
  react: <FaReact size={60} />,
  tailwind: <SiTailwindcss size={60} />,
  java: <FaJava size={60} />,
  spring: <SiSpring size={60} />,
  mongoDB: <SiMongodb size={60} />,
  postman: <SiPostman size={60} />,
  vscode: <TbBrandVscode size={60} />,
  git: <FaGitAlt size={60} />,
  linux: <FaLinux size={60} />,
  macOS: <SiMacos size={60} />,
};

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  const icon = icons[skill];

  return (
    <Tooltip content={skill} placement="top">
      <div className="border-2 border-white rounded-2xl p-5 mx-2 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        {icon}
      </div>
    </Tooltip>
  );
};

export default SkillIcon;
