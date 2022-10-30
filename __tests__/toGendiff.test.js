import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import getDiff from '../src/index.js';
import plain from '../src/formatters/plain.js';
import stylish from '../src/formatters/stylish.js';
import format from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

const files = [
  ['filepath1.json', 'filepath2.json', 'stylish'],
  ['filepath1.json', 'filepath2.json', 'json'],
  ['filepath1.json', 'filepath2.json', 'plain'],
  ['filepath1.yml', 'filepath2.yaml'],
];

test.each(files)('%s', (file1, file2, formatName = 'stylish') => {
  const actual = getDiff(getFixturePath(file1), getFixturePath(file2), formatName);
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
  expect(actual).toEqual(expected(formatName));
});

test('testing throw formatters', () => {
  const a = [{ type: '1' }];
  expect(() => format(a, 2)).toThrow('Unknown format: 2');
});
test('testing stylish for throw wrong type', () => {
  const a = [{ type: 'removed' }];
  expect(() => stylish(a)).toThrow(new Error('This type does not exist: removed'));
});
test('testing plain for throw wrong type', () => {
  const a = [{ type: 'update' }];
  expect(() => plain(a)).toThrow(new Error('This type does not exist: update'));
});
