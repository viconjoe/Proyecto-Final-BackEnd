const router = require('express').Router()

const {getAllSecuencias, getOneSecuencia, deleteSecuencia, createSecuencia, updateDataSecuencia} = require('../controllers/secuencias.controllers')

router.get('/', getAllSecuencias)

router.get('/:id', getOneSecuencia)

router.delete('/:id', deleteSecuencia)

router.post('/', createSecuencia)

router.put('/:id', updateDataSecuencia)

module.exports = router