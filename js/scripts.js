(document).ready(function(){

  $("#user-input").submit(function(){
    event.preventDefault();
    var userSentence = $("input#sentence").val();
    var userSentenceArray = userSentence.split(" ");

  });
});