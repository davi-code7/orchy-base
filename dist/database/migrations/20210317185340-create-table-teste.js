'use strict';

const uuid = require('uuidv4'); // ES5


var sq = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contacts');
    await queryInterface.createTable('contacts', {
      id_contact: {
        type: Sequelize.BIGINT,
        default: sq.fn('uuid_generate_v4'),
        primaryKey: true,
        autoIncrement: true
      },
      id_load: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
    await queryInterface.dropTable('contacts');
  }
};