import React from "react";
import Hero from "./hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Award from "./award/Award";
import Location from "./location/Location";
import Team from "./team/Team";
import Price from "./price/Price";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Award />
      <Location />
      <Team />
      <Price />
    </>
  );
};

export default Home;
