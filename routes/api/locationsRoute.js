const router = require('express').Router();

const c = require('../../controllers/locationsCtrl');

router.route('/')
  .get(c.getLocations)
  .post(c.createLocation)

router.route('/:id')
  .get(c.getLocation)
  .delete(c.deleteLocations)

module.exports = router;