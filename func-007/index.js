const sec = a => 1 + a;
const add = (a, b) => (b === 0) ? a : sec(add(a, b - 1));
const mpy = (a, b) => (b === 1) ? a : add(a, mpy(a, b - 1));
const pwr = (x, n) => (n === 0) ? 1 : mpy(x, pwr(x, n - 1));

console.log(sec(2, 10)); // 33
console.log(add(2, 10)); // 33
console.log(mpy(2, 10)); // 33
console.log(pwr(2, 10)); // 33

for (var m = 1; m < 20; m++) {
for (var i = 1; i > 0; i++) try {
    pwr(m, i);
} catch (ex) {
    console.log("Поймал: " + ex + " на " + m + "^" + i);
    break;
}
}