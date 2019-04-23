import * as f from "./funcs.js";
import Chart from './chart.js';

const url = "https://kodaktor.ru/j/rates";
let currencies = {};

const makeCanvas = async () => {
  //считаем валюты currencies
  let data = {
    ...await f.getData(url)
  };
  Object.keys(data).forEach(function (item) {
    currencies[data[item].name] = parseFloat(data[item].sell);
  });
  //задаем параметры канваса
  const canvas = document.createElement('canvas');
  canvas.width = 1000;
  canvas.height = 500;
  canvas.offset = 10;
  //материализуем
  var myChart = new Chart({
    canvas: canvas,
    data: currencies
  });
  myChart.draw();
  //удаляем кнопку
  answer.removeChild(answer.children[1]);
  //появляем канвас
  answer.appendChild(canvas);
};

let answer = document.body.querySelector('.answer')
let button = f.setAttributes(document.createElement("button"), {
  "class": "button primary fit small",
  "style": "width: 30%",
  "text": "Показать курсы валют"
});
button.addEventListener("click", makeCanvas, {
  once: true
});
answer.appendChild(button);