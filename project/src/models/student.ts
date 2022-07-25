import { Table, Column, Model, HasMany, Sequelize, AllowNull, PrimaryKey, NotEmpty } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript';
import {sign, verify} from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {secret} from '../resolver/authKey';

@Table({tableName: 'Student', freezeTableName: true})
export class Student extends Model{
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id?: string

  @AllowNull(false)
  @NotEmpty
  @Column({type: DataType.TEXT, allowNull: false})
  name!:  string

  @AllowNull(false)
  @NotEmpty
  @Column({type: DataType.TEXT, allowNull: false})
  password!:  string
  
}

const hashPassword = async (student: Student) =>{
  console.log('object');
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(student.password, salt)   
}

const createToken = async (student: Student) => {
  return sign({
    studentId: student.id,
    name: student.name,
  },
  secret,
  {
    expiresIn: 360,
  })
};

const comparePassword = async (password: string, student: Student) =>{
  const comparePassword = await bcrypt.compare(password, await hashPassword(student))
  return comparePassword
}

export default Student;
export {comparePassword , createToken};