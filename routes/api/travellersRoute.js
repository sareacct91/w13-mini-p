const router = require('express').Router();

const c = require('../../controllers/travellersCtrl');

router.route('/')
  .get(c.getTravellers)
  .post(c.createTraveller)

router.route('/:id')
  .get(c.getTraveller)
  .delete(c.deleteTravellers)

module.exports = router;