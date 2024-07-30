const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const updated = numbers.filter(element => element > 6);
const results = await Promise.all(resultingPromises);