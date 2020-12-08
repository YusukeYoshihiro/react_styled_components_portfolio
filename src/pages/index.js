/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSec from '../components/InfoSection/InfoSec';
import InfoSec_2 from '../components/InfoSection/InfoSec_2';
import InfoSec_3 from '../components/InfoSection/InfoSec_3';
import Works  from '../components/Works/index';
import Footer from '../components/Footer';





const Home = () =>{
   const [isOpen, setIsOpen]  = useState(false);

   const toggle = () => {
     setIsOpen(!isOpen);
   }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSec {...homeObjOne}/>
      <InfoSec_2 {...homeObjTwo} />
      <Works />
      <InfoSec_3 {...homeObjThree}/> 
      {/* <Certifications toggle={toggle}/> */}
      {/* <InfoSec_3 {...homeObjThree}/> */}
      <Footer/>
    </>
  )
}

export default Home; 