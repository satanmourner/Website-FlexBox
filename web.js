$(".logo").mousedown(() => {
  $target = $('html,body');
  $target.animate({ scrollTop: $("section").offset().top }, 1500);
});

$("#article").click(() => {
  $target = $('html,body');
  $target.animate({ scrollTop: $("article").offset().top }, 1000);
});

document.getElementById("date").innerHTML = new Date().toDateString();

$("#sub").click( () => {
  var str = $("input").val();
  if(str.match(/\w+@[a-z]+\.([a-z]{2,4})$/g) || str.match(/\w+@[a-z]+\.([a-z]{2,4})+\.([a-z]{2,4})$/g)) {
    alert("correct");
}
});

var img = document.getElementsByClassName("img-card");
var cover = document.getElementsByClassName("cover-img");
for (var i = 0; i < img.length; i++) {
  cover[i].style.backgroundImage = 'url(' + img[i].src + ')';
}