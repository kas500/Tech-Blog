const { User } = require('../models');

const usersData = [
    {
      "username": "kas500",
      "password": "123456"
    },
    {
        "username": "bueno_user",
        "password": "1234567"
      }
  ]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;