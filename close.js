const allResults = await Promise.all(items.map(async (item) => {}));
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const uniqueArray = arr => [...new Set(arr)];