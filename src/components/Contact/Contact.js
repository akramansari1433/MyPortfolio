import React from 'react';
import emailjs from 'emailjs-com';


const sendEmail=(e)=>{
    
    emailjs.sendForm('gmail', 'template_p17ktkt', e.target, 'user_cjVdr62NFXIMlkpSrfp6K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

}

const Contact=()=>{
    return(
        <div id="contact" className='tc bg-white pv3' >
            <h1 className='ttc f2 b ttu tracked avenir pv3'>Contact Me</h1>
            <article className="black ph5">
                <form onSubmit={sendEmail} acceptCharset="utf-8">
                    <input className="b w-30-l w-80 ma3 pa2 input-reset ba bg-transparent" name="name"  id="name" placeholder='Name'/><br/> 
                    <input className="b w-30-l w-80 ma3 pa2 input-reset ba bg-transparent" name="email"  id="email" placeholder='Email'/><br/> 
                    <input className="b w-30-l w-80 ma3 pa2 input-reset ba bg-transparent" name="message"  id="message" placeholder='Message'/>
                    <div className="mt3">
                        <input className="btn btn-dark" type="submit" value="Send"/>
                    </div>
                </form>
            </article>
        </div>
    )
}

export default Contact;