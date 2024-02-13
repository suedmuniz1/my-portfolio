import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center w-full w-3/4">
      <div className="w-full flex justify-between items-center">
        <Tooltip
          content={t("components.header.goToHomePage")}
          placement="right"
        >
          <Link to="/" className="text-orange-400 text-4xl font-bold">
            Portfolio
          </Link>
        </Tooltip>

        <Navigation />
      </div>
    </div>
  );
};

export default Header;
