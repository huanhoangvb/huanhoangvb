// 1
import { PrismaClient } from '@prisma/client'
import { argsToArgsConfig } from 'graphql/type/definition';
import { UUIDV4 } from 'sequelize/types';
import { now } from 'sequelize/types/utils';
import student from './models/student';

// 2
const prisma = new PrismaClient()

// 3
async function main() {
    const newStudent = await prisma.student.create({
      data: {
        id: '2',
        name: 'Toan',
      }
      })
    const allStudent = await prisma.student.findMany();
    console.log(allStudent);
}

// 4
main()
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })