var DELIM_SIZE = 4;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const resultingPromises = urls.map((url) => makHttpRequest(url));