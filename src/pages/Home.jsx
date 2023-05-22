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
      className="relative flex justify-evenly items-center font-barlow"
    >
      <div className="w-[450px] text-left ">
        <h2 className="text-homeTextGrey text-lg">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="text-white text-4xl mt-6">SPACE</h1>
        <p className="text-homeTextGrey mt-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center w-[350px] h-[350px]  hover:bg-NearDarkGrey transition hover:rounded-full">
          <button className="w-[274px] h-[273px] bg-white rounded-full">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
