import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./mynavbar.style.css";
import { Spiral as Hamburger } from "hamburger-react";

import useWindowDimensions from "../../functionality/checkViewPort";

import { PopupButton } from "react-calendly";

const MyNavbar = () => {
  const { width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);

  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar
        expanded={expanded}
        id="navbar"
        fixed="top"
        style={{ width: "100vw" }}
        expand="md"
        variant="dark"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand id="logo" href="#home">
          <img className="logo" src={Logo} alt="PZJ-Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => {
            setExpanded(expanded ? false : "expanded");
            setIsOpen(!isOpen);
          }}
          className="navToggler"
        >
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="white"
            size={24}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && setIsOpen(false);
              }}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && setIsOpen(false);
              }}
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && setIsOpen(false);
              }}
              href="#skills"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && setIsOpen(false);
              }}
              href="#experience"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && setIsOpen(false);
              }}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setExpanded(false);
                width < 768 && setIsOpen(false);
              }}
              href="#contact"
            >
              Contact
            </Nav.Link>
            <div
              className="nav-link"
              onClick={() => {
                setExpanded(false);
                width < 768 && setIsOpen(false);
              }}
              title="Let's catchup over a Google Meet call"
            >
              <PopupButton
                className="btn calendly-btn"
                url="https://calendly.com/meetzarrar"
                rootElement={document.getElementById("root")}
                text={[
                  <i class="fa fa-calendar" aria-hidden="true"></i>,
                  " Connect via Calendly",
                ]}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
