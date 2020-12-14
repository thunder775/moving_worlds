const express = require('express');
const router = express.Router();
const {register, getStats, getUrl} = require('../utils/users');


router.post('/', (req, res) => {
    console.log("sds")
    const {url, shortCode} = req.query;
    console.log(req.query)
    if (url) {
        if (shortCode)
            if (shortCode.length < 4)
                return res.status(400).send("'shortCode' must me 4 chars long");
        return res.send(register(url, shortCode));
    }
    if (!url)
        return res.status(400).send("'url' is required");
});

router.get('/', (req, res) => {
    const {shortCode} = req.query;
    if (shortCode)
        return res.send(getUrl(shortCode));
    if (!shortCode)
        return res.status(400).send("'shortCode' is required");
});


router.get('/:shortCode/stats', (req, res) => {
    if (!req.params.shortCode)
        return res.status(400).send("'shortCode' is required");
    const stats = getStats(req.params.shortCode);
    if (!stats)
        return res.send("no record found");
    return res.send(stats);
});

module.exports = router;
