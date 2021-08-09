module.exports = (sequelize, DataTypes) => {
  const teste = sequelize.define('teste', {
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
  });

  return teste;
}