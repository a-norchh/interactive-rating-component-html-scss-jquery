var getRate = 0;

$(function () {
  $(".rate").on("click", function () {
    $(".rate").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".btn").on("click", function () {
    if ($(".selected").lenght == 0) return;
    $(".btn").off("click");
    getRate = $(".rate.selected").data("rate");
    $(".your-rate span").text(getRate);
    $(".step--1").hide();
    $(".step--2").fadeIn();
  });
});
