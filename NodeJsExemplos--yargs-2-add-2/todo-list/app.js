const chalk = require('chalk')
const yargs = require('yargs')
//chamada
//node app.js add --name="teste" --description="teste2"
// alterando a versão do CLI
yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder: {
        name: {
            describe: 'Task name',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Task description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        const info = chalk.green.bold.inverse('Creating a new task: ' );
        console.log(info)
        console.log(`Name: ${argv.name}`)
        console.log(`Description: ${argv.description}`)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from the ToDo list',
    handler: function () {
        console.log(chalk.red('Removing a existing task'))
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: function () {
        console.log(chalk.blue('Listing out all tasks'))
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a task from the ToDo list',
    handler: function () {
        console.log(chalk.yellow('Reading a task'))
    }
})

yargs.parse()