const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Update user
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // Update password
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).json(err);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.status(200).json('User account has been updated.');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can only update your own user account.');
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.status(200).json('User account has been deleted.');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You can only delete your own user account.');
  }
});

// Get user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;

    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Follow user
router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (
        !user.followers.includes(req.body.userId) ||
        !currentUser.following.includes(req.body.userId)
      ) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });

        res.status(200).json('User has been followed.');
      } else {
        res.status(403).json('You already follow this user.');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You can only follow other users.');
  }
});

// Unfollow user
router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (
        user.followers.includes(req.body.userId) ||
        currentUser.following.includes(req.body.userId)
      ) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });

        res.status(200).json('User has been unfollowed.');
      } else {
        res.status(403).json("You weren't following this user before.");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You can only unfollow other users.');
  }
});

module.exports = router;
