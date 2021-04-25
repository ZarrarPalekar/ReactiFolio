import React, { useState, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./mynavbar.style.css";
// import Hamburger from "hamburger-react";

import useWindowDimensions from "../../functionality/checkViewPort";

import { HamburgerVortex } from "react-animated-burgers";

const MyNavbar = () => {
  const { width } = useWindowDimensions();

  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar
        expanded={expanded}
        id="navbar"
        fixed="top"
        expand="md"
        variant="dark"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand id="logo" href="#home">
          <img className="logo" src={Logo} alt="PZJ-Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="navToggler"
        >
          {/* <Hamburger color="white" size="100" /> */}
          <HamburgerVortex barColor="white" {...{ isActive, toggleButton }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && toggleButton();
              }}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && toggleButton();
              }}
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && toggleButton();
              }}
              href="#skills"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && toggleButton();
              }}
              href="#experience"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && toggleButton();
              }}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && toggleButton();
              }}
              href="#contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
