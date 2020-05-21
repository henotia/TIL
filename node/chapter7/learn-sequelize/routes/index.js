var express = require('express');
var router = express.Router();

const User = require('../models').User;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('sequelize', {users});
  } catch (e) {
    console.error(e);
    next(e);
  }
})
module.exports = router;
