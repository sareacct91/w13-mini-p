const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model { };

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'location'
  },
);

module.exports = Location;