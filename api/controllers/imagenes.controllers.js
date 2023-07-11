const Imagenes = require('../models/imagenes.models.js')

async function getAllImagenes(req, res){
    try {
        const imagenes = await Imagenes.findAll()
        if(imagenes){
            return res.status(200).json(imagenes)
        } else {
            res.status(404).send('Images not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneImagen(req, res){
    try {
        const imagen = await Imagenes.findByPk(req.params.id)
        if (imagen) {
            return res.status(200).json(imagen)
        }else{
            res.status(404).send('Image not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteImagen (req, res){
    try {
        const imagen = await Imagenes.destroy({
            where:{
                id: req.params.id
            }
         })
        if (imagen) {
            return res.status(200). json(imagen)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createImagen(req, res){
    try {
        console.log(req.body.user)
        const imagen = await Imagenes.create(req.body)

        if (imagen) {
            return res.status(200). json(imagen)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDataImagen(req, res){
    try {
        const imagen = await Imagenes.update(req.body, {
            where:{
                id: req.params.id
            }
       })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {getAllImagenes, getOneImagen, deleteImagen, createImagen, updateDataImagen}