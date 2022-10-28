import stylish from './stylish.js';
import plain from './plain.js';

const createFormat = (file, formatName) => {
    switch (formatName) {
      case 'stylish': {
        return stylish(file);
      }
      case 'plain': {
        return plain(file);
      }
      case 'json': {
        return stylish(file);
      }
      default:
        throw new Error('Invalid format.');
    }
  };

  export default createFormat;