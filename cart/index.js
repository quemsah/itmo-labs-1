const getData = async (url) => (await fetch(url)).json();

const url = "https://kodaktor.ru/cart_data.json";

(async () => {
  let data = await getData(url);
  console.log(...[data]);

  let budgetButton = document.querySelector('button');
  let budgetInput = document.querySelector('input');
  let budgetH3 = document.querySelector('h3');

  console.log(budgetButton);

  budgetButton.addEventListener("click", () => {
    console.log(budgetInput.value);
    budgetButton.remove();
    budgetInput.remove();
    budgetH3.remove();
  });

  let ist = document.querySelector('#item');
  console.log(ist)
  let pri = document.querySelector('#cart');
  console.log(pri);
  ist.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', e.target.textContent));
  pri.addEventListener('dragover', e => e.preventDefault());
  pri.addEventListener('drop', e => e.target.textContent += e.dataTransfer.getData('text/plain'));

})();