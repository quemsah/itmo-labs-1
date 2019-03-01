const concat = require('goss_concat');

function func(r = 255, g = 255, b = 255) {
    console.log(concat('rgb(', r, ',', g, ',', b, ')'));
    console.log(concat('#', r.toString(16), g.toString(16), b.toString(16)));
}
func(24,235);