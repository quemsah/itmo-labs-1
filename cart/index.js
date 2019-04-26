const url = "https://kodaktor.ru/cart_data.json";
const getData = async (url) => (await fetch(url)).json();
const makeItem = (name, price) => {
  var template = document.createElement('template');
  let result = "<div id='item' class='col-3 col-12-medium' style='width: 31.6%' draggable='true'><h3>" + name + "</h3><hr><h3>" + price + "</h3></div>";
  template.innerHTML = result;
  return template.content
}
let arraydata = [];
let total = 0;

(async () => {
  let data = await getData(url);
  Object.keys(data).forEach((key) => {
    let name = key;
    let price = data[key];
    let counter = 0;
    arraydata.push({
      name,
      price,
      counter
    })
  });
  arraydata.forEach((item) => {
    document.querySelector('div.row').appendChild(makeItem(item.name, item.price))
  });
  let budgetButton = document.querySelector('button');
  let budgetInput = document.querySelector('input');
  let budgetH3 = document.querySelector('h3');
  budgetButton.addEventListener("click", () => {
    budgetButton.remove();
    budgetInput.remove();
    budgetH3.remove()
  });
  let item = document.querySelectorAll('#item');
  let cart = document.querySelector('#cart');
  cart.addEventListener('dragover', e => e.preventDefault());
  Array.from(item).forEach((el, i) => {
    el.addEventListener('dragstart', event => {
      event.dataTransfer.setData('application/json', JSON.stringify({
        name: arraydata[i].name,
        price: arraydata[i].price,
        counter: arraydata[i].counter
      }))
    })
  });
  cart.addEventListener('drop', e => {
    let data = JSON.parse(e.dataTransfer.getData('application/json'));
    let node = document.createElement("tr");
    let smth = arraydata.find(x => x.name === data.name);
    console.log(smth);
    if (data.counter === 0) {
      let tdName = document.createElement("td");
      let tdPrice = document.createElement("td");
      let tdCount = document.createElement("td");
      let tdSum = document.createElement("td");
      tdName.textContent = smth.name;
      tdPrice.textContent = smth.price;
      tdCount.textContent = ++smth.counter;
      tdSum.textContent = parseInt(smth.price) * smth.counter;
      node.appendChild(tdName);
      node.appendChild(tdPrice);
      node.appendChild(tdCount);
      node.appendChild(tdSum)
    } else {
      node = document.evaluate("//tr[contains(., '" + smth.name + "')]", document, null, XPathResult.ANY_TYPE, null).iterateNext()
      console.log('smth' + node);
      node.childNodes[2].textContent = ++smth.counter;
      node.childNodes[3].textContent = parseInt(smth.price) * smth.counter
    }
    document.querySelector("tbody").appendChild(node)
  })
})()