import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectCardList=({projects})=>{
    return(
        <div className='tc pv3' id='projects'>
            <h1 className='tc ttu tracked-mega underline avenir pv3'>Projects</h1>
            {
                projects.map((project,i)=>{
                    return(
                        <ProjectCard 
                            key={i}
                            image={project.image} 
                            title={project.title} 
                            des={project.des}
                            liveView={project.links.liveView}
                            githubLink={project.links.github}
                            
                        />
                    )
                })
                
            }
            
        </div>
    )
}

export default ProjectCardList;