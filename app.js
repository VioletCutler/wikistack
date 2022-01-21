const express = require("express");
const app = express();
const morgan = require("morgan");
const main = require("./views/main.js");
const db = require('./models');
const { Sequelize, DataTypes } = require("sequelize");
// const Sequelize = require('Sequelize')


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


const PORT = 3000;

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send(main());
});



const myAsyncFunction = async() => {
    await db.sync({force: true})

    app.listen(PORT, () => {
        console.log("Post is listening.");
    });
    
} 


myAsyncFunction()


