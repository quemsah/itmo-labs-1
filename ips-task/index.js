const url = "https://kodaktor.ru/j/ips";
const getData = async () => (await fetch(url)).json();
const filterUnique = arr => [...new Set(arr)];
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const sort2ndColumn = (a, b) => b[1] - a[1];
const makeTableHTML = (arr) => {
  let result = "<table border=1>";
  arr.forEach((el) => {
    result += "<tr>";
    el.forEach((el) => result += "<td>" + el + "</td>")
    result += "</tr>";
  })
  result += "</table>";
  return result;
}

(async () => {
  let data = [await getData()][0];
  let arr = data.map(x => x.ip);
  // arr – это массив айпишников
  let arr2 = filterUnique(arr);
  // arr2 – массив уникальных
  let arr3 = [];
  arr2.forEach((el) => (countOccurrences(arr, el) == 1) ? arr3.push([el, countOccurrences(arr, el)]) : null);
  // arr3 – с теми айпи, кто заходил по одному разу
  let ans = [];
  arr2.forEach((el) => ans.push([el, countOccurrences(arr, el)]));
  // для каждого уникального значения считаем кол-во появлений в исходном массиве и помещаем в ans
  ans.sort(sort2ndColumn);
  // сортируем
  console.log(ans);
  let el = document.querySelector('div.answer');
  el.innerHTML += '<h4>Всего в массиве ' + arr.length + ' адресов</h4>';
  el.innerHTML += '<h4>Из них уникальных – ' + arr2.length + '</h4>';
  el.innerHTML += '<h4>Заходили по одному разу – ' + arr3.length + '</h4>';
  el.innerHTML += '<h4>Максимальная частота – ' + ans[0][1] + '</h4>';
  el.innerHTML += makeTableHTML(ans);
  //материализуем ответ
})();