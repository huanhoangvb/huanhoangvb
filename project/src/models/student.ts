const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export const student = sequelize.define('student', {
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
console.log(student === sequelize.models.student); // true