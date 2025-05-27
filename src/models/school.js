'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class School extends Model {}

  School.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'School',
    tableName: 'Schools', 
    timestamps: true          
  });

  return School;
};
