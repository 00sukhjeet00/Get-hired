const Test=require('../model/test')
const moment=require('moment')
const Result = require("../model/result");
const user = require("../model/user");
const upload = async (req, res) => {
  const { name, code, desc, questions, duration, startDate,type } = req.body;

  let userExist = await user.findOne({ _id: req.user.userId }).exec();
  if (userExist) {
    if(userExist.profession){
    const newTest = new Test({
      name,
      code,
      desc,
      questions,
      duration,
      startDate,
      author: req.user.userId,
      company: userExist.company,
      type:type
    });
    newTest.save((err) => {
      if (err) throw err 
      // return res.status(400).json({ msg: "Something Went Worng" });
      return res.status(200).json({ msg: "New Test Is Added" });
    });}else{
      return res.status(401).json({msg:"Not Vaild User"})
    }
  }
};
const getTest = async (req, res) => {
  const { tab } = req.body;
  if (tab === 1) {
    const today = moment().startOf("day");
    Test.find(
      {
        startDate: {
          $gte: today.toDate(),
          $lte: moment(today).endOf("day").toDate(),
        },
      },
      (err, questions) => {
        if (err) throw err;
        if (questions.length > 0) return res.status(200).json({ questions });
        else return res.status(201).json({ msg: "No Test Found" });
      }
    );
  } else if (tab === 0) {
    const prevDay = moment().endOf("day").subtract(1, "day");
    Test.find(
      {
        startDate: {
          $lte: prevDay.toDate(),
        },
      },
      (err, questions) => {
        if (err) throw err;
        if (questions.length > 0) return res.status(200).json({ questions });
        else return res.status(201).json({ msg: "No Test Found" });
      }
    );
  } else if (tab === 2) {
    const today = moment();
    const nextDay = today.add(1, "day");
    Test.find(
      {
        startDate: {
          $gte: nextDay.toDate(),
        },
      },
      (err, questions) => {
        if (err) throw err;
        if (questions.length > 0) return res.status(200).json({ questions });
        else return res.status(201).json({ msg: "No Test Found" });
      }
    );
  }
};
const getTestQuestion = async (req, res) => {
  const { code } = req.body;
  const today = new Date();
  Test.findOne({ code }, (err, question) => {
    if (err) throw err;
    const duration = moment(question.startDate)
      .add(question.duration, "hours")
      .toDate();
    if (question) {
      if (today >= question.startDate && today <= duration) {
        return res.status(200).json({ question });
      } else if (today > duration) {
        return res.status(200).json({ question });
      } else return res.status(201).json({ msg: "Test Not Started" });
    } else return res.status(201).json({ msg: "NO Test Question" });
  });
};
const checkAns = (req, res) => {
  const { ans, id, question_id,type } = req.body;
  Test.findById({ _id: id }, async (err, Test) => {
    if (err) return res.status(401).json("Something Went Worng");
    console.log(Test.questions[question_id])
    const question = Test.questions[question_id];
    const prevResult = await Result.findOne({ sumbittedBy: req.user.userId }).exec();
    if(prevResult)
    {
      const prevScore=prevResult.score
      if (question.ans == ans) {
        const doc = await Result.findByIdAndUpdate(
          { sumbittedBy: req.user.userId },
          { score: prevScore + 1 },
          { new: true }
        );
        console.log("doc:", doc);
      } else {
        const doc = await Result.findByIdAndUpdate(
          { sumbittedBy: req.user.userId },
          { score: prevScore - 1 },
          { new: true }
        );
        console.log("doc:", doc);
      }
    }else{
      const newResult=new Result({
        sumbittedBy:req.user.userId,
        score:0,
        test:id
      })
      newResult.save(err=>{
        if(err) throw err
        return res.status(200).json({msg:"Question Submitted"})
      })
    }
  });
};
module.exports = { upload, getTest, getTestQuestion, checkAns };
