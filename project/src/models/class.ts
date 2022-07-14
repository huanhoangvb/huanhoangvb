import { Table, Column, Model, DataType, PrimaryKey, AllowNull, NotEmpty } from 'sequelize-typescript'

export interface classInterface {
  id?: number | null
  name: string
}

@Table({
  tableName: "Class",
  timestamps: true
})


export default class Class extends Model implements classInterface{
  @PrimaryKey
  @Column({type: DataType.UUID})
  id?: number

  @AllowNull(false)
  @NotEmpty
  @Column({type: DataType.STRING})
  name!: string
}
