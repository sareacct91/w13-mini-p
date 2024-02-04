const bcrypt = require('bcrypt');
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model { };

Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    }
  },
  {
    hooks: {
      async beforeBulkCreate(travellers) {
        for (const t of travellers) {
          t.dataValues.password = await bcrypt.hash(t.dataValues.password, 10);
        }

        return travellers
      },
      async beforeCreate(traveller) {
        traveller.password = await bcrypt.hash(traveller.password, 10);
        return traveller;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'traveller'
  }
);



module.exports = Traveller;