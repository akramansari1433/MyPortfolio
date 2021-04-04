import React from 'react';
import profile from './profile.jpeg'
const About =()=> {
    return (
        <div className='bg-green pv3' id='about'>
            <h1 className='tc f2 b ttu tracked avenir pv3'>About Me</h1>
            <div className="cf pv4">
                <div className="fl w-50-l w-100-ns tc">
                    <img alt='prpfile pic' className='br-100 h5-l h3-ns h4-m dib' src={profile}/>
                </div>
                <div className="fl w-50-l w-100-ns tc ph4">
                    <div className="f4-l f5-ns">
                        <p className="">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
                            earum dolor voluptatum consequatur blanditiis inventore debitis
                            fuga numquam voluptate architecto itaque molestiae.
                        </p>
                        <p className="">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
                            earum dolor voluptatum consequatur blanditiis inventore debitis
                            fuga numquam voluptate architecto itaque molestiae.
                        </p>
                        <span className="mt3">
                            <a className="btn btn-outline-dark btn-lg" href="#0">View Resume</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
