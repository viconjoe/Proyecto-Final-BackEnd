const {sequelize} = require('../../database/index')
const {DataTypes} = require('sequelize')

const pictosecuencia = sequelize.define('pictosecuencia', {
    id_img: {
        type: DataTypes.INTEGER
    },
    id_sec: {
        type: DataTypes.INTEGER
    },
})


module.exports = pictosecuencia