import React from 'react';
import { Link } from 'react-scroll';
import Flip from 'react-reveal/Flip';

const Cover=()=>{
    return (
        <div className='tc bg-dark-gray pv7' id='cover' style={{height:'100vh'}}>
            <Flip top>
            <h1 className='f1 white'>Hello, I'm Akram Ansari<br/>
            I am a Web Developer</h1>
            <Link 
                className="btn btn-outline-info btn-lg mt-3" 
                to="about"
                smooth={true}
                duration={800}>
                    Know More
            </Link>
            </Flip>
        </div>
    );

}

export default Cover;