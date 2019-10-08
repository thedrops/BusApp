'use strict';

var DataTypes = require('sequelize/lib/data-types');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Linhas', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      origem: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      destino: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tarifa: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      horarioSaida: {
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
    return queryInterface.dropTable('Linhas');
  }
};