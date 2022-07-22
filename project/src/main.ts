import { createServer } from '@graphql-yoga/node'
import { sequelize } from './database'
import { schema } from './schema'

async function main() {
  const server = createServer({ schema })
  await server.start()

  sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
  
}

main()