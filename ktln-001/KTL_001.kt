fun build(arr: List<String>): String {
    val t = arr.filter { it != "" }
    return t.joinToString(separator = " " )
}

fun main(args: Array<String>) {
    println(  russian(508102)    )
}

fun three(digs: List<String>, f: Int): String {
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

}

fun digits(x: Int): String = listOf("", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять")[x]

fun dozen (x: Int): String = listOf("десять","одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать")[x]

fun dozens (x: Int): String = listOf("", "","двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто")[x]

fun cents (x: Int): String = listOf("", "сто","двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот")[x]

fun fem(x: String): String{
    return when {
        x == "один" -> "одна"
        x == "два" -> "две"
        else -> x
    }
}

/**
 * Очень сложная
 *
 * Записать заданное натуральное число 1..999999 прописью по-русски.
 * Например, 375 = "триста семьдесят пять",
 * 23964 = "двадцать три тысячи девятьсот шестьдесят четыре"
 */
fun russian(n: Int): String {
    val t = n.toString().reversed()
    val digs = t.split("").slice(1..t.length)
    if (digs.size > 3) {
        val s1 = Math.floor(n.toDouble() / 1000).toInt()
        var ts = " тысяч"
        val s21 = s1.toString().reversed() + "0"
        var s2 = s21.split("").slice(1..s21.length)

        if (s2[1].toInt() != 1 && s2[0].toInt() == 1) {
            ts += "а"
        } else {
            if ((s2[1].toInt() != 1) && (s2[0].toInt() > 0 && s2[0].toInt() < 5)) ts += "и";
        }
        ts += " "
        var s4 = digs.slice(0..3)
        if (s4[2].toInt() == 0) {
            s4 = s4.slice(0..2)
            if (s4[1].toInt() == 0) s4 = listOf(s4[0])
        }

        if (s4.size == 4) s4 = s4.slice(0..2)
        if (s2.size == 4) s2 = s2.slice(0..2)
        val res = three(s2, 1) + ts + three(s4, 0)
        return res.trim()
    } else {
        return(three(digs, 0));

    }
}

