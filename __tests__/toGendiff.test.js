import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('genDiff', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const file1 = JSON.parse(fs.readFileSync(filePath1).toString());
  const file2 = JSON.parse(fs.readFileSync(filePath2).toString());
  const actual = genDiff(file1, file2);
  expect(actual).toEqual(expected.trim());
});