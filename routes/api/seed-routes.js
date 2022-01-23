const router = require('express').Router();
const { createSeedFile, randomizeData, parseData } = require('../../lib/seed');
const path = require('path');
// get current seed file/data
router.get('/', (req, res) => {
    res.json('hello')
})

// create a new seed file
router.post('/', (req, res) => {
    const seed = parseData(req.body);
    res.json(seed);
})

router.get('/download', (req, res) => {
    const file = path.join(__dirname, '../../data/seed.json');
    console.log(file);
    res.download(file);
})

module.exports = router;