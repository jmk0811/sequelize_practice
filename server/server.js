const express = require('express');
const server = express();
const port = 3001;

server.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

server.listen(port, () => { console.log('server started!')});

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

server.get('/api/test', (req, res) => {
    const data = {host: 123}
    res.send(data)
});