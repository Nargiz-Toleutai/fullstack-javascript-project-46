import _ from 'lodash';

const stylish = (value, replacer = ' ', spacesCount = 2) => {
    const iter = (currentValue, depth) => {
  
      if (!_.isObject(currentValue)) {
        return `${currentValue}`;
      }
  
      const indentSize = depth * spacesCount; // 2
      let currentIndent = replacer.repeat(indentSize); //'  '
      const bracketIndent = replacer.repeat(indentSize - spacesCount);
      const lines = Object
        .entries(currentValue)
        .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 2)}`);
     
      const result = [
        '{',
        ...lines,
        `${bracketIndent}}`,
      ].join('\n');
      console.log(result)
      return result;
    };
  
    return iter(value, 1);
  };

  export default stylish;