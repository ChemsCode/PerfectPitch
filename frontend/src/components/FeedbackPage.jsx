import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LayoutSWI from "./Dashboard/LayoutSWI";
import LayoutTopSkills from "./Dashboard/LayoutTopSkills";

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

      <LayoutSWI fb={feedback.state.answer.dict1} />

      <h1 className="text-3xl font-bold text-center my-10">Top Skills</h1>

      <LayoutTopSkills fb={feedback.state.answer.dict2} />

    </div>
  );
}

export default FeedbackPage;
