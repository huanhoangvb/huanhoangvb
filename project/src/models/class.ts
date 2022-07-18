import { Table, Column, Model, HasMany, Sequelize, AllowNull, PrimaryKey, NotEmpty } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript';

@Table({tableName: 'Class', freezeTableName: true})
export class Class extends Model{
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

export default Class;