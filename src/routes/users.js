const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', async (req, res) => {
  let { offset = 0, limit = 10 } = req.query;
  offset = parseInt(offset);
  limit = parseInt(limit);

  const users = await User.find().skip(offset).limit(limit);
  res.json(users);
});

module.exports = router;
