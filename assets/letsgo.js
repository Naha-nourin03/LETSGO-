var mongoose = require('mongoose')
var schema = mongoose.Schema({
    campaign:String,
    Description:String,
    link:String,
    Location:String,
    Group:String,
    Date: String,
    Time: String,
    Images: String, 
    Duration:Number,
    volunteers:Number,    
    Requirements:String,
    Name:String,
    Phone:Number
})
var Gomodel =  mongoose.model("Letsgo", schema);
module.exports=Gomodel
