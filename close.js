const currentDate = () => new Date().toLocaleDateString('en-US');
const lastElement = arr => arr[arr.length - 1];
const removeDuplicates = (arr) => [...new Set(arr)];