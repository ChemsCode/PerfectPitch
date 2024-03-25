import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const INPUT_REGEX = /.+/;
const URL = "/feedback";

export default function InputPage() {
  const navigate = useNavigate();
  const errRef = useRef();

  const [answer, setAnswer] = useState("");
  const [validAnswer, setValidAnswer] = useState(false);
  const [answerFocus, setAnswerFocus] = useState(false);

  const [interviewQuestion, setInterviewQuestion] = useState("");
  const [validInterviewQuestion, setValidInterviewQuestion] = useState(false);
  const [interviewQuestionFocus, setInterviewQuestionFocus] = useState(false);

  const [apiResponse, setApiResponse] = useState("undefined");

  const [errMsg, setErrMsg] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const result = INPUT_REGEX.test(answer);
    console.log(result);
    console.log(answer);
    setValidAnswer(result);
  }, [answer]);

  useEffect(() => {
    setErrMsg("");
  }, [answer]);

  useEffect(() => {
    const result = INPUT_REGEX.test(interviewQuestion);
    console.log(result);
    console.log(interviewQuestion);
    setValidInterviewQuestion(result);
  }, [interviewQuestion]);

  useEffect(() => {
    setErrMsg("");
  }, [interviewQuestion]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmInterviewQuestion = INPUT_REGEX.test(interviewQuestion);
    const confirmAnswer = INPUT_REGEX.test(answer);
    if (!confirmAnswer || !confirmInterviewQuestion) {
      setErrMsg("Invalid Entry/Entries");
      console.log("Invalid Entry/Entries");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        URL,
        JSON.stringify({ answer, interviewQuestion }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setApiResponse(response?.data);
      console.log(apiResponse.message);
      let startIndex = response.data.message.indexOf("{");
      let jsonString = response.data.message.substring(startIndex);
      let parsedData = JSON.parse(jsonString);
      console.log(parsedData);
      navigate("/feedback", {
        state: {
          answer: parsedData,
          question: interviewQuestion,
          interviewAnswer: answer,
        },
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Failed");
      }
      setLoading(false);
      errRef.current.focus();
    }
  };
  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-white flex justify-center items-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#3730a3"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="w-full bg-white py-16 px-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-[1000px] mt-[0px] mx-auto text-center flex flex-col justify-center"
          >
            <p
              ref={errRef}
              className={
                errMsg
                  ? "border w-full my-5 py-2 bg-red-600 text-white text-1xl font-bold text-center"
                  : "offscreen"
              }
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h2 className="text-4xl font-bold text-center py-6">
              PerfectPitch.
            </h2>
            <div className="flex flex-col justify-center">
              Our NLP-based interview analysis webapp allows you to improve your
              interviewing skills by providing feedback on your answers to
              behavioral questions. To use the app, please input a behavioral
              question in the text box below, then type or paste your answer
              into the provided text box. Click the &quot;Submit&quot; button to
              submit your answer for analysis, which will give you feedback on
              what you did wrong and what to improve. Review the feedback and
              tips provided, and repeat the process as many times as you like to
              continue improving your interviewing skills.
            </div>
            <label htmlFor="InterviewQuestion">
              <h2 className="text-4xl font-bold text-center py-6">Question</h2>
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validInterviewQuestion ? "text-indigo-500 px-1.5" : "hidden"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validInterviewQuestion || !interviewQuestion
                    ? "hidden"
                    : "text-red-500 px-1.5"
                }
              />
            </label>
            <textarea
              type="text"
              id="InterviewQuestion"
              className="p-2 rounded-md h-15 border-black border-2"
              autoComplete="off"
              onChange={(e) => setInterviewQuestion(e.target.value)}
              value={interviewQuestion}
              required
              aria-invalid={validInterviewQuestion ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setInterviewQuestionFocus(true)}
              onBlur={() => setInterviewQuestionFocus(false)}
            />
            <p
              id="cnidnote"
              className={
                interviewQuestionFocus &&
                interviewQuestion &&
                !validInterviewQuestion
                  ? "text-xs rounded-md bg-black text-white my-1 py-1 px-2"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Needs an input
            </p>

            <h2 className="text-4xl font-bold text-center py-6">Answer</h2>
            <label htmlFor="Answer">
              <FontAwesomeIcon
                icon={faCheck}
                className={validAnswer ? "text-indigo-500 px-1.5" : "hidden"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validAnswer || !answer ? "hidden" : "text-red-500 px-1.5"
                }
              />
            </label>
            <textarea
              type="text"
              className="p-2 rounded-md h-32 border-black border-2"
              id="Answer"
              autoComplete="off"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              required
              aria-invalid={validAnswer ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setAnswerFocus(true)}
              onBlur={() => setAnswerFocus(false)}
            />
            <p
              id="cnidnote"
              className={
                answerFocus && answer && !validAnswer
                  ? "text-xs rounded-md bg-black text-white my-1 py-1 px-2"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Needs an input
            </p>
            <div className="flex flex- justify-center">
              <button
                disabled={!validAnswer ? true : false}
                className="bg-black text-indigo-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              >
                Get Feedback!
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
