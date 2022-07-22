import Enrolment from "../models/enrolment"
import Student from "../models/student"
import {comparePassword,createToken} from "../models/student"

const registerNewStudent = async (parent: any, args: any) => {
    const name = args
    const newStudent = await Student.create({name: name})
    await newStudent.save() 
    console.log('Student '+newStudent.name +' has been successfully registered with id '+ newStudent.id);
    
    const accessToken = createToken(newStudent)   
    return {
        id: newStudent.id,
        name: newStudent.name,
        accessToken,
    }
}

const signinStudentWithName = async (parent: any, args: any) => {
    const {name , password} = args
    const foundStudent = await Student.findOne({where: {name: name, password: password}})
    
    if(foundStudent == null){
        return console.log("Username is incorrect, please try again")
    }
    const passwordAuth = await comparePassword(password, foundStudent)
    if (!passwordAuth)
        return console.log("Wrong password, please try again")

    const accessToken = createToken(foundStudent)
    return {
        id :foundStudent.id,
        name: foundStudent.name,
        accessToken,
    }
}

const findStudentWithName = async (parent: any, args: any) => {
    const {name} = args
    const foundStudent = await Student.findOne({ where: { name: name } })
    
    if(!foundStudent){
        return console.log("That student doenst exists")
    }
    
    return console.log("The student you search is "+foundStudent.name+" with id "+ foundStudent.id)

}

const enrollStudentIntoClass = async (parent: any, args: any) => {
    const {studentId, classId} = args

    if(!classId)
        return console.log("Please provide class id!")
    
    if(!studentId)
        return console.log("Please provide student id!")

    const enrolment = await Enrolment.create({
        student_id: studentId,
        class_id: classId
    })

    enrolment.save()
        return console.log("Student with id "+ studentId+ " has successfully enrolled in class "+ classId)
}

const changePasswordOfStudentWithName = async (parent: any, args: any) => {
    const {name, currentPassword, newPassword} = args
    const foundStudent = await Student.findOne({where: {name: name}})

    if (foundStudent == null)
        return console.log("The name of the student "+ name+ " doesnt exist, please try again")
    const passwordAuth = await comparePassword(currentPassword, foundStudent)
    if(!passwordAuth)
        return console.log("The password is wrong, please try again")

    console.log('You are now changing student '+foundStudent.name+' with id '+ foundStudent.id +' password!')

    foundStudent.update({password: newPassword})

    return {
        id: foundStudent.id,
        name: foundStudent.name,
    }
}

const deleteStudentWithName = async (parent: any, args: any) => {
    const name = args
    const studentToBeDeleted = await Student.destroy({ where: { name: name}})
    if (!studentToBeDeleted)
        return console.log('The student you search doesnt exist, please try again!')
    console.log('You have successfully deleted student '+name+' with id ')
    return studentToBeDeleted
}

const getAllStudentName =  async (parent:any, args:any) => {
    try { 
        const studentFound = await Student.findAll()
        return studentFound
    } catch (err:any) {
        console.log(err);
    } 
}

export{
    registerNewStudent,
    signinStudentWithName,
    changePasswordOfStudentWithName,
    deleteStudentWithName,
    findStudentWithName,
    enrollStudentIntoClass,
    getAllStudentName
}
