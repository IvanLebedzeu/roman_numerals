


//  \bM{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\b
//var romanNumbers = (^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$);
//var arabicNumbers = /[\u0660-\u0669]/;
var letters = /[A-Za-z]/;
var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numeric  = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var numRoman =  "";

function convertToRoman(number) {
  if (number <= 0 || (number.toString().match(letters))) {
    alert("Please enter a correct number!");
  }
  for (var index = 0; index < numeric.length; index++) {
    while (number>=numeric[index]) {
      numRoman = numRoman + romanNumeral[index];
      number = number - numeric[index];
      
    }
  }

}








$(document).ready(function(){

  $("#user-input").submit(function(event){
    event.preventDefault();
    

    var userInput = parseInt($("input#number").val());
    //var userInputArray = userInput.split(" ");

    // console.log(userInput);
    // convertToRoman(userInput);
    console.log(userInput);
    convertToRoman(userInput);
    console.log(numRoman);

    $("#result").text(numRoman);

  });
});