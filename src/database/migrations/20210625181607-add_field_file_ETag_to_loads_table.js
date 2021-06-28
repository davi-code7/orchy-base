module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('loads', 'file_eTag', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('loads', 'file_eTag');
  },
};
