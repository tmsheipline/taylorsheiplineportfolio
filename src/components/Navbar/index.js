import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
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

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Taylor Southline</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon >
          <NavMenu>
            {/* <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="tech" smooth={true} duration={500} spy={true} exact='true' offset={-120}>Tech Stack</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-150}>Projects</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="resume" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Resume</NavLinks>
              {/* <NavLinks to="https://docs.google.com/document/d/1RCAkNLn8doeX1C8EaBukhcUNYRnV7gifjr8I7P11gMA/edit?usp=sharing" target='_blank'>Resume</NavLinks> */}
              {/* <a href="https://docs.google.com/document/d/1RCAkNLn8doeX1C8EaBukhcUNYRnV7gifjr8I7P11gMA/edit?usp=sharing" target="_blank">Resume</a> */}
            </NavItem>
          </NavMenu>
          
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
