import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import calculateDiff from './calculateDiff.js';
import createFormat from './formatters/index.js';

const getParesedData = (file) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', file), 'utf-8');
  const dataType = path.extname(file).substring(1);
  return parse(data, dataType);
};

const getDiff = (file1, file2, format = 'stylish') => {
  const diff = calculateDiff(getParesedData(file1), getParesedData(file2));
  return createFormat(diff, format);
};

export default getDiff;


