'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'contact_phones',
      'area_code',{
        allowNull: true,
        type: Sequelize.INTEGER
      }
     
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'contact_phones',
      'area_code',
    );
  }
  
};
