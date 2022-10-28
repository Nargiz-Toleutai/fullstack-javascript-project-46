import stylish from './stylish.js';
import plain from './plain';

const createFormat = (file, formatName) => {
    switch (formatName) {
      case 'stylish': {
        return stylish(file);
      }
      case 'plain': {
        return plain(file);
      }
      default:
        throw new Error('Invalid format.');
    }
  };

  export default createFormat;