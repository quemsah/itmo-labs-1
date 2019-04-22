const doubleTo = (num, par) => {
  let del = '|';
  let answer = '';
  let buffer = new ArrayBuffer(8); // выделит 8 байт
  let view = new DataView(buffer); // интерфейс (представление)
  view.setFloat64(0, num); // запишет значение, заняв всё
  var i = 8; 
  while (i--) {
    switch (par) {
      case 'hex':
        answer += del + (view.getUint8(i).toString(16).padStart(2, '0'));
        break;
      case 'bin':
        answer += del + (view.getUint8(i).toString(2).padStart(8, '0'));
        break;
    }
  }
  return num + ' = ' + answer + del;
}

console.log(doubleTo(-312.3125, 'hex'));
console.log(doubleTo(-312.3125, 'bin'));
console.log(doubleTo(3.1, 'hex'));
console.log(doubleTo(3.1, 'bin'));
