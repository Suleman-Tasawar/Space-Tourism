import "../App.css";
function Home() {
  const styles = {
    height: "100vh",
    background: "url(/assets/home/background-home-desktop.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div
      style={styles}
      className="pt-10 flex lg:flex-row md:flex-row sm:flex-col justify-evenly items-center font-barlow"
    >
      <div className="lg:w-[450px] md:w-[350px] sm:w-[250px] lg:text-left sm:text-center sm:pt-4 ">
        <h2 className="text-homeTextGrey text-lg">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="text-white text-4xl mt-6">SPACE</h1>
        <p className="text-homeTextGrey mt-6 lg:text-lg md:text-lg sm:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex justify-center items-center w-[350px] h-[350px] sm:w-[300px] sm:h-[300px]    focus-within:bg-NearDarkGrey focus-within:transition-all focus-within:rounded-full">
        <button className="lg:w-[274px] lg:h-[273px] md:w-[230px] md:h-[230px] sm:w-[200px] sm:h-[200px] bg-white rounded-full">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Home;
