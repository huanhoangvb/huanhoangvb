// 1
import { PrismaClient } from '@prisma/client'
import Student from './models/student';
import sequelize from './database';

// 2
const prisma = new PrismaClient()

// 3
async function main() {
  const newStudent1 = new Student({});
  const newStudent = await Student.create({});
  await newStudent.save() 
  console.log(newStudent.id, newStudent.name);
}
// 4
main()
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })
