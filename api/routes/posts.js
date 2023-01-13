const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

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
      res.status(403).json('You can only update your own posts.');
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
      res.status(403).json('You can only delete your own posts.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Like post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('The post has been liked.');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('Like has been removed from the post.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get feed posts (posts from user and his friends)
router.get('/feed/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const currentUserPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    res.status(200).json(currentUserPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user posts
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
