import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";

const Header = () => {
  return (
    <div className="flex justify-center py-2 w-3/4">
      <div className="w-full flex justify-between items-center">
        <Tooltip content="Go to Home page" placement="right">
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
