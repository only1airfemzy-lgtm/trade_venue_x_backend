const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

// Get all user transactions
router.get("/", auth, async (req, res) => {

try {

const transactions = await Transaction.find({ userId: req.user.id });

res.json(transactions);

} catch (error) {

res.status(500).json({ message: error.message });

}

});

module.exports = router;