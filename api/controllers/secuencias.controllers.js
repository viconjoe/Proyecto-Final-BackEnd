const Imagenes = require('../models/imagenes.models.js')
const Secuencias = require('../models/secuencias.models.js')

async function getAllSecuencias(req, res){
    try {
        const secuencias = await Secuencias.findAll()
        if(secuencias){
            return res.status(200).json(secuencias)
        } else {
            res.status(404).send('Secuences not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneSecuencia(req, res){
    try {
        const secuencia = await Secuencias.findByPk(req.params.id)
        if (secuencia) {
            return res.status(200).json(secuencia)
        }else{
            res.status(404).send('Secuence not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteSecuencia (req, res){
    try {
        const secuencia = await Secuencias.destroy({
            where:{
                id: req.params.id
            }
         })
        if (secuencia) {
            return res.status(200). json(secuencia)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createSecuencia(req, res){
    try {
        console.log(req.body.user)
        const secuencia = await Secuencias.create(req.body)

        if (secuencia) {
            return res.status(200).json(secuencia)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDataSecuencia(req, res){
    try {
        const secuencia = await Secuencias.update(req.body, {
            where:{
                id: req.params.id
            }
       })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getAllPictoBySecuencia(req, res){
    /* console.log(req.params.id)
    res.status(200).send(req.params.id) */
    try {
        const secuencia = await Secuencias.findByPk(req.params.id)
        const pictos = await secuencia.getImagens()
        if (pictos) {
            return res.status(200).json(pictos)
        }else{
            res.status(404).send('Pictos not found')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePictosInSecuencia(req, res){
    try {
        const secuencia = await Secuencias.findByPk(req.params.id)
        const array = []
        const arrayBody = req.body.array
        for(let i = 0; i < arrayBody.length; i++) {
            const imagen = await Imagenes.findByPk(req.body.array[i])
            array.push(imagen)
        }  
        secuencia.setImagens(array)
        res.status(200).json(array)
    } catch (error) {
        
    }
}


async function getPictoBySecuencia(req, res){
    try {
        const secuencia = await Secuencias.findOne({
            where: {
                id: req.params.id
            },
            include: Imagenes
        })
        const length = secuencia.imagens.length
        const array = []
        for(let i = 0; i < length; i++) {
            array.push(secuencia.imagens[i].id)
        } 
        console.log(array)
        if (secuencia) {
            return res.status(200).json(secuencia)
        }else{
            res.status(404).send('Pictos not found')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {getAllSecuencias, getOneSecuencia, deleteSecuencia, createSecuencia, updateDataSecuencia, getAllPictoBySecuencia, updatePictosInSecuencia, getPictoBySecuencia}