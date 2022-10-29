import yaml from 'js-yaml';

const parserFormat = {
    json: JSON.parse,
    yml: yaml.load,
    yaml: yaml.load,
};

export default (data, dataType) => {
    const parse = parserFormat[dataType];
    return parse(data);
};

// export default (format, data) => {
//     switch (format) {
//       case 'json':
//         return JSON.parse(data);
//       case 'yml':
//       case 'yaml':
//         return yaml.load(data);
//       default:
//         throw new Error(`Unknown format: ${format}`);
//     }
//   };

