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

// Delete post

// Like post

// Get feed posts

// Get posts from user

module.exports = router;
