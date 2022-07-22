// 1
import { PrismaClient } from '@prisma/client'
import sequelize from './database';
// 2
const prisma = new PrismaClient()

// 3
async function main() {
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
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })
