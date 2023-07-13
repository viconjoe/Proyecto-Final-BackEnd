const router = require('express').Router()

const {getAllSecuencias, getOneSecuencia, deleteSecuencia, createSecuencia, updateDataSecuencia, getAllPictoBySecuencia, updatePictosInSecuencia, getPictoBySecuencia} = require('../controllers/secuencias.controllers')

router.get('/', getAllSecuencias)

router.get('/:id', getOneSecuencia)

router.get('/:id/pictos', getAllPictoBySecuencia)

router.delete('/:id', deleteSecuencia)

router.post('/', createSecuencia)

router.put('/:id', updateDataSecuencia)

router.put('/:id/update', updatePictosInSecuencia)

module.exports = router