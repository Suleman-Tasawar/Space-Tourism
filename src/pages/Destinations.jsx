import Destination from "../components/Destinations";
import { useState } from "react";

function Destinations() {
  const [showsDestination, setShowDestination] = useState(true);

  const styles = {
    height: "120vh",
    backgroundImage:
      "url(/assets/destination/background-destination-desktop.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  //Data of destinations
  const data = [
    {
      id: 0,
      image: "/assets/destination/image-moon.png",
      title: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      time: "3 DAYS",
    },
    {
      id: 1,
      image: "/assets/destination/image-mars.png",
      title: "MARS",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      time: "9 MONTHS",
    },
    {
      id: 2,
      image: "/assets/destination/image-europa.png",
      title: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      time: "3 YEARS",
    },
    {
      id: 3,
      image: "/assets/destination/image-titan.png",
      title: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      time: "7 YEARS",
    },
  ];

  const showDestination = (key) => {
    const selectedDestination = data.find((element) => element.id === key);
    setShowDestination(selectedDestination);
  };

  return (
    <div style={styles} className="md:h-[140vh]">
      <h1 className="text-white text-xl text-left ml-12 pt-32">
        <span className="text-NearDarkGrey ">01</span> PICK YOUR DESTINATION
      </h1>

      <div>
        {showsDestination && (
          <Destination
            img={showsDestination.image}
            title={showsDestination.title}
            text={showsDestination.text}
            distance={showsDestination.distance}
            time={showsDestination.time}
            showDestination={showDestination}
          />
        )}
      </div>
    </div>
  );
}

export default Destinations;
