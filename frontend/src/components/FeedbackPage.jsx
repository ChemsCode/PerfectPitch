import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LayoutSWI from "./Dashboard/LayoutSWI";
import LayoutTopSkills from "./Dashboard/LayoutTopSkills";
import LayoutSTAR from "./Dashboard/LayoutSTAR";
import GraphicalDashboard from "./GraphicalDashboard/GraphicalDashboard";

function FeedbackPage() {
  const feedback = useLocation();

  useEffect(() => {
    console.log(feedback);
    console.log(feedback.state);
    console.log(feedback.state.answer);
    console.log(feedback.state.question);
    console.log(feedback.state.interviewAnswer);
  }, []);

  return (
    <div className="px-10 my-4 bg-slate-100">

      <GraphicalDashboard fb={feedback.state.answer} qst={feedback.state.question} ans={feedback.state.interviewAnswer} />

      <LayoutSWI fb={feedback.state.answer.dict1} />

      <h1 className="text-3xl font-bold text-center">Top Skills</h1>

      <LayoutTopSkills fb={feedback.state.answer.dict2} />

      <h1 className="text-3xl font-bold text-center pt-10">STAR Method</h1>

      <LayoutSTAR fb={feedback.state.answer.dict4} />

    </div>
  );
}

export default FeedbackPage;
