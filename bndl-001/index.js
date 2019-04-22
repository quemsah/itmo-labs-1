import moment from 'moment';
const t = moment().format('DD/MM/YYYY HH:mm');
document.body.querySelector('h1').innerHTML = '<h1>Сейчас ' + t + '</h1>';
document.body.querySelector('h2').innerHTML = '<h2>' + top.location.href + '</h2>';
