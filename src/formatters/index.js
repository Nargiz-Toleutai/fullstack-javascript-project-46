import stylish from './stylish.js';
import plain from './plain.js';

export default (innerTree, format = 'stylish') => {
  //console.log({format: format})
  switch (format) {
    case 'stylish':
      return stylish(innerTree);
    case 'plain':
      return plain(innerTree);
    case 'json':
      //console.log({a: JSON.stringify(innerTree)})
      return JSON.stringify(innerTree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
