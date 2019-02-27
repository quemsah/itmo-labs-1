 
function build(arr) {
    let t = arr.filter(word => word != "");
    console.log(arr);
    console.log(t);
    return t.join(' ');
}
document.write(build(['сборка','кажется','работает'])+"<br>");

new function main(){ 
    document.write('main'+"<br>");
    document.write(digits(6)+"<br>");
        document.write(dozen(6)+"<br>");
            document.write(dozens(6)+"<br>");
                document.write(cents(6)+"<br>");
 };

function digits(x){ 
    document.write('digits'+"<br>");
    var digits = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    return digits[x];
 };
 function dozen(x){ 
    document.write('dozen'+"<br>");
    var dozen = ["десять","одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    return dozen[x];
 };
 function dozens(x){ 
    document.write('dozens'+"<br>");
    var dozens = ["", "","двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    return dozens[x];
 };
 function cents(x){ 
    document.write('cents'+"<br>");
    var cents = ["", "сто","двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    return cents[x];
 };

