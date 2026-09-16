const dayjs = require('dayjs');
const chalk = require('chalk');

console.log(chalk.green('chalk funciona correctamente'));
console.log(chalk.blue('Fecha de hoy con dayjs:'), dayjs().format('DD/MM/YYYY'));
