import { useState } from "react";
import Destination from "../components/Destinations";

function Destinations() {
  const [tabs, setTabs] = useState(0);

  const styles = {
    height: "100vh",
    backgroundImage:
      "url(/assets/destination/background-destination-desktop.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  //Data of Planets
  const destinationData = {
    moon: {
      id: 1,
      image: "/assets/destination/image-moon.png",
      title: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      time: "3 DAYS",
    },

    mars: {
      id: 2,
      image: "/assets/destination/image-mars.png",
      title: "MARS",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      time: "9 MONTHS",
    },

    europa: {
      id: 3,
      image: "/assets/destination/image-europa.png",
      title: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      time: "3 YEARS",
    },

    titan: {
      id: 4,
      image: "/assets/destination/image-titan.png",
      title: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      time: "7 YEARS",
    },
  };

  return (
    <div style={styles}>
      <h1 className="text-white text-xl text-left ml-5">
        <span className="text-NearDarkGrey">01</span> PICK YOUR DESTINATION
      </h1>

      <nav className="relative">
        <ul className="flex absolute top-32 right-32">
          <li className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer ">
            MOON
          </li>
          <li className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer">
            MARS
          </li>
          <li className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer">
            EUR0PA
          </li>
          <li className="text-NearDarkGrey ml-6 hover:text-white hover:underline cursor-pointer">
            TITAN
          </li>
        </ul>
      </nav>
      <div>{
        Object.keys(planetData).map((data) =>(
          
        ))
        }</div>
    </div>
  );
}

export default Destinations;
