import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import LoginSignIn from "./Login-Signin";

function Auth() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_1458127937-scaled.jpg",

    "https://ceftandcompany.com/wp-content/uploads/2009/02/ceft-and-company-ny-agency-adore-fashion-advertising-reid-kastyn-glen-lutchford-03.jpg",

    //"https://ceftandcompany.com/wp-content/uploads/2009/02/ceft-and-company-ny-agency-adore-fashion-advertising-reid-kastyn-glen-lutchford-03.jpg",
  ];

  const handleSlideChange = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleSlideChange, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  });

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  // In the onSuccess function, I set our profile state with the data that was returned.
  // This data contains the user’s details, like google_id, access_token, email, name, and so on

  //Finally, we are using a conditional to change our UI: if the profile is true,
  //the UI will show us the profile of the logged-in user with their image, name, and
  //email. If the profile becomes null (i.e., when the user has logged out using
  // the GoogleLogout button), it will show us the login button:
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
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

      <div className="auth-container">
        <LoginSignIn />
        <h2 className="header-google">Sign in with one click!</h2>

        {profile ? (
          <div>
            <img src={profile.picture} alt="user-image" />
            <h3> {profile.name} Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )}
      </div>
    </div>
  );
}
export default Auth;
