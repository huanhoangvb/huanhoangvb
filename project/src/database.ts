import { Sequelize } from 'sequelize-typescript'
import Student from './models/student'
import Class from './models/class' 
import Enrolment from "./models/enrolment"

const user = 'postgres'
const host = 'postgres'
const database = 'maindb'
const password = '1242001Huan'
const port = 5432


export const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'postgres',
  port: port,
  storage: ':memory:',
  models: [Student,Class,Enrolment]

});

export default sequelize;
