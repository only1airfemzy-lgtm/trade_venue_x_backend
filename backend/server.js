const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/auth")
const walletRoutes = require("./routes/wallet")
const tradeRoutes = require("./routes/trade")
const transactionRoutes = require("./routes/transaction")
const giftcardRoutes = require("./routes/giftcard")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use("/api/auth",authRoutes)
app.use("/api/wallet",walletRoutes)
app.use("/api/trade",tradeRoutes)
app.use("/api/transactions",transactionRoutes)
app.use("/api/giftcard",giftcardRoutes)

app.get("/",(req,res)=>{
res.send("Trade Venue X API Running")
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})