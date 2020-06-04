var express = require('express');
var router = express.Router();
var User = require('../schemas/user');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    res.render('mongoose', {users});
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
