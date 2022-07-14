import { Table, Column, Model, DataType, PrimaryKey, AllowNull, NotEmpty } from 'sequelize-typescript'


export interface studentInterface {
  id?: number | null
  name: string
}

@Table({
  tableName: "Student",
  timestamps: true
})


export default class student extends Model implements studentInterface{

  @PrimaryKey
  @Column({type: DataType.UUID})
  id?: number

  @AllowNull(false)
  @NotEmpty
  @Column({type: DataType.STRING})
  name!:  string
}
