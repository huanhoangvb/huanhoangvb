import { Table, Column, Model, DataType, PrimaryKey, AllowNull, NotEmpty } from 'sequelize-typescript'

interface classInterface {
  id?: number | null
  name: string
}

@Table({
  tableName: "Class",
  timestamps: true
})


export default class Class extends Model<Class> implements classInterface{
  @PrimaryKey
  @Column({type: DataType.UUID})
  id?: number | null

  @AllowNull(false)
  @NotEmpty
  @Column({type: DataType.STRING})
  name!: string
}
