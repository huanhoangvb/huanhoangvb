const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export const Class = sequelize.define('Class', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// `sequelize.define` also returns the model
console.log(Class === sequelize.models.Class); // true