import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { BeforeSave } from 'sequelize-typescript';
import sequelize from '../database';


class Student extends Model<InferAttributes<Student>, InferCreationAttributes<Student>> {
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<string>;
  declare name: string;
  
  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

Student.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }, 
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'Student',
    sequelize, // passing the `sequelize` instance is required
    freezeTableName: true,
  }
);

(async () => {
  await Student.sync({force: true}).then(() => {
    console.log("Successfully create new table");
    return Student.create({
      name: 'Hancock'
    });
  });
  
});

export default Student;