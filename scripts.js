$( document ).ready(function() {
  $("a.recipe").click(function (event) {
    var href = $(this).attr("data-dest");

    $("#book").hide();
    $("#"+href).show();
  });

  $(".recipe.detail").on("swiperight", function(event){
    $("#book").show();
    $(".recipe.detail").hide();
  });

  $("a.book").click(function (event) {
    $("#book").show();
    $(".recipe.detail").hide();
  });

});
