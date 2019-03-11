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
	/*const request = new XMLHttpRequest();
	request.open('POST', 'https://3336.kodaktor.ru/funcpsst', false);
	request.send();
	let data = JSON.parse(request.responseText);*/
	document.getElementById('answer').innerHTML += (data.g[0] + "<br>");
	document.getElementById('answer').innerHTML += (data.g[1] + "<br>");

	const mappingFunction = x => parseInt(x.value);

	const f0_inputs = Array.from(document.querySelectorAll(".f0")).map(mappingFunction);
	const f1_inputs = Array.from(document.querySelectorAll(".f1")).map(mappingFunction);
	console.log(f0_inputs);
	console.log(f1_inputs);

	eval("function f0_func(x) {" + data.g[0] + "}");
	eval("function f1_func(x) {" + data.g[1] + "}");
	console.log(f0_func(f0_inputs));
	console.log(f1_func(f1_inputs));
})();
/*
Ранее - https://kodaktor.ru/zzzzzzz

Пожалуйста, сделайте следующее:

1. Отправьте POST-запрос на адрес 3336.kodaktor.ru/funcpsst
2. Вы получите массив текстов тел функций
3. Получите по нему с помощью метода map массив функций, каждая из которых способна получить сколько угодно аргументов
4. Подсчитайте значение первой функции от значений этих текстовых полей:

<input value="3" class="f0"><input value="4" class="f0"><input value="5" class="f0"><input value="10" class="f0">

5. Подсчитайте значение второй функции от значений этих текстовых полей: 

<input value="1" class="f1"><input value="2" class="f1"><input value="3" class="f1"><input value="4" class="f1"><input value="5" class="f1"><input value="6" class="f1"><input value="7" class="f1"><input value="8" class="f1"><input value="9" class="f1"><input value="10" class="f1">

  
ПОЯСНЕНИЕ

Деструктурируйте полученный от сервера ответ в переменную g (массив тел)
С помощью метода map сопоставьте элементам массива g функции
(для этого используйте вызов конструктора Function, первым аргументом которого будет оператор rest/spread от x, а вторым каждое тело)

С помощью метода Array.from превратите результат работы querySelectorAll
в массив
С помощью метода map теперь сопоставьте элементам этого массива (т.е. инпутам)
их значения, преобразованные в числа с помощью + или Number

С помощью метода apply примените полученные массивы к вашим функциям
(f[0].apply(...))

* Реализуйте интерфейс вида
<img src="interface800x200.gif" alt="">
для добавления произвольного количества аргументов
*/