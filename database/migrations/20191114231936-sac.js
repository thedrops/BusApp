'use strict';

var DataTypes = require('sequelize/lib/data-types');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sac', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      reclamacao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sac');
  }
};