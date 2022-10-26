import parse from '../src/parsers.js';
import fs from "fs";
import path from "path";
import calculateDiff from "../src/calculateDiff.js";
import stylish from '../formatter/stylish.js';

const getParesedData = (file) => {
    const data = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', file), 'utf-8');
    const dataType = path.extname(file).substring(1);
    return parse(data, dataType);
};

const createFormat = (file, formatName) => {
    switch (formatName) {
      case 'stylish': {
        return stylish(file);
      }
    //   case '': {
    //     return prettyPrint(file);
    //   }
      default:
        throw new Error('Invalid format.');
    }
  };

const getDiff = (file1, file2, format = 'stylish') => {
    const diff = calculateDiff(getParesedData(file1), getParesedData(file2));
    return createFormat(diff, format);
};

export default getDiff;




