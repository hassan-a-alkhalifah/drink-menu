$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    var userInputAge = parseInt($("#age-input").val());
    if (userInputAge >= 21) {
      $(this).hide();
      $("#drink-menu").show();
    } else {
      $(this).hide();
      $("#if-under-21").show();
    }
  });

  $(".return-btn").click(function() {
    $("#drink-menu").hide();
    $("#if-under-21").hide();
    $("#age-form").show();
  });
});
