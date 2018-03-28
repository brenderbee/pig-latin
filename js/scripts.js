// Business Logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var pigLatin = [];

function translate(phrase) {
  for (var i = 0; i < vowels.length; i++) {
    if (phrase[0] === vowels[i] && phrase.length === 1) { //adds "ay" words beginning with a vowel
      pigLatin.push(phrase[0], "ay");
      return pigLatin.join("");
    } else if (phrase[0] === vowels[i]) {
      pigLatin.push(phrase.join(""), "way");
      return pigLatin.join("");
    } else if (phrase[0] !== vowels[i] && phrase[1] === vowels[i]) {
      for (var j = 0; j < phrase.length; j++) {
        if (phrase[j] !== vowels[i]) {
          var end = phrase.slice(1).join("");
          pigLatin.push(end, phrase[0], "ay")
          return pigLatin.join("");
        }

      }
    } else if (phrase[0] !== vowels[i] && phrase[1] !== vowels[i]) {
      for (var j = 0; j < phrase.length; j++) {
        if (phrase[j] !== vowels[i]) {
          var endTwo = phrase.slice(2).join("");
          pigLatin.push(endTwo, phrase[0], phrase[1], "ay")
          return pigLatin.join("");

        }
      }
    } else if (phrase[0] !== vowels[i] && phrase[1] !== vowels[i] && phrase[2] !== vowels[i]) {
        for (var j = 0; j < phrase.length; j++) {
          if (phrase[j] !== vowels[i]) {
            var endThree = phrase.slice(3).join("");
            pigLatin.push(endThree, phrase[0], phrase[1], phrase[2], "ay")
            return pigLatin.join("");

        }
      }
    } else if (phrase[0] === "q" && phrase[1] === "u") {
        var qend = phrase.slice(2).join("")
        pigLatin.push(qend, phrase[0], phrase[1], "ay")
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

    // $("#output").text(output)
    console.log(output);
  });
});
