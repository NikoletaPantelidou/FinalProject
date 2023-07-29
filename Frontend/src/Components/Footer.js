import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <SocialIcon url="https://www.instagram.com/" />
      <SocialIcon url="https://web.whatsapp.com/" />
      <SocialIcon url="https://outlook.live.com/owa/" />
      <SocialIcon url="https://www.facebook.com/" />
      <p>© {new Date().getFullYear()} StyleWithMe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
