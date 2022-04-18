import React from "react";
import Flip from "react-reveal/Flip";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectCardList = ({ projects }) => {
   return (
      <div className="tc pv3">
         <Flip left>
            <h1 className="text-center h1 text-success mt-3">Projects</h1>
         </Flip>

         <div className="d-flex flex-wrap justify-content-center px-3 py-3 mt-3">
            {projects.map((project, i) => {
               return (
                  <ProjectCard
                     key={i}
                     image={project.image}
                     title={project.title}
                     des={project.des}
                     liveView={project.links.liveView}
                     githubLink={project.links.github}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default ProjectCardList;
