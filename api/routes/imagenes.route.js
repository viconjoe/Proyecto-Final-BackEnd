const router = require('express').Router()

const {getAllImagenes, getOneImagen, deleteImagen, createImagen, updateDataImagen} = require('../controllers/imagenes.controllers.js')

router.get('/', getAllImagenes)

router.get('/:id', getOneImagen)

router.delete('/:id', deleteImagen)

router.post('/', createImagen)

router.put('/:id', updateDataImagen)

module.exports = router