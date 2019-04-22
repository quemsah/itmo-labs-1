const getData = async (url) => (await fetch(url)).json();
const setAttributes = (el, attrs) => {
  for (var key in attrs)(key != "text") ? el.setAttribute(key, attrs[key]) : el.textContent = attrs[key]
  return el;
}
(async () => {
  const url = "https://kodaktor.ru/j/rates";
  const data = await getData(url);
  console.log(data);
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.setAttribute('width', 300);
  canvas.setAttribute('height', 120);

  let answer = document.body.querySelector('.answer');
  answer.appendChild(canvas);
  answer.appendChild(setAttributes(document.createElement("button"), {
    "class": "button primary fit small",
    "style": "width: 30%",
    "text": "Нажми на меня"
  }));

  ctx.lineWidth = 2;
  ctx.strokeStyle = 'red';
  ctx.strokeRect(1, 2, canvas.width - 2, canvas.height - 2);
})();