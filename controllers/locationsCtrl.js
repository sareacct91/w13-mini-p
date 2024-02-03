const { BadRequestError, NotFoundError } = require('../errors');
const { Location } = require('../models');

async function getLocations(req, res) {
  const result = await Location.findAll();
  res.status(200).json({
    msg: "Sucess",
    data: result
  })
}

async function createLocation(req, res) {
  const { location_name } = req.body;

  if (!location_name) {
    throw new BadRequestError('Missing request data');
  }

  const result = await Location.create({location_name});

  res.status(200).json({
    msg: 'Success',
    data: result
  });
}

async function getLocation(req, res) {
  const { id: location_id } = req.params;

  const result = await Location.findByPk(location_id, {
    include: 'location_travellers',
  });

  if (!result) {
    throw new NotFoundError('No Location found with that id.');
  }

  res.status(200).json({
    msg: 'Sucess',
    data: result
  });
}

async function deleteLocations(req, res) {
  const { id: location_id } = req.params;

  const result = await Location.destroy({
    where: {
      id: location_id,
    },
  });

  if (!result) {
    throw new NotFoundError('No Location found with that id.');
  }

  res.status(200).json({
    msg: 'Sucess',
    data: result
  });
}

module.exports = {
  getLocations,
  createLocation,
  getLocation,
  deleteLocations
 }