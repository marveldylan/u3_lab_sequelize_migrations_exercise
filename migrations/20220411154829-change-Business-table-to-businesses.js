'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('Businesses', 'businesses')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('businesses', 'Businesses')
  }
};

