var DbConfig = require('../database.js')
var Sequelize = require('sequelize')
var noticias = require('./noticias').noticias

var users = DbConfig.define('users', {
    nome: Sequelize.STRING,
    senha: Sequelize.STRING,
    cat: Sequelize.STRING,
})

module.exports.users = users