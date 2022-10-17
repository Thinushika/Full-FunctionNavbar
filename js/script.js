$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    if ($(".navbar-toggler").hasClass("collapsed")) {
      $(".navbar-toggler .bi").removeClass("bi-x");
      $(".navbar-toggler .bi").addClass("bi-list");
    } else {
      $(".navbar-toggler  .bi").removeClass("bi-list");
      $(".navbar-toggler  .bi").addClass("bi-x");
    }
  });
});
