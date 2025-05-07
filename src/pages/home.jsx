import React from 'react';
import Header from "../Components/header"
import Crousal from "../Components/crousal";
import Recent from "../Components/recentWork";
import About from "../Components/about";
import Gallary from "../Components/gallary";
import Footer from "../Components/footer";

const HomePage = () => {
  return (
    <>
    
      <Crousal />
      <Recent />
      <About />
      <Gallary />
    
    </>
  );
};

export default HomePage;
