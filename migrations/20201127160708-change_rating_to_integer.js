'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('businesses', 'rating', {
      type: 'INTEGER USING CAST("rating" as INTEGER)'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('businesses', 'rating', {
      type: Sequelize.STRING
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
