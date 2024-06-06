[foo, bar] = [bar, foo];
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);