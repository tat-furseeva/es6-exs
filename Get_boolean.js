const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isEmptyArray = arr => !arr.length;