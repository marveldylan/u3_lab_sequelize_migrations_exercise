'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('businesses', 'businessName', 'name')
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('businesses', 'name', 'businessName')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
