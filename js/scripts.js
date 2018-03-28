// Business Logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var pigLatin = [];
function translate(phrase) {
  for (var i = 0; i < vowels.length; i++) {
    if (phrase[0] === vowels[i]) {
      pigLatin.push(phrase[0], "ay");
      return pigLatin.join("");
    }
  }
}


// User-Interface Logic
$(document).ready(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("#sentence").val();
    var inputLetters = inputSentence.split("");
    var output = translate(inputLetters);

    console.log(output);
  });
});
