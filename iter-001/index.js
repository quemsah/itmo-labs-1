class Iterable {
  constructor(length) {
    this.length = length;
  }

  randomEvenNum(from, to) {
    return (2 * (Math.random() * (to - from) + from).toFixed(2)).toFixed(2);
  }

  [Symbol.iterator]() {
    let arr = [],
      j = 0;
    for (let i = 0; i < this.length; i++) arr.push(this.randomEvenNum(0, 1));
    return {
      next: () =>
        j < arr.length ?
        {
          value: arr[j++],
          done: false
        } :
        {
          done: true
        }
    };
  }
}
const it = new Iterable(3);
console.log([...it]);