import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <>
      <div className="px-10 my-4 bg-slate-100"></div>
    </>
  );
}

export default FeedbackPage;
