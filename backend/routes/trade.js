const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

router.post("/",auth,async(req,res)=>{

const {type,asset,amount,price} = req.body;

const trade = new Trade({

userId:req.user.id,

type,

asset,

amount,

price

});

await trade.save();

res.json({message:"Trade successful",trade});

});

router.get("/",auth,async(req,res)=>{

const trades = await Trade.find({userId:req.user.id});

res.json(trades);

});

module.exports = router;