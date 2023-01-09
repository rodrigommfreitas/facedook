const router = require('express').Router();
const Post = require('../models/Post');

router.get('/', (req, res) => console.log('posts page'));

// Create post
router.post('/new', async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update post
router.put('/:id/edit', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('Post successfully edited.');
    } else {
      return res.status(403).json('You can only update your own posts.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post
router.delete('/:id/delete', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('Post successfully deleted.');
    } else {
      return res.status(403).json('You can only delete your own posts.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Like post

// Get feed posts

// Get posts from user

module.exports = router;
