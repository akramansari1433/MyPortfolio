import React from "react";
import Bounce from "react-reveal/Bounce";

const ProjectCard = ({ image, title, des, liveView, githubLink }) => {
   return (
      <Bounce bottom>
         <div
            className="card m-3 text-white"
            style={{
               width: "18rem",
               backgroundColor: "black",
               border: "1px solid white",
            }}
         >
            <img src={image} className="card-img-top" alt="Project" />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{des}</p>
            </div>
            <div className="card-body">
               <a className="m-1 btn btn-success" href={liveView}>
                  View Live
               </a>
               <a className="m-1 btn btn-success" href={githubLink}>
                  View Source Code
               </a>
            </div>
         </div>
      </Bounce>
   );
};

export default ProjectCard;
