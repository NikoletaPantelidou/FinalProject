import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    //  event.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/user/login", {
          username,
          password,
        })

        .then(async (token) => {
          await axios
            .get("http://localhost:4000/user/userInfo/" + token.data.token)
            .then((user) => {
              localStorage.setItem("userProfile", JSON.stringify(user.data));
              setProfile(user.data);
              navigate("/homepage");
            });
        })
        .catch(() => {
          setErrorMessage("Incorrect password or username");
        });
      // Handle successful login response
    } catch (error) {
      // Handle login error
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
          onChange={(e) => handleUsernameChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
      </Form.Group>

      <Button variant="primary" onClick={() => handleLogin()}>
        Log in
      </Button>

      <div>
        <p>
          Don't you have an account? Sign in{" "}
          <Link to={"/user/sign-in"}>
            <span className="underline">here!</span>
          </Link>
        </p>
      </div>
    </Form>
  );
}
export default LogIn;
