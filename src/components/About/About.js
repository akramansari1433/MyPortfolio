import React from "react";
import profile from "./profile.jpg";
import Bounce from "react-reveal/Bounce";

const About = () => {
   return (
      <div className="d-flex align-items-center" style={{ height: "80vh" }}>
         <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
               <div className="d-flex justify-content-center">
                  <Bounce left>
                     <img
                        alt="prpfile pic"
                        className="rounded-circle w-50"
                        src={profile}
                     />
                  </Bounce>
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
               <div className="mt-4 px-3">
                  <Bounce right>
                     <div>
                        <h1 className="text-center text-success ">About Me</h1>

                        <p className="mt-3 h5 text-white">
                           Hi, I'm Akram Ansari I'm a Full Stack Web Developer.
                           Creating Beautiful things with quality and elegance.
                           I give life to designs and build cool websites. My
                           favourite technology is ReactJS. Do check out my
                           recent works below on Project Section.
                        </p>
                        <div className="text-center">
                           <a
                              className="btn btn-outline-dark btn-lg btn-success mt-3"
                              href="https://drive.google.com/file/d/1N-4Ruxdhp3tMJSiI6SwEVviyMlptqxlO/view?usp=sharing"
                           >
                              View Resume
                           </a>
                        </div>
                     </div>
                  </Bounce>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
