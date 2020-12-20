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

const showResume = () => {
  window.open('https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2/', '_blank')
}

const Sidebar = ({ isOpen, toggle }) => {
  return (
    < SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon>
        <CloseIcon />
      </Icon>
      
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle} >Home</SidebarLink>
          <SidebarLink to="about" onClick={toggle} >About</SidebarLink>
          <SidebarLink to="skills" onClick={toggle} >Skills</SidebarLink>
          <SidebarLink to="works" onClick={toggle} >Works</SidebarLink>
          <SidebarLink to="contact" onClick={toggle} >Contact</SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>

      <SideBtnWrap>
         <SidebarRoute onClick={showResume}>Resume</SidebarRoute>
      </SideBtnWrap>

    </SidebarContainer>
  )
}

export default Sidebar;
