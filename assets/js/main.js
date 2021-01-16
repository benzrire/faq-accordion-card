$(function () {
  var accordion = $(".acd-group .acd");

  console.log(accordion)

  accordion.each(function (i) {
    var title = $(this).find(".acd-title"),
        content = $(this).find(".acd-content");

    title.click(function (e) {
      e.preventDefault();

      console.log("click")

      if (title.hasClass("active")) {
        title.removeClass("active");
        content.slideUp(200);
      } else {
        title.addClass("active");
        content.slideDown(200);
      }
    });
  });
});