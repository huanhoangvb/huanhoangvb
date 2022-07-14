import { Sequelize } from 'sequelize-typescript'

const user = 'postgres'
const host = 'localhost'
const database = 'maindb'
const password = '1242001Huan'
const port = '5432'

const sequelize = new Sequelize({
    database: database,
    dialect: 'postgres',
    username: user,
    password: password,
    storage: ':memory:',
    models: ['student','class'] 
  })