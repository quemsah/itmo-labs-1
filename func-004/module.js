/*export default (...funcs) => funcs.reduce((par1, par2) => (...args) => par1(par2(...args), x => x));*/
export default function itworks(...funcs) {
    return funcs.reduce(
        function itworkstoo(par1, par2) {
        	return (...args) => par1(par2(...args), x => x);
    /*        	return function ihopeitworks(...args) {    }*/
        }
    	);
}