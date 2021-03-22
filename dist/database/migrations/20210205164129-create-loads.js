'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loads', {
      id_load: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // id_queue: {
      //   type: Sequelize.BIGINT,
      //   allowNull: false,
      //   references: { model: 'queues', key: 'id_queue' },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      id_flow: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_org: {
        type: Sequelize.STRING,
        allowNull: false
      },
      register: {
        type: Sequelize.DATE,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('loads');
  }
};