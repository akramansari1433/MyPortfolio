import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Cover = () => {
   return (
      <div
         className="d-flex justify-content-center align-items-center px-4"
         id="cover"
         style={{ height: "80vh" }}
      >
         <TypeWriterEffect
            textStyle={{
               fontFamily: "Roboto Mono",
               color: "white",
               fontWeight: 300,
               fontSize: "4rem",
            }}
            startDelay={500}
            cursorColor="#56fc03"
            multiText={["Hello, I'm Akram Ansari", "I am a Web Developer."]}
            multiTextDelay={1000}
            typeSpeed={70}
            multiTextLoop
         />
      </div>
   );
};

export default Cover;
