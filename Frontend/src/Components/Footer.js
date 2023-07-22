import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <p>© {new Date().getFullYear()} StyleWithMe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
