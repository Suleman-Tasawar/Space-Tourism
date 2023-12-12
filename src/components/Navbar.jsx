import { useState } from "react";

function Navigation() {
  const [toggleNav, setToggleNav] = useState(false);

  const Toggler = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="relative mt-2 flex flex-row justify-between align-middle ">
      <div>
        <img src="./assets/shared/logo.svg/" alt="Logo" />
      </div>

      <div
        className="cursor-pointer lg:hidden md:block sm:block"
        onClick={Toggler}
      >
        <img src="./assets/shared/icon-hamburger.svg/" alt="Menu Icon" />
      </div>
      <nav
        className={`lg:block ${
          toggleNav ? `md:block sm:block` : `md:hidden sm:hidden`
        }`}
        style={{
          width: "100%",
          background: "rgba(255, 255, 255, 0.04)",
          backDropFilter: "blur(40.774227142333984px)",
        }}
      >
        <ul className="text-white leading-10 lg:static md:absolute md:top-0 md:right-0 sm:absolute sm:top-0 sm:right-0">
          <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
            <b>01</b>Home
          </li>
          <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
            <b>02</b>Destinations
          </li>
          <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
            <b>03</b>Crew
          </li>
          <li className="cursor-pointer list-none lg:inline-flex pl-4 md:pt-5 sm:pt-5 md:block sm:block">
            <b>04</b>Technologies
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
