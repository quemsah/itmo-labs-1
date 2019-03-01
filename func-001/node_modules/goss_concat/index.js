const concat = (...args) => [...args].reduce((x, y) => `${x}${y}`);
module.exports = concat;
