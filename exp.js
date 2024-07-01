const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;