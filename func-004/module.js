/*export default (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));*/

export default
function itworks(...funcs) {
    return funcs.reduce(function itworkstoo(par1, par2) {
        return function ihopeitworks(...args) {
            return par1(par2(...args), function isthisevenworks(x) {
                return x
            })
        }
    })
}