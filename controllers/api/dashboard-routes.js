const router = require('express').Router();
const { response } = require('express');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.create({
            subject: req.body.subject,
            article: req.body.article,
            user_id: req.body.user_id
          });
        res.status(200).json(dbPostData);
    } 
    catch (error) {
        res.status(500).json(error);
    }
});

// Update post
router.put('/update',withAuth, async (req, res) => {
    try {
        const dbPostUpdatedData = await Post.update(
            {
                subject: req.body.subject,
                article: req.body.article
            },
            {
                where: {id: req.body.id }
            },
          );
        res.status(200).json(dbPostUpdatedData);
    } 
    catch (error) {
        res.status(500).json(error);
    }
});

// Delete post
router.delete('/delete', withAuth, async (req, res) => {
    try {
        const dbPostDeletedData = await Post.destroy(
            {
                where: {id: req.body.id }
            },
          );
        res.status(200).json(dbPostDeletedData);
    } 
    catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;