/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
// import {use} from 'react-router-dom';

// we can refer "react-icon" page to choose hamburger menu.
import { FaBars } from 'react-icons/fa';
// https://www.npmjs.com/package/react-icons
import { IconContext } from 'react-icons/lib';
import img from '../../assets/images/FABE_LOGO_2.png';
// https://www.npmjs.com/package/react-scroll
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

// var Scroll   = require('react-scroll');



const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  // var scroller = Scroll.scroller;


  // let  = use();

  // function handleClick() {
  //   .push("/")
  // }
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  // useEffect(() => {
  //   console.log(.location.path)
  //   scroller.scrollTo('banadai');
  // }, [.location.path])
  
  // https://www.npmjs.com/package/react-scroll
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <Img  src={img} alt="main_logo"/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu> {/* ul element */}
              <NavItem>  {/* li element */}
                <NavLinks 
                  to="about"
                  // onClick={handleClick}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='skills'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='works'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Works</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
