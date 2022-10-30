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

