import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import HeroSection from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import { homeObjOne, homeObjThree, homeObjTwo} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Resume {...homeObjTwo} />
      {/* <Skills {...homeObjThree} /> */}
      {/* <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} /> */}
    </>
  );
};

export default Home;
