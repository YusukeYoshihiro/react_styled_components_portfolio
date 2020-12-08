/* eslint-disable react/jsx-no-undef */
import React from 'react';
// we can refer "react-icon" page to choose hamburger menu.
import { FaBars } from 'react-icons/fa';
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


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">YuSuKe</NavLogo>
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
    </>
  )
}

export default Navbar
