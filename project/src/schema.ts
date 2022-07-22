import { makeExecutableSchema } from '@graphql-tools/schema'
import { registerNewStudent, getAllStudentName,signinStudentWithName, changePasswordOfStudentWithName, deleteStudentWithName, enrollStudentIntoClass, findStudentWithName} from './resolver/studentService'
import { registerNewClass, getAllClassName, searchClassWithName, changeNameOfClassWithName, deleteClassWithName } from './resolver/classService'

const typeDefinitions = /* GraphQL */ `
type Class{
  id: String
  name: String
}

type Student{
  id: String
  name: String
  password: String
  accessToken: String
}

type Query {
  classes: [Class]
  students: [Student]
}

type Mutation {
  createNewStudent(name:String!, password:String!): Student
  loginStudent(name:String!, password:String!): Student
  changePassword(name:String!, oldPassword:String!, newPassword:String!): Student
  deleteStudent(name:String!): String
  enrollStudent(student:String!, class:String!): [Int]

  createNewClass(name:String): Class
  searchClass(name:String): Class
  changeClassName(name:String, newName:String): String
  deleteClass(name:String): String

  findStudent(name:String): Student
}
`

const resolvers = {
  Query: {
    classes: getAllClassName,
    students: getAllStudentName,
  },
  Mutation:{
    createNewStudent: registerNewStudent,
    loginStudent: signinStudentWithName,
    changePassword: changePasswordOfStudentWithName,
    deleteStudent: deleteStudentWithName,
    createNewClass: registerNewClass,
    searchClass: searchClassWithName,
    changeClassName: changeNameOfClassWithName,
    deleteClass: deleteClassWithName,
    enrollStudent: enrollStudentIntoClass,
    findStudent: findStudentWithName,
  },
}

export const schema = makeExecutableSchema({
  resolvers: resolvers,
  typeDefs: typeDefinitions,
})
