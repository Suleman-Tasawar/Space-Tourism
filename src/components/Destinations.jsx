// eslint-disable-next-line react/prop-types
function Destination({ img, title, text, distance, time, showDestination }) {
  return (
    <div className="flex sm:flex-col md:flex-row lg:flex-row justify-evenly items-center mt-28 relative">
      <div>
        <img
          className="lg:w-[445px] lg:h-[445px] md:w-[300px]
           md:h-[300px] sm:w-[200px] sm:h-[200px]"
          src={img}
          alt="Image of Planet to Visit"
        />
      </div>

      <div className="lg:w-[445px] md:w-[350px] sm:w-[250px] flex flex-col justify-center items-middle">
        <div className="mt-4 md:mr-6 sm:mr-6">
          <nav>
            <ul className="flex">
              <li
                className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer "
                onClick={() => showDestination(0)}
              >
                MOON
              </li>
              <li
                className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer"
                onClick={() => showDestination(1)}
              >
                MARS
              </li>
              <li
                className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer"
                onClick={() => showDestination(2)}
              >
                EUR0PA
              </li>
              <li
                className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer"
                onClick={() => showDestination(3)}
              >
                TITAN
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 lg:text-left md:text-center sm:text-center">
          <h1 className="lg:text-8xl md:text-6xl sm:text-5xl  text-white">
            {title}
          </h1>
          <p className="text-NearDarkGrey mt-12">{text}</p>
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-600 mt-12">
          <div>
            <p className="text-NearDarkGrey text-left">Average Distance</p>
            <h1 className="text-2xl text-white">{distance}</h1>
          </div>

          <div>
            <p className="text-NearDarkGrey">Average Time</p>
            <h1 className="text-2xl text-white">{time}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
