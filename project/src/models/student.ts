import { Table, Column, Model, HasMany, Sequelize, AllowNull, PrimaryKey, NotEmpty } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript';

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
}

export default Student;