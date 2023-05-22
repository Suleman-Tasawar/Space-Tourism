// eslint-disable-next-line react/prop-types
function Destination({ img, title, text, distance, time }) {
  return (
    <div className="flex justify-evenly items-center mt-28 relative">
      <div>
        <img
          className="w-[445px] h-[445px]"
          src={img}
          alt="Image of Planet to Visit"
        />
      </div>

      <div className="w-[445px] flex flex-col justify-center items-middle">
        <h1 className="text-8xl text-white">{title}</h1>
        <p className="text-NearDarkGrey mt-12">{text}</p>
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
