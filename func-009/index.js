{
	//const cc = (x = 0) => () => ++x;
	const cc = function (x = 0) {
		return function () {
			return ++x;
		};
	}
	const c = cc()
	console.log(c())
	console.log(c())
	console.log(c())
}