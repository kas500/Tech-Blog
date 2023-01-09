const { User } = require('../models');

const usersData = [
    {
      "first_name": "Anton",
      "last_name": "Krasnikov",
      "email": "anton@email.com",
      "password": "123456"
    },
    {
        "first_name": "Richard",
        "last_name": "Bueno",
        "email": "richard@email.com",
        "password": "1234567"
      }
  ]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;