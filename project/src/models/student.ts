import { Table, Column, Model, HasMany, Sequelize, AllowNull, PrimaryKey } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript';

@Table
class Student extends Model<Student> {
  @PrimaryKey
  @Column({})
  id?: string

  @Column({})
  name:  string
}

export default Student;