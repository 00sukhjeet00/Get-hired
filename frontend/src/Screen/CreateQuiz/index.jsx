import React, { useRef, useState } from 'react'
import CreateQuiz from './component/CreateQuiz'

export default function CreateTestScreen() {
  const [test, settest] = useState({
    title:"",
    desc:"",
    code:"",
    num_ques:1,
    add_ques:false,
    questions:[],
    duration:30,
    startDate:new Date()
  })
  const [question, setquestion] = useState({
    title:"",
    ans:""
  })
  const [opt1, setopt1] = useState("")
  const [opt2, setopt2] = useState("")
  const [opt3, setopt3] = useState("")
  const [opt4, setopt4] = useState("")
  const questionCnt = useRef(1)
  const addQuestion=()=>{
    let questionObj={
      title:question.title,
      ans:question.ans,
    }
    var cpy=[]
    cpy.push(opt1)
    cpy.push(opt2)
    cpy.push(opt3)
    cpy.push(opt4)
    questionObj.options=cpy
    var ques=test.questions
    ques.push(questionObj)
    settest({...test,questions:ques})
    setopt1("")
    setopt2("")
    setopt3("")
    setopt4("")
    setquestion({
      title:"",
      ans:"",
    })
    if(questionCnt.current<=test.add_ques)
      questionCnt.current+=1
  }
  const submitQuestion=()=>{
    addQuestion()
    console.log("test:",test);
  }
  return (
    <CreateQuiz
      test={test}
      settest={settest}
      question={question}
      setquestion={setquestion}
      opt1={opt1}
      setopt1={setopt1}
      opt2={opt2}
      setopt2={setopt2}
      opt3={opt3}
      setopt3={setopt3}
      opt4={opt4}
      setopt4={setopt4}      
      addQuestion={addQuestion}
      questionCnt={questionCnt}
      submitQuestion={submitQuestion}
    />
  )
}
