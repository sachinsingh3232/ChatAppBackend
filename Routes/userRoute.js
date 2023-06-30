const router = require('express').Router()
const { allUsers, registerUser, authUser } = require('../Controllers/userControllers');
const { protect } = require('../Middleware/authMiddleware');


router.route("/").post(registerUser).get(protect,allUsers)
router.post("/login", authUser) 

module.exports=router;