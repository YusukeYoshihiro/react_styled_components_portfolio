/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
// we can refer "react-icon" page to choose hamburger menu.
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import img from '../../images/avatar_img.png';
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
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

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
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  // activeClass="active"
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
                to='signup'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Contact</NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
