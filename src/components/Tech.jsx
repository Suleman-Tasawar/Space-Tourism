/* eslint-disable react/prop-types */
function Technology({ techName, techInfo, techImg }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
      <div className="lg:w-[470px] ml-10">
        <h3 className="text-NearDarkGrey">THE TECHNOLOGY</h3>
        <h1 className="text-white text-4xl py-5">{techName}</h1>
        <p className="text-NearDarkGrey">{techInfo}</p>
      </div>
      <div className="w-[250px] h-[400px] lg:w-[500px] lg:max-h-[600px]">
        <img className="w-full h-full object-cover" src={techImg} alt="Our Technologies" />
      </div>
    </div>
  );
}

export default Technology;
