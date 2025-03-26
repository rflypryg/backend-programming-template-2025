const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/books', async (req, res) => {
  let { offset = 0, limit = 10 } = req.query;
  offset = parseInt(offset);
  limit = parseInt(limit);

  const books = await Book.find().skip(offset).limit(limit);
  res.json(books);
});

module.exports = router;
