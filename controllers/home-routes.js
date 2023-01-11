const router = require('express').Router();
const { Post, Comment, User } = require('../models');
//Import the custom middleware
//const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
    // find all posts
    try {
      const postsData =  await Post.findAll({
        include: [
            {
              model: User,
              attributes: ['first_name','last_name'],
            },
          ],
        });

      const commentsData = await Comment.findAll({ where: { user_id: '1' } });
      const comments = commentsData.map((comment) => comment.get({ plain: true }));
      console.log(comments);
      const posts = postsData.map((post) => post.get({ plain: true }));
      console.log(posts);
      res.render('homepage', {posts});
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
