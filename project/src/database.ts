import { Sequelize } from 'sequelize-typescript'

const user = 'postgres'
const host = 'localhost'
const database = 'maindb'
const password = '1242001Huan'
const port = 5432

export const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'postgres',
  port: port,
  models: [__dirname+'./models'+'class','student']
});

console.log(__dirname+'')

export default sequelize;