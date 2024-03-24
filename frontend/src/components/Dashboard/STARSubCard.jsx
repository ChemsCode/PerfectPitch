import React from "react";

function STARSubCard({icon, title, param }) {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-2 rounded-lg duration-300 h-full w-full justify-evenly bg-white rounded-md">
      <div className="text-center font-medium ">
        <div>
        <h1
          className="flex items-center justify-center "
          style={{ fontSize: "2rem" }}
        >
          {icon}
        </h1>
        <h3 className=" indigo-400 rounded-lg  py-2 border-b mx-8 mt-4">
          {title}
        </h3>
        </div>
        <ul class="space-y-1 text-gray-900 list-inside my-5">
          <li>{param}</li>
        </ul>
      </div>
    </div>
  );
}

export default STARSubCard;
