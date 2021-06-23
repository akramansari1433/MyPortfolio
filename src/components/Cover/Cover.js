import React from 'react';
import { Link } from 'react-scroll';
import Flip from 'react-reveal/Flip';
import coverImage from './Cover.svg'

const Cover=()=>{
    return (
        <div className='cf bg-black tc' id='cover' style={{padding:'240px 0'}}> 
            <div className="fl w-50-l w-100-ns">
                    <Flip top>
                    <h1 className='f1 white'>Hello, I'm Akram Ansari<br/>
                    I am a Web Developer</h1>
                    <Link 
                        className="btn btn-outline-info btn-lg mv4" 
                        to="about"
                        smooth={true}
                        duration={800}>
                            Know More
                    </Link>
                    </Flip>
            </div>
            <div className="fl w-50-l w-100-ns">
                <img className="h-50 w-50" src={coverImage} alt="Man saying Hi"/>
            </div>
        </div>
        
    );

}

export default Cover;