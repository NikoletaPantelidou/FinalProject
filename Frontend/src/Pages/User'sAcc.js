import React from "react";
import { useState } from "react";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MyAccount() {
  const [file, setFile] = useState();

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

        <div className="user-info">
          <input className="user-name" placeholder="Name" />
          <input className="user-surname" placeholder="Surname" />
          <input className="user-city" placeholder="City" />
          <input className="user-address" placeholder="Address" />
          <input className="user-name" placeholder="Telephone" />
          <button className="update-btn">Update information</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
