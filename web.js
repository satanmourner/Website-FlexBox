$(".logo").click( () => {
  $target = $('html,body');
  $target.animate({scrollTop: $("section").offset().top}, 1500,);
});

document.getElementById("date").innerHTML = new Date().toDateString();



