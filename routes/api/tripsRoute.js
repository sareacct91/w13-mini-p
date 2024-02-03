const { createTrip, deleteTrip } = require('../../controllers/tripsCtrl');
const router = require('express').Router();

router.route('/')
  .post(createTrip)

router.route('/:id')
  .delete(deleteTrip)

module.exports = router;