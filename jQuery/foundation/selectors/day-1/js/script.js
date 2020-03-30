$(document).ready(function() {
  // this * will select all element from DOM
  $("*").css("textAlign", "center");

  // This would select all the p
  $("p").css("background-color", "yellow");

  // this would select all class names of a
  $(".group").css({
    fontSize: "40px"
  });

  // this would select perticuler perticular class name
  $(".foo").css("width", "50%");

  // this would select perticuler ID
  $("#box-3").css({
    width: "80%",
    color: "red"
  });

  // multi class selection (can select id as well as elements)
  $(".foo, .delta").css("margin", "auto");
});
