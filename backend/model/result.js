const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ResultSchema = new Schema({
    name: { type: String, require: true },
    code:{type:String,required:true},
    desc:{type:String},
    questions:{type:Array,required:true},
    author:{type:Schema.Types.ObjectId,ref:'user'},
    sumbittedBy:{type:Schema.Types.ObjectId,ref:"user"},
    duration:{type:Number,required:true},
    startDate:{type:Date,required:true},
})
module.exports=Result=mongoose.model('result',ResultSchema)