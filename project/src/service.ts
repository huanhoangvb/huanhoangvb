import Student from "./models/student"

const registerNewStudent = async (parent: any, args: any) => {
    // // create new User
    // const newStudent = new Student({
    //     name: args.name,
    // });
    // const newst = Student.build({name: 'Hoang'})
    const newsst = await Student.create({name: 'Huan'})
    // .save
}

const updateStudentWithName = async (parent: any, args: any) => {}