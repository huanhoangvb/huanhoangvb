import { makeExecutableSchema } from '@graphql-tools/schema'
import { registerNewStudent, getAllStudentName,signinStudentWithName, changePasswordOfStudentWithName, deleteStudentWithName, enrollStudentIntoClass, findStudentWithName} from './resolver/studentService'
import { registerNewClass, getAllClassName, searchClassWithName, changeNameOfClassWithName, deleteClassWithName } from './resolver/classService'

const typeDefinitions = /* GraphQL */ `
type Query {

}

type Mutation {
  registerNewStudent(name:String): Student
  signinStudentWithName(name:String): Student
  changePasswordOfStudentWithName(name:String, oldPassword:String, newPassword:String): Student
  deleteStudentWithName(name:String): Student
  enrollStudentIntoClass(name:String, class:String): Student

  registerNewClass(name:String): Class
  searchClassWithName(name:String): Class
  changeNameOfClassWithName(name:String, newName:String): Class
  deleteClassWithName(name:String): Class
}

type Class{
  id: String
  name: String
}

type Student{
  id: String
  name: String
  password: String
}
`

const resolvers = {
  Query: {
    class: () => getAllClassName,
    students: () => getAllStudentName,
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
    enrollClass: enrollStudentIntoClass,
    findStudent: findStudentWithName,
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
