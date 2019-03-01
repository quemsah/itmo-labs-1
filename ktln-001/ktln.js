function build(arr) {
    const t = arr.filter(word => word != "");
    return t.join(' ');
}

new function main() {
    console.log(russian(1234));
};

function three(digs, f) {
    let d2 = digits(parseInt(digs[0]));
    if (f == 1) d2 = fem(d2);
    const x = digs.length;
    if (x == 3) {
        if (digs[1] == "1") return build(Array.of(cents(parseInt(digs[2])), dozen(parseInt(digs[0]))));
        return build(Array.of(cents(parseInt(digs[2])), dozens(parseInt(digs[1])), d2));
    }
    else {
        if (x == 2) {
            if (digs[1] == "1") return dozen(parseInt(digs[0]));
            return build(Array.of(dozens(parseInt(digs[1])), d2));
        } else {
            return d2;
        }
    }
}

function digits(x) { return ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"][x]; };

function dozen(x) { return ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"][x]; };

function dozens(x) { return ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"][x]; };

function cents(x) { return ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"][x]; };

function fem(x) {
    switch (x) {
    case "один":
        return "одна";
        break;
    case "два":
        return "две";
        break;
    default:
        return x;
    }
};

function russian(n) {
    const t = n.toString().split("").reverse().join("");
    const digs = t.split("");
    if (digs.length > 3) {
        const s1 = parseInt(Math.floor(parseFloat(n) / 1000));
        let ts = " тысяч";
        const s21 = s1.toString().split("").reverse().join("") + "0";
        let s2 = s21.split("").slice(0, s21.length - 1);
        if (parseInt(s2[1]) != 1 && parseInt(s2[0]) == 1) {
            ts += "а";
        } else {
            if ((parseInt(s2[1]) != 1) && (parseInt(s2[0]) > 0 && parseInt(s2[0]) < 5)) ts += "и";
        }
        ts += " ";
        let s4 = digs.slice(0, 3);
        if (parseInt(s4[2]) == 0) {
            s4 = s4.slice(0, 2);
            if (parseInt(s4[1]) == 0) s4 = Array.of(s4[0]);
        }
        if (s4.length == 4) s4 = s4.slice(0, 2);
        if (s2.length == 4) s2 = s2.slice(0, 2);
        const res = three(s2, 1) + ts + three(s4, 0);
        return res.trim();
    } else {
        return (three(digs, 0));
    }
}
