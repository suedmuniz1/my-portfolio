import { FaLinkedin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import MediaIcon from "../MediaIcon/MediaIcon";
import { useTranslation } from "react-i18next";

export type MediaProps = {
  name: string;
  icon: JSX.Element;
  link: string;
};

const medias: MediaProps[] = [
  {
    name: "GitHub",
    icon: <FaGithub size={32} />,
    link: "https://github.com/suedmuniz1",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={32} />,
    link: "https://www.linkedin.com/in/suedmuniz/",
  },
  {
    name: "Instagram",
    icon: <PiInstagramLogoFill size={32} />,
    link: "https://www.instagram.com/suedm1/",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center bg-gray-900 text-white py-2 mt-10">
      <span className="text-1xl">
        {t("components.footer.madeBy")}
        <strong className="text-orange-400">Sued Nepomuceno</strong>.
      </span>
      <div className="flex justify-between items-center ml-5">
        {medias.map(({ name, icon, link }) => (
          <MediaIcon key={name} name={name} icon={icon} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
