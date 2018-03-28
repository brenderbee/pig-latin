// Business Logic



// User-Interface Logic
$(document).ready(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var inputSentence = $("#sentence").val();
    // console.log(inputSentence);
  });
});
