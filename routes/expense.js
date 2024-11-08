const { addExpense } = require("../controllers/expense");

const router = require("express").Router();

router.post("/add-expense/:userId", addExpense);

module.exports = router;    