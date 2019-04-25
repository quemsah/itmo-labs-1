
const getData = async (url) => (await fetch(url)).json();
const setAttributes = (el, attrs) => {
  for (var key in attrs)(key != "text") ? el.setAttribute(key, attrs[key]) : el.textContent = attrs[key]
  return el;
}

const url = "https://kodaktor.ru/cart_data.json";

let answer = document.querySelector('div.answer');
let budgetButton = answer.appendChild(setAttributes(document.createElement("button"), {
  "class": "button primary fit small",
  "style": "width: 30%",
  "text": "Нажми на меня"
}));
console.log(budgetButton);

budgetButton.addEventListener("click", () => {
  budgetButton.remove();
});

(async () => {
  let data = await getData(url);
  console.log(...[data]);

  // Object.keys(data).forEach(((key) => {

  // }));



})();