import React from "react";
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Taylor Sheipline</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon >
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="https://docs.google.com/document/d/1RCAkNLn8doeX1C8EaBukhcUNYRnV7gifjr8I7P11gMA/edit?usp=sharing" target='_blank'>Resume</NavLinks>
              {/* <a href="https://docs.google.com/document/d/1RCAkNLn8doeX1C8EaBukhcUNYRnV7gifjr8I7P11gMA/edit?usp=sharing" target="_blank">Resume</a> */}
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
