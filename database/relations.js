const Users = require('../api/models/users.models')
const Imagenes = require('../api/models/imagenes.models')
const Secuencias = require('../api/models/secuencias.models')
const Videos = require('../api/models/videos.models')

function addRelationsModels() {
    try {
      // Esta es la relación entre usuario y sus secuencias
      Users.hasMany(Secuencias)
      Secuencias.belongsTo(Users)

      Imagenes.belongsToMany(Secuencias, {through: 'sec_img'})
      Secuencias.belongsToMany(Imagenes, {through: 'sec_img'})

      console.log ('Relations has been added to all models')  
    } catch (error) {
       throw error 
    }
}

module.exports = addRelationsModels