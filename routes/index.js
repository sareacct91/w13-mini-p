const router = require('express').Router();


const loginValidate = require('../middlewares/auth');
const { createTraveller } = require('../controllers/travellersCtrl');
const apiRoute = require('./api');


router.post('/api/travellers', createTraveller);

router.use(loginValidate);

router.use('/api', apiRoute);

module.exports = router;