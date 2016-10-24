const express = require('express');
const router = express.Router();

const BlogModel = require('../models/BlogModel');

router.route('/')
.get((req, res) => {
  BlogModel.find({}, (err, blog) => {
    res.status(err ? 400 : 200).send(err || blog);
  });
})
.post((req, res) => {
  // console.log('body: ', req.body)
  BlogModel.create(req.body)
  .then((blog) => {
    res.send(blog);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

router.route('/:id')
.get((req, res) => {
  BlogModel.findById(req.params.id)
  .then((blog) => {
    res.status(200).send(blog);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
})
.put((req, res) => {
  BlogModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    res.status(err ? 400 : 200).send(err);
  });
})
.delete((req, res) => {
  BlogModel.findByIdAndRemove(req.params.id)
  .then((blog) => {
    res.status(200).send(`deleted:\n ${blog}`);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

module.exports = router;
