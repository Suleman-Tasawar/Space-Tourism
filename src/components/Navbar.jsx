import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [navToggler, setNavToggler] = useState(false);
  function toggleNav() {
    setNavToggler(true);
  }

  function CloseNav() {
    setNavToggler((prev) => !prev);
  }

  return (
    <div className="relative">
      <nav className="absolute top-8 flex justify-between align-middle">
        <div className="logo w-20 h-20">
          <img src="./assets/shared/logo.svg" alt="Logo" />
        </div>
        <div className="ml-96">
          <div
            className="lg:hidden md:hidden sm:block cursor-pointer"
            onClick={toggleNav}
          >
            <img src="./assets/shared/icon-hamburger.svg" alt="Menu Icon" />
          </div>
          <div
            className={` ${navToggler === true ? "sm:flex" : "sm:hidden"}
             sm:hidden sm:right-0 sm:top-0 sm:w-[250px] sm:h-screen md:h-0 lg:h-0 bg-opacity-4 backdrop-blur-[40.774227142333984px]`}
          >
            <ul className="flex font-barlow mt-5 lg:flex-row md:flex-row sm:flex-col sm:leading-[5rem]">
              <div className="lg:hidden md:hidden sm:block" onClick={CloseNav}>
                <img src="/assets/shared/icon-close.svg" alt="Menu Close" />
              </div>
              <Link to="/">
                <li className="sm:text-white ml-5 uppercase md:text-NearDarkGrey lg:text-NearDarkGrey cursor-pointer focus:border-b-2">
                  01 Home
                </li>
              </Link>

              <Link to="/Destinations">
                <li className="sm:text-white ml-5 uppercase md:text-NearDarkGrey lg:text-NearDarkGrey cursor-pointer focus:border-b-2">
                  02 Destinations
                </li>
              </Link>

              <Link to="/Technologies">
                <li className="sm:text-white ml-5 uppercase md:text-NearDarkGrey lg:text-NearDarkGrey cursor-pointer focus:border-b-2">
                  03 Technologies
                </li>
              </Link>

              <Link to="/Crew">
                <li className="sm:text-white ml-5 uppercase md:text-NearDarkGrey lg:text-NearDarkGrey cursor-pointer focus:border-b-2">
                  04 Crew
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
