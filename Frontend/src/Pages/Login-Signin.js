import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function LoginSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/signin", {
        username,
        password,
      });

      // Handle successful signup response
      console.log("Signin:", response.data);
    } catch (error) {
      // Handle signup error
      setErrorMessage("Please write a valid username");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        username,
        password,
      });

      // Handle successful login response
      console.log("Login:", response.data);
      navigate("/homepage");
    } catch (error) {
      // Handle login error
      console.log(error);
      setErrorMessage("Incorrect password or username");
    }
  };

  return (
    <Form>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
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
      <Button variant="primary" type="submit" onClick={handleSignin}>
        Sign In
      </Button>
      <Link to={"/homepage"}>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Log in
        </Button>
      </Link>
    </Form>
  );
}
export default LoginSignIn;
