const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('Picto_Plan_Kids', 'viconjoe', 'reboot', {
  host: 'localhost',
  dialect: 'mysql'
})

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection complete!!')
    } catch (error) {
        throw error
    }
}

async function syncModel(value) {
    const state = {
        alter: { alter: true},
        force: {force: true}
    }
    try {
        await sequelize.sync(state[value] || '')
        console.log('All models synchronized')
    } catch (error) {
        throw error
    }
}


module.exports = { sequelize, checkConnection, syncModel }