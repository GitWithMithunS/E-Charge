import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Example from "../../components/Navbar/Navbar";
import "../../styles/global.css";
import Hero from "../../components/hero/Hero";

export const Home = () => {
  return (
    <>
      <div className="bg-slate-900 overflow-hidden ">
        {/* <div className="hero-gradient"> */}
          <Example />
          <Hero />
        {/* </div> */}
      </div>
    </>
  );
};
