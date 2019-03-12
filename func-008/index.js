//fetch работает
/*const fetchResult = fetch('https://3336.kodaktor.ru/funcpsst', {method: 'post'});
fetchResult.then(response => response.text())
    .then((data) => document.getElementById('answer').innerHTML += (data +"<br>") 
     );
*/
(async function () {
	const fetchResult = await fetch('https://3336.kodaktor.ru/funcpsst', {
			method: 'post'
		})
		.then(response => response.text())
		.then((x) => data = JSON.parse(x));
	const mappingFunc = x => parseInt(x.value);
	const f0_inputs = Array.from(document.querySelectorAll(".f0")).map(mappingFunc);
	const f1_inputs = Array.from(document.querySelectorAll(".f1")).map(mappingFunc);
	const functions = data.g.map(
		function (elem) {
			return new Function('x', elem);
		}
	);
	console.log(functions[0](f0_inputs));
	console.log(functions[1](f1_inputs));
})();
/* это работает но не совсем по заданию		
            var answer = data.g.map(function (item, index) {
			eval("function f" + index + "_func(x) {" + item + "}");
			eval("console.log(f" + index + "_func(f" + index + "_inputs));")
		});
*/

/* тож работает
    eval("function f0_func(x) {" + data.g[0] + "}");
	eval("function f1_func(x) {" + data.g[1] + "}");
	console.log(f0_func(f0_inputs));
	console.log(f1_func(f1_inputs));
*/
/// вторая часть
const mappingFunction = x => parseInt(x.value);
const bubbleSort = arr => {
	for (let i = 0, endI = arr.length - 1; i < endI; i++) {
		let wasSwap = false;
		for (let j = 0, endJ = endI - i; j < endJ; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				wasSwap = true;
			}
		}
		if (!wasSwap) break;
	}
	return arr;
};
$("#btnClicker").on("click", function () {
	let number_of_inputs = $('#demo-input').val();
	for (i = 0; i < number_of_inputs; i++) {
		$("#myDiv").append("<input type='number' id='sort-input' class='sort-input' step='1'>");
	}
	$('.col-12-xsmall').remove();
	$('#btnClicker').remove();
	$("#myDiv").append("<button id='btnSort'>Сортируй</button>")
	$("#btnSort").on("click", function () {
		const user_inputs = Array.from($(".sort-input")).map(mappingFunction);
		let sorted_inputs = bubbleSort(user_inputs);
		console.log("sorted_inputs", sorted_inputs);
		$('.sort-input').each(function (index) {
			$(this).val(sorted_inputs[index]);
		});
	});
});