import React from "react";
import PopUp from "./PopUp";


function FeedbackHeader({ overallRating, improvedA }) {
  return (
    <div className="flex h-full w-full py-5 px-10 justify-between">
      <div>
        <h1
          className="flex items-center justify-center"
          style={{ fontSize: "2rem" }}
        >
          {"Great Job for your interview"} 
        </h1>

        <div>
          <PopUp improvedAns={improvedA}  />
        </div>
      </div>

      <div className="flex items-center mb-5">
        {/** overall grade */}
        <h2 className="text-2xl text-gray-500 font-bold text-center py-2">
          Overall Score
        </h2>

        <span className="w-1 h-1 mx-3.5 bg-gray-900 rounded-full dark:bg-gray-500"></span>
        <p className="bg-blue-100 text-blue-800 text-2xl font-semibold inline-flex items-center px-3 py-2 rounded dark:bg-indigo-200 dark:text-indigo-800">
          {overallRating}
        </p>
      </div>
    </div>
  );
}

export default FeedbackHeader;
