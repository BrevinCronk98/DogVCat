$(document).ready(function() {
  $("button#cat").click(function(){
    $("ul").prepend("<li> Meow</li>")
  });
});