'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('businesses', 'businessName', 'name')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('businesses', 'name', 'businessName')
  }
};
