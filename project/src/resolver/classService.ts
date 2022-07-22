
import Class from "../models/class"

const registerNewClass = async (parent: any, args: any) => {
    const newClass = await Class.create({name: args.name})
    await newClass.save() 
    console.log('Class '+args.name +' has been successfully registered');
    return newClass
}

const searchClassWithName = async (parent: any, args: any) => {
    const name = args.name
    const foundClass = await Class.findOne({where: {name: name}})
    if(!foundClass)
        return console.log('Class you looking for doesnt exist, please try again')
    console.log('You are looking at class '+foundClass.name+' with id '+ foundClass.id)
    return foundClass
}

const changeNameOfClassWithName = async (parent: any, args: any) => {
    const {name, newName} = args
    console.log(name, newName)
    const foundClass = await Class.findOne({where: {name: name}})
    if(!foundClass)
        return console.log('Class you looking for doesnt exist, please try again')

    console.log('You are accessing class '+foundClass.name+' with id '+ foundClass.id)
    
    await Class.update(
        {
          name: newName
        },
        { where: { name: name } }
      )

    return name
}

const deleteClassWithName = async (parent: any, args: any) => {
    const name = args.name
    const classToBeDeleted = await Class.destroy({ where: { name: name}})
    if (!classToBeDeleted){
        console.log('The class you search doesnt exist, please try again!')
    }
    else{
        console.log('You have successfully deleted class name '+name)
    }
    return name
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