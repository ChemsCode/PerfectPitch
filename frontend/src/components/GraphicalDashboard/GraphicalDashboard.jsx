
import React from "react";
import DashboardHeader from "./DashboardHeader";



function BriefDashboard( {fb, qst, ans} ) {

  const countWords = (ans) => ans.split(' ').filter(function(n) { return n != '' }).length

  const countTime = (ans) => (countWords(ans)/4.5)
  
  return (
    <>
      <DashboardHeader overallRating={fb.overallScore} improvedA={fb.entireImprovedResponse} />
    </>
  );
}

export default BriefDashboard;
