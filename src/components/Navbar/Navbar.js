import React from 'react';
import { Link } from 'react-scroll';


const Navbar=()=>{
    return (
        <div> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
                    <p className="dib white ba f4 pa2">AA</p>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 f3 b pv2">
                        <li className="nav-item px-3 active hover-bg-black pointer">
                            <Link
                                className="nav-link"
                                to="cover"
                                smooth={true}
                                duration={500}>
                                    Home
                            </Link>
                        </li>
                        <li className="nav-item px-3 active hover-bg-black pointer">
                            <Link
                                className="nav-link"
                                to="about"
                                smooth={true}
                                duration={500}>
                                    About
                            </Link>
                        </li>
                        <li className="nav-item px-3 active hover-bg-black pointer">
                            <Link
                                className="nav-link"
                                to="projects"
                                smooth={true}
                                duration={500}>
                                    Projects
                            </Link>
                        </li>
                        <li className="nav-item px-3 active hover-bg-black pointer">
                            <Link
                                className="nav-link"
                                to="skills"
                                smooth={true}
                                duration={500}>
                                    Skills
                            </Link>
                        </li>
                        <li className="nav-item px-3 active hover-bg-black pointer">
                            <Link
                                className="nav-link"
                                to="contact"
                                smooth={true}
                                duration={500}>
                                    Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
    
}
export default Navbar;