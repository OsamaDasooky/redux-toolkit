import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <NavLink to="/" className="nav-link ">
              Home
            </NavLink>
            <NavLink to="/api" className="nav-link ">
              Api
            </NavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
