let numberInputs = document.querySelectorAll("input[type=number]");
let rangeInputs = document.querySelectorAll("input[type=range]");

const paint = () => {
  let colors = [];
  [...rangeInputs].forEach((el) => colors.push(el.value));
  document.body.style.backgroundColor = "rgb(" + [colors[0] || 0, colors[1] || 0, colors[2] || 0].join(",") + ")";
};

const sync = (x, y) => x.forEach((el) => el.addEventListener("change", () => {
  [...y].forEach((el, i) => (el.value = x[i].value));
  paint();
}));

sync(numberInputs, rangeInputs);
sync(rangeInputs, numberInputs);