const express = require("express");

const router = express.Router();

router.use(require('./income'));
router.use(require('./expense'));
router.use(require('./user'));


module.exports=router;