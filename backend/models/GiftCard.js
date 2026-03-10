const mongoose = require("mongoose")

const GiftCardSchema = new mongoose.Schema({

userId:String,

cardType:String,

amount:Number,

status:{
type:String,
default:"pending"
}

})

module.exports = mongoose.model("GiftCard",GiftCardSchema)