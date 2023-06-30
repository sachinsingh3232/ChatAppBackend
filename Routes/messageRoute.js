const router = require('express').Router()

const { sendMessage, allMessages } = require('../Controllers/messageController');
const { protect } = require('../Middleware/authMiddleware');



router.route("/").post(protect, sendMessage)
router.route("/:chatId").get(protect, allMessages)

module.exports = router;