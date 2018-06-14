var frame = document.querySelector(".screen-frame");
var input = document.querySelector("#authent-input");
var button = document.querySelector("#authent-submit");
var thirdPartyKey;

function checkNews() {
  var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=ars-technica&' +
          'apiKey=d9492168eb4c45388035ae7049f645da';
  var req = new Request(url);
  fetch(req)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var title = myJson.articles[0].description.replace(/[^a-zA-Z ]/g, "");
    var result = title.split(' ');
    return thirdPartyKey = result[2];
  });
}

function sumbitGuess() {
  if (input.value === thirdPartyKey) {
    console.log('Passed');
  } else {
    console.log('get aaaattttaa heeeeere');
  }
}

input.addEventListener("click", checkNews);
button.addEventListener("click", sumbitGuess);
