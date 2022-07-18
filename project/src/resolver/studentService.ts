
import Student from "../models/student"

const registerNewStudent = async (parent: any, args: any) => {
    const newStudent = await Student.create({name: args.name})
    await newStudent.save() 
    console.log('Student '+args.name +' has been successfully registered');

}

const searchStudentWithName = async (parent: any, args: any) => {
    const name = args
    const foundStudent = Student.findOne({where: {name}})
    
    console.log('You are accessing student '+name+' with id')
}

const enrollStudentIntoClass = async (parent: any, args: any) => {

}

const changeNameOfStudentWithName = async (parent: any, args: any) => {
    const {currentName, newName} = args
    const foundStudent = Student.findOne({where: {currentName}})
    
    console.log('You are accessing student '+foundStudent+' with id')

    Student.update(
        {
          name: newName
        },
        { where: { currentName } }
      ).then(() => {})
}

const deleteStudentWithName = async (parent: any, args: any) => {
    const name = args
    const studentToBeDeleted = await Student.destroy({ where: { name: name}})
    if (!studentToBeDeleted){
        console.log('The student you search doesnt exist, please try again!')
    }
    else{
        console.log('You have successfully deleted student '+name+' with id ')
    }
}
export{
    registerNewStudent,
    searchStudentWithName,
    changeNameOfStudentWithName,
    deleteStudentWithName,
    enrollStudentIntoClass,
}
