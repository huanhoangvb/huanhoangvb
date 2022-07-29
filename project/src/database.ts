import { Sequelize } from 'sequelize-typescript'
import Student from './models/student'
import Class from './models/class' 
import Enrolment from "./models/enrolment"
import 'dotenv/config'

const user = process.env.DB_USER
const host = process.env.DB_HOST
const database = process.env.DB_DATABASE
const password = process.env.DB_PASSWORD
const port = process.env.DB_PORT

export const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'postgres',
  port: port,
  storage: ':memory:',
  models: [Student,Class,Enrolment]

});

console.log(process.env.DB_PORT)
export default sequelize;

function newFunction(): any {
  return 'API_URL'
}
