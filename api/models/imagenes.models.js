const {sequelize} = require('../../database/index')
const {DataTypes} = require('sequelize')

const Imagenes = sequelize.define('imagen', {
    url: {
        type: DataTypes.STRING
    },

    description: {
        type: DataTypes.STRING
    },
})


module.exports = Imagenes