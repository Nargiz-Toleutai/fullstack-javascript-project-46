import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

const files = [
  ['filepath1.json', 'filepath2.json', 'json'],
  ['file1.json', 'file2.json'],
  ['file1.yaml', 'file2.yaml'],
  
  ['file1.json', 'file2.json', 'plain'],
  ['file1.yaml', 'file2.yaml', 'plain'],
  //['file1.json', 'file2.json', 'json'],
  ['file1.yml', 'file2.yml'],
];

test.each(files)('%s', (file1, file2, format = 'stylish') => {
  const actual = getDiff(getFixturePath(file1), getFixturePath(file2), format);
  const expected = (formatter) => {
    switch (formatter) {
      case 'stylish':
        return readFile('stylish.txt');
      case 'plain':
        return readFile('plain.txt');
      case 'json':
        return readFile('json.txt');
      default:
        throw new Error(`Unknown type of format: ${formatter}`);
      }
    };
  expect(actual).toEqual(expected(format));
});
