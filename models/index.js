const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});


const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
    allowNull: false
    }, 
    slug: {
        type: Sequelize.STRING,
    allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
    allowNull: false
    }, 
    // status: {
    //     type: Sequelize.BOOLEAN
    // }
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING(255)
    },
    email: {
        type: Sequelize.TEXT,
        primaryKey: true
    }
})

module.exports = db