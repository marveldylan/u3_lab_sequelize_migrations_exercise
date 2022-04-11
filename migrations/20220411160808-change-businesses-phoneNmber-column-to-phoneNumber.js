'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('businesses', 'phoneNmber', 'phoneNumber')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('businesses', 'phoneNumber', 'phoneNmber')
  }
};
