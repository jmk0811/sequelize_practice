const express = require('express');
const server = express();
const port = 3001;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("snmp", "root", "root1234", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Connection successful!");
}).catch((err) => {
    console.log("Error connecting to database.");
    console.log(err);
});

/*
 *
 */

server.get('/', (req, res) => {
    res.send('test')
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});