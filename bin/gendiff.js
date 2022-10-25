#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'yml')
  .arguments('<filepath1> <filepath2>')
  .action((path1, path2, options) =>  console.log(genDiff(path1, path2, options.format)));

program.parse();


