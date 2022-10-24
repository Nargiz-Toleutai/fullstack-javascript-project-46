#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';
import process from "process";
import fs from "fs";
import path from "path";

const currentWorkingDir = process.cwd();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((path1, path2) => {
    const filepath1 = path.resolve(currentWorkingDir, path1);
    const filepath2 = path.resolve(currentWorkingDir, path2);

    const file1 = fs.readFileSync(filepath1);
    const file2 = fs.readFileSync(filepath2);

    const myObj1 = JSON.parse(file1);
    const myObj2 = JSON.parse(file2);

    const result = genDiff(myObj1, myObj2);
    console.log(result);
  })

program.parse();


