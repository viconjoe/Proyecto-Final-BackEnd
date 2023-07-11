const Videos = require('../models/videos.models')

async function getAllVideos(req, res){
    try {
        const video = await Videos.findAll()
        if(video){
            return res.status(200).json(video)
        } else {
            res.status(404).send('Videos not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneVideo(req, res){
    try {
        const video = await Videos.findByPk(req.params.id)
        if (video) {
            return res.status(200).json(video)
        }else{
            res.status(404).send('Video not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteVideo (req, res){
    try {
        const video = await Videos.destroy({
            where:{
                id: req.params.id
            }
         })
        if (video) { 
            return res.status(200). json(video)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createVideo(req, res){
    try {
        console.log(req.body.video)
        const video = await Videos.create(req.body)

        if (video) {
            return res.status(200). json(video)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDataVideo(req, res){
    try {
        const video = await Videos.update(req.body, {
            where:{
                id: req.params.id
            }
       })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {getAllVideos, getOneVideo, deleteVideo, createVideo, updateDataVideo}