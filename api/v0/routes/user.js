const router = require("express").Router();
const {getUser, updateUser, deleteUser} = require("../https/controllers/userController");

//Get profile
router.get("/:userid", getUser);

//Update Profile
router.put("/:userid", updateUser);

//Delete Profile
router.delete("/:userid", deleteUser);

module.exports = router;