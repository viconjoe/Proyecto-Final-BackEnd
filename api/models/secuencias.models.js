const {sequelize} = require('../../database/index')
const {DataTypes} = require('sequelize')

const Secuencias = sequelize.define('secuencia', {
    nombre_sec: {
        type: DataTypes.STRING
    },
    id_user: {
        type: DataTypes.INTEGER
    }
})


module.exports = Secuencias