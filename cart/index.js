const url = "https://kodaktor.ru/cart_data.json";
const select = document.querySelector.bind(document);
const getData = async (url) => (await fetch(url)).json();
const searchElementWText = (el, text) => document.evaluate("//" + el + "[contains(., '" + text + "')]", document, null, XPathResult.ANY_TYPE, null).iterateNext();
const makeTr = (tr, data) => data.forEach(el => tr.appendChild(document.createElement("td").appendChild(document.createTextNode(el)).parentElement));
const makeItem = (name, price) => {
  var template = document.createElement('template');
  let result = "<div id='item' class='col-3 col-12-medium' style='width: 31.6%' draggable='true'><h3>" + name + "</h3><hr><h3>" + price + "</h3></div>";
  template.innerHTML = result;
  return template.content
}
let data = [];
let budget = 0;
//get budget
select('button').addEventListener("click", (e) => {
  budget = select('input').value;
  e.target.remove();
  select('input').remove();
  select('h3').remove();
  console.log(budget);
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
  //drag logic
  let item = document.querySelectorAll('#item');
  let cart = select('#cart');
  cart.addEventListener('dragover', e => e.preventDefault());
  Array.from(item).forEach((el, i) => {
    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('application/json', JSON.stringify({
        name: data[i].name,
        price: data[i].price,
        counter: data[i].counter
      }))
    })
  });
  cart.addEventListener('drop', e => {
    let thisData = JSON.parse(e.dataTransfer.getData('application/json'));
    let trItem = document.createElement("tr");
    let thisItem = data.find(x => x.name === thisData.name);
    if (thisData.counter === 0) {
      makeTr(trItem, [thisItem.name, thisItem.price, ++thisItem.counter, parseInt(thisItem.price) * thisItem.counter]);
    } else {
      trItem = searchElementWText('tr', thisItem.name);
      trItem.childNodes[2].textContent = ++thisItem.counter;
      trItem.childNodes[3].textContent = parseInt(thisItem.price) * thisItem.counter;
    }
    select("tbody").appendChild(trItem);
    // итоговая строчка
    let totalCount = data.map(a => a.counter).reduce((sum, a) => sum + a);
    let total = data.map(a => a.counter * a.price).reduce((sum, a) => sum + a);
    console.log(total);

    let trTotal = searchElementWText('tr', 'Итого');
    if (!trTotal) {
      trTotal = document.createElement("tr");
      makeTr(trTotal, ['Итого', '', totalCount, total]);
      select("tbody").appendChild(trTotal);
    } else {
      trTotal.childNodes[2].textContent = totalCount;
      trTotal.childNodes[3].textContent = total;
    }
    select('#total').textContent = "Итого: " + total;
  });

  cart.addEventListener('click', e => {
    let thisData = JSON.parse(e.dataTransfer.getData('application/json'));
    let trItem = document.createElement("tr");
    let thisItem = data.find(x => x.name === thisData.name);
    if (thisData.counter === 0) {
      makeTr(trItem, [thisItem.name, thisItem.price, ++thisItem.counter, parseInt(thisItem.price) * thisItem.counter]);
    } else {
      trItem = searchElementWText('tr', thisItem.name);
      trItem.childNodes[2].textContent = ++thisItem.counter;
      trItem.childNodes[3].textContent = parseInt(thisItem.price) * thisItem.counter;
    }
    select("tbody").appendChild(trItem);
    // итоговая строчка
    let totalCount = data.map(a => a.counter).reduce((sum, a) => sum + a);
    let total = data.map(a => a.counter * a.price).reduce((sum, a) => sum + a);
    console.log(total);

    let trTotal = searchElementWText('tr', 'Итого');
    if (!trTotal) {
      trTotal = document.createElement("tr");
      makeTr(trTotal, ['Итого', '', totalCount, total]);
      select("tbody").appendChild(trTotal);
    } else {
      trTotal.childNodes[2].textContent = totalCount;
      trTotal.childNodes[3].textContent = total;
    }
    select('#total').textContent = "Итого: " + total;
  });
})()