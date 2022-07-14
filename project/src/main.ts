import { createServer } from '@graphql-yoga/node'
import { sequelize } from './database'
import { schema } from './schema'

async function main() {
  const server = createServer({ schema })
  await server.start()

  try{
    await sequelize.sync({force: true}) 
  }catch(error)
  {console.log(Error)}

  sequelize.authenticate().then(()=>{
    console.log("Database Connected")
  }).catch( (e: any) => {
    console.log(e.log)
  })
}

main()