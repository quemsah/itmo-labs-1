let result = '';

const mappingFunc = x => x.textContent;
const values = Array.from(document.querySelectorAll("li")).slice(0, 3).map(mappingFunc);
const URLs = Array.from(document.querySelectorAll("li")).slice(3, 6).map(mappingFunc);
const N = Array.from(Array(values.length), (x, i) => i);

(async function() {
    for await (let i of N) {
        //	for (let i = 0; i <= N; i++) {		
        let fetchResult = await fetch(URLs[i] + values[i] + "/" + result, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.text())
            .then((x) => result = JSON.parse(x).result);
        console.log("response[" + i + "] = ", result);
    }
    console.log("result = ", result);
})();


/*
const values2 = range(1, 3);

(async () => {
	for await (let n of values) {
		console.log(n);
	}
})();*/
