const Test=require('../model/test')
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
module.exports={upload}