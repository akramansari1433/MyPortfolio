import React from "react";
import {
   AiFillGithub,
   AiFillInstagram,
   AiFillFacebook,
   AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
   return (
      <div className="d-flex justify-content-center py-3">
         <a
            className="pointer text-white h3 mx-2"
            href="https://github.com/akramansari1433"
         >
            <AiFillGithub />
         </a>
         <a
            className="pointer text-white h3 mx-2"
            href="https://www.linkedin.com/in/akram-ansari-2474ab156/"
         >
            <AiFillLinkedin />
         </a>
         <a
            className="pointer text-white h3 mx-2"
            href="https://www.instagram.com/_akramansari_/"
         >
            <AiFillInstagram />
         </a>
         <a
            className="pointer text-white h3 mx-2"
            href="https://www.facebook.com/akramansari1433/"
         >
            <AiFillFacebook />
         </a>
      </div>
   );
};

export default Footer;
