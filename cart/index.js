const getData = async (url) => (await fetch(url)).json();

const url = "https://kodaktor.ru/cart_data.json";

(async () => {
  let data = await getData(url);
  console.log(...[data]);

  let budgetButton = document.querySelector('button');
  let budgetInput = document.querySelector('input');
  let budgetH3 = document.querySelector('h3');

  budgetButton.addEventListener("click", () => {
    //console.log(budgetInput.value);
    budgetButton.remove();
    budgetInput.remove();
    budgetH3.remove();
  });

  let item = document.querySelectorAll('#item');
  let cart = document.querySelector('#cart');

  cart.addEventListener('dragover', e => e.preventDefault());
  
  Array.from(item).forEach( el => {
    el.addEventListener('dragstart', event => {
      let name = event.target.children[0].textContent;
      let price = event.target.children[2].textContent;
      let counter = 0;
      console.log(event.target);
      let data = JSON.stringify({
        name: name,
        price: price,
        counter: counter
      });
      event.dataTransfer.setData(
        'application/json',
        data
      );
    });
  });
  cart.addEventListener('drop', e => {
    let data = JSON.parse(e.dataTransfer.getData('application/json'));
    let node = document.createElement("tr");
    //console.log(node);
    if (data.counter === 0) {
      let tdName = document.createElement("td");
      let tdPrice = document.createElement("td");
      let tdCount = document.createElement("td");
      let tdSum = document.createElement("td");

      tdName.textContent = data.name;
      tdPrice.textContent = data.price;
      tdCount.textContent = ++data.counter;
      tdSum.textContent = parseInt(data.price) * data.counter;
      //console.log(data);
      node.appendChild(tdName);
      node.appendChild(tdPrice);
      node.appendChild(tdCount);
      node.appendChild(tdSum);
      //console.log(node);
    } else {
      node = document.evaluate("//tr[contains(., '"+data.name+"')]", document, null, XPathResult.ANY_TYPE, null).iterateNext()
      console.log('smth'+node);
      node.childNodes[2].textContent = ++data.counter;
      node.childNodes[3].textContent = parseInt(data.price) * data.counter;
    }
    console.log(data);
    document.querySelector("tbody").appendChild(node);
  });
})();