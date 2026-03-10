const express = require("express");

const router = express.Router();


const auth = require("../middleware/authMiddleware");

router.get("/",auth,async(req,res)=>{

const wallet = await Wallet.findOne({userId:req.user.id});

res.json(wallet);

});

module.exports = router;