const Test = require("../model/test");
const Quiz = require("../model/quiz");
const Result = require("../model/result");
const getResult = async (req, res) => {
  Result.find({ sumbittedBy: req.user.userId }, (err, result) => {
    if (err) throw err;
    if (result) {
      var results = [];
      result.map(async(element) => {
        if (element.test) {
          let obj = {};
          const tests=await Test.find({ _id: element.test })
          tests.map((test) => {
            obj.title = test.name;
            (obj.code = test.code),
              (obj.type = test.type),
              (obj.startDate = test.startDate),
              (obj.company = test.company);
            (obj.score = element.score), (obj.outOf = element.outOf);
            results.push(obj);
          });
        }
        else {
          const quizs=await Quiz.find({ _id: element.quiz });
          let obj = {};
          quizs.map((quiz) => {
            obj.title = quiz.name;
            (obj.code = quiz.code),
              (obj.type = quiz.type),
              (obj.startDate = quiz.startDate),
              (obj.company = quiz.company);
            (obj.score = element.score), (obj.outOf = element.outOf);
            results.push(obj);
          });
        }
      });
      console.log(results);
      return res.status(200).json({ results })
    }else{
      return res.status(201).json({ msg: "No Result Found" });
    }
  });
};
module.exports = getResult;
