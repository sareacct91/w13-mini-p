const Location = require("./location");
const Traveller = require("./traveller");
const Trip = require("./trip");


Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  as: 'planned_trips',
});

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
  as: 'location_travellers',
});

module.exports = { Traveller, Location, Trip };