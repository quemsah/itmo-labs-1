console.clear();
let result = '',
    i = 0;
const values = Array.from(document.querySelectorAll("li")).slice(0, 3).map(x => x.textContent);
const URLs = Array.from(document.querySelectorAll("li")).slice(3, 6).map(x => x.textContent);
const N = values.length - 1;
const options = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const getAPI = (i, result) => Rx.Observable
    .fromPromise(fetch(URLs[i] + values[i] + '/' + result, options))
    .switchMap(x => x.text())
    .map(x => JSON.parse(x).result)
    .subscribe(result => {
        console.log("response[" + i + "] = ", result);
        (i == N) ? console.log('Готово!'): getAPI(++i, result)
    });
getAPI(i, result);