const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
console.log(false == '0');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');