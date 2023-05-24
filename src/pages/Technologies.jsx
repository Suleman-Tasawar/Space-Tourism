function Technologies() {
  const styles = {
    height: "100vh",
    backgroundImage:
      "url(/assets/technology/background-technology-desktop.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="pt-32" style={styles}>
      <h1 className="text-left text-2xl text-white">
        <span className="text-NearDarkGrey mr-1">03</span> SPACE LAUNCH 101
      </h1>

      <div className="relative pt-20">
        <div className="absolute left-10">
          <div>
            <button className="rounded-full w-[60px]  h-[60px] bg-white text-black">
              1
            </button>
          </div>
          <div className="mt-7">
            <button className="rounded-full w-[60px]  h-[60px] bg-white text-black">
              2
            </button>
          </div>
          <div className="mt-7">
            <button className="rounded-full w-[60px] h-[60px] bg-white text-black">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
