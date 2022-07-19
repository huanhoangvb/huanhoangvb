
import Class from "../models/class"

const registerNewClass = async (parent: any, args: any) => {
    const newClass = await Class.create({name: args.name})
    await newClass.save() 
    console.log('Class '+args.name +' has been successfully registered');

}

const searchClassWithName = async (parent: any, args: any) => {
    const name = args
    const foundClass = Class.findOne({where: {name}})
    
    console.log('You are looking at class '+name+' with id')
}

const changeNameOfClassWithName = async (parent: any, args: any) => {
    const {currentName, newName} = args
    const foundClass = Class.findOne({where: {currentName}})
    
    console.log('You are accessing student '+foundClass+' with id')

    Class.update(
        {
          name: newName
        },
        { where: { currentName } }
      ).then(() => {})
}

const deleteClassWithName = async (parent: any, args: any) => {
    const name = args
    const classToBeDeleted = await Class.destroy({ where: { name: name}})
    if (!classToBeDeleted){
        console.log('The class you search doesnt exist, please try again!')
    }
    else{
        console.log('You have successfully deleted class name '+name+' with id ')
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