import React from "react";

function SkillCard({ icon, skill, desc }) {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-4 py-10 rounded-lg duration-300 h-full w-full justify-between
     bg-white">
      <div className="text-center font-medium">
        <div>
        <h1
          className="flex items-center justify-center"
          style={{ fontSize: "2.3rem" }}
        >
          {icon}
        </h1>
        <p className=" bg-indigo-400 rounded-lg  py-2 border-b mx-8 mt-8">
          {skill}
        </p>
        </div>
        <ul class="space-y-1 text-gray-800 list-inside my-4">
          <li>{desc}</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
