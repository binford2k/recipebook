$( document ).ready(function() {
  $("a.recipe").click(function (event) {
    var href = $(this).attr("data-dest");

    window.history.pushState('', null, null);
    $("#book").hide();
    $("#"+href).show();
  });

  $(".recipe.detail").on("swiperight", function(event){
    event.preventDefault();
    $("#book").show();
    $(".recipe.detail").hide();
  });

  $("a.book").click(function (event) {
    event.preventDefault();
    $("#book").show();
    $(".recipe.detail").hide();
  });

  $(window).on('popstate', function(event) {
    event.preventDefault();
    $("#book").show();
    $(".recipe.detail").hide();
  });

});
