import React from 'react';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import ProjectCard from '../ProjectCard/ProjectCard'



const ProjectCardList=({projects})=>{
    return(
        <div className='tc pv3 bg-black' id='projects'>
            <Flip left>
                 <h1 className='tc f2 b ttu tracked avenir pv3 white'>Projects</h1>
            </Flip>

            <div className='flex flex-wrap justify-center ph3'>
            {
                projects.map((project,i)=>{
                    return(
                        <Bounce bottom key={i}>
                            <ProjectCard 
                            image={project.image} 
                            title={project.title} 
                            des={project.des}
                            liveView={project.links.liveView}
                            githubLink={project.links.github}
                            
                            />
                        </Bounce>
                        
                    )
                })
                
            }
            </div>
            
        </div>
    )
}

export default ProjectCardList;