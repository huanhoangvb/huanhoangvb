// 1
import { PrismaClient } from '@prisma/client'
import student from './models/student';

// 2
const prisma = new PrismaClient()

// 3
async function main() {
    const newStudent = await prisma.student.create({
        data:{
            id: 12,
            name: 'TesterM'
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