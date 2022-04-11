'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('Locations', 'locations')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('locations', 'Locations')
  }
};
