$(document).ready(function () {

var imgSRCLink = "assets/images/Carousel/"

init()


createCarousel($("#carouselRow"),imgSRCLink, 5);

$("#carouselRow").addClass("animated bounceInDown delay-1s");

});



