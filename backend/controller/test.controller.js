const Test=require('../model/test')
const moment=require('moment')
const upload=async(req,res)=>{
    console.log(req.body);
    const {name,code,desc,questions,time,startDate}=req.body
    const newTest=new Test({
        name,code,desc,questions,time,startDate,author:req.user.userId
    })
    newTest.save((err)=>{
        if(err)
          return res.status(400).json({msg:"Something Went Worng"})
        return res.status(200).json({msg:"New Test Is Added"})
    })
}
const getTest = async (req, res) => {
    const today=moment().startOf('day')
      Test.find({
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
module.exports={upload,getTest}