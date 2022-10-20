const genDiff = (myObj1, myObj2) => {
    const allKeys = [
        ...new Set([...Object.keys(myObj1), ...Object.keys(myObj2)])
    ];
    allKeys.sort();
    return allKeys.reduce((result, key) => {
        const val1 = myObj1[key];
        const val2 = myObj2[key];

        if (val1 === undefined) {
            result[`+ ${key}`] = val2;
        } else if (val2 === undefined) {
            result[`- ${key}`] = val1;
        } else if (val1 !== val2) {
            result[`- ${key}`] = val1;
            result[`+ ${key}`] = val2;
        } else {
            result[`  ${key}`] = val2;
        }

        return result;
    }, {});
};

export default genDiff;