/* eslint-disable react/prop-types */
function Technology({ TechName, TechInfo, TechImg }) {
  return (
    <div className="flex justify-evenly items-center">
      <div className="lg:w-[470px]">
        <h3 className="text-NearDarkGrey">THE TECHNOLOGY</h3>
        <h1 className="text-white text-4xl">{TechName}</h1>
        <p className="text-NearDarkGrey">{TechInfo}</p>
      </div>
      <div className="lg:w-[515px] lg:h-[530px]">
        <img src={TechImg} alt="Our Technologies" />
      </div>
    </div>
  );
}

export default Technology;
