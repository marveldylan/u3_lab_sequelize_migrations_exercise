'use strict'
const faker = require('faker')
const businesses = [...Array(10)].map(() => ({
  businessName: faker.company.companyName(),
  phoneNmber: faker.phone.phoneNumber(),
  rating: faker.random.number({ min: 0, max: 100 })
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('businesses', businesses)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('businesses')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
