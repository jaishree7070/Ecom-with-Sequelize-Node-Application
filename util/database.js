const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', 'Raji@1234', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
 