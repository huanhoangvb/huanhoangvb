import { Sequelize } from 'sequelize-typescript'
import Student from './models/student'
import Class from './models/class'

const user = 'postgres'
const host = 'localhost'
const database = 'maindb'
const password = '1242001Huan'
const port = 5432

export const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'postgres',
  port: port,
  models: [Student,Class]
});

console.log(__dirname)

export default sequelize;