import fs from 'fs';
import { Command } from 'commander';
const program = new Command();

program
  .name('counter')

program.command('count')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split(' ').length;
        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program.parse();