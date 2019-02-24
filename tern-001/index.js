let age = document.getElementById("aage").value;
let restricted = ( age < 18 ) ? 'yes' : 
( age == 18 ) ? 'notsure' : 'no';
result = "age = " + age + ", ответ = " + restricted;
document.getElementById("jsdiv").innerHTML += result;
