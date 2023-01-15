const router = require('express').Router();
const { response } = require('express');
const { Post } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            subject: req.body.postSubject,
            article: postArticle,
            user_id: req.body.user_id
          });
            console.log(dbPostData);
        res.status(200).json(dbPostData);
    } 
    catch (error) {
        console.log("from dash routes", response.status);
        res.status(500).json(error);
    }
});

module.exports = router;