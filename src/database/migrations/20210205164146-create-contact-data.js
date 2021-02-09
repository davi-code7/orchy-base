'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contact_data', {
      id_contact_data: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_contact: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      data_type: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      contact_data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contact_data');
  },
};
