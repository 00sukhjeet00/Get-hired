const mongoose = require('mongoose')
const Schema = mongoose.Schema
const QuizSchema = new Schema({
    name: { type: String, require: true },
    code:{type:String,required:true},
    desc:{type:String},
    questions:{type:Array,required:true},
    author:{type:Schema.Types.ObjectId,ref:'user'},
    sumbittedBy:{type:Schema.Types.ObjectId,ref:"user"},
    time:{type:Date,required:true},
    startDate:{type:Date,required:true},
})
module.exports=Quiz=mongoose.model('quiz',QuizSchema)