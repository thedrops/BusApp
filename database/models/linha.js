module.exports = (sequelize, DataTypes) => {
    const Linha = sequelize.define('Linha', {
      origem: DataTypes.STRING,
      destino: DataTypes.STRING,
      tarifa: DataTypes.DOUBLE,
      horarioSaida: DataTypes.STRING
    });
  
    return Linha;
  }
