//When a user clicks on a team logo, perform an on click that will...

//Append a <p> tag under the clicked element (hint: use the keyword this)
//Insert the team name into the <p> tag (hint: use the provided array containing the team names). Do not hardcode the team name!
//Hide the other remaining teams
//Upon clicking anywhere, it will display all teams again and the <p> tag will be removed


$( document ).ready(function() {
  var teams = ['New York Giants', 'Washington Redskins', 'Philadelphia Eagles', 'Dallas Cowboys'];

$(window).keyup(function (e) {
 if (event.keyCode === 32) {
  alert("The spacebar has been pressed");
}
});
var $tagAfterClicking = $("<p>team[teamNameCorrelation]</p>");
var teamNameCorrelation = $(".teams-container").on('click', function() {
  $(this).attr('id');
  alert(teamNameCorrelation);
})

$(".teams-container").on('click', function() {
   $(this).append($tagAfterClicking);
})
});
