import { Table, Column, Model, HasMany, Sequelize, AllowNull, PrimaryKey, NotEmpty, ForeignKey } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript';
import Class from './class';
import Student from './student';

@Table({tableName: 'Enrolment', freezeTableName: true})
export class Enrolment extends Model{
  @ForeignKey(() => Class)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  class_id?: string

  @ForeignKey(() => Student)
  @Column({type: DataType.UUID,
    defaultValue: DataType.UUIDV4})
  student_id!:  string
}

export default Enrolment;