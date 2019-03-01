    let fDeg = 2;
    let roubles = 25000;
    let a = 8;
    let b = 45;
    let c = -18;
    let request = new XMLHttpRequest();
    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
    request.onload = function(e) {
        //cDeg
        document.getElementById('answer').innerHTML += ("cDeg = " + (fDeg* 1.8 + 32) +"<br>");
        //dollars
        kurs = JSON.parse(this.responseText).Valute.USD.Value;
        dollars = roubles/kurs;
        document.getElementById('answer').innerHTML += ("dollars = " + dollars.toFixed(2)+"<br>");
        //x1 x2
        let x1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
        let x2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
        document.getElementById('answer').innerHTML += ("x1 = " + x1 +"<br>");
        document.getElementById('answer').innerHTML += ("x2 = " + x2 +"<br>");
        }
    request.send(null);