$(document).ready(function () {

var imgSRCLink = "assets/images/Carousel/"

init()

// var carouselDiv = $("<div>").attr({"class":"carousel slide","dara-ride":"carousel"})





$(".nav-link").hover(function(){
    
    $(this).toggleClass("animated bounce")

})

createCarousel($("#carouselRow"),imgSRCLink, 5);

});



