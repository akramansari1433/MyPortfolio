import React from 'react';

const ProjectCard=(props)=> {
    return (
             <div className='dib bg-light-gray ma3 pa2 br3 bw2 grow shadow-5 tc w-100 w-50-m w-25-l mw5'>
                <img src={props.image} alt='robot' className=''/>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                    <a className="f6 link dim ph3 pv2 ma2 dib white bg-black" href={props.liveView}>View Live</a>
                    <a className="f6 link dim ph3 pv2 ma2 dib white bg-black" href={props.githubLink}>View Source Code</a>
                </div>
            </div> 
    );
}

export default ProjectCard;