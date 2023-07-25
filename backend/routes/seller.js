const express = require("express");
const router = express.Router();

const {loginSeller, signupSeller} = require("../controllers/sellerController");

//login route
router.post("/slogin", loginSeller)

//register route
router.post("/ssignup", signupSeller)

module.exports = router;