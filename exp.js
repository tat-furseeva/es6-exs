const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log(1 +  "2" + "2");
const apmRootPath = path.join(repositoryRootPath, 'apm');
const uniqueArr = (arr) => [...new Set(arr)];
console.log("1 || 2 = "+(1 || 2));