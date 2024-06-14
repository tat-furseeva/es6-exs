const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');