$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    var userInputAge = parseInt($("#age-input").val());
    if (userInputAge >= 21) {
      $(this).remove();
      $("#drink-menu").show();
    } else {
      $(this).remove();
      $("#if-under-21").show();
    }
  });
});
