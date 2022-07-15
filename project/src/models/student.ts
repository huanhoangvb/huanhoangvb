import  { Sequelize, Model, DataTypes, UUIDV4 } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
export const Student = sequelize.define('Student', {
  id:
  {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  } ,
  name: {
    type: DataTypes.STRING
  }
});

export default Student;