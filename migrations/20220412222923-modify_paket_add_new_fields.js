'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'paket', // table name
      'jenis', // new field name
      {
        type: Sequelize.ENUM('kiloan','selimut','bed_cover','kaos','kain')
      },
    )
  },

  async down (queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('paket', 'jenis')
    ]);
  }
};
