const fs = require('fs')
const chalk = require('chalk')

const addTask = function(name, description){
    const tasks = loadAllTasks()
    
    const duplicatedTask = tasks.find(function(task){
        return task.name === name
    })

    if(!duplicatedTask){
        const newTask = {
            name, 
            description,
            status : 'BACKLOG'
        }        
        tasks.push(newTask)    
        saveTask(tasks)
        console.log(chalk.green.bold('Task created!'))
    }else{
        console.log(chalk.red.bold(`Task with name [${name}] already taken!`))
    }   

}

const saveTask = function(task){
    const tasksJSON = JSON.stringify(task)
    fs.writeFileSync('tasks.json', tasksJSON)
}

const loadAllTasks = function(){
    try {
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer.toString())        
    } catch (error) {
        return []
    }
}

module.exports = {
    addTask
}