import { Table, Column, Model, HasMany, Sequelize, AllowNull, PrimaryKey, NotEmpty } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript';
import {sign, verify} from 'jsonwebtoken';
import {secret} from '../resolver/authKey';
import bcrypt from 'bcrypt';

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

const createToken = (student: Student) => {
  return sign({
    studentId: student.id,
    name: student.name,
    password: student.password,
  },
  secret,
  {
    algorithm: 'RS256',
    expiresIn: 360,
  })
};

const comparePassword = (password: string, student: Student) =>{
  const validatePassword = bcrypt.compare(password, student.password)
  return validatePassword
}

export default Student;
export {comparePassword , createToken};