
import Class from "../models/class"

const registerNewClass = async (parent: any, args: any) => {
    const className = args
    const newClass = await Class.create({name: className})
    await newClass.save() 
    console.log('Class '+className +' has been successfully registered');

}

const searchClassWithName = async (parent: any, args: any) => {
    const name = args
    const foundClass = await Class.findOne({where: {name: name}})
    if(!foundClass)
        return console.log('Class you looking for doesnt exist, please try again')
    return console.log('You are looking at class '+foundClass.name+' with id')
}

const changeNameOfClassWithName = async (parent: any, args: any) => {
    const {currentName, newName} = args
    const foundClass = await Class.findOne({where: {currentName}})
    if(!foundClass)
        return console.log('Class you looking for doesnt exist, please try again')

    console.log('You are accessing student '+foundClass.name+' with id '+ foundClass.id)

    Class.update(
        {
          name: newName
        },
        { where: { name: currentName } }
      )
}

const deleteClassWithName = async (parent: any, args: any) => {
    const name = args
    const classToBeDeleted = await Class.destroy({ where: { name: name}})
    if (!classToBeDeleted){
        console.log('The class you search doesnt exist, please try again!')
    }
    else{
        console.log('You have successfully deleted class name '+name)
    }
}

const getAllClassName =  async (parent:any, args:any) => {
    try { 
        const classsFound = await Class.findAll()
        return classsFound
    } catch (err:any) {
        console.log(err);
    } 
}


export{
    registerNewClass,
    searchClassWithName,
    changeNameOfClassWithName,
    deleteClassWithName,
    getAllClassName
}