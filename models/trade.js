const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

type:{
type:String,
enum:["buy","sell"]
},

asset:String,

amount:Number,

price:Number,

status:{
type:String,
default:"completed"
},

date:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Trade",TradeSchema);