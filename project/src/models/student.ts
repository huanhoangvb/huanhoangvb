import { Table, Column, Model, DataType, PrimaryKey, AllowNull, NotEmpty } from 'sequelize-typescript'


interface studentInterface {
  id?: number | null
  name: string
}

@Table({
  tableName: "Student",
  timestamps: true
})


export default class student extends Model<student> implements studentInterface{

  @PrimaryKey
  @Column({type: DataType.UUID})
  id?: number | null

  @AllowNull(false)
  @NotEmpty
  @Column({type: DataType.STRING})
  name!:  string
}
