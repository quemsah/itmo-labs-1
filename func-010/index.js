{
	console.clear();
	//было:  const f = x => x <= 1 ? 1 : x * f(x - 1);
	//стало:           x => x <= 1 ? 1 : x * f(x - 1);
	//Как такая функция может вызвать сама себя? У неё нет имени.
	//   1
	//С помощью Y-комбинатора — это функция высшего порядка, 
	//Принимает на вход функцию f и возвращает функцию g, такую, что f(g)=g
	const Y = (f) => f((x) => Y(f)(x))
	const f1 = Y(f => (n) => n <= 1 ? 1 : n * f(n - 1));
	//   2
	//Y-комбинатор чуть хитрее	
    //https://abdulapopoola.com/2015/08/23/y-combinator-demystified/
	const f2 = (x) => ((fn) => fn(fn, x))((fn, x) => x <= 1 ? 1 : x * fn(fn, (x - 1)));
	//   3
	//U-комбинатор 
	const U = (func) => func(func);
	const f3 = U(func => x => x <= 1 ? 1 : x * func(func)(x - 1));
	//   4
    // С помощью arguments.callee
	const f4 = function(n) {
		let g = arguments.callee;
		return n <= 1 ? 1 : n * g(n - 1);
	}
	console.log(f1(4))
	console.log(f2(4))
	console.log(f3(4))
    console.log(f4(4));
}