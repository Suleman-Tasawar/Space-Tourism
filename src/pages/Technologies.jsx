import { useState } from "react";
import Tech from "../components/Tech";

//Added the logic but the issue still persists that the props being passed down to component
//is getting undefined
function Technologies() {
  const styles = {
    height: "100vh",
    backgroundImage:
      "url(/assets/technology/background-technology-desktop.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const Button = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    cursor: "pointer",
  };
  const defaultButton = {
    color: "#FAFAFA",
    backgroundColor: "#000",
  };
  const activeButton = {
    color: "#000",
    backgroundColor: "#FAFAFA",
  };
  const techData = [
    {
      id: 1,
      techName: "LAUNCH VEHICLE",
      techInfo:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      techImg: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    {
      id: 2,
      techName: "SPACEPORT",
      techInfo:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      techImg: "/assets/technology/image-space-capsule-portrait.jpg",
    },
    {
      id: 3,
      techName: "SPACE CAPSULE",
      techInfo:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      techImg: "/assets/technology/image-spaceport-portrait.jpg",
    },
  ];
  //

  const [currentTech, setCurrentTech] = useState(techData[0]);
  const [active, setActive] = useState(false);

  const showCurrentTech = (techNo) => {
    console.log(`The current no is : ${techNo}`);
    const selectedTech = techData.find((tech) => tech.id === techNo);
    setCurrentTech(selectedTech);
    console.log(`The tech data: ${selectedTech}`);
    setActive(!active);
  };

  return (
    <div className="pt-32" style={styles}>
      <h1 className="text-left text-2xl text-white">
        <span className="text-NearDarkGrey mr-1">03</span> SPACE LAUNCH 101
      </h1>

      <div className="flex  pt-20">
        <div className="">
          <div>
            <button
              style={{ ...Button, ...(active ? activeButton : defaultButton) }}
              onClick={() => showCurrentTech(1)}
            >
              1
            </button>
          </div>
          <div className="mt-7">
            <button
              style={{ ...Button, ...(active ? activeButton : defaultButton) }}
              onClick={() => showCurrentTech(2)}
            >
              2
            </button>
          </div>
          <div className="mt-7">
            <button
              style={{ ...Button, ...(active ? activeButton : defaultButton) }}
              onClick={() => showCurrentTech(3)}
            >
              3
            </button>
          </div>
        </div>
        <div className="">
          {active && (
            <Tech
              techName={currentTech.techName}
              techInfo={currentTech.techInfo}
              techImg={currentTech.techImg}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
