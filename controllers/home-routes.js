const router = require('express').Router();
const { Post, Comment, User } = require('../models');
//Import the auth middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
    // find all posts with comments
    try {
      const postsData =  await Post.findAll({
        include: [
            {
              model: User,
              attributes: ['username'],
            },
            {
              model: Comment,
              attributes: ['comment','user_id','updatedAt'],
              order: [['updatedAt', 'ASC']],
              include: [{
                model: User,
                attributes: ['username']
              }],
            },
          ],
        });
      const posts = postsData.map((post) => post.get({ plain: true }));
      res.render('homepage', {
        posts, 
        loggedIn: req.session.loggedIn, 
        userName: req.session.username,
        userId: req.session.userId
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/dashboard',withAuth , async (req, res) => {
    // find all posts with comments
    try {
        const postsData =  await Post.findAll({
          where: {
              user_id: req.session.userId
            },
          });
        const posts = postsData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
          posts, 
          loggedIn: req.session.loggedIn, 
          userName: req.session.username,
          userId: req.session.userId,
          url: req.url
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

  router.get('/login', (req, res) => {
    console.log(req.session.loggedIn);
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });


module.exports = router;
