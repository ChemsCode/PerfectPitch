import React from "react";
import { MdTimer } from "react-icons/md";

function TimeCount( {time} ) {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 h-full w-full justify-around bg-white">
      <div className="text-center font-sm font-medium">
        <h1
          className="flex items-center justify-center"
          style={{ fontSize: "3rem" }}
        >
          <MdTimer />
        </h1>
        <p className="my-10 text-3xl">{time}s</p>
      </div>
    </div>
  );
}

export default TimeCount;
