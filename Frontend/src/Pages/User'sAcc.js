import React from "react";
import { useState } from "react";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";

export default function MyAccount() {
  const [file, setFile] = useState();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Retrieve data from localStorage and parse it to a JavaScript object
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      setUserData(JSON.parse(storedData));
      setFile(JSON.parse(storedData).profilePicture); // Set the file state with the profilePicture URL
    }
  }, []);
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <NavigationBar />

      <div className="user-container">
        <input className="img-file" type="file" onChange={handleChange} />
        <img className="user-image" src={file} />

        <img
          src={userData.picture}
          alt=""
          className="user-pic"
          placeholder="Image"
          value={userData.picture || ""}
          onChange={(e) =>
            setUserData({ ...userData, picture: e.target.value })
          }
        />
        <div className="user-info">
          <input
            className="user-name"
            placeholder="Name"
            value={userData.name || ""}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            className="user-surname"
            placeholder="Surname"
            value={userData.surname || ""}
            onChange={(e) =>
              setUserData({ ...userData, surname: e.target.value })
            }
          />
          <input
            className="user-city"
            placeholder="City"
            value={userData.city || ""}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          />
          <input
            className="user-address"
            placeholder="Address"
            value={userData.address || ""}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
          />
          <input
            className="user-telephone"
            placeholder="mobile"
            value={userData.mobile || ""}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
          />
          <input
            className="user-email"
            placeholder="email"
            value={userData.email || ""}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <button className="update-btn">Update information</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
