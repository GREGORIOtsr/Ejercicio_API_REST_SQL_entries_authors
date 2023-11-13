const express = require('express');
const router = express.Router();
const controller = require("../controllers/authors.controller");

router.get('/', controller.getAuthors)
router.post('/', controller.createAuthor);
router.put('/', controller.updateAuthor);
router.delete('/', controller.deleteAuthor);

module.exports = router;