$(document).ready(() => {

  $target = $('html,body');
  $(".logo").mousedown(() => $target.animate({ scrollTop: $("section").offset().top }, 1500));

  $(".article").click(() => $target.animate({ scrollTop: $("article").offset().top }, 1000));

  $(".cards").click(() => $target.animate({ scrollTop: $(".grid-cards").offset().top }, 1000));

  $(".footer").click(() => $target.animate({ scrollTop: $("footer").offset().top }, 1000));

  $(document).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#goUp").css("display", "block");
    } else {
      $("#goUp").css("display", "none");
    }
  });

  $("#goUp").click(() => $target.animate({ scrollTop: $("body").offset().top }, 1000));

  document.getElementById("date").innerHTML = new Date().toDateString();

  $("#sub").click(function (e) {
    var str = $("input").val();
    if (str.match(/\w+@[a-z]+\.([a-z]{2,4})$/g) || str.match(/\w+@[a-z]+\.([a-z]{2,4})+\.([a-z]{2,4})$/g)) {
      $("#onCover").text("email sended").css("color", "pink");
    }
    e.preventDefault();
    $("input").val("");
  });

  var img = document.getElementsByClassName("img-card");
  var cover = document.getElementsByClassName("cover-img");
  for (var i = 0; i < img.length; i++) {
    cover[i].style.backgroundImage = 'url(' + img[i].src + ')';
  }

  $("img").attr("draggable", "false");

});