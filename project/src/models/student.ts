import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({timestamps: true})
class student extends Model {
  @Column(DataType.UUID)
  id!: String

  @Column
  name!: String
}

module.exports(student);