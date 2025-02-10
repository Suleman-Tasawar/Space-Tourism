import Destination from "../components/Destinations";
import { useState } from "react";
import { data } from "../utlis/data";

function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(0);

  const styles = {
    height: "120vh",
    backgroundImage:
      "url(/assets/destination/background-destination-desktop.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const showDestination = (id) => {
    setSelectedDestination(id);
  };

  const destination = data[selectedDestination];

  return (
    <div style={styles} className="md:h-[140vh]">
      <h1 className="text-white text-xl text-left ml-12 pt-32">
        <span className="text-NearDarkGrey">01</span> PICK YOUR DESTINATION
      </h1>

      <div className="flex space-x-4 ml-12 mt-8">
        {/* Render buttons for each destination */}
        {data.map((destinationData) => (
          <button
            key={destinationData.id}
            onClick={() => showDestination(destinationData.id)}
            className={`text-white px-6 py-2 rounded-lg border-2 ${
              selectedDestination === destinationData.id
                ? "bg-white text-black"
                : "bg-transparent"
            }`}
          >
            {destinationData.title}
          </button>
        ))}
      </div>

      {/* Show the destination content */}
      <div className="mt-8">
        {destination && (
          <Destination
            img={destination.image}
            title={destination.title}
            text={destination.text}
            distance={destination.distance}
            time={destination.time}
          />
        )}
      </div>
    </div>
  );
}

export default Destinations;
