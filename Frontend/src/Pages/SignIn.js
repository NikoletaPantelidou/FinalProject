import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = async (event) => {
    try {
      axios
        .post("http://localhost:4000/user/signin", {
          username,
          password,
          address,
          mobile,
          city,
          email,
        })
        .then(() => {
          window.alert("You signed up successfully!");
          navigate("/user/auth");
        })
        .catch(() => window.alert("Failed to create a new account"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <h2>Welcome!</h2>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="address"
          placeholder="Enter address"
          value={address}
          onChange={handleAddressChange}
        />
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
      </Form.Group>
      <Form.Group controlId="formMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="mobile"
          placeholder="Enter mobile"
          value={mobile}
          onChange={handleMobileChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>

      <Button variant="primary" onClick={() => handleSignin()}>
        Sign In
      </Button>
    </Form>
  );
}
