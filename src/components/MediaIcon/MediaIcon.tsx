import { Tooltip } from "flowbite-react";
import { MediaProps } from "../Footer/Footer";

const MediaIcon: React.FC<MediaProps> = ({ name, icon, link }) => {
  return (
    <button className="mx-2 transition ease-in-out delay-150 hover:text-orange-400 duration-300">
      <Tooltip content={name} placement="top">
        <a href={link} target="_blank">
          {icon}
        </a>
      </Tooltip>
    </button>
  );
};

export default MediaIcon;
