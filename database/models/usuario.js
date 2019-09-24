'use strict';
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    email: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    senha: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
  }, {});
  Usuario.associate = function (models) {
    // associations can be defined here
  };
  return Usuario;
};