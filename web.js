$(".logo").click( () => {
  $target = $('html,body');
  $target.animate({scrollTop: $("section").offset().top}, 1500);
});

document.getElementById("date").innerHTML = new Date().toDateString();

var img = document.querySelectorAll("img");
var cover = document.getElementsByClassName("cover-img");
$(document).ready(function() {
  $(".card-1").mouseenter( function () {
    // console.log(this);
    for(var i = 0; i < img.length, i < cover.length; i++) {
      cover[i].style.backgroundImage = 'url('+img[i].src+')';
    }
  });
});