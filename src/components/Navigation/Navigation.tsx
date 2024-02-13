import { useTranslation } from "react-i18next";
import { navOptions } from "../../constants";
import NavigationOption from "./NavigationOption/NavigationOption";
import { FaCodeFork, FaStar } from "react-icons/fa6";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-center items-center">
      <div className="mx-14">
        {navOptions.map(({ title, link }) => (
          <NavigationOption
            key={title}
            title={t(`components.navigation.${title}`)}
            link={link}
          />
        ))}
      </div>
      <div id="languages" className="mr-20 w-20 flex justify-between">
        <button
          className="w-8 h-8 hover:scale-110 transition ease delay-150 duration-300"
          onClick={() => i18n.changeLanguage("en")}
        >
          <img src="/assets/us.svg" alt="USA flag" />
        </button>
        <button
          className="w-8 h-8 hover:scale-110 transition ease delay-150 duration-300"
          onClick={() => i18n.changeLanguage("pt")}
        >
          <img src="/assets/br.svg" alt="Brazil flag" />
        </button>
      </div>
      <a href="https://github.com/suedmuniz1/my-portfolio" target="_blank">
        <button className="w-20 h-10 flex justify-around items-center rounded-2xl text-white px-2 bg-orange-500 transition easy-in-out delay-150 duration-300 hover:bg-orange-800 hover:scale-110">
          <FaCodeFork size={20} />
          <FaStar size={20} />
        </button>
      </a>
    </div>
  );
};

export default Navigation;
