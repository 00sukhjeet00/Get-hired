const Quiz = require("../model/quiz");
const moment=require('moment')
const upload = async (req, res) => {
  console.log(req.body);
  const { name, code, desc, questions, duration, startDate } = req.body;
  const newQuiz = new Quiz({
    name,
    code,
    desc,
    questions,
    duration,
    startDate,
    author: req.user.userId,
  });
  newQuiz.save((err) => {
    if (err) return res.status(400).json({ msg: "Something Went Worng" });
    return res.status(200).json({ msg: "New Quiz Is Added" });
  });
};
const getQuiz = async (req, res) => {
  const today=moment().startOf('day')
    Quiz.find({
      startDate:{
        $gte:today.toDate(),
        $lte:moment(today).endOf('day').toDate()
      }
    }, (err, questions) => {
      if (err) throw err;
      if(questions.length>0)
        return res.status(200).json({ questions });
      else
        return res.status(201).json({msg:"No Quiz Found Today"})
    });
};
const getQuizQuestion=async(req,res)=>{
  const {code}=req.body
  const today=new Date()
  Quiz.findOne({code},(err,question)=>{
    if(err) throw err
    const duration=moment(question.startDate).add(question.duration,"hours").toDate()
    if(question){ 
      if(today>=question.startDate && today<=duration)
        return res.status(200).json({question})
      else 
        return res.status(201).json({msg:"Quiz Not Started"})
    }
    else
      return res.status(201).json({msg:"NO Quiz Question"})
  })
}

module.exports = { upload, getQuiz ,getQuizQuestion};
