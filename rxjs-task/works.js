console.clear();
result = '';
const mappingFunc = x => x.textContent;
const values = Array.from(document.querySelectorAll("li")).slice(0, 3).map(mappingFunc);
const URLs = Array.from(document.querySelectorAll("li")).slice(3, 6).map(mappingFunc);
const options = {
    headers: {
        'Content-Type': 'application/json'
    }
}

Rx.Observable.fromPromise(fetch(URLs[0] + values[0] + '/' + result, options))
    .flatMap(x => x.text())
    .map(x => JSON.parse(x).result)
    .do(() => console.log('Ответ 1:'))
    .subscribe(result => {
        console.log(result);
        Rx.Observable.fromPromise(fetch(URLs[1] + values[1] + '/' + result, options))
            .flatMap(x => x.text())
            .map(x => JSON.parse(x).result)
            .do(() => console.log('Ответ 2:'))
            .subscribe(result => {
                console.log(result);
                Rx.Observable.fromPromise(fetch(URLs[2] + values[2] + '/' + result, options))
                    .flatMap(x => x.text())
                    .map(x => JSON.parse(x).result)
                    .do(() => console.log('Ответ 3:'))
                    .subscribe(result => console.log(result));
            })
    })