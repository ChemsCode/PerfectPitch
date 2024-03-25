import React from "react";
import WordCount from "./WordCount";
import TimeCount from "./TimeCount";
import LanguageRating from "./LanguageRating";
import StarRating from "./StarRating";
import DashboardHeader from "./DashboardHeader";

function GraphicalDashboard({ fb, qst, ans }) {
  const countWords = (ans) =>
    ans.split(" ").filter(function (n) {
      return n != "";
    }).length;

  const countTime = (ans) => countWords(ans) / 4.5;

  return (
    <>
      <DashboardHeader
        overallRating={fb.overallScore}
        improvedA={fb.entireImprovedResponse}
      />
      <div className="grid grid-flow-row grid-flow-colum grid-rows-3 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6  h-full w-full">
        <div className="col-span-1 row-span-1 h-full w-full">
          <WordCount numWords={countWords(ans)} />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full">
          <TimeCount time={countTime(ans).toFixed(2)} />
        </div>
        <div className="col-span-2 row-span-3 h-full w-full">
          <StarRating starfb={fb.dict4} />
        </div>
        <div className="col-span-2 row-span-2 h-full w-full">
          <LanguageRating
            coherence={fb.dict3.coherence}
            clarity={fb.dict3.clarity}
            grammar={fb.dict3.grammar}
          />
        </div>
      </div>
    </>
  );
}

export default GraphicalDashboard;
