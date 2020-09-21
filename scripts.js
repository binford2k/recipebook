$( document ).ready(function() {
  /* ios homescreen apps are weird. I don't want to do an SPA. */
  $("a").click(function (event) {
    var href = $(this).attr("href");

    if(! href.startsWith('javascript')) {
      event.preventDefault();
      window.location = href;
    }
  });
});
