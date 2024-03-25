import React from "react";
import { AiOutlineNumber } from "react-icons/ai";

function WordCount( {numWords} ) {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 h-full w-full justify-around bg-white">
      <div className="text-center font-sm font-medium">
        <h1
          className="flex items-center justify-center"
          style={{ fontSize: "2rem" }}
        >
          <AiOutlineNumber /> {"Words"}
        </h1>
        <p className="my-10  text-3xl">{numWords}</p>
      </div>
    </div>
  );
}

export default WordCount;
