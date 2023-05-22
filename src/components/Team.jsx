/* eslint-disable react/prop-types */
function Team({ jobTitle, crewName, crewInfo, crewImg }) {
  return (
    <div className="flex justify-evenly align-middle items-center">
      <div className="w-[470px]">
        <h2 className="text-NearDarkGrey text-3xl">{jobTitle}</h2>
        <h1 className="text-white text-5xl mt-5">{crewName}</h1>
        <p className="text-NearDarkGrey mt-5">{crewInfo}</p>
      </div>

      <div className="w-[570px] h-auto">
        <img className=" z-10" src={crewImg} alt="Image of our Crew members" />
      </div>
    </div>
  );
}

export default Team;
