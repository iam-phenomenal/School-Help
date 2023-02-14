const router = require("express").Router();
const {register, login} = require("../https/controllers/authController");

router.post("/register", register);


router.post("/login", login);

module.exports = router;