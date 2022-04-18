import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark">
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarTogglerDemo01"
               aria-controls="navbarTogglerDemo01"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <ul className="navbar-nav m-auto mt-2 mt-lg-0 f3 b pv2 text-center">
                  <li className="nav-item h4 px-3 active pointer">
                     <Link className="nav-link" to="/">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item h4 px-3 active pointer">
                     <Link className="nav-link" to="about">
                        About
                     </Link>
                  </li>
                  <li className="nav-item h4 px-3 active pointer">
                     <Link className="nav-link" to="projects">
                        Projects
                     </Link>
                  </li>
                  <li className="nav-item h4 px-3 active pointer">
                     <Link className="nav-link" to="skills">
                        Skills
                     </Link>
                  </li>
                  <li className="nav-item h4 px-3 active pointer">
                     <Link className="nav-link" to="contact">
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
};
export default Navbar;
