const Sequelize = require('sequelize');

const sequelize = new Sequelize('noticias', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => console.log('Authenticated'))
    .catch(() => console.log('Error Auth'));

sequelize.sync()

module.exports = sequelize