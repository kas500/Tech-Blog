const router = require('express').Router();
const { Comment } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            comment: req.body.commentText,
            user_id: req.body.userId,
            post_id: req.body.postId
          });
        res.status(200).json(dbCommentData);
    } 
    catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;