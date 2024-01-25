import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import ucfbadge from "../../assets/badgepicnobg.png";
import usfbadge from "../../assets/usfbadge.png";
import "./index.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="px-3 nav-bar">
        <NavbarBrand href="/" className="nav-brand">
          <div className="nav-name">Rachel Panico</div>
        </NavbarBrand>

        <div className="badgr-badge">
          <a href="https://api.badgr.io/public/assertions/aJJ2ROJtRMGXMXdD1kVf4g" target="_blank" rel="noreferrer">
            <img className="badgeimg" alt="badgepic" src={ucfbadge} />
          </a>
        </div>

        <div className="badgr-badge">
          <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/89453102" target="_blank" rel="noreferrer">
            <img className="badgeimg" alt="badgepic" src={usfbadge} />
          </a>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="nav-link-group">
          <Nav navbar>
            <NavItem className="nav-items">
              <Link to="/" className="nav-links">
                Home
              </Link>
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
              <Link to="/resume" className="nav-links">
                Resume
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
