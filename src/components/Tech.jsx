/* eslint-disable react/prop-types */
function Technology({ techName, techInfo, techImg }) {
  return (
    <div className="flex justify-evenly items-center">
      <div className="lg:w-[470px]">
        <h3 className="text-NearDarkGrey">THE TECHNOLOGY</h3>
        <h1 className="text-white text-4xl">{techName}</h1>
        <p className="text-NearDarkGrey">{techInfo}</p>
      </div>
      <div className="lg:w-[500px] lg:h-[500px]">
        <img src={techImg} alt="Our Technologies" />
      </div>
    </div>
  );
}

export default Technology;
