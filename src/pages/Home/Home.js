import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Example from "../../components/Navbar/Navbar";
import "../../styles/global.css";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Explore from "../../components/explore/Explore";
import Getstarted from "../../components/about/Getstarted";
import WhatsNew from "../../components/about/WhatsNew";
import World from "../../components/about/World";
import XInsigth from "../../components/about/XInsigth";
import Zfeedback from "../../components/about/Zfeedback";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <div className="bg-slate-900 overflow-hidden ">
        {/* <div className="hero-gradient"> */}
          <Example />
          <Hero />
          <About/>
          <Explore/>
          <Getstarted/>
          <WhatsNew/>
          <World/>
          <XInsigth/>
          <Zfeedback/>
          <Footer/>
        {/* </div> */}
      </div>
    </>
  );
};