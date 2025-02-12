import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const Toggler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <header className="relative z-50">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-4 backdrop-blur-lg text-white">
        {/* Logo */}
        <Link to="/">
          <div className="flex-shrink-0">
            <img src="./assets/shared/logo.svg" alt="Logo" />
          </div>
        </Link>

        <div className="flex-grow border-t border-white mx-4"></div>

        <div className="flex-grow text-center">
          <nav
            className={`text-white leading-10 ${
              toggleNav ? "block" : "hidden"
            } md:block`}
          >
            <ul
              className={`lg:flex md:hidden sm:hidden backdrop-blur-lg bg-opacity-50 bg-white text-black flex-col items-center justify-center fixed top-0 left-0 w-full h-full z-40 ${
                toggleNav ? "block" : "hidden"
              } md:static lg:h-auto lg:w-auto lg:flex-row lg:justify-center`}
            >

              <div
                className="cursor-pointer lg:hidden md:block sm:block absolute top-4 right-4"
                onClick={Toggler}
              >
                <img src="./assets/shared/icon-close.svg" alt="Close Icon" />
              </div>

      
              <NavLink to="/">
                <li className="cursor-pointer list-none text-center py-5 lg:px-4">
                  <b>01</b> Home
                </li>
              </NavLink>

              <NavLink to="/destinations">
                <li className="cursor-pointer list-none text-center py-5 lg:px-4">
                  <b>02</b> Destination
                </li>
              </NavLink>

              <NavLink to="/crew">
                <li className="cursor-pointer list-none text-center py-5 lg:px-4">
                  <b>03</b> Crew
                </li>
              </NavLink>

              <NavLink to="/technologies">
                <li className="cursor-pointer list-none text-center py-5 lg:px-4">
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
};

export default Navigation;
