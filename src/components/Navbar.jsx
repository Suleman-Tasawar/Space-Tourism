function Navigation() {
  return (
    <nav className="flex justify-evenly align-middle">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>

      <div className="blur-sm">
        <ul className="flex font-barlow">
          <li className="ml-5 uppercase text-NearDarkGrey">01 Home</li>
          <li className="ml-5 uppercase text-NearDarkGrey">02 Destinations</li>
          <li className="ml-5 uppercase text-NearDarkGrey">03 Technoligies</li>
          <li className="ml-5 uppercase text-NearDarkGrey">04 Crew</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
