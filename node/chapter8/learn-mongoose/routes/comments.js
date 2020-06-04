const express = require('express');
const Comment = require('../schemas/comment');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const comments = await Comment.find({
      commenter: req.params.id
    }).populate('commenter');

    console.log(comments);
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const comment = new Comment({
      commenter: req.body.id,
      comment: req.body.comment
    });

    const result = await comment.save();
    const result2 = await Comment.populate(result, {path: 'commenter'});

    console.log(result2);
    res.status(201).json(result2);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

router.patch(':/id', async (req, res, next) => {
  try {
    const result = await Comment.update({_id: req.params.id}, {comment: req.body.comment});

    res.json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

router.delete(':/id', async (req, res, next) => {
  try {
    const result = await Comment.remove({_id: req.params.id});
    res.json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

module.exports = router;
