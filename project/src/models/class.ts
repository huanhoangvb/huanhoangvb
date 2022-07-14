import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({timestamps: true})
class Class extends Model {
  @Column(DataType.UUID)
  id!: String

  @Column
  name!: String
}