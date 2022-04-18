import React from "react";
import SkillSets from "../../Utils/SkillSets";
import Flip from "react-reveal/Flip";

const Skills = () => {
   return (
      <div style={{ height: "80vh" }}>
         <Flip left>
            <h1 className="text-success h1 text-center mt-3">Skills</h1>
         </Flip>

         <SkillSets />
      </div>
   );
};

export default Skills;
