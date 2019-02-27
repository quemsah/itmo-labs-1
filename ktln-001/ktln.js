function build(arr) {
    let t = arr.filter(word => word != "");
    console.log(arr);
    console.log(t);
    return t.join(' ');
}
document.write(build(['сборка', 'кажется', 'работает']) + "<br>");

new function main() {
    document.write(three([5,7,3],0) + "<br>");
};

/*fun three(digs: List<String>, f: Int): String {
    var d2 = digits(digs[0].toInt());
    if (f == 1) d2 = fem(d2);

    val x = digs.size;
    if (x == 3) {
        if (digs[1] == "1") return build(listOf(cents(digs[2].toInt()), dozen(digs[0].toInt())))
        return build(listOf(cents(digs[2].toInt()), dozens(digs[1].toInt()), d2))
    } else {
        if (x == 2) {
            if (digs[1] == "1") return dozen(digs[0].toInt())
            return build(listOf(dozens(digs[1].toInt()), d2))
        } else {
            return d2
        }
    }

}*/

function three(digs, f) {
    var d2 = digits(parseInt(digs[0]));
    if (f == 1) d2 = fem(d2);
    var x = digs.length;
    if (x == 3) {
        if (digs[1] == "1") return build(Array.of(cents(parseInt(digs[2])), dozen(parseInt(digs[0]))))
        return build(Array.of(cents(parseInt(digs[2])), dozens(parseInt(digs[1])), d2))
    } 
    else {
        if (x == 2) {
            if (digs[1] == "1") return dozen(parseInt(digs[0]))
            return build(Array.of(dozens(parseInt(digs[1])), d2))
        } else {
            return d2
        }
    }
}




function digits(x) {
    var digits = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    return digits[x];
};

function dozen(x) {
    var dozen = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    return dozen[x];
};

function dozens(x) {
    var dozens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    return dozens[x];
};

function cents(x) {
    var cents = ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    return cents[x];
};
// если х = один то вернуть одна
// если х = два то вернуть две
//в ином случае венруть х
function fem(x) {
    switch (x) {
        case "один":
            x = "одна"
            break;
        case "два":
            x = "две"
            break;
    }
    return x;
};