import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation() {
  const [toggleNav, setToggleNav] = useState(false);

  const Toggler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <header className="relative z-50">
      {/* Main Navbar Container */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-opacity-70 backdrop-blur-lg">
        {/* Logo */}
        <Link to="/">
          <div className="flex-shrink-0">
            <img src="./assets/shared/logo.svg" alt="Logo" />
          </div>
        </Link>

        <div className="flex-grow border-t border-white mx-4"></div>

        {/* Navigation Menu */}
        <div className="flex-grow text-center">
          <nav
            className={`text-white leading-10 ${
              toggleNav ? "md:block sm:block" : "md:hidden sm:hidden"
            }`}
          >
            <ul className="lg:h-[40px] md:h-[100vh] sm:h-[100vh] lg:w-[100%] md:w-[50%] sm:w-[50%] lg:static md:absolute md:top-0 md:left-[100vh] sm:absolute sm:top-0 sm:left-[300%] backdrop-blur-lg bg-opacity-60">
              <div
                className="cursor-pointer lg:hidden md:block sm:block"
                onClick={Toggler}
              >
                <img src="./assets/shared/icon-close.svg" alt="Close Icon" />
              </div>

              <NavLink to="/">
                <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
                  <b>01</b> Home
                </li>
              </NavLink>

              <NavLink to="/destinations">
                <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
                  <b>02</b> Destination
                </li>
              </NavLink>

              <NavLink to="/crew">
                <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
                  <b>03</b> Crew
                </li>
              </NavLink>

              <NavLink to="/technologies">
                <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
                  <b>04</b> Technologies
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>

        <div
          className="flex-shrink-0 cursor-pointer lg:hidden md:block sm:block"
          onClick={Toggler}
        >
          <img src="./assets/shared/icon-hamburger.svg" alt="Menu Icon" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
