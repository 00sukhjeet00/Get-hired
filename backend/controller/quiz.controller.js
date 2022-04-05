const Quiz = require("../model/quiz");
const moment = require("moment");
const Result = require("../model/result");
const user = require("../model/user");
const upload = async (req, res) => {
  const { name, code, desc, questions, duration, startDate,type } = req.body;

  let userExist = await user.findOne({ _id: req.user.userId }).exec();
  if (userExist) {
    if(userExist.profession && userExist.isAdmin){
    const newQuiz = new Quiz({
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
    newQuiz.save((err) => {
      if (err) throw err 
      // return res.status(400).json({ msg: "Something Went Worng" });
      return res.status(200).json({ msg: "New Quiz Is Added" });
    });}else{
      return res.status(401).json({msg:"Not Vaild User"})
    }
  }
};
const getQuiz = async (req, res) => {
  const { tab } = req.body;

  if (tab === 1) {
    const today = moment().startOf("day");
    Quiz.find(
      {
        startDate: {
          $gte: today.toDate(),
          $lte: moment(today).endOf("day").toDate(),
        },
      },
      (err, questions) => {
        if (err) throw err;
        if (questions.length > 0) return res.status(200).json({ questions });
        else return res.status(201).json({ msg: "No Quiz Found" });
      }
    );
  } else if (tab === 0) {
    const prevDay = moment().endOf("day").subtract(1, "day");
    Quiz.find(
      {
        startDate: {
          $lte: prevDay.toDate(),
        },
      },
      (err, questions) => {
        if (err) throw err;
        if (questions.length > 0) return res.status(200).json({ questions });
        else return res.status(201).json({ msg: "No Quiz Found" });
      }
    );
  } else if (tab === 2) {
    const today = moment().startOf('day');
    const nextDay = today.add(1, "day");
    Quiz.find(
      {
        startDate: {
          $gte: nextDay.toDate(),
        },
      },
      (err, questions) => {
        if (err) throw err;
        if (questions.length > 0) return res.status(200).json({ questions });
        else return res.status(201).json({ msg: "No Quiz Found" });
      }
    );
  }
};
const getQuizQuestion = async (req, res) => {
  const { code } = req.body;
  const today = new Date();
  Quiz.findOne({ code }, (err, question) => {
    if (err) throw err;
    const duration = moment(question.startDate)
      .add(question.duration, "hours")
      .toDate();
    if (question) {
      if (today >= question.startDate && today <= duration) {
        return res.status(200).json({ question });
      } else if (today > duration) {
        return res.status(200).json({ question });
      } else return res.status(201).json({ msg: "Quiz Not Started" });
    } else return res.status(201).json({ msg: "NO Quiz Question" });
  });
};
const checkAns = (req, res) => {
  const { ans, id, question_id } = req.body;
  Quiz.findById({ _id: id }, async (err, quiz) => {
    if (err) return res.status(401).json("Something Went Worng");
    const question = quiz.find((x) => x._id === question_id);
    const prevScore = await Result.findOne({ sumbittedBy: res.user.userId });
    if (question.ans == ans) {
      const doc = await Result.findByIdAndUpdate(
        { sumbittedBy: res.user.userId },
        { score: prevScore + 1 },
        { new: true }
      );
      console.log("doc:", doc);
    } else {
      const doc = await Result.findByIdAndUpdate(
        { sumbittedBy: res.user.userId },
        { score: prevScore - 1 },
        { new: true }
      );
      console.log("doc:", doc);
    }
  });
};
module.exports = { upload, getQuiz, getQuizQuestion, checkAns };
