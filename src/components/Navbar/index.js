/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
// we can refer "react-icon" page to choose hamburger menu.
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
// https://www.npmjs.com/package/react-scroll
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
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
            <NavLogo to="/" onClick={toggleHome}>YuSuKe</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu> {/* ul element */}
              <NavItem>  {/* li element */}
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills'>Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='works'>Works</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Contact</NavLinks>
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
