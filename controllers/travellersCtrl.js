const { Traveller } = require('../models');
const { BadRequestError, NotFoundError } = require('../errors');

async function getTravellers(req, res) {
  const result = await Traveller.findAll();
  res.status(200).json(result);
}

async function createTraveller(req, res) {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    throw new BadRequestError('Missing request data');
  }

  const result = await Traveller.create({ name, email, password });

  res.status(201).json({
    msg: 'Success',
    data: result
  })
}

async function getTraveller(req, res) {
  const { id: traveller_id } = req.params;

  const result = await Traveller.findByPk(traveller_id, {
    include: 'planned_trips'
  });

  if (!result) {
    throw new NotFoundError('No Traveller with that id found.');
  }

  res.status(200).json({
    msg: 'Success',
    data: result
  });
}

async function deleteTravellers(req, res) {
  const { id: traveller_id } = req.params;

  const result = await Traveller.destroy({
    where: {
      id: traveller_id
    }
  })

  if (!result) {
    throw new NotFoundError('No Traveller with that id found.');
  }

  res.status(200).json({
    msg: 'Success',
    data: result
  });
}

module.exports = {
  getTravellers,
  createTraveller,
  getTraveller,
  deleteTravellers,
}