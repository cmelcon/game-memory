var cardContents = [
  "color1", "color1", "color2", "color2", "color3", "color3"
];

var oneCardTurnAround = false;

cardContents = cardContents.sort(function(a,b){
  return Math.random() - 0.5;
});

for (var i = 0; i < 6; i++)
  $("#card-conteiner").append('<div index="'+i+'" class="card"></div>');

$(".card").on("click", function(){
  var idx = Number($(this).attr("index"));
  $(this).addClass(cardContents[idx]);
  if (typeof(oneCardTurnAround) == "number"){
    if (cardContents[idx] === cardContents[oneCardTurnAround] &&
      idx != oneCardTurnAround){
      $("."+cardContents[idx]).css("visibility", "hidden");
      oneCardTurnAround = false;

    }else {
      $(this).removeClass(cardContents[idx]);
      $("."+cardContents[oneCardTurnAround]).
      removeClass(cardContents[oneCardTurnAround]);
      oneCardTurnAround = false;
    }

  }else{
    oneCardTurnAround = idx;
  }

});
