const router = require('express').Router();

const seedRoutes = require('./seed-routes');

router.use('/seeds', seedRoutes);

module.exports = router;