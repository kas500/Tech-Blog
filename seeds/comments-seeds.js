const { Comment } = require('../models');

const commentsData = [
    {
        "comment": "My name is Richard. This is my first comment",
        "user_id": 2,
        "post_id": 1
    },
    {
        "comment": "My name is Anton. This is my first comment",
        "user_id": 1,
        "post_id": 2
    }
  ]

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;