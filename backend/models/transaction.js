const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({

userId:String,

type:String,

amount:Number,

status:{
type:String,
default:"completed"
}

})

module.exports = mongoose.model("Transaction",TransactionSchema)