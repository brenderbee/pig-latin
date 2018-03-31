// Business Logic
// Begin translate function
function translate(words) {
  var pigLatin = [];
  var consonants = [];

  words.forEach(function(word) {
    var letters = [];
    letters = word.split("");

// Words beginning with vowels or qu
    if (letters[0].match(/[aeiouyAEIOUY]/) && word.length === 1) {
      pigLatin.push(letters[0], "ay", " ");
    } else if (letters[0].match(/[aeiouyAEIOUY]/)) {
      pigLatin.push(word, "way", " ");
    } else if (letters[0].match(/[qQ]/) && letters[1].match(/[uU]/)) {
      var qend = letters.slice(2).join("");
      pigLatin.push(qend, letters[0], letters[1], "ay", " ");
    }
// Words beggining with consonants
    for (var j = 0; j < letters.length; j++) {
      if (letters[j].match(/[^aeiouyAEIOUY]/)) {
        consonants.push(letters[j]);
      } else {
        var splicedPhrase = letters.splice(j);
        pigLatin.push(splicedPhrase.join(""), consonants.join(""), "ay", " ");
        return pigLatin.join("");
        break;
      }
    }
  });
  return pigLatin.join("");
} //end of function translate()

// User-Interface Logic
$(document).ready(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
    $("ul").empty();

    var inputSentence = $("#sentence").val();
    var inputWords = inputSentence.split(" ");
    var output = translate(inputWords);

    $("#output").prepend("<li>" + output + "</li>");
  });
});
