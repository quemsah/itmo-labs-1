const getData = async (url) => (await fetch(url)).json();
const searchElementWText = (el, text) => document.evaluate("//" + el + "[contains(., '" + text + "')]", document, null, XPathResult.ANY_TYPE, null).iterateNext();
const makeTr = (tr, data) => data.forEach(el => tr.appendChild(document.createElement("td").appendChild(document.createTextNode(el)).parentElement));
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const getTotal = () => data.map(a => a.counter * a.price).reduce(reducer);
const wrapData = (data) => ({
  name: data.name,
  price: data.price,
  counter: data.counter
});
const makeItem = (name, price) => {
  var template = document.createElement('template');
  let result = "<div id='item' class='col-3 col-12-medium' style='width: 31.6%' draggable='true'><h3>" + name + "</h3><hr><h3>" + price + "</h3></div>";
  template.innerHTML = result;
  return template.content
}
const addItemToCart = (itemData, budget) => {
  let total = getTotal();
  let thisItem = data.find(x => x.name === itemData.name);
  if (budget > total + parseInt(thisItem.price)) {
    if (itemData.counter === 0) {
      let trItem = document.createElement("tr");
      makeTr(trItem, [thisItem.name, thisItem.price, ++thisItem.counter, parseInt(thisItem.price) * thisItem.counter]);
      select("tbody").appendChild(trItem);
    } else {
      let trItem = searchElementWText('tr', thisItem.name);
      trItem.childNodes[2].textContent = ++thisItem.counter;
      trItem.childNodes[3].textContent = parseInt(thisItem.price) * thisItem.counter;
    }
    let totalCount = data.map(a => a.counter).reduce(reducer);
    total = getTotal();
    let trTotal = searchElementWText('tr', 'Итого');
    (trTotal) ? trTotal.remove(): null;
    trTotal = document.createElement("tr");
    makeTr(trTotal, ['Итого', '', totalCount, total]);
    select("tbody").appendChild(trTotal);
    select('#total').textContent = "Итого: " + total;
    select('#cartname').textContent = "Корзина, ваш бюджет - " + budget + ", осталось - " + (budget-total);
  } else {
    (budget == 0) ? alert('Бюджет-то не введен либо равен нулю') : alert('Увы, бюджет превышен');
  }
}
const url = "https://kodaktor.ru/cart_data.json";
const select = document.querySelector.bind(document);
const selectAll = document.querySelectorAll.bind(document);
let data = [];
let budget = 0;
//get budget
select('button').addEventListener("click", (e) => {
  budget = select('input').value;
  e.target.remove();
  select('input').remove();
  select('h3').remove();
});

(async () => {
  //get data
  let obj = await getData(url);
  Object.keys(obj).forEach((key) => {
    let name = key;
    let price = obj[key];
    let counter = 0;
    data.push({
      name,
      price,
      counter
    })
  });
  //render items
  data.forEach((item) => {
    select('div.row').appendChild(makeItem(item.name, item.price))
  });
  //cart logic
  let item = selectAll('#item');
  let cart = select('#cart');
  //onclick
  Array.from(item).forEach((el, i) => {
    el.addEventListener('click', () => {
      addItemToCart(wrapData(data[i]), budget);
    })
  });
  //ondragndrop 
  cart.addEventListener('dragover', e => e.preventDefault());
  
  Array.from(item).forEach((el, i) => {
    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('application/json', JSON.stringify(wrapData(data[i])));
    });
  });

  cart.addEventListener('drop', e => {
    let thisData = JSON.parse(e.dataTransfer.getData('application/json'));
    addItemToCart(thisData, budget);
  });
})()