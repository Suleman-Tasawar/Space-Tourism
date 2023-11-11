import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navigation() {
  const [active, setActive] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);

  const navActive = () => {
    setActive(!active);
    setCloseIcon(true);
  };

  const closeActiveNav = () => {
    setActive(!active);
  };
  return (
    <div className="relative">
      <nav className="absolute top-8 flex justify-between align-middle">
        <div className="logo w-20 h-20">
          <img src="./assets/shared/logo.svg" alt="Logo" />
        </div>
        <div className="ml-96">
          <div className="lg:hidden md:hidden sm:block" onClick={navActive}>
            <img src="./assets/shared/icon-hamburger.svg" alt="Menu Icon" />
          </div>
          {active && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: " blur(40.774227142333984px)",
              }}
              className="sm:fixed sm:right-0 sm:top-0 sm:w-[250px] sm:h-screen"
            >
              <ul className="flex font-barlow mt-5 lg:flex-row md:flex-row sm:flex-col sm:leading-[5rem]">
                {closeIcon && (
                  <div
                    className="lg:hidden md:hidden sm:block"
                    onClick={closeActiveNav}
                  >
                    <img src="/assets/shared/icon-close.svg" alt="Menu Close" />
                  </div>
                )}
                <Link to="/">
                  {" "}
                  <li className="sm:text-white-0 ml-5 uppercase text-NearDarkGrey cursor-pointer focus:border-b-2">
                    01 Home
                  </li>{" "}
                </Link>

                <Link to="/Destinations">
                  {" "}
                  <li className="ml-5 uppercase sm:text-white text-NearDarkGrey cursor-pointer focus:border-b-2">
                    02 Destinations
                  </li>{" "}
                </Link>

                <Link to="/Technologies">
                  <li className="ml-5 uppercase sm:text-white text-NearDarkGrey cursor-pointer focus:border-b-2">
                    03 Technologies
                  </li>{" "}
                </Link>

                <Link to="/Crew">
                  <li className="ml-5 uppercase sm:text-white text-NearDarkGrey cursor-pointer focus:border-b-2">
                    04 Crew
                  </li>{" "}
                </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
