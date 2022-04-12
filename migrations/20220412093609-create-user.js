'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      nama: {
        type: Sequelize.STRING(100)
      },
      username: {
        type: Sequelize.STRING(30)
      },
      password: {
        type: Sequelize.STRING
      },
      id_outlet: {
        type: Sequelize.INTEGER(11),
        references:{
          model:"outlet",
          key:"id_outlet"
        }
      },
      role: {
        type: Sequelize.ENUM('admin','kasir','owner')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};