import { Table, Column, Model, HasMany, Sequelize, AllowNull, PrimaryKey, NotEmpty, ForeignKey } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript';
import Class from './class';
import Student from './student';

@Table({tableName: 'Enrolment', freezeTableName: true})
export class Enrolment extends Model{
  @AllowNull(false)
  @ForeignKey(() => Class)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
  })
  class_id: string

  @AllowNull(false)
  @ForeignKey(() => Student)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
  })
  student_id:  string
}

export default Enrolment;