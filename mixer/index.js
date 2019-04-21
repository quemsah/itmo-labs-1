let numberInputs = $("input:even");
let rangeInputs = $("input:odd");

const paint = () => {
  let rgb = [];
  [...rangeInputs].forEach((el) => rgb.push(el.value));
  document.body.style.backgroundColor = "rgb(" + [rgb[0] || 0, rgb[1] || 0, rgb[2] || 0].join(",") + ")";
};

const sync = (x, y) => x.change(() => {
  [...y].forEach((el, i) => (el.value = x[i].value));
  paint();
});

sync(numberInputs, rangeInputs);
sync(rangeInputs, numberInputs);