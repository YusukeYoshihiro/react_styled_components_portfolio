import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    < SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle} >Home</SidebarLink>
          <SidebarLink to="about" onClick={toggle} >About</SidebarLink>
          <SidebarLink to="skills" onClick={toggle} >Skills</SidebarLink>
          <SidebarLink to="works" onClick={toggle} >Works</SidebarLink>
          <SidebarLink to="signup" onClick={toggle} >Contact</SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>

      <SideBtnWrap>
         <SidebarRoute to="/signin">Resume</SidebarRoute>
      </SideBtnWrap>

    </SidebarContainer>
  )
}

export default Sidebar;
