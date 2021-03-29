'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contacts_email', {
      id_contacts_email: {
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
      contact_data: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      state: {
        type: Sequelize.ENUM(['pending', 'sent', 'failed']),
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
    await queryInterface.dropTable('contacts_email');
  },
};
