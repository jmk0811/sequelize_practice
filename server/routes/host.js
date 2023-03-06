const { Router } = require('express');
const router = Router();
const { host } = require('../models/index');

router.get('/', async (req, res) => {
    const hosts = await host.findAll();
    const result = [];

    for (const host of hosts) {
        result.push({
            id: host._id,
            host: host.host,
            updatedAt: host.updatedAt
        })
    }

    res.send(result);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const host = await host.findOne({ where: { _id: id } });

    if (host) {
        res.send({ id: host._id, host: host.host });
    } else {
        res.status(500).send('Error: cannot find data');
    }
})

router.post('/:id', async (req, res) => {
    const { id } = req.params;
    const { hostIP } = req.body;
    const foundHost = await host.findOne({ where: { _id: id } });

    if (foundHost) {
        foundHost.host = hostIP;
        const result = await foundHost.save();
        console.log(result);
        console.log(hostIP);
        res.sendStatus(204);
    }
    else {
        res.status(500).send('Error: cannot find data');
    }
})

module.exports = router;