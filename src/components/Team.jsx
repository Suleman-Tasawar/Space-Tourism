/* eslint-disable react/prop-types */
function Team({ jobTitle, crewName, crewInfo, crewImg }) {
  return (
    <div className="mt-8 flex lg:flex-row md:flex-col sm:flex-col justify-evenly align-middle items-center">
      <div className="p-3 lg:w-[470px] md:w-[380px] sm:w-[250px] lg:text-left md:text-center sm:text-center">
        <h2 className="text-NearDarkGrey lg:text-4xl md:text-2xl sm:text-xl">
          {jobTitle}
        </h2>
        <h1 className="text-white text-5xl mt-5">{crewName}</h1>
        <p className="text-NearDarkGrey mt-5">{crewInfo}</p>
      </div>

      <div className="lg:w-[570px] md:w-[540px] sm:w-[250px]">
        <img className=" z-10" src={crewImg} alt="Image of our Crew members" />
      </div>
    </div>
  );
}

export default Team;
