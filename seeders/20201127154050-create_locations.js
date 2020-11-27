'use strict'
const faker = require('faker')
const locs = [...Array(10)].map(() => ({
  city_name: faker.address.city(),
  zipcode: faker.address.zipCode(),
  population: faker.random.number({ min: 30000, max: 20000000 })
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', locs)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locations', locs)
  }
}
