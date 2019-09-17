var DataTypes = require('sequelize/lib/data-types');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Linha', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('Linha');
  }
};
