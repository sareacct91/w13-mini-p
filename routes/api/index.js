const router = require('express').Router();

const travellersRoute = require('./travellersRoute');
const tripsRoute = require('./tripsRoute');
const locationsRoute = require('./locationsRoute');


router.use('/travellers', travellersRoute);
router.use('/locations', locationsRoute);
router.use('/trips', tripsRoute);

module.exports = router;