const router = require('express').Router();
const { createSeedFile, randomizeData } = require('../../lib/seed');
// get current seed file/data
router.get('/', (req, res) => {
    res.json('hello')
})

// create a new seed file
router.post('/', (req, res) => {
    const seed = randomizeData(req.body);
    res.json(seed);
})

module.exports = router;