import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import calculateDiff from '../src/calculateDiff';
import parse from '../src/parsers.js';

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

const formats = ['json', 'yml'];

test.each(formats)('%s', (format) => {
  const filePath1 = getFixturePath(`file1.${format}`);
  const filePath2 = getFixturePath(`file2.${format}`);
  
  const file1 = parse(fs.readFileSync(filePath1).toString(), format);
  const file2 = parse(fs.readFileSync(filePath2).toString(), format);

  const actual = calculateDiff(file1, file2);
  console.log({actual})
  expect(actual).toEqual(expected.trim());
});
