import SkillIcon from "./SkillIcon/SkillIcon";
import { skillsIconsNames } from "../../constants";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white mt-20">
      <div className="text-4xl mb-10 ml-10 text-center">
        <span className="text-orange-400">{t("components.about.who")}</span>
        {` ${t("components.about.iAm")}`}
      </div>
      <div className="flex">
        <div className="text-2xl leading-10 p-12 rounded-3xl info-card">
          <p className="text-justify">{t("components.about.aboutMe")}</p>
        </div>
        <img
          src="/assets/sued-nepomuceno.jpg"
          alt="Sued Nepomuceno"
          className=" w-80 ml-20 rounded-3xl border-4 border-gray-400"
        />
      </div>

      <div className="text-white text-center mt-20">
        <span className="text-4xl">
          <span className="text-orange-400">
            {t("components.about.professionalSkillSet")}
          </span>
          {` ${t("components.about.and")} `}
          <span className="text-orange-400">{t("components.about.tools")}</span>
        </span>
        <div className="flex justify-center rounded-3xl info-card my-14 py-10 flex-wrap">
          {skillsIconsNames.map((skill) => (
            <SkillIcon key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
