$( document ).ready(function() {
  /* ios homescreen apps are weird. I don't want to do an SPA. */
  $("a.recipe").click(function (event) {
    var href = $(this).attr("data-dest");

    $("#book").hide();
    $("#"+href).show();
  });

  $("a.book").click(function (event) {
        $("#book").show();
        $(".recipe.detail").hide();
      });

});
