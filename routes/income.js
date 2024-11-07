const { addIncome, getIncomes, updateIncome } = require("../controllers/income");

const router = require("express").Router();

router.post("/add-income/:userId", addIncome); // Call userId has to be the same in req.params.userId 

// http://localhost:3000/api/income/add-income/1

router.get("/get-incomes/:userId", getIncomes);

router.patch("/update-income/:userId/:incomeId", updateIncome);

module.exports = router;
