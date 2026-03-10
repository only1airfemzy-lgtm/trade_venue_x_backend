const mongoose = require("mongoose")

const WalletSchema = new mongoose.Schema({

userId:String,

balance:{

USD:{type:Number,default:0},

BTC:{type:Number,default:0},

ETH:{type:Number,default:0},

USDT:{type:Number,default:0}

}

})

module.exports = mongoose.model("Wallet",WalletSchema)