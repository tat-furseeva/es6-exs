const merge = Object.assign({}, obj1, obj2);
const intermediateAppPath = path.join(buildOutputPath, 'app');
const uniqueArr = (arr) => [...new Set(arr)];