const {sequelize} = require('../../database/index')
const {DataTypes} = require('sequelize')

const Videos = sequelize.define('video', {
    url: {
        type: DataTypes.STRING
    },

    nombre: {
        type: DataTypes.STRING
    },
})


module.exports = Videos