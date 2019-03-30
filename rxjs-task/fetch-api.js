function fetchAPI (URL,value,result){
  let fetchResult = fetch(URL + value + "/" + result, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.text())
  .then(x => result = JSON.parse(x).result)
  .then(x => console.log('inside fetchAPI' + x));
  return result;
}
fetchAPI(URLs[0],values[0], result);
fetchAPI(URLs[1],values[1], 45);
fetchAPI(URLs[2],values[2], 105);