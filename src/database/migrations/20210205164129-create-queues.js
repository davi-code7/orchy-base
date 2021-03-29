'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('queues', {
      id_queue: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_load: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'loads',
          key: 'id_load',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      register: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      schedule: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      state: {
        type: Sequelize.ENUM(['pending', 'working', 'done']),
        allowNull: false,
        unique: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('queues');
  },
};
