import { useState } from "react";
import Team from "../components/Team";
import { crew } from "../utlis/data";

function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(0); 

  const styles = {
    height: "100vh",
    backgroundImage: "url(/assets/crew/background-crew-desktop.jpg)",
  };


  // Function to display selected crew member
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
          <div key={member.id} className="flex items-center">
            <input
              className="bg-NearDarkGrey focus:bg-white ml-4 w-4 h-4 border-none"
              type="radio"
              name="crew-member"
              id={`crew-${member.id}`}
              checked={selectedCrew === member.id} 
              onChange={() => selectCrewMember(member.id)}
            />
            <label
              className="text-white ml-2 cursor-pointer"
              htmlFor={`crew-${member.id}`}
            >
              {member.name.split(" ")[0]}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crew;
