const express = require('express');
const server = express();
const port = 3003;

server.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

server.listen(port, () => { console.log('server started!')});

const { sequelize } = require('./models/index');

sequelize
    .sync()
    .then(() => console.log('connected database'))
    .catch(err => console.error('occurred error in database connecting', err));

const hostRoutes = require('./routes/host')


server.use('/host', hostRoutes);