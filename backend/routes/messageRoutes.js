const {sendMessage,allMessages} = require("../controllers/messageControllers");
const express = require("express");
const {protect} = require("../MiddleWares/authMiddleware");

const router = express.Router();

router.route('/').post(protect, sendMessage);
router.route('/:chatId').get(protect, allMessages);

module.exports = router;