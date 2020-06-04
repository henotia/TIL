var express = require('express');
var router = express.Router();
var User = require('../schemas/user')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married
  });

  try {
    const result = await user.save();
    console.log(result);
    res.status(201).json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

module.exports = router;
