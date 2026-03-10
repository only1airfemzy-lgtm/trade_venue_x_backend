const express = require("express")

const router = express.Router()

const GiftCard = require("../models/GiftCard")

router.post("/sell",async(req,res)=>{

const {cardType,amount,userId} = req.body

const card = new GiftCard({

cardType,

amount,

userId

})

await card.save()

res.json({message:"Gift card submitted"})

})

module.exports = router