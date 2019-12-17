
function init() {

    $(".content").addClass("animated fadeInRight");

}


function createCarousel (mainDiv, imgSRC, numOfImg) {

    var carouselColDiv = $("<div>").attr({"id":"carousel","class":"carousel slide text-center","data-ride":"carousel"});
    var carouselIndicators = $("<ul>").attr("class","carousel-indicators");
    var carouselInnerDiv = $("<div>").attr("class","carousel-inner");
    
    carouselIndicators.append($("<li>").attr({"data-target":"#carousel","data-slide-to":"1"}));
    carouselIndicators.append($("<li>").attr({"data-target":"#carousel","data-slide-to":"2"}));
    carouselIndicators.prepend($("<li>").attr({"class":"active","data-target":"carousel","data-slide-to":"0"}));
    carouselColDiv.append(carouselIndicators);

    for (i=1; i <= numOfImg; i++){
        
        var imgLink = imgSRC + "img_000" + i + ".jpg";
        var img = $("<img>").attr({"class":"img-fluid rounded","src":imgLink,"alt":"Photo"});

        carouselInnerDiv.append(($("<div>").attr("class","carousel-item")).append(img)); 
    }

    carouselColDiv.append(carouselInnerDiv);

    carouselInnerDiv.children().first().addClass("active");

    var prevSlideIndicator = $("<a>").attr({"class":"carousel-control-prev","href":"#carousel","data-slide":"prev"});
    var nextSlideIndicator = $("<a>").attr({"class":"carousel-control-next","href":"#carousel","data-slide":"next"});

    prevSlideIndicator.append($("<span>").attr("class","carousel-control-prev-icon"));
    nextSlideIndicator.append($("<span>").attr("class","carousel-control-next-icon"));
    
    carouselColDiv.append(prevSlideIndicator);
    carouselColDiv.append(nextSlideIndicator);

    mainDiv.append($("<div>").attr("class","col-md-1 col-lg-1"));
    mainDiv.append($("<div>").attr("class"," col-md-10 col-lg-10").append(carouselColDiv));
    mainDiv.append($("<div>").attr("class","col-md-1 col-lg-1"));
}

function createPortfolioCard () {
    
}