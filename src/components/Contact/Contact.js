import React from "react";
import emailjs from "emailjs-com";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import "./Contact.css";

const sendEmail = (e) => {
   emailjs
      .sendForm(
         "gmail",
         "template_p17ktkt",
         e.target,
         "user_cjVdr62NFXIMlkpSrfp6K"
      )
      .then(
         (result) => {
            console.log(result.text);
         },
         (error) => {
            console.log(error.text);
         }
      );
   e.target.reset();
};

const Contact = () => {
   return (
      <div className="text-center py-3">
         <Flip left>
            <h1 className="my-3 text-success">Contact Me</h1>
         </Flip>
         <article>
            <form onSubmit={sendEmail} acceptCharset="utf-8">
               <Slide left>
                  <input
                     className="m-3 p-2 inputbox"
                     name="name"
                     id="name"
                     placeholder="Name"
                     required
                  />
                  <br />
               </Slide>
               <Slide right>
                  <input
                     className="m-3 p-2 inputbox"
                     name="email"
                     id="email"
                     placeholder="Email"
                     required
                  />
                  <br />
               </Slide>
               <Slide left>
                  <textarea
                     className="m-3 p-2 inputbox"
                     name="message"
                     id="message"
                     placeholder="Message"
                     required
                  />
               </Slide>

               <div className="mt3">
                  <Zoom>
                     <input
                        className="btn btn-success"
                        type="submit"
                        value="Send"
                     />
                  </Zoom>
               </div>
            </form>
         </article>
         <div className="pt4">
            <p className="mt-5 px-3 h4 text-white">
               Living, learning & leveling up.
            </p>
         </div>
      </div>
   );
};

export default Contact;
