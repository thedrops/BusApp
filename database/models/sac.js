module.exports = (sequelize, DataTypes) => {
    const Sac = sequelize.define('Sac', {
      reclamacao: DataTypes.STRING,
    });
  
    return Sac;
  }
