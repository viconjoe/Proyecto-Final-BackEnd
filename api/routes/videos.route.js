const router = require('express').Router()

const {getAllSecuencias, getOneSecuencia, deleteSecuencia, createSecuencia, updateDataSecuencia, getAllVideos, getOneVideo, deleteVideo, createVideo, updateDataVideo} = require('../controllers/videos.controllers')

router.get('/', getAllVideos)

router.get('/:id', getOneVideo)

router.delete('/:id', deleteVideo)

router.post('/', createVideo)

router.put('/:id', updateDataVideo)

module.exports = router