import React from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Feature from "../components/Featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Feature />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
