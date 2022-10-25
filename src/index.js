import parse from '../src/parsers.js';
import fs from "fs";
import path from "path";
import calculateDiff from "../src/calculateDiff.js";
import YAML from 'yamljs';

const getParesedData = (file) => {
    const data = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', file), 'utf-8');
    const dataType = path.extname(file).substring(1);
    return parse(data, dataType);
};

const prettyPrint = (result) => {
    const content = Object.entries(result)
        .map(([key, value]) =>`  ${key}: ${value}`)
        .join('\n');
    return `{\n${content}\n}`;
};

const createFormat = (file, formatName) => {
    console.log(typeof file)
    switch (formatName) {
      case 'json': {
        return prettyPrint(file);
      }
      case 'yml': {
        return YAML.stringify(file);
      }
      default:
        throw new Error('Invalid format.');
    }
  };

export default (file1, file2, format) => {
    const diff = calculateDiff(getParesedData(file1), getParesedData(file2));
    return createFormat(diff, format);
};




