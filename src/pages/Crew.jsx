import { useState } from "react";
import Team from "../components/Team";
import { crew } from "../utlis/data";

function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(0); 

  const styles = {
    height: "100vh",
    backgroundImage: "url(/assets/crew/background-crew-desktop.jpg)",
  };


  //This will select the current data for crew member when clicked from id
  const selectCrewMember = (id) => {
    setSelectedCrew(id);
  };

  const crewMember = crew[selectedCrew];

  return (
    <div style={styles} className="bg-cover">
      <div>
        <h2 className="text-white capitalize">
          <span className="text-NearDarkGrey">02 </span>
          meet your crew
        </h2>

        {crewMember && (
          <Team
            jobTitle={crewMember.lable}
            crewName={crewMember.name}
            crewInfo={crewMember.info}
            crewImg={crewMember.img}
          />
        )}
      </div>

      {/* Radio buttons for selecting crew members */}
      <div className="absolute bottom-24 left-24 flex justify-evenly items-center">
        {crew.map((member) => (
          <div key={member.id} className="flex items-center cursor-pointer">
            <input
              className="bg-NearDarkGrey focus:bg-white ml-4 w-4 h-4 border-none cursor-pointer"
              type="radio"
              name="crew-member"
              id={`crew-${member.id}`}
              checked={selectedCrew === member.id} 
              onChange={() => selectCrewMember(member.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crew;
