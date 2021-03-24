'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('contacts', 'id_load');

    await queryInterface.addColumn('contacts', 'id_load', {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'loads',
        key: 'id_load',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.removeColumn('contact_data', 'id_contact');

    await queryInterface.addColumn('contact_data', 'id_contact', {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'contacts',
        key: 'id_contact',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.removeColumn('queues', 'id_load');

    await queryInterface.addColumn('queues', 'id_load', {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'loads',
        key: 'id_load',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('contacts', 'id_load');

    await queryInterface.addColumn('contacts', 'id_load', {
      type: Sequelize.BIGINT,
      allowNull: false,
    });

    await queryInterface.removeColumn('contact_data', 'id_contact');

    await queryInterface.addColumn('contact_data', 'id_contact', {
      type: Sequelize.BIGINT,
      allowNull: false,
    });

    await queryInterface.removeColumn('queues', 'id_load');

    await queryInterface.addColumn('queues', 'id_load', {
      type: Sequelize.BIGINT,
      allowNull: false,
    });
  },
};
