import { useState } from "react";
import Tech from "../components/Tech";
import { techData } from "../utlis/data";

function Technologies() {
  const styles = {
    height: "100vh",
    backgroundImage: "url(/assets/technology/background-technology-desktop.jpg)",
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

  const [currentTech, setCurrentTech] = useState(techData[0]);
  const [activeTech, setActiveTech] = useState(1);

  const showCurrentTech = (techNo) => {
    setCurrentTech(techData.find((tech) => tech.id === techNo)); 
    setActiveTech(techNo); 
  };

  return (
    <div className="pt-32 h-[100vh]" style={styles}>
      <h1 className="text-left text-2xl text-white">
        <span className="text-NearDarkGrey mr-1">03</span> SPACE LAUNCH 101
      </h1>

      <div className="flex pt-20">
        <div>
          {techData.map((tech) => (
            <div key={tech.id} className="mt-7">
              <button
                style={{
                  ...Button,
                  ...(activeTech === tech.id ? activeButton : defaultButton),
                }}
                onClick={() => showCurrentTech(tech.id)}
              >
                {tech.id}
              </button>
            </div>
          ))}
        </div>

        <div className="">
          <Tech
            techName={currentTech.techName}
            techInfo={currentTech.techInfo}
            techImg={currentTech.techImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
