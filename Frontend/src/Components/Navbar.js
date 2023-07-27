import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("userID");
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link as={Link} to="/homepage">
          <Navbar.Brand>StyleWithMe</Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <Nav.Link as={Link} to="/account">
              My Account
            </Nav.Link>

            <Nav.Link as={Link} to="/bag">
              Shopping Bag
            </Nav.Link>

            <Nav.Link as={Link} to="/favourites">
              Favourites
            </Nav.Link>
            <NavDropdown.Divider />

            <Nav.Link as={Link} to="/user/auth">
              Log-in/Sign-in
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Log-out
            </Nav.Link>
          </NavDropdown>
          <Nav>
            <Nav.Link as={Link} to="/favourites">
              <FaHeart />
            </Nav.Link>
            <Nav.Link as={Link} to="/bag">
              <FaShoppingBag />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
