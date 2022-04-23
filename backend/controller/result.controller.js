const Test = require("../model/test");
const Quiz = require("../model/quiz");
const Result = require("../model/result");
const getResult = async (req, res) => {
  const result = await Result.find({ sumbittedBy: req.user.userId });
  var results = [];
  if(result){
    for(const element of result)
    {
      let obj = {};
      console.log("element",element);
      if (element.test) {
        const test = await Test.findOne({ _id: element.test });
          obj.title = test.name;
          (obj.code = test.code),
            (obj.type = test.type),
            (obj.startDate = test.startDate),
            (obj.company = test.company);
          (obj.score = element.score), (obj.outOf = element.outOf);
          results.push(obj);
      } else {
        const quiz = await Quiz.findOne({ _id: element.quiz });
        console.log(quiz);
          obj.title = quiz.name;
          (obj.code = quiz.code),
            (obj.type = quiz.type),
            (obj.startDate = quiz.startDate),
            (obj.company = quiz.company);
          (obj.score = element.score), (obj.outOf = element.outOf);
          results.push(obj);
      }
    }
  return res.status(200).json({results})
}else{
    return res.status(201).json({msg:"No Result Found"})
  }
};
module.exports = getResult;
