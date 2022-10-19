#!/usr/bin/env node
import { program } from 'commander';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1> <filepath2>')

program.parse();
//const options = program.opts();
//process.argv
