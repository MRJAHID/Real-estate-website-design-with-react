import React from "react";
import Hero from "./hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Award from "./award/Award";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Award />
    </>
  );
};

export default Home;
