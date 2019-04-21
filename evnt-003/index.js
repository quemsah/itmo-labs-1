//https://kodaktor.ru/j/goss_concat
const concat = (...args) => [...args].reduce((x, y) => `${x}${y}`);
//https://kodaktor.ru/startask_83e6b
const numToStar = (num) => (parseInt(num) == 0) ? '' : concat(...Array.from(Array(parseInt(num))).map(x => '⭐️'));
const url = "https://kodaktor.ru/j/react5b_6cbf2";
const getData = async () => (await fetch(url)).json();
const setAttributes = (el, attrs) => {
  for (var key in attrs)(key != "text") ? el.setAttribute(key, attrs[key]) : el.textContent = attrs[key]
  return el;
}

(async () => {
  const data = await getData();
  class CustomEl extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({
        mode: "open"
      });
      //подключение css
      shadow.appendChild(setAttributes(document.createElement("link"), {
        "href": "../src/css/index.css",
        "rel": "stylesheet"
      }));
      shadow.appendChild(setAttributes(document.createElement("button"), {
        "class": "button primary fit small",
        "style": "width: 30%",
        "text": "Нажми на меня"
      }));
      shadow.appendChild(setAttributes(document.createElement("div"), {
        "style": "margin-top: 2%"
      }));

      this.addEventListener("click", () => {
        let div = shadow.querySelector("div");
        for (var i = 0; i < 3; i++) {
          let btnUp = setAttributes(document.createElement("button"), {
            "class": "button fit small",
            "style": "width: 10%",
            "text": "▲"
          });
          let btnDown = setAttributes(document.createElement("button"), {
            "class": "button fit small",
            "style": "width: 10%",
            "text": "▼"
          });
          let btn = setAttributes(document.createElement("button"), {
            "class": "button fit small",
            "style": "width: 80%",
            "value": data[i].votes,
            "title": data[i].title,
            "text": data[i].title + " " + numToStar(data[i].votes)
          });
          btnUp.onclick = () => {
            btn.value++;
            setAttributes(btn, {
              "value": btn.value,
              "text": btn.title + " " + numToStar(btn.value)
            });
          };
          btnDown.onclick = () => {
            btn.value--;
            setAttributes(btn, {
              "value": btn.value,
              "text": btn.title + " " + numToStar(btn.value)
            });
          };
          div.appendChild(btnUp);
          div.appendChild(btnDown);
          div.appendChild(btn);
        }
      }, {
        once: true
      });
    }
  }
  customElements.define("envt-003", CustomEl);
})();