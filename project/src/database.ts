import { Sequelize } from 'sequelize-typescript'

const user = 'postgres'
const host = 'localhost'
const database = 'maindb'
const password = '1242001Huan'
const port = '5432'

export const sequelize = new Sequelize({
    database: database,
    dialect: 'postgres',
    username: user,
    password: password,
    storage: ':memory:',
    models: [__dirname+'student','class'] 
  })