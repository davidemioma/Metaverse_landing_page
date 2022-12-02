import React from "react";
import About from "../components/About";
import Explore from "../components/Explore";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Getstarted from "../components/Getstarted";
import Hero from "../components/Hero";
import Insight from "../components/Insight";
import NavBar from "../components/NavBar";
import WhatsNew from "../components/WhatsNew";
import World from "../components/World";

const Home = () => {
  return (
    <div className="bg-primary-black min-h-screen w-screen overflow-x-hidden">
      <NavBar />

      <Hero />

      <div className="relative">
        <About />

        <div className="absolute top-[5%] left-[20%] z-0 gradient-03 w-[404px] h-[800px] blur-[175px] rotate-[-114.2deg]" />

        <Explore />
      </div>

      <div className="relative">
        <Getstarted />

        <div className="absolute top-[10%] left-[30%] z-0 gradient-04 w-[304px] h-screen blur-[200px] rotate-[-53.13deg]" />

        <WhatsNew />
      </div>

      <World />

      <div className="relative">
        <Insight />

        <div className="absolute top-[10%] left-[30%] z-0 gradient-04 w-[304px] h-screen blur-[200px] rotate-[-53.13deg]" />

        <Feedback />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
