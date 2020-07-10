const chalk = require('chalk')
const yargs = require('yargs')

// alterando a versão do CLI
yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    handler: function (){
        console.log(chalk.green('Creating a new task'))
    }
})


// add -> adicionar uma nova task
// remove -> remover a task
// list -> listar todas as tasks
// read -> ler uma task


// console.log(process.argv)
console.log(yargs.argv)

