import { useState } from "react";
import Team from "../components/Team";

function Crew() {
  const [showCrew, setShowCrew] = useState(null);

  const styles = {
    height: "100vh",
    backgroundImage: "url(/assets/crew/background-crew-desktop.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  //data of crew members
  const crew = [
    {
      id: 0,
      name: "Douglas Hurley",
      lable: "Commander ",
      info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: "/assets/crew/image-douglas-hurley.png",
    },
    {
      id: 1,
      name: "MARK SHUTTLEWORTH",
      lable: "Mission Specialist ",
      info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: "/assets/crew/image-mark-shuttleworth.png",
    },
    {
      id: 2,
      name: "Victor Glover",
      lable: "PILOT",
      info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      img: "/assets/crew/image-victor-glover.png",
    },
    {
      id: 3,
      name: "Anousheh Ansari",
      lable: "Flight Engineer",
      info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      img: "/assets/crew/image-anousheh-ansari.png",
    },
  ];
  /*
  This Function will display the data of the planet whose name is clicked
  */
  const crewMembers = (id, dataArr) => {
    let selectedCrew = dataArr.find((person) => person.id === id);
    setShowCrew(selectedCrew);
  };

  return (
    <div style={styles}>
      <h2 className="text-white capitalize">
        <span className="text-NearDarkGrey">02 </span>
        meet your crew
      </h2>

      <div>
        {showCrew && (
          <Team
            jobTitle={showCrew.lable}
            crewName={showCrew.name}
            crewInfo={showCrew.info}
            crewImg={showCrew.img}
          />
        )}
      </div>
      <div className="absolute bottom-24 left-24 flex justify-evenly items-center">
        <input
          className="bg-NearDarkGrey focus:bg-white ml-4 w-4 h-4 border-none"
          type="radio"
          name="first person"
          id="one"
          onClick={() => crewMembers(0, crew)}
        />
        <input
          className="bg-NearDarkGrey focus:bg-white ml-4 w-4 h-4 border-none"
          type="radio"
          name="second person"
          id="two"
          onClick={() => crewMembers(1, crew)}
        />
        <input
          className="bg-NearDarkGrey focus:bg-white ml-4 w-4 h-4 border-none"
          type="radio"
          name="third person"
          id="three"
          onClick={() => crewMembers(2, crew)}
        />
        <input
          className="bg-NearDarkGrey focus:bg-white ml-4 w-4 h-4 border-none"
          type="radio"
          name="fourth person"
          id="fourth"
          onClick={() => crewMembers(3, crew)}
        />
      </div>
    </div>
  );
}

export default Crew;
