import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NavigationBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Check user authentication status here (you might need to modify this logic)
    const userProfile = localStorage.getItem("userProfile");
    setIsLoggedIn(userProfile);
  }, []);
  const logout = () => {
    localStorage.removeItem("userProfile");
    navigate("/");
    setIsLoggedIn(false);
  };
  return (
    /*   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
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
              Log-in
            </Nav.Link>
            <Nav.Link as={Link} to="/user/sign-in">
              Sign-in
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => logout()}>
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
  );*/
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        {isLoggedIn ? (
          <Nav.Link as={Link} to="/homepage">
            <Navbar.Brand>StyleWithMe</Navbar.Brand>
          </Nav.Link>
        ) : (
          <Navbar.Brand>StyleWithMe</Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {isLoggedIn ? (
              <Nav>
                <NavDropdown title="Account" id="collapsible-nav-dropdown">
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

                  <Nav.Link onClick={() => logout()}>Log-out</Nav.Link>
                </NavDropdown>

                <Nav.Link as={Link} to="/favourites">
                  <FaHeart />
                </Nav.Link>
                <Nav.Link as={Link} to="/bag">
                  <FaShoppingBag />
                </Nav.Link>
              </Nav>
            ) : (
              <>
                <Nav.Link as={Link} to="/user/auth">
                  Log-in
                </Nav.Link>
                <Nav.Link as={Link} to="/user/sign-in">
                  Sign-in
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
