import { Table, Column, Model, DataType, PrimaryKey, AllowNull, NotEmpty } from 'sequelize-typescript'


interface studentInterface {
  id?: null | number
  name: string
}

@Table({
  tableName: "Student",
  timestamps: true
})


export default class student extends Model<student> implements studentInterface{

  @PrimaryKey
  @Column({type: DataType.UUID})
  id?: null | undefined | number

  @AllowNull(false)
  @NotEmpty
  @Column({type: DataType.STRING})
  name!:  string
}
