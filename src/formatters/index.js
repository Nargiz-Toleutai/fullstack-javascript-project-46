import stylish from './stylish.js';
import plain from './plain.js';

export default (innerTree, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return stylish(innerTree);
    case 'plain':
      return plain(innerTree);
    case 'json':
      return stylish(innerTree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
