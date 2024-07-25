const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const intermediateAppPath = path.join(buildOutputPath, 'app');
const getRandomBoolean = () => Math.random() >= 0.5;