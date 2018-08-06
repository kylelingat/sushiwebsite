let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');

    }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$("#homeButton").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
});

$("#menuButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#a").offset().top
    }, 1000);
});

$("#sushiButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#b").offset().top
    }, 1000);
});

$("#contactUsButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#c").offset().top
    }, 1000);
});
