
const concat = require('goss_concat');
function func(r=255,g=255,b=255) 
{
console.log(concat('rgb(',r,',',g,',',b,')'));
}
func();
