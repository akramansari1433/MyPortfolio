import React from 'react';


const Navbar=()=>{
    return (
        <div>
            <header className="white bg-black tc pv1 avenir">
                <nav className="tc mw7 center mt3 ">
                    <a 
                        className="f3-l f5 f5 link bg-animate white hover-bg-dark-gray dib pa3 ph4-l" 
                        href='#cover'>
                            Home
                    </a>
                    <a 
                        className="f3-l f5 link bg-animate white hover-bg-dark-gray dib pa3 ph4-l" 
                        href="#about">
                            About
                    </a>
                    <a
                        className="f3-l f5 link bg-animate white hover-bg-dark-gray dib pa3 ph4-l" 
                        href="#projects">
                            Projects
                    </a>
                    <a 
                        className="f3-l f5 link bg-animate white hover-bg-dark-gray dib pa3 ph4-l" 
                        href="#skills">
                            Skills
                    </a>
                    <a
                        className="f3-l f5 link bg-animate white hover-bg-dark-gray dib pa3 ph4-l" 
                        href="#contact" >
                            Contact
                    </a>
                </nav>
            </header>
        </div>
    );
    
}
export default Navbar;