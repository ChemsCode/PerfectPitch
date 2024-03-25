import React from "react";
import SkillCard from "./SkillCard";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";

function LayoutTopSkills({ fb }) {
  function getTopSkills(mainDict) {
    const skills = Object.values(mainDict);
    skills.sort((a, b) => b[0] - a[0]); // sort by the first number in each array
    return skills.slice(0, 4); // return the top 4 skills
  }
  const topSkills = getTopSkills(fb);
  console.log(topSkills);
  return (
    <div className="grid grid-flow-row grid-flow-colum grid-rows-1 gap-x-5 gap-y-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full w-full py-10">
      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber1 />} skill={topSkills[0][1]} desc={topSkills[0][2]} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber2 />} skill={topSkills[1][1]} desc={topSkills[1][2]} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber3 />} skill={topSkills[2][1]} desc={topSkills[2][2]} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber4 />} skill={topSkills[3][1]} desc={topSkills[3][2]} />
      </div>
    </div>
  );
}

export default LayoutTopSkills;
