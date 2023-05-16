// eslint-disable-next-line react/prop-types
function Destination({ img, title, text, distance, time }) {
  return (
    <div className="flex justify-evenly items-end">
      <div>
        <img src={img} alt="Image of Planet to Visit" />
      </div>

      <div>
        <h1 className="text-4xl text-white">{title}</h1>
        <p className="text-NearDarkGrey">{text}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-NearDarkGrey">Average Distance</p>
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
