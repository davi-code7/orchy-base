'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contact_complements', {
      id_contact_complement: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_contact: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'contacts',
          key: 'id_contact',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      field: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
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
    await queryInterface.dropTable('contact_complements');
  },
};
