import React from "react";
import { useState } from "react";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import axios from "axios";

export default function MyAccount() {
  const [file, setFile] = useState();
  const [userData, setUserData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const updateUserInfo = async (event) => {
    try {
      await axios
        .put("http://localhost:4000/user/updateUserInfo/" + userData._id, {
          fullName: userData.fullName,
          address: userData.address,
          email: userData.email,
          city: userData.city,
          mobile: userData.mobile,
        })
        .then((response) => {
          console.log(response.data);
          setUpdateSuccess(true);
          localStorage.removeItem("userProfile");
          localStorage.setItem(
            "userProfile",
            JSON.stringify(response.data.user)
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Retrieve data from localStorage and parse it to a JavaScript object
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      setUserData(JSON.parse(storedData));
      console.log({ ...userData.userType });
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
        {userData.userType === true ? (
          <>
            <input className="img-file" type="file" onChange={handleChange} />
            <img className="user-image" alt="" src={file} />
          </>
        ) : (
          <>
            <img src={userData.picture} alt="" className="user-pic" />
            <div className="user-info">
              <input
                className="user-name"
                placeholder="Name"
                value={userData.name || ""}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </div>
          </>
        )}

        <div className="user-info">
          {userData.userType === true && (
            <>
              <input
                className="user-name"
                placeholder="Name"
                value={userData.fullName || ""}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
              />
              <input
                className="user-city"
                placeholder="City"
                value={userData.city || ""}
                onChange={(e) =>
                  setUserData({ ...userData, city: e.target.value })
                }
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
                className="user-mobile"
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
              <button className="update-btn" onClick={() => updateUserInfo()}>
                Update information
              </button>
              {updateSuccess && <p>Update successful!</p>}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
