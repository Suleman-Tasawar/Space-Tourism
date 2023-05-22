import { BrowserRouter, Route, Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className=" flex justify-evenly align-middle absolute top-20">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>

      <div className="blur-0 bg-NavBarBg">
        <ul className="flex font-barlow mt-5">
          <li className="ml-5 uppercase text-NearDarkGrey cursor-pointer hover:border-b-2">
            <Link to="/">01 Home</Link>
          </li>
          <li className="ml-5 uppercase text-NearDarkGrey cursor-pointer hover:border-b-2">
            <Link to="/Destinations">02 Destinations</Link>
          </li>
          <li className="ml-5 uppercase text-NearDarkGrey cursor-pointer hover:border-b-2">
            <Link to="/Technologies">03 Technologies</Link>
          </li>
          <li className="ml-5 uppercase text-NearDarkGrey cursor-pointer hover:border-b-2">
            <Link to="/Crew">04 Crew</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
