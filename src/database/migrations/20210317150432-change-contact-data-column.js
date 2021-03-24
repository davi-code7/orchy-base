'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('contact_data', 'data_type');

    await queryInterface.addColumn('contact_data', 'data_type', {
      type: Sequelize.ENUM(['cell_phone', 'landline', 'email']),
      allowNull: false,
      unique: false,
    });

    await queryInterface.removeColumn('contact_data', 'status');

    await queryInterface.addColumn('contact_data', 'status', {
      type: Sequelize.ENUM(['pending', 'sent', 'failured']),
      allowNull: false,
      unique: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('contact_data', 'data_type');
    await queryInterface.sequelize.query(
      'drop type enum_contact_data_data_type;',
    );

    await queryInterface.addColumn('contact_data', 'data_type', {
      type: Sequelize.SMALLINT,
      allowNull: false,
      unique: false,
    });

    await queryInterface.removeColumn('contact_data', 'status');
    await queryInterface.sequelize.query('drop type enum_contact_data_status;');

    await queryInterface.addColumn('contact_data', 'status', {
      type: Sequelize.SMALLINT,
      allowNull: false,
      unique: false,
    });
  },
};
