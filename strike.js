const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
var arr2 = arr1.reverse();