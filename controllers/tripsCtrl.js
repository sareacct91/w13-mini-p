const { BadRequestError, NotFoundError } = require("../errors");
const { Trip } = require("../models");

async function createTrip(req, res) {
  const { trip_budget, traveller_amount, traveller_id, location_id } = req.body;

  if (!(trip_budget, traveller_amount, traveller_id, location_id)) {
    throw new BadRequestError('Missing request data');
  }

  const result = await Trip.create({ traveller_amount, traveller_id, location_id, trip_budget });
  res.status(200).json({
    msg: 'Sucess',
    data: result
  });
}

async function deleteTrip(req, res) {
  const { id: trip_id } = req.params;

  const result = await Trip.destroy({
    where: {
      id: trip_id,
    }
  });

  if (!result) {
    throw new NotFoundError(`No trip found with the id [${trip_id}]`);
  }

  res.status(200).json({
    msg: 'Sucess',
    data: result
  });
}

module.exports = {
  createTrip,
  deleteTrip
}
