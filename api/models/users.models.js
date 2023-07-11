const {sequelize} = require('../../database/index')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('user', {
    nombre_user: {
        type: DataTypes.STRING
    },
    user: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
})

module.exports = Users