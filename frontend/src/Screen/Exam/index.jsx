import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Exam from "./component/Exam";

export default function ExamScreen() {
  const location = useLocation();
  const [questions, setquestions] = useState([]);
  const [index, setindex] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [id, setid] = useState('')
  const [ans, setans] = useState("");
  useEffect(() => {
    console.log("===>", location.state.questions.question._id);
    setid(location.state.questions.question._id)
    setquestions(location.state.questions.question.questions);
    setisLoading(false);
  }, []);
  const handleAns = async () => {
    const params = {
      ans:ans,
      id:id,
      question_id:index,
    };
  };
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Exam questions={questions} index={index} handleAns={handleAns} ans={ans} setans={setans}/>
      )}
    </>
  );
}
