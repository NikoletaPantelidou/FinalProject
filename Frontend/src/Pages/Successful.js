import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Success = () => {
  return (
    <div className="success-message">
      <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
      <p>Payment Successful!</p>
    </div>
  );
};
export default Success;
