import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({toggle, isOpen}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onclick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {/* <SidebarLink to="about" onClick={toggle}>About</SidebarLink> */}
            <SidebarLink to="tech" smooth={true} duration={500} spy={true} exact='true' offset={-120} onClick={toggle}>Tech Stack</SidebarLink>
            <SidebarLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-150} onClick={toggle}>Projects</SidebarLink>
            <SidebarLink to="resume" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Resume</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
