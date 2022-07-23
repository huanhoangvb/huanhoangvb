import { GraphQLYogaError } from "@graphql-yoga/node"
import Enrolment from "../models/enrolment"
import Student from "../models/student"
import {comparePassword,createToken} from "../models/student"

const registerNewStudent = async (parent: any, args: any) => {
    const {name, password} = args
    const newStudent = await Student.create({name: name, password: password})
    await newStudent.save() 
    console.log('Student '+newStudent.name +' has been successfully registered with id '+ newStudent.id);
    
    const accessToken = await createToken(newStudent)   
    return {        
        newStudent,
        accessToken: accessToken,
    }
}

const signinStudentWithName = async (parent: any, args: any) => {
    const {name , password} = args
    const foundStudent = await Student.findOne({where: {name: name, password: password}})
    
    if(!foundStudent){
        return console.log("Username is incorrect, please try again")
    }
    const passwordAuth = await comparePassword(password, foundStudent)
    if (!passwordAuth)
        return console.log("Wrong password, please try again")

    const accessToken = await createToken(foundStudent)
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
    
    console.log("The student you search is "+foundStudent.name+" with id "+ foundStudent.id)
    return {
        name: foundStudent.name,
        id: foundStudent.id,
    }
}

const enrollStudentIntoClass = async (parent: any, args: any) => {
    try{
        const studentId = args.student 
        const classId = args.class 
    
        console.log("student id "+studentId+" class id "+classId)
        if(!classId)
            return console.log("Please provide class id!")
        console.log("Between")
        if(!studentId)
            return console.log("Please provide student id!")
        console.log("After")
        await Enrolment.create({
            student_id: studentId,
            class_id: classId
        })
    
        console.log("Student with id "+ studentId+ " has successfully enrolled in class "+ classId)
        return [studentId,classId]
    }
    catch(err:any){
        console.log("The Error is "+err);
        return new GraphQLYogaError(err.message)
    }
    
    
}

const changePasswordOfStudentWithName = async (parent: any, args: any) => {
    const {name, oldPassword, newPassword} = args
    const foundStudent = await Student.findOne({where: {name: name, password: oldPassword}})

    if (!foundStudent)
        return console.log("The name of the student "+ name+ " doesnt exist, please try again")
    const passwordAuth = await comparePassword(oldPassword, foundStudent)
    if(!passwordAuth)
        return console.log("The password is wrong, please try again")

    console.log('You are now changing student '+foundStudent.name+' with id '+ foundStudent.id +' password!')

    await foundStudent.update({password: newPassword})

    return foundStudent
}

const deleteStudentWithName = async (parent: any, args: any) => {
    const name = args.name
    const studentToBeDeleted = await Student.destroy({ where: { name: name}})
    console.log("Student Row +"+studentToBeDeleted)
    if (!studentToBeDeleted)
        return console.log('The student you search doesnt exist, please try again!')
    console.log('You have successfully deleted student '+name)
    return name
}

const getAllStudentName =  async () => {
    try { 
        const studentFound = await Student.findAll({})
        console.log(studentFound)
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
