const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const removeDuplicates = (arr) => [...new Set(arr)];
const minNumber = arr => Math.min(...arr);