{
	//const cc = (x = 0) => () => ++x;
	const cc = function (x = 0){
		return function () {
			return ++x;
		};
	}

    console.log("cc", cc()());
    console.log("cc", cc(cc()())());    
    console.log("cc", cc(cc(cc()())())());

	// здесь пока нет решения
}