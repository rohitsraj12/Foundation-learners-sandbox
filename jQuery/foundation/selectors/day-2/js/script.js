$(document).ready(function() {
  // selecting first child of ID name called first_child
  $("#first_child li:first").css("color", "red");

  // selecting last child of ID name called first_child
  $("#last_child li:last").css("backgroundColor", "blue");

  // selecting odd child of ID name called first_child
  $("#odd_child li:odd").css("color", "#ff6600");

  // selecting even child of ID name called first_child
  $("#even_child li:even").css("background", "yellow");
});
