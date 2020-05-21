var express = require('express');
var router = express.Router();

const User = require('../models').User;

/* GET users listing. */
//router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married
    });
    console.log(user);
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

module.exports = router;
