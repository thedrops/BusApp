module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return Usuario;
}