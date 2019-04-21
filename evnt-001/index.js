const timeout = s => new Promise(resolve => setTimeout(resolve, s * 1000));
const removeListener = (el) => {
  let elClone = el.cloneNode(true);
  el.parentNode.replaceChild(elClone, el);
};

function Clicked() {
  (async () => {
    const {
      random: r,
      round: d
    } = Math;
    const listener = ({
      target: t
    }) => {
      t.style.color = ['red', 'blue'][d(r(1))]
    };
    document.querySelector('h1')
      .addEventListener('click', ({
        target: t
      }) => {
        t.style.color = ['red', 'blue'][d(r(1))]
      });
    let a = 5;
    console.log('У тебя есть ' + a + ' секунд, чтобы насладиться мерцанием заголовка');
    await timeout(0.5);
    console.log('По истечении указанного времени слушатель события будет удален');
    await timeout(0.5);
    console.log('Поехали!');
    for (const item of [...Array(a + 1).keys()]) {
      console.log(item);
      const result = await timeout(1);
    }
    removeListener(document.querySelector('h1'));
    console.log('А еще через ' + a + ' секунд слушатель вернется на место');
    await timeout(0.5);
    console.log('Но! Выполнится единожды');
    for (const item of [...Array(a + 1).keys()]) {
      console.log(item);
      const result = await timeout(1);
    }
    document.querySelector('h1')
      .addEventListener('click', ({
        target: t
      }) => {
        t.style.color = ['red', 'blue'][d(r(1))]
      }, {
        once: true
      });
  })();
}