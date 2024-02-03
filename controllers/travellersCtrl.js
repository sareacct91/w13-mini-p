const { Location, Traveller, Trip } = require('../models');

async function getTravellers(req, res) {
  const result = await Traveller.findAll();
  res.status(200).json(result);
}

async function createTraveller(req, res) {
  const { name, email } = req.body;

  console.log(name, email)

  if (!(name && email)) {
    throw new Error('bad request');
  }

  const result = await Traveller.create({ name, email });

  res.status(201).json({
    msg: 'Success',
    data: result
  })
}

async function getTraveller(req, res) {
  const { id: traveller_id } = req.params;

  const result = await Traveller.findOne({
    where: {
      id: traveller_id
    },
    include: ['planned_trips'],
  });

  res.status(200).json({
    msg: 'Success',
    data: result
  });
}

async function deleteTravellers(req, res) {
  res.send('deleteTravellers')
}

module.exports = {
  getTravellers,
  createTraveller,
  getTraveller,
  deleteTravellers,
}