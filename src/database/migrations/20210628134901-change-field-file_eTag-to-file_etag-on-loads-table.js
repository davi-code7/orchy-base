module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameColumn('loads', 'file_eTag', 'file_etag');
  },

  down: async (queryInterface) => {
    await queryInterface.renameColumn('loads', 'file_etag', 'file_eTag');
  },
};
