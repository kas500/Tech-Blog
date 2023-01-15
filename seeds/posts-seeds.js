const { Post } = require('../models');

const postsData = [
    {
        subject: "Test subject",
        article: "articlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticle",
        user_id: 1
    },
    {
        subject: "Test subject2",
        article: "articlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticle2",
        user_id: 2
    }
  ];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;