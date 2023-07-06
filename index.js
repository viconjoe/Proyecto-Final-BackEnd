require('dotenv').config()
const { checkConnection, syncModel }  =require('./database/index')
const { addRelationsToModels } = require('./database/relations')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


async function checkAndSync() {
    await checkConnection()
    await addRelationsToModels()
    await syncModel()
}

const port = 3000

function initializeAndListenWithExpress() {
    const app = express()
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .listen(port, () => {
            console.log(`> Listening on port: ${port}`)
        })
}

async function startApi() {
    await checkAndSync()
    initializeAndListenWithExpress()
}

startApi()
