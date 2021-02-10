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
            },
            schedule: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('queues');
    },
};
