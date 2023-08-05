import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignIn() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTcxMTE4MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcxODMzMzU0NX0.P92KrX6-h01cz-763JFyim6rok21mqgjOu_BCQ3xFPw/img.jpg?width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C2",
    "https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_1458127937-scaled.jpg",
    "https://fashionista.com/.image/t_share/MTk1MDY4MjE5MDU5MzQ4Njc5/prada-spring-2023-campaign.jpg",
    "https://media.glamourmagazine.co.uk/photos/6138ad716c53c747be7bd89e/16:9/w_2560%2Cc_limit/modelspartner_hp1.jpg",
    "https://graziamagazine.com/me/wp-content/uploads/sites/16/2022/10/best-fashion-campaigns-2022.png?fit=1280%2C720",
  ];

  const handleSlideChange = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleSlideChange, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  });

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
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
          fullName,
          userType,
        })
        .then(() => {
          window.alert("You signed in successfully!");
          navigate("/user/auth");
        })
        .catch(() => window.alert("Failed to create a new account"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : "inactive"} `}
          style={{
            backgroundImage: `url(${slide})`,
          }}
        ></div>
      ))}
      <Form className="sign-in-form">
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
        <Form.Group controlId="formFullName">
          <Form.Label>Full-name</Form.Label>
          <Form.Control
            type="fullName"
            placeholder="Enter full-name"
            value={fullName}
            onChange={handleFullNameChange}
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
    </div>
  );
}
