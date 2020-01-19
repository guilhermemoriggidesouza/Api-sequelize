var DbConfig = require('../database.js')
var Sequelize = require('sequelize')
var users = require('./users').users

var noticias =  DbConfig.define('noticias', {
    titulo: Sequelize.STRING,
    texto: Sequelize.STRING,
    lide: Sequelize.STRING,
    users_id: Sequelize.INTEGER
})
users.hasMany(noticias, { foreignKey: 'users_id'})
noticias.belongsTo(users, { foreignKey: 'users_id'})

module.exports.noticias = noticias
