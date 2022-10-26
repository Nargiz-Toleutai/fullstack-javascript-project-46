import _ from 'lodash';
// const prettyPrint = (result) => {
//     const content = Object.entries(result)
//         .map(([key, value]) =>`  ${key}: ${value}`)
//         .join('\n');
//     return `{\n${content}\n}`;
// };

// const genDiff = (myObj1, myObj2) => {
//     const allKeys = [
//         ...new Set([...Object.keys(myObj1), ...Object.keys(myObj2)])
//     ];

//     allKeys.sort();
//     return prettyPrint(allKeys.reduce((result, key) => {
//         const val1 = myObj1[key];
//         const val2 = myObj2[key];
//         if (val1 === undefined) {
//             result[`+ ${key}`] = val2;
//         } else if (val2 === undefined) {
//             result[`- ${key}`] = val1;
//         } else if (val1 !== val2) {
//             result[`- ${key}`] = val1;
//             result[`+ ${key}`] = val2;
//         } else {
//             result[`  ${key}`] = val2;
//         }

//         return result;
//     }, {}));
// };


const genDiff = (myObj1, myObj2) => {
    const allKeys = [
      ...new Set([...Object.keys(myObj1), ...Object.keys(myObj2)]),
    ];
    allKeys.sort();

    const processObj = (obj)=>_.isObject(obj) ?
        Object.entries(obj).reduce((res, [key, val])=>{
            res[`  ${key}`] = processObj(val);
            return res;
        }, {}) : obj;
    
    return allKeys.reduce((result, key) => {
      const val1 = myObj1[key];
      const val2 = myObj2[key];

      console.log({key, val1, val2})

      if (val1 === undefined) {
        result[`+ ${key}`] = processObj(val2);
      } else if (val2 === undefined) {
        result[`- ${key}`] = processObj(val1);
      } else if (_.isObject(val1) && _.isObject(val2)) {
        result[`  ${key}`] = genDiff(val1, val2);
      } else if (val1 !== val2) {
        result[`- ${key}`] = processObj(val1);
        result[`+ ${key}`] = processObj(val2);
      } else {
        result[`  ${key}`] = processObj(val2);
      }
      return result;
    }, {});
  };


export default genDiff;

