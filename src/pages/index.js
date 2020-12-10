/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSec from '../components/InfoSection/InfoSec';
import InfoSec_2 from '../components/InfoSection/InfoSec_2';
import InfoSec_3 from '../components/InfoSection/InfoSec_3';
import Works  from '../components/Works/index';
import WorkDescription from '../pages/WorkDescription';
import Footer from '../components/Footer';





const Home = () =>{
   const [isOpen, setIsOpen]  = useState(false);

   const [scrollNav, setScrollNav] = useState(false);

   const toggle = () => {
     setIsOpen(!isOpen);
   }

   useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  
  const changeNav = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 280) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  console.log(scrollNav);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSec {...homeObjOne} scroll={scrollNav}/>
      <InfoSec_2 {...homeObjTwo} />
      <Works />
      <WorkDescription />
      <InfoSec_3 {...homeObjThree}/> 
      <Footer/>
    </>
  )
}

export default Home; 