const express = require('express');
const router = express.Router();
const controller = require("../controllers/entries.controller");

router.get('/', controller.getEntries);
router.post('/', controller.createEntry);
router.put('/', controller.updateEntry);
router.delete('/', controller.deleteEntry);

module.exports = router;
