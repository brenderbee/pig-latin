// Business Logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "y", "Y"];
var pigLatin = [];
var consonants = [];

function translate(phrase) {
// words beginning in vowels or qu
  for (var i = 0; i < vowels.length; i++) {
    if (phrase[0] === vowels[i] && phrase.length === 1) {
      pigLatin.push(phrase[0], "ay");
      return pigLatin.join("");
    } else if (phrase[0] === vowels[i]) {
      pigLatin.push(phrase.join(""), "way");
      return pigLatin.join("");
    } else if (phrase[0] === "q" && phrase[1] === "u") {
        var qend = phrase.slice(2).join("")
        pigLatin.push(qend, phrase[0], phrase[1], "ay")
        return pigLatin.join("");
    } else {
      break;
    }
  }

// consecutive consonants
for (var j = 0; j < phrase.length; j++) {
    if (phrase[j].match(/[b-df-hj-np-tv-z]/)) {
      consonants.push(phrase[j]);
    } else {
      var splicedPhrase = phrase.splice(j);
      pigLatin.push(splicedPhrase.join(""), consonants.join(""), "ay");
      return pigLatin.join("");
      break;
    }
  }
} //end of function translate()

// User-Interface Logic
$(document).ready(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("#sentence").val();
    var inputLetters = inputSentence.split("");
    var output = translate(inputLetters);

    $("#output").text(output)
    console.log(output);
  });
});
