import { useTranslation } from "react-i18next";
import { FaCodeFork, FaStar } from "react-icons/fa6";
import { navOptions } from "../../constants";
import NavigationOption from "../Navigation/NavigationOption/NavigationOption";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full w-3/4">
      <nav className="bg-gray-800 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <span className="text-orange-400 text-3xl font-bold cursor-default">
            Portfolio
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div id="languages" className="flex items-center mr-5">
              <button
                className="w-8 h-8 hover:scale-110 transition ease delay-150 duration-300 ml-2"
                onClick={() => i18n.changeLanguage("en")}
              >
                <img src="/assets/us.svg" alt="USA flag" />
              </button>
              <button
                className="w-8 h-8 hover:scale-110 transition ease delay-150 duration-300 ml-2"
                onClick={() => i18n.changeLanguage("pt")}
              >
                <img src="/assets/br.svg" alt="Brazil flag" />
              </button>
            </div>
            <a href="https://github.com/suedmuniz1/my-portfolio" target="_blank" rel="noopener noreferrer">
              <button type="button" className="flex items-center text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 text-center transition ease">
                <FaCodeFork size={20} className="mr-2" />
                <FaStar size={20} />
              </button>
            </a>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-800 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900">
              {navOptions.map(({ title, link }) => (
                <li>
                  <NavigationOption
                    key={title}
                    title={t(`components.navigation.${title}`)}
                    link={link}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
};

export default Header;
